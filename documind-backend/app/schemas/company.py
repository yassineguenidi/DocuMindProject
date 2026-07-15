from pydantic import BaseModel


class CompanyCreate(BaseModel):

    name: str



class CompanyResponse(BaseModel):

    id: int

    name: str

    plan: str

    document_limit: int

    documents_used: int


    class Config:

        from_attributes = True