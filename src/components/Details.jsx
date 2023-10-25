import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const products = useLoaderData();
    const [updates, setUpdates] = useState(products);

    // const remainingData = products.filter(product => product._id === product._id);


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


                    fetch(`https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Product has been deleted.',
                                    'success'
                                )
                                const remainingData = updates.filter(product => product._id !== _id);
                                setUpdates(remainingData);

                            }
                        })
                }
            })
    }

    const handleCart = products => {
        // console.log(products);

        const keysToRemove = ['_id'];
        const modifiedData = { ...products };
        keysToRemove.forEach(_id => delete modifiedData[_id]);

        fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }




    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10 sm:px-1">

                <div className="">
                    {
                        updates.map((product) => (

                            <div key={product._id} className="card w-full lg:w-full bg-gray-300 shadow-lg mx-auto border-4">

                                <img src={product.image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                <div className="card-body  text-left">
                                    <h2 className="card-title text-black text-md font-medium">{product.name}</h2>
                                    <h2>Price: ${product.price}</h2>
                                    <h2>Rating: {product.rating}/5</h2>
                                    <h2>Brand: {product.brand}</h2>
                                    <h2>Type: {product.type}</h2>
                                    <h2>Description: {product.description}</h2>

                                </div>
                                <div className="flex justify-center gap-3 pb-5">
                                    <button className="btn btn-outline" onClick={() => handleDelete(product._id)}>Delete</button>
                                    <Link to={`/products/${product._id}`}><button className="btn btn-outline">Update</button></Link>
                                    <button className="btn btn-outline" onClick={() => handleCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </div>
    );
}

export default Details;