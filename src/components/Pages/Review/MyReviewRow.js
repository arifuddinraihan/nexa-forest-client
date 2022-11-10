import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ review , handleDelete }) => {
    // console.log(review)
    const { _id , serviceName, service, clientReview, rating, reviewTime } = review



    const [serviceTaken, setServiceTaken] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceTaken(data))
            .catch(err => console.error(err))
    }, [service])
    const { price, img } = serviceTaken
    return (
        <tr className="hover">
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Price : ${price}</div>
                    </div>
                </div>
            </td>
            <td className='text-sm'>
                {clientReview ? clientReview.slice(0, 100) + "..." : "No Review Given"}
                <br />
                <span className="badge badge-ghost badge-sm">{reviewTime}</span>
            </td>
            <td>{rating}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;