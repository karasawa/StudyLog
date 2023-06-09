from pydantic import BaseModel

class ReportBase(BaseModel):
    time_report: str
    contents_report: str

class TimeReport(BaseModel):
    date: str
    time: float