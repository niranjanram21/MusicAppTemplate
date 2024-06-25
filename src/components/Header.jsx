import React from 'react';
import { IoIosHome } from "react-icons/io";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <ul className='lg-block w-2/6 h-screen bg-zinc-800 text-slate-200 flex flex-col gap-8 px-6 pt-8 items-start'>
                <li className='text-2xl text-slate-50 font-extrabold'>AppName</li>
                <ul className='flex flex-col gap-1 text-sm w-full'>
                    <li className='bg-red-600 px-4 py-2 w-full rounded-sm flex flex-row gap-2'><IoIosHome className='relative top-1' /> <span>Home</span></li>
                    <li className='bg-red-600 px-4 py-2 w-full rounded-sm flex flex-row gap-2'><FaFirefoxBrowser className='relative top-1' /> <span>Browse</span></li>
                    <li className='bg-red-600 px-4 py-2 w-full rounded-sm flex flex-row gap-2'><MdFavoriteBorder className='relative top-1' /> <span>Favourite</span></li>
                    <li className='bg-red-600 px-4 py-2 w-full rounded-sm flex flex-row gap-2'><FaHeadphones className='relative top-1' /> <span>Library</span></li>
                </ul>
                <ul className='flex flex-col gap-4 text-sm text-slate-400 w-full'>
                    <li className='text-slate-200 font-bold flex flex-row gap-2'>Playlists <FaPlus className='ml-auto relative top-1'/></li>
                    <hr className='border border-slate-600 opacity-40'/>
                    <li className='text-red-400'>For workplace</li>
                    <li>Rich Brian's collection</li>
                    <li>deep focus</li>
                    <li>Lo-fi Jazz upbeat</li>
                    <li>Christmas playlist</li>
                </ul>
            </ul>
        </>
    );
}

export default Header;
