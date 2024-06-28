import React from 'react';
import Header from './components/Header';
import PlayerContainer from './components/PlayerContainer';
import StreamContainer from './components/StreamContainer';

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row h-screen overflow-hidden'>
            <Header />
            <div className='flex flex-1 flex-col lg:flex-row overflow-hidden'>
                <div className='lg:w-3/4 flex-shrink-0 overflow-hidden'>
                    <PlayerContainer />
                </div>
                <div className='lg:w-1/4 flex-shrink-0 overflow-hidden'>
                    <StreamContainer />
                </div>
            </div>
        </div>
    );
}

export default Home;
