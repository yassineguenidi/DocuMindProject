from pydantic import BaseModel
from datetime import datetime



class DocumentResponse(BaseModel):

    id: int

    name: str

    document_type: str

    status: str

    created_at: datetime


    class Config:

        from_attributes = True