from pydantic import BaseModel

class TokenBase(BaseModel):
    access_token: str
    refresh_token: str