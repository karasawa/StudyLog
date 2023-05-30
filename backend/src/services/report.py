import matplotlib.pyplot as plt
from fastapi import APIRouter, Depends, HTTPException, Response
import schemas.study as study_schema
import schemas.report as report_schema
from crud import objective as objective_crud
from sqlalchemy.orm import Session
from services import study as study_service
from services import jwt as jwt_service
from models.database import get_db
from typing import List, Optional
import io, base64
import matplotlib.style as style
import japanize_matplotlib
import datetime

def plot_report(study_list=List[study_schema.Study]) -> report_schema.ReportBase:
    dummy_days_list = x_axis_setting()
    
    study_times = study_service.plot_report(study_list)

    time_list = y_axis_setting(dummy_days_list, study_times)

    days_list = conv_day_format(dummy_days_list)

    x = days_list
    y = time_list

    fig, ax = plt.subplots()

    ax.bar(x, y, color="#a8a29e")
    fig.suptitle("一か月間の学習時間推移")
    # ax.set_xlabel("日付")
    ax.set_ylabel("学習時間")

    plt.xticks(rotation=70)

    with io.BytesIO() as buf:
        fig.savefig(buf, format="png")
        time_report = base64.encodebytes(buf.getvalue()).decode("utf-8")
        response = report_schema.ReportBase(time_report=time_report)
    return response

def conv_day_format(dummy_days_list=List[str]) -> List[str]:
    days_list = []
    for dummy_day in dummy_days_list:
        conv_day = dummy_day[5:]
        if conv_day[3] == "0":
            conv_day = conv_day[:3] + conv_day[-1]
        if conv_day[0] == "0":
            conv_day = conv_day[1:].replace("-", "/")
        days_list.append(conv_day)
    return days_list

def x_axis_setting() -> List[str]:
    today = datetime.date.today()
    dummy_days_list = []
    for x in range(31):
        day = datetime.timedelta(days=x)
        days_ago = today - day
        dummy_days_list.insert(0, str(days_ago))
    return dummy_days_list

def y_axis_setting(
        dummy_days_list=List[str], study_times=List[report_schema.TimeReport]
    ) -> List[float]:
    time_list = []
    counter = 0
    for day in dummy_days_list:
        while study_times[counter]["date"] < day:
            counter += 1
        if counter < len(study_times) and day == study_times[counter]["date"]:
            time_list.append(study_times[counter]["time"])
            counter += 1
            continue
        time_list.append(0)
    return time_list
