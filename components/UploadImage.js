import { useState } from 'react';
import axios from 'axios';
import React, { useCallback, useRef } from "react";
import { FaCamera } from 'react-icons/fa';
const UploadImage = () => {



    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseData, setResponseData] = useState();


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
                setResponseData(response.data.data)
                // console.log(response.data.data.join())
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
        setSelectedFile(event?.target?.files[0])
        let imageName = document.getElementById("imageName")
        let inputImage = event?.target?.files[0];
        imageName.innerText = inputImage.name;
    }


    return (
        <form onSubmit={handleSubmit}>
            <main>
                <label htmlFor="inputTag" className='select-img'>
                    Fotoğraf Yükle
                    <FaCamera size={60} />
                    <input id="inputTag" type="file" onChange={handleFileSelect} accept=".jpg,.jpeg,.png" />
                    <span id="imageName"></span>
                </label>
                <button type="submit">Analiz Et</button>
            </main>
            <div className='response'>
                <h1>{responseData && "Mermer Özellikleri"}</h1>
                <ol>
                    {responseData && responseData.map((item, index) => {
                        let x = null;
                        let y = null;
                        // x'in içinde datalar var.
                        x = item.split("=")
                        // y'nin içinde rakamsal değerler var.
                        y = x[1].replace("%", "");

                        return (
                            <li key={index}>
                                {x[0]} = %{y.substring(0, 5)}
                            </li>
                        )

                    })}
                </ol>
            </div>


            <style jsx>{`
        main{
            width:auto;
            margin:auto;
            height:fit-content;
            display:flex;
            flex-direction:column;
            align-items:center;
            margin:30px auto;
        }
        button{
            height:35px;
            background-color:#3b82f6;
            font-weight:900;
            font-size:1.3rem;
            color:#fff;
            cursor:pointer;
            width:130px;
            border-radius:5px;
            border:none;
            transition:all 0.3s;
            margin:10px 0;
        }
        button:hover{
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        }
            
        input{
            display: none;
          }
          label{
            cursor: pointer;
        }
        
       .response{
       display:flex;
       align-items:center;
       justify-content:center;
       flex-direction:column;
       margin-top:1rem;
       }
       ol li{
        padding:0.6rem 0;
        font-weight:700;
       }
       
        .select-img{
            font-weight:800;
            font-size:1.3rem;
            margin:auto;
            font-size:2rem;
            align-text=center;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;

        }
       
     

        `}

            </style>
        </form>
    )
}

export default UploadImage