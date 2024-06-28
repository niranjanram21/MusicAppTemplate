import React from 'react';

const Artists = () => {
    const artists = [
        {
            "name": "Ed Sheeran",
            "image": "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99"
        },
        {
            "name": "Taylor Swift",
            "image": "https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1"
        },
        {
            "name": "BLACKPINK",
            "image": "https://i.scdn.co/image/254b0e0fc1d4cf39de56960ed983c1ff7e3dff00"
        },
        {
            "name": "Stamp",
            "image": "https://i.scdn.co/image/744d96755a18e2d1739259881191a0d4210c26c7"
        },
        {
            "name": "The Toys",
            "image": "https://i.scdn.co/image/4f0570457ba3d443eef817ec20563a5a655b78b0"
        },
        {
            "name": "Palmy",
            "image": "https://i.scdn.co/image/a7c08479c9c400ada27d8046e8fffea125787170"
        },
        {
            "name": "Pitbull",
            "image": "https://i.scdn.co/image/1353990534aef10c946cf3a47865ac22471be5c4"
        }
    ];
    return (
        <>
            <div className='text-slate-200 text-lg font-bold mt-4 flex flex-row gap-2'>
                <h2>You May Like</h2>
            </div>
            <div className='flex justify-center mt-4'>
                <ul className='flex flex-row gap-16 items-center'>
                    {artists.map((artist, index) => (
                        <li key={index} className='flex flex-col items-center'>
                            <div className='h-16 w-16 rounded-full overflow-hidden border-2 border-red-500'>
                                <img src={artist.image} alt={artist.name} className='w-full h-full object-cover' />
                            </div>
                            <p className='text-red-200 italic text-sm mt-2'>{artist.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Artists;
