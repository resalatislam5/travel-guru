import React from 'react';

const Card = ({category,handleCategory}) => {
    const {name,img} = category;
    // const {setCategory} = ca
    // console.log(ca)
    // const handleCategory = (props) =>{
    //     // setCategory(props)
    // }
    return (
        <div className='' onClick={() =>handleCategory(category)}>
            <div className="card w-96 shadow-xl image-full">
                <figure className='z-10'><img src={img} alt="hotel" /></figure>
                <div className="card-body justify-end">
                    <div className="card-actions justify-end">
                    <p className='text-4xl text-white font-bold'>{name}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;