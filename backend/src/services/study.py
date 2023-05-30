import numpy as np
import matplotlib.pyplot as plt
from fastapi import APIRouter, Depends, HTTPException, Response
import schemas.study as study_schema
import schemas.report as report_schema
from crud import objective as objective_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List, Optional
import models.models as model
import io, base64, json
import matplotlib.style as style
import japanize_matplotlib
import datetime

def plot_report(study_list=List[study_schema.Study]):
    response_list = []
    counter = 0
    for study in study_list:
        if counter != 0:
            if study.date == study_list[counter-1].date:
                response_list[-1]["time"] += float(study.time)
            else:
                item = {
                    "date": study.date,
                    "time": float(study.time)
                }
                response_list.append(item)
        elif counter == 0:
            item = {
                "date": study.date,
                "time": float(study.time)
            }
            response_list.append(item)
        counter += 1
    return response_list