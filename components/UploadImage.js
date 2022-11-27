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

        try {
            const req = new XMLHttpRequest()
            var generate_url = "http://localhost:5000/api/process_v2";


            var bodyFormData = new FormData();
            bodyFormData.append("file", selectedFile);

            axios(generate_url, {
                method: 'POST',
                mode: 'no-cors',
                data: bodyFormData,
                //withCredentials: true,
                credentials: 'same-origin',
            }).then(response => {
                console.log(response.data.data.join())
                alert(response.data.data.join())
            }).catch(error => {
                console.log(error)
                alert("errorr")
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
                <input id='files' type="file" onChange={handleFileSelect} accept=".jpg,.jpeg,.png" />
                <input type="submit" />
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
       #files{
        color:red;
        width:300px;
       }
        
        `}

            </style>
        </form>
    )
}

export default UploadImage