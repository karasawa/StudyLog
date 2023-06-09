"""delete users

Revision ID: 6544172b8326
Revises: d685f48ad1f5
Create Date: 2023-05-08 21:21:30.310879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6544172b8326'
down_revision = 'd685f48ad1f5'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('password', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('user_id', name='users_pkey')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
