import React, { useState } from 'react';
import bg from '../assets/bgImage.jpg';
import { FaSearch } from 'react-icons/fa';
import SwiperComponent from './swiper/SwiperComponent';
import { FaPlayCircle } from "react-icons/fa";
import Artists from './Artists';

const PlayerContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='px-4 py-4 bg-zinc-900 min-h-screen'>
            <section className="max-h-48 min-h-32 relative flex flex-1 items-center justify-center overflow-hidden rounded-sm bg-gray-100 py-8 sm:py-10 md:py-12 xl:py-32">
                <img src={bg} alt="background_image" className='absolute inset-0 h-full w-full object-cover object-center opacity-90' />

                <div className="absolute inset-0 bg-zinc-400 mix-blend-multiply"></div>

                <div className="relative flex flex-col items-center justify-start sm:max-w-xl mt-4">
                    <div className='flex flex-row items-center bg-red-100 bg-opacity-50 py-2 px-4 h-8'>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Search music"
                            className="flex-grow bg-transparent text-center text-sm text-slate-900 placeholder-slate-900 focus:outline-none"
                            aria-label="Search music"
                        />
                        <FaSearch className="text-zinc-800 ml-2" />
                    </div>
                </div>
            </section>
            <div className='text-slate-200 text-lg font-bold mt-4 flex flex-row gap-2'>
                <h2>New Releases</h2>
                <FaPlayCircle className='relative top-1 text-2xl text-red-600' />
            </div>
            <SwiperComponent className="w-full" />
            <Artists />
        </div>
    );
};

export default PlayerContainer;
