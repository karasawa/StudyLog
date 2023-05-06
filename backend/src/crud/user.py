from sqlalchemy.ext.asyncio import AsyncSession
import models.models as model
import schemas.user as user_schema

async def create_user(
    db: AsyncSession, user_create: user_schema.UserCreate
) ->model.User:
    user = model.User(**user_create.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user