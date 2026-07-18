import { useState } from "react";


interface FileUploadProps {

  onFileSelect: (
    file: File
  ) => void;

}



function FileUpload({

  onFileSelect

}: FileUploadProps) {


  const [fileName, setFileName] = useState("");



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {


    const file =
      e.target.files?.[0];



    if (file) {

      setFileName(file.name);

      onFileSelect(file);

    }

  }





  return (

    <div
      className="
            border-2
            border-dashed
            rounded-xl
            p-8
            text-center
            "
    >


      <input

        type="file"

        accept=".pdf"

        onChange={handleChange}

        className="hidden"

        id="fileUpload"

      />



      <label

        htmlFor="fileUpload"

        className="
                cursor-pointer
                text-blue-600
                "

      >

        Choisir un document PDF

      </label>




      {
        fileName &&

        <p className="mt-4 text-gray-600">

          {fileName}

        </p>

      }



    </div>

  );

}


export default FileUpload;