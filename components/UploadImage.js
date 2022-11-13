import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { FiUpload } from 'react-icons/fi';

const UploadImage = () => {

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        open,
    } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        noClick: true,
        noKeyboard: true
    });
    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));


    return (
        <div className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <div className='main'>
                    <input {...getInputProps()} />
                    <p>Sürükle bırak veya tıkla</p>
                    <button className='button' type="button" onClick={open}>
                        <FiUpload /> Yükle
                    </button>
                    <em>(Sadece *.jpeg ve *.png kabul edilir)</em>
                    <ul>{acceptedFileItems}</ul>
                    <ul>{fileRejections}</ul>
                </div>
            </div>

            <style jsx>{`
                
                    .container{
                        background-color:#f1f5f9;
                        width:400px;
                        max-width:400px;
                        height:300px;
                        max-height:300px;
                        margin:auto;
                        margin-top:40px;
                        border:dotted 5px #e2e8f0;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    button{
                        width:100px;
                        background-color:#3b82f6;
                        color:#fff;
                        border-radius:3px;
                        padding:5px 3px;
                        font-weight:800;
                        cursor:pointer;
                        margin:10px 0;
                    }
                    .main{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                    }
                    .input-zone{
                        background-color:red;
                        width:1000px
                    }
                `}
            </style>
        </div>
    )
}

export default UploadImage