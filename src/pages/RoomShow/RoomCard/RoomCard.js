import React from 'react';
import star from '../../../asses/icons/star_1_.png'
const RoomCard = ({room}) => {
    const {img,name,guests,bedrooms,beds,baths,ratting,price,des} = room;
    return (
            <div className="card card-side bg-base-100  mb-6 mx-7 flex-grow-0">
                <figure><img src={img} alt="room"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                    <div className='flex text-[#6A6A6A] text-lg'>
                        <p>{guests} <span>guests</span></p>
                        <p>{bedrooms} <span>bedrooms</span></p>
                        <p>{beds} <span>beds</span></p>
                        <p>{baths} <span>baths</span></p>
                    </div>
                    <p>{des}</p>
                    <div className='flex ext-lg'>
                        <p className='flex items-center'><img className='w-5 h-5 mr-2' src={star} alt="" /> <span className='text-black'>{ratting}</span></p>
                        <p className='text-black'>{price} <span className='text-[#6A6A6A] t'>/night</span></p>
                    </div>
                </div>
            </div>
    );
};

export default RoomCard;