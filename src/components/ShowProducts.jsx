import { Link, useLoaderData } from "react-router-dom";


const ShowProducts = () => {
    const singleData = useLoaderData();


    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10 py-5 bg-white dark:bg-black">

            <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
                {
                    singleData.map(product => (


                        <div key={product._id} className="card w-full lg:w-96 bg-base-200 dark:bg-slate-600 shadow-2xl mx-auto lg:mx-0">

                            <img src={product.image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                            <div className="card-body items-center text-center text-black dark:text-white">
                                <h2 className="card-title text-md font-medium">{product.name}</h2>
                                <h2>Price: ${product.price}</h2>
                                <h2>Rating: {product.rating}/5</h2>
                            </div>
                            <div className="flex justify-center gap-3 pb-5">
                                <Link to='/details'><button className="btn btn-outline dark:bg-white dark:text-black dark:hover:bg-slate-600">Details</button></Link>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    );
};

export default ShowProducts;