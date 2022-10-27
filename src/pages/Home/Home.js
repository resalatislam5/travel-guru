import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import Card from './Card/Card';
import './Home.css'
import { AuthProviderContext } from '../../contexts/AuthProvider/AuthProvider';
const Home = () => {
    const [category, setCategory] = useState({})
    const {name, des,id} = category;
    const categories = useLoaderData();
    const handleCategory = (props) =>{
        setCategory(props)
    }
    const {setId} = useContext(AuthProviderContext);
    const handleHeader = (id) =>{
        setId(id)
    }
    return (
        <div className='banner'>
                <div className='grid grid-cols-3 z-20 pt-28'>
                    <div className="col-span-1 flex justify-center items-center px-8">
                    {
                        category.name &&
                        <div>
                            <h1 className='text-8xl text-white pb-6'>{name}</h1>
                            <p className='text-lg text-white'>{des.length < 200 ? des : des.slice(0,200)}...</p>
                            <Link to={`/category/${id}`}><button onClick={() => handleHeader(id)} className='btn bg-[#F9A51A] hover:bg-[#ff9d00] mt-8 border-0'>Booking <span className='text-lg ml-2'><FiArrowRight /></span></button></Link>
                        </div>
                    }
                    </div>
                    <div className="col-span-2 mt-20">
                        <div className='grid grid-cols-3'>
                        {
                            categories.map(category => <Card key={category.id} category={category} handleCategory={handleCategory} />)
                        }
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;