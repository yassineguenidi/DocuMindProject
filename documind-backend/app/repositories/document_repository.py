from sqlalchemy.orm import Session

from app.models.document import Document


class DocumentRepository:


    def __init__(self, db: Session):

        self.db = db



    def create(
        self,
        document: Document
    ):

        self.db.add(document)

        self.db.commit()

        self.db.refresh(document)

        return document



    def get_by_company(
        self,
        company_id: int
    ):

        return (
            self.db.query(Document)
            .filter(
                Document.company_id == company_id
            )
            .all()
        )



    def get_by_id(
        self,
        document_id: int
    ):

        return (
            self.db.query(Document)
            .filter(
                Document.id == document_id
            )
            .first()
        )



    def delete(
        self,
        document: Document
    ):

        self.db.delete(document)

        self.db.commit()