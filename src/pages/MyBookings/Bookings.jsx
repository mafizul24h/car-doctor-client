import React from 'react';

const Bookings = ({ booking, handleDelete, handleBookConfirm }) => {
    const { _id, service, img, date, price, status } = booking;

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-error btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {status === 'Pending' ? <button onClick={() => handleBookConfirm(_id)} className="btn btn-warning btn-xs">{status}</button> : <button className="btn btn-success btn-xs" >{status}</button>}
            </th>
        </tr>
    );
};

export default Bookings;