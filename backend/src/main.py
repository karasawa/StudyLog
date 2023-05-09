from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from routers import user, auth, study

app = FastAPI()
app.include_router(auth.router)
app.include_router(user.router)
app.include_router(study.router)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)






































# class Item(BaseModel):
#     name: str
#     description: Union[str, None] = None
#     price: float
#     tax: Union[float, None] = None


# @app.get("/")
# def read_root():
#     return {"Hello": "Wor"}


# @app.post("/item")
# async def create_item(item: Item):
#     return item

# @app.get("/token")
# async def create_token(token: str = Depends(oauth2_scheme)):
#     return token

# @app.get("/{id}")
# def read_id(id: int, q: Union[str, None] = Query(default=None, min_length=2, max_length=10)):
#     if q:
#         return {"id": id, "q": q}
#     return {"id": id}