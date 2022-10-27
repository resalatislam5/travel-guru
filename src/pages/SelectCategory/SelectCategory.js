import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLoaderData } from 'react-router-dom';

const SelectCategory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const category = useLoaderData();
    const {name, des,id} = category;
    return (
        <div className='banner'>
                <div className='grid grid-cols-2 z-20 pt-28'>
                <div className='flex justify-center items-center h-[80vh] mx-20'>
                    <div className='text-white pb-5'>
                        <h1 className='text-8xl'>{name}</h1>
                        <p className='text-lg'>{des}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className='w-[460px] h-[420px] bg-white shadow-lg p-6 rounded-lg'>
                        <p className='text-lg text-[#818181] pb-2 font-[500]'>Origin</p>
                        <input type="text" className='bg-[#F2F2F2] w-full text-2xl px-5 py-3 rounded-lg mb-2 font-semibold focus:outline-none' />
                        <p className='text-lg text-[#818181] pb-2 font-[500]'>Origin</p>
                        <h6 className='bg-[#F2F2F2] w-full text-2xl px-5 py-3 rounded-lg mb-2 font-semibold'>{name}</h6>
                        <div className='flex justify-between'>
                            <div className="mr-2">
                                <p className='text-lg text-[#818181] pb-2 font-[500]'>Form</p>
                                <DatePicker className="bg-[#F2F2F2] w-full text-2xl px-5 py-3 rounded-lg mb-2 font-semibold " selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="ml-2">
                                <p className='text-lg text-[#818181] pb-2 font-[500]'>To</p>
                                <DatePicker className="bg-[#F2F2F2] w-full text-2xl px-5 py-3 rounded-lg mb-2 font-semibold" selected={date} onChange={(date) => setDate(date)} />
                            </div>
                        </div>
                        <Link to={`/booking/${id}`}><button className="btn w-full bg-[#F9A51A] hover:bg-[#ff9d00] mt-5 border-0">Start Booking</button></Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SelectCategory;