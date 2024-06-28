import React, { useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    const tabs = [
        { name: 'Home', icon: <IoIosHome className='relative top-1' /> },
        { name: 'Browse', icon: <FaFirefoxBrowser className='relative top-1' /> },
        { name: 'Favourite', icon: <MdFavoriteBorder className='relative top-1' /> },
        { name: 'Library', icon: <FaHeadphones className='relative top-1' /> },
    ];

    return (
        <>
            <div className='lg:hidden flex justify-between items-center bg-zinc-800 text-slate-200 px-6 py-4'>
                <span className='text-2xl text-slate-50 font-extrabold'>AppName</span>
                <HiMenu className='text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <ul className={`lg:block ${menuOpen ? 'block' : 'hidden'} lg:w-1/6 h-screen bg-zinc-800 text-slate-200 flex flex-col gap-8 px-6 pt-8 items-start`}>
                <li className='text-2xl text-slate-50 font-extrabold mb-8 hidden lg:block'>AppName</li>
                <ul className='flex flex-col gap-1 text-sm w-full mb-8'>
                    {tabs.map((tab) => (
                        <li
                            key={tab.name}
                            className={`px-4 py-2 w-full rounded-sm flex flex-row gap-2 cursor-pointer ${activeTab === tab.name ? 'bg-red-600' : ''}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.icon} <span>{tab.name}</span>
                        </li>
                    ))}
                </ul>
                <ul className='flex flex-col gap-4 text-sm text-slate-400 w-full'>
                    <li className='text-slate-200 font-bold flex flex-row gap-2'>
                        Playlists <FaPlus className='ml-auto relative top-1' />
                    </li>
                    <hr className='border border-slate-600 opacity-40' />
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
