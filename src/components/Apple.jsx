import { Link, useLoaderData } from "react-router-dom";

const Apple = () => {
    const products = useLoaderData();

    const remainingData = products.filter(product => product.brand === 'Apple');



    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/1Z2Vf34/pexels-torsten-dettlaff-3623358.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-center text-red-600 text-md md:text-3xl font-bold">Experience the Future with Apple's Innovative Technology.
                            <br />Discover the latest Apple products that redefine convenience, style, and performance. Explore our range of iPhones, iPads, MacBooks, and more.
                            <br />Elevate your tech game with Apple today!</p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/hR52cW6/Stock-Snap-7-RL3-YOUPT4.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-center text-black text-md md:text-3xl font-bold">Experience the Future with Apple's Innovative Technology.
                            <br />Discover the latest Apple products that redefine convenience, style, and performance. Explore our range of iPhones, iPads, MacBooks, and more.
                            <br />Elevate your tech game with Apple today!</p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/2gCyjPc/jonathan-francisca-8360-Wm-L52kg-unsplash.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-center text-green-600 text-md md:text-3xl font-bold">Experience the Future with Apple's Innovative Technology.
                            <br />Discover the latest Apple products that redefine convenience, style, and performance. Explore our range of iPhones, iPads, MacBooks, and more.
                            <br />Elevate your tech game with Apple today!</p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10">

                <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
                    {
                        remainingData.map(product => (


                            <div key={product._id} className="card w-full lg:w-96 bg-base-200 shadow-2xl mx-auto lg:mx-0">
                                <img src={product.image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-black text-md font-medium">{product.name}</h2>
                                    <h2>Price: ${product.price}</h2>
                                    <h2>Rating: {product.rating}/5</h2>
                                </div>
                                <div className="flex justify-center gap-3 pb-5">
                                    <Link to='/details'><button className="btn btn-outline">Details</button></Link>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div >
        </>
    );
};

export default Apple;