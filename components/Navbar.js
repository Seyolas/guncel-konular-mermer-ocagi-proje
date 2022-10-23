import Link from 'next/link'
import { BiCart } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut, FiAlignJustify } from "react-icons/fi";
import { useState, useEffect, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router"







const Navbar = () => {
    const router = useRouter();



    const { user, error, isLoading } = useGlobalContext();


    return (
        <nav>


            {user ? <a href="/api/auth/logout"><FiLogOut />Logout</a> : <a href="/api/auth/login"><AiOutlineUser />Login</a>}
            {user && <p>Welcome {user.name}!</p>}


            {/* {user && <p className='welcome-p'>Welcome {user.name}!</p>}
            {user ? <a className='logout-link' href="/api/auth/logout">
                <FiLogOut />Logout</a> : <a className='login-link' href="/api/auth/login">
                <AiOutlineUser />Login</a>} */}




            <style jsx>{`

            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                width: auto;
                height: 100%;
                background-color:#fff;
                border: 1px solid #eaeaea;
                display: grid;
                grid-template-rows: auto 1fr auto;
                grid-gap:1rem;
                transition: all 0.3s linear;
                transform: translate(-100%);
                z-index:10;

                }

                .show-sidebar {
                transform: translate(0);
                }

                @media screen and (min-width: 676px) {
                .sidebar {
                    width: 400px;
                }
                }
                
                .sidebar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                }
                .close-btn {
                font-size: 1.75rem;
                background: transparent;
                border-color: transparent;
                transition:all 0.3s linear;
                color:#b91c1c;
                cursor: pointer;
                margin-top: 0.2rem;
                }

                .sidebar-ul{
                    display:flex;
                    flex-direction:column;
                    padding:1rem;

                }
                .sidebar-ul a{
                    margin:1rem;
                    letter-spacing:1px;
                }
                .sidebar-ul a:hover{
                    font-weight:bolder;
                }
                .menu-bar{
                    font-size:25px;
                    border:none;
                    background-color:#fff;
                    display:none;
                    margin:0 1rem;
                    margin-left:2rem;
                    cursor:pointer;
                }
                .menu-bar:hover{
                    color:red;
                }
                .logo {
                    width:90px;
                }
                nav{
                    
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                    font-size:large;
                    border-bottom: 1px solid #eaeaea;
                    padding-top:1rem;
                }
                .general-ul{
                    display:flex;
                    align-items:center;
                }
                .small-ul{
                    display:flex;
                    align-items:center;
                    margin-left:4rem;
                }
                .small-ul li{
                    margin:0 1rem;
                }
               
                nav a{
                    color:black;
                }

             
            input {
                outline: none;
            }

            input[type=search] {
                -webkit-appearance: textfield;
                -webkit-box-sizing: content-box;
                font-family: inherit;
                font-size: 100%;
            }
            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button {
                display: none; 
            }
            input[type=search] {
                padding: 9px 10px 9px 32px;
                width: 30vw;
                background: url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
                border: solid 1px #ccc;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
            }
            input[type=search]:focus {
                width: 35vw;
                background-color: #fff;
                border-color: black;
                -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
                -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
                box-shadow: 0 0 5px rgba(109,207,246,.5);
            }

            @media screen and (max-width:768px){
                .menu-bar{
                    border:none;
                    background-color:#fff;
                    display:block;
                }
                .logo {
                    display:none;
                }
                .login-link{
                    display:none;
                }
                .logout-link{
                    display:none;
                }
                .welcome-p{
                    display:none;
                }

            }
            @media screen and (max-width:500px){
              .menu-bar{
                    margin:0 ;
                    margin-left:0;
              }
                .small-ul{
                    display:flex;
                    align-items:center;
                    margin-left:1rem;
                }
                .small-ul li{
                    margin:0 0.3rem;
                }
               
                input[type=search] {
                padding: 9px 10px 9px 32px;
                width: 50vw;
                }

                input[type=search]:focus {
                width: 46vw;
               
            }   

            }

                
                `}

            </style>
        </nav>
    )
}

export default Navbar
