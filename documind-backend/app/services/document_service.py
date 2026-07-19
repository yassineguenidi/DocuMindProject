import os

from sqlalchemy.orm import Session

from app.models.document import Document

from app.repositories.document_repository import DocumentRepository

from app.models.company import Company



class DocumentService:


    def __init__(
        self,
        db: Session
    ):

        self.db = db

        self.document_repository = DocumentRepository(db)



    def create_document(
        self,
        company: Company,
        name: str,
        file_path: str,
        document_type: str
    ):


        # Vérification quota

        if company.documents_used >= company.document_limit:

            raise Exception(
                "Document quota exceeded"
            )



        document = Document(

            name=name,

            file_path=file_path,

            document_type=document_type,

            status="UPLOADING",

            company_id=company.id

        )



        created_document = (
            self.document_repository
            .create(document)
        )



        # Mise à jour quota

        company.documents_used += 1


        self.db.commit()



        return created_document




    def get_company_documents(
        self,
        company_id: int
    ):

        return (
            self.document_repository
            .get_by_company(company_id)
        )




    import os
    def delete_document(
            self,
            document_id: int
            ):

        document = (
            self.document_repository
            .get_by_id(document_id)
            )


        if not document:

            raise Exception(
                "Document not found"
            )


        # supprimer fichier physique

        if os.path.exists(document.file_path):

            os.remove(document.file_path)



        self.document_repository.delete(
            document
        )


        return True
    

    def get_document(
            self,
            document_id: int
            ):
        return (
            self.db.query(Document)
            .filter(Document.id == document_id)
            .first()
            )