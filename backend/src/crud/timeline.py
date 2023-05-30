from typing import List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
import models.models as model
import schemas.timeline as timeline_schema
import datetime
from sqlalchemy import desc

def get_timelines(
    db: Session
) -> List[Tuple[int, str, str, datetime.datetime]]:
    result: Result = db.query(model.TimeLine).order_by(desc(model.TimeLine.createdAt))
    return result.all()

def create_timeline(
    db: Session, request: timeline_schema.TimelineCreate
) -> model.TimeLine:
    timeline = model.TimeLine(**request)
    db.add(timeline)
    db.commit()
    db.refresh(timeline)
    return timeline