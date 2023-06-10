import schemas.study as study_schema
from typing import List

def sum_study_times(study_list=List[study_schema.Study]):
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