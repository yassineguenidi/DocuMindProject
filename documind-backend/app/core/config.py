from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "DocuMind AI"

    API_VERSION: str = "v1"

    SECRET_KEY: str

    DATABASE_URL: str

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60


    class Config:
        env_file = ".env"


settings = Settings()