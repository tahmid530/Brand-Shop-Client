import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {
    const carts = useLoaderData();
    const [deletes, setDeletes] = useState(carts);
    // console.log(carts)

    const handleDelete = _id => {

        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/carts/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Product has been deleted.',
                                    'success'
                                )
                                const remainingData = deletes.filter(product => product._id !== _id);
                                setDeletes(remainingData);

                            }
                        })
                }
            })
    }


    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10 py-5 bg-white dark:bg-black">

        <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
            {
                carts.map(cart => (


                    <div key={cart._id} className="card w-full lg:w-96 bg-base-200 dark:bg-slate-600 shadow-2xl mx-auto lg:mx-0">

                                <img src={cart.image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                <div className="card-body items-center text-center text-black dark:text-white">
                                    <h2 className="card-title text-md font-medium">{cart.name}</h2>
                                    <h2>Price: ${cart.price}</h2>
                                    <h2>Rating: {cart.rating}/5</h2>
                                </div>
                                <div className="flex justify-center gap-3 pb-5">
                                    <button className="btn btn-outline dark:bg-white dark:text-black dark:hover:bg-slate-600" onClick={() => handleDelete(cart._id)}>Delete From Cart</button>
                                </div>
                    </div>
                    
                ))
            }
        </div>
    </div >
    );
};
export default Cart;