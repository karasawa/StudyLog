import matplotlib.pyplot as plt
import schemas.study as study_schema
import schemas.study_contents as study_contents_schema
import schemas.report as report_schema
from services import study as study_service
from typing import List
import io, base64
import japanize_matplotlib
import datetime

def plot_report(
        study_list=List[study_schema.Study],
        study_contents_list=List[study_contents_schema.StudyContens]
    ) -> report_schema.ReportBase:
    
    time_report = create_bar(study_list)
    contents_report = create_pie(study_contents_list, study_list)
    response = report_schema.ReportBase(time_report=time_report,
                                        contents_report=contents_report)
    return response

def create_pie(
        study_contents_list=List[study_contents_schema.StudyContens],
        study_list=List[study_schema.Study]
    ) -> str:
    labels = []
    time_list = []

    for study_content in study_contents_list:
        labels.append(study_content.content)

    for label in labels:
        time_total = 0
        for study in study_list:
            if label == study.content:
                time_total += float(study.time)
        time_list.append(time_total)

    wedgeprops = {"edgecolor":"white", "linewidth":2}
    colors = []
    base_color = "#a8a"
    for i in range(len(labels)):
        colors.append(base_color + str(i) + "9e")
    fig, ax = plt.subplots()
    ax.pie(time_list, labels=labels, startangle=90, counterclock=False, radius=1.3, wedgeprops=wedgeprops, autopct="%.2f%%", colors=colors)
    fig.suptitle("コンテンツ別学習量")
    # ax.legend(loc='upper right')
    with io.BytesIO() as buf:
        fig.savefig(buf, format="png")
        contents_report = base64.encodebytes(buf.getvalue()).decode("utf-8")
    return contents_report

def create_bar(study_list=List[study_schema.Study]) -> str:
    dummy_days_list = x_axis_setting()
    
    study_times = study_service.plot_report(study_list)

    time_list = y_axis_setting(dummy_days_list, study_times)

    days_list = conv_day_format(dummy_days_list)

    x = days_list
    y = time_list

    fig, ax = plt.subplots()

    ax.bar(x, y, color="#a8a79e")
    fig.suptitle("一か月間の学習時間推移")
    # ax.set_xlabel("日付")
    ax.set_ylabel("学習時間")

    plt.xticks(rotation=70)

    with io.BytesIO() as buf:
        fig.savefig(buf, format="png")
        time_report = base64.encodebytes(buf.getvalue()).decode("utf-8")
    return time_report

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
