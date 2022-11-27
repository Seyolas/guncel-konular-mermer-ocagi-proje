import Link from 'next/link'
import { BiCart } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut, FiAlignJustify } from "react-icons/fi";
import { useState, useEffect, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {

    const { user, error, isLoading } = useGlobalContext();

    return (
        <nav>
            <div className='main-flex'>
                <div className='left-flex'>
                    <Link href="/">
                        <a>
                            <Image src="/mercik-logo.png" width={200} height={200} objectFit="contain" />
                        </a>
                    </Link>
                </div>

                <div>
                    <h2 className='left-top-h2'>
                        {user ? <p>Hoşgeldin {user.name}!</p> :
                            <p>Mermer Yönetim Bilgi Sistemi</p>}

                    </h2>
                </div>
            </div>


            <style jsx>{`
            nav{
                height:200px;
                background-color:#171717;
                width:100%;
                max-width:100%;
                border-bottom:1px solid black;
            }
            .main-flex{
                display:flex;
                justify-content:space-around;
                align-items:center;
            }
            .left-flex{
                display:flex;
                align-items:center;
            }
            .left-top-h2{
                color:white;
            }
            @media screen and (max-width:500px){
                .main-flex{
                    flex-direction:column;
                    justify-content:center;
                }
                .left-flex a {
                    width:140px;
                }
            }
                `}

            </style>
        </nav>
    )
}

export default Navbar
