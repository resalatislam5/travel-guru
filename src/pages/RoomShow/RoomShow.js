import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomCard from './RoomCard/RoomCard';

const RoomShow = () => {
    const rooms = useLoaderData();
    return (
        <div className='grid grid-cols-2 gap-4'>
           <div>
                {
                    rooms.map(r => <RoomCard key={r.id} room ={r} />)
                }
           </div>
           <div>

           </div>
        </div>
    );
};

export default RoomShow;