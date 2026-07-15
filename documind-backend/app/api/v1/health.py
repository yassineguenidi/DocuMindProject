from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health():

    return {
        "status": "OK",
        "service": "DocuMind AI API"
    }