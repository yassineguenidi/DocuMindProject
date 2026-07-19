export type DocumentStatus =

    | "UPLOADING"

    | "QUEUED"

    | "OCR"

    | "AI_PROCESSING"

    | "VALIDATION"

    | "COMPLETED"

    | "FAILED";



export interface Document {

    id: number;

    name: string;

    size: number;

    type: string;

    status: DocumentStatus;

    created_At: string;

    updatedAt: string;

    pages: number;

    owner: string;

    companyId: number;

}
