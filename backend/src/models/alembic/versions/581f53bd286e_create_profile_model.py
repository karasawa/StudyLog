"""create profile model

Revision ID: 581f53bd286e
Revises: 05b124dc0ffe
Create Date: 2023-05-17 05:54:34.109904

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '581f53bd286e'
down_revision = '05b124dc0ffe'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('profiles',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('username', sa.TEXT(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='profiles_pkey')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('objectives')
    op.drop_table('studies')
    op.drop_table('study_contents')
    # ### end Alembic commands ###
