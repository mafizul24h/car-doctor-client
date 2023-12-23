import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;

        const order = {
            customerName: name, img, date, email, price, service: title, service_id: _id
        }

        fetch('https://car-doctor-server1.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your ${title} has been booked`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='my-12 mx-2 md:mx-12 text-gray-800'>
            <h2 className='text-3xl font-semibold text-center'>Book Service : {title}</h2>
            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Book Now" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;