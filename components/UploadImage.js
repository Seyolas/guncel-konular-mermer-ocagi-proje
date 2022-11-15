import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { FiUpload } from 'react-icons/fi';
import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const UploadImage = () => {



    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        try {
            const response = await axios({
                method: "post",
                url: "/api/upload/file",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error)
            alert("errorr")
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }


    return (
        <form onSubmit={handleSubmit}>
            <main>

                <input type="file" onChange={handleFileSelect} accept=".jpg,.jpeg" />
                <input type="submit" value="Upload File" />
            </main>
            <style jsx>{`
        main{
            width:500px;
            margin:auto;
            margin-top:30px;
            background-color:#f1f5f9;
            display:flex;
            flex-direction:column;
        }
        
        `}

            </style>
        </form>
    )
}

export default UploadImage