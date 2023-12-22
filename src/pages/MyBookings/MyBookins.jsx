import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Bookings from './Bookings';
import Swal from 'sweetalert2';

const MyBookins = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [control, setControl] = useState(null);

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
        setControl(false);
    }, [url, control]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookingSearch/${searchText}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [searchText]);

    const handleSearch = () => {
        fetch(`http://localhost:5000/bookingSearch/${search}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleBookConfirm = (id) => {
        Swal.fire({
            title: "Are you sure Booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
                // const update = {status: 'Confirmed'};
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'Confirmed' })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            setControl(true);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-gray-700 text-center my-6'>Total Bookings {bookings.length}</h2>
            <div className='text-end '>
                <h2 className='text-xl fond-bold mb-2 '>Search</h2>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search" id="search" className='input input-bordered w-full max-w-xs' placeholder='Search' />
            </div>
            <div className='flex justify-end my-3'>
                <div className="form-control">
                    <div className="input-group flex item-center gap-3">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th><button>Status</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <Bookings
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookConfirm={handleBookConfirm}
                            />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookins;