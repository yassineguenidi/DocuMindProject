from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    Depends
)

from sqlalchemy.orm import Session

import os
import shutil


from app.database import get_db

from app.models.document import Document



router = APIRouter(
    prefix="/api/v1/documents",
    tags=["Documents"]
)



UPLOAD_FOLDER = "app/uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)





@router.post("/upload")
def upload_document(

    file: UploadFile = File(...),

    document_type: str = Form("Autre"),

    db: Session = Depends(get_db)

):


    file_path = os.path.join(

        UPLOAD_FOLDER,

        file.filename

    )



    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(

            file.file,

            buffer

        )





    document = Document(

        name=file.filename,

        file_path=file_path,

        document_type=document_type,

        status="UPLOADING",

        company_id=1   # temporaire, on remplacera par user connecté

    )



    db.add(document)

    db.commit()

    db.refresh(document)



    return {

        "success": True,

        "message": "Document uploaded",

        "data": {

            "id": document.id,

            "name": document.name

        }

    }