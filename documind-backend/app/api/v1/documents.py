from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
import shutil
import os


from app.database import get_db

from app.core.dependencies import get_current_user

from app.models.user import User

from app.services.document_service import DocumentService

from app.schemas.document import DocumentResponse



router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)



UPLOAD_FOLDER = "app/uploads"



@router.post(
    "/upload",
    response_model=DocumentResponse
)
def upload_document(
    file: UploadFile = File(...),
    document_type: str = Form("OTHER"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):


    os.makedirs(
        UPLOAD_FOLDER,
        exist_ok=True
    )


    file_path = (
        f"{UPLOAD_FOLDER}/{file.filename}"
    )


    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )



    service = DocumentService(db)



    try:

        document = service.create_document(

            company=current_user.company,

            name=file.filename,

            file_path=file_path,

            document_type=document_type

        )


        return document


    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )





@router.get(
    "",
    response_model=list[DocumentResponse]
)
def get_documents(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    service = DocumentService(db)


    return service.get_company_documents(
        current_user.company_id
    )


@router.delete("/{document_id}")
def delete_document(
    document_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    service = DocumentService(db)


    try:

        service.delete_document(
            document_id
        )


        return {
            "success": True,
            "message": "Document deleted"
        }


    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )