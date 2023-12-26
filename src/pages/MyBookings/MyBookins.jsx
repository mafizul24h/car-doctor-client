import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Bookings from './Bookings';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyBookins = () => {
    const { user, logOut } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPages, setItemsPages] = useState(5);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [control, setControl] = useState(null);
    const navigate = useNavigate();
    const [totalBookings, setTotalBookings] = useState({});


    const totalPages = Math.ceil(totalBookings / itemsPages);
    // console.log(totalBookings, totalPages);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumbers);

    // const pageNumbers = [...Array(totalPages).keys()];
    // const pageNums = [...Array(totalPages).keys()]
    // console.log(pageNums);
    // console.log(pageNumbers);

    const url = `https://car-doctor-server1.vercel.app/bookings?email=${user?.email}`
    const newURL = `https://car-doctor-server1.vercel.app/newBookings?email=${user?.email}&page=${currentPage}&limit=${itemsPages}`
    // useEffect(() => {
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('car-access-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (!data.error) {
    //                 setBookings(data);
    //             } else {
    //                 logOut()
    //                     .then(() => {
    //                         navigate('/login');
    //                     }).catch(error => console.log(error))
    //             }

    //         });
    //     setControl(false);
    // }, [url, control, navigate, setControl]);


    useEffect(() => {
        fetch(newURL, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data);
                } else {
                    logOut()
                        .then(() => {
                            navigate('/login');
                        }).catch(error => console.log(error))
                }

            });
        setControl(false);
    }, [newURL, control, navigate, setControl]);

    useEffect(() => {
        fetch(`https://car-doctor-server1.vercel.app/bookingSearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                const myBookings = data.filter(book => book.email === user?.email);
                setBookings(myBookings);
            })
    }, [searchText, user]);

    useEffect(() => {
        fetch(`https://car-doctor-server1.vercel.app/totalBookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTotalBookings(data.totalBookings))
    }, [user])

    const handleSearch = () => {
        fetch(`https://car-doctor-server1.vercel.app/bookingSearch/${search}`)
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
                fetch(`https://car-doctor-server1.vercel.app/bookings/${id}`, {
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
                fetch(`https://car-doctor-server1.vercel.app/bookings/${id}`, {
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

    const options = [5, 10, 20];
    const handleSelectChange = (event) => {
        setItemsPages(parseInt(event.target.value));
        setCurrentPage(1);
    }

    return (
        <>
            <div>
                <h2 className='text-4xl font-bold text-gray-700 text-center my-6'>My Bookings</h2>
                <div className='text-end '>
                    <lavel className='text-xl fond-bold mb-2 '>Search: </lavel>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search" id="search" className='input input-bordered w-full max-w-xs' placeholder='Search' />
                </div>
                <div className='flex justify-between my-3'>
                    <div className='border  py-2 px-3 rounded-md'>
                    <label className='font-bold'>Filter</label>
                        <select value={itemsPages} onChange={handleSelectChange}>
                            {options.map(option => <option key={option} value={option}>
                                {option}
                            </option>)}
                        </select>
                    </div>
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
            {/* Pagination  */}
            <div className='text-center my-3'>
                <p className='my-2'>Current Page{currentPage} and Item Per Page {itemsPages}</p>
                {
                    pageNumbers?.map(number => <button className={`${currentPage === number && 'btn btn-success'} btn btn-outline mx-2`}
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select value={itemsPages} onChange={handleSelectChange}>
                    {options.map((option, index) => <option key={index} value={option}>
                        {option}
                    </option>)}
                </select>
            </div>
        </>
    );
};

export default MyBookins;