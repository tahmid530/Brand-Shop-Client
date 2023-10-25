import { Link, useLoaderData } from "react-router-dom";

const Sony = () => {
    const products = useLoaderData();

    const remainingData = products.filter(product => product.brand === 'Sony');


    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/x6LGmx9/nikita-kostrykin-i1-Q9pphr-WUw-unsplash.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-center text-green-400 text-md md:text-3xl font-bold">
                            Discover Excellence with Sony: Explore a world of innovation and entertainment with our exclusive range of Sony products.
                            <br />From cutting-edge 4K TVs to powerful audio equipment, Sony's commitment to quality and innovation is unmatched.
                            <br />Elevate your tech experience with Sony today!
                        </p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/vJt8q70/kim-becker-Shy1bhz-WDA-unsplash.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-center text-white text-md md:text-3xl font-bold">
                            Discover Excellence with Sony: Explore a world of innovation and entertainment with our exclusive range of Sony products.
                            <br />From cutting-edge 4K TVs to powerful audio equipment, Sony's commitment to quality and innovation is unmatched.
                            <br />Elevate your tech experience with Sony today!
                        </p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/qCWy9TZ/alex-amva-h4x-Z7704-Bg-unsplash.jpg'} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-center text-black text-md md:text-3xl font-bold">
                            Discover Excellence with Sony: Explore a world of innovation and entertainment with our exclusive range of Sony products.
                            <br />From cutting-edge 4K TVs to powerful audio equipment, Sony's commitment to quality and innovation is unmatched.
                            <br />Elevate your tech experience with Sony today!
                        </p>
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

export default Sony;