import os

import sqlalchemy

def connect_with_sqlite() -> sqlalchemy.engine.base.Engine:
    """
    Initializes a connection pool for a SQLite database.

    Uses SQLAlchemy for the database engine.
    """

    # Ruta de la base de datos SQLite
    # Asegúrate de cambiar esta ruta a la ubicación deseada de tu archivo SQLite
    sqlite_db_path = "sqlite:///./test.db"

    pool = sqlalchemy.create_engine(
        sqlite_db_path,
        # [START_EXCLUDE]
        # Pool size and overflow are not as critical for SQLite as for other databases,
        # since it's a file-based database.
        pool_size=5,
        max_overflow=10,
        # 'pool_timeout' is the maximum number of seconds to wait when retrieving a
        # new connection from the pool. After the specified amount of time, an
        # exception will be thrown.
        pool_timeout=30,  # 30 seconds
        # 'pool_recycle' is the maximum number of seconds a connection can persist.
        # Connections that live longer than the specified amount of time will be
        # re-established
        pool_recycle=1800,  # 30 minutes
        # [END_EXCLUDE]
        # SQLite specific argument to enable foreign key constraints.
        connect_args={"check_same_thread": False}
    )
    return pool

# [END cloud_sql_mysql_sqlalchemy_connect_connector]
