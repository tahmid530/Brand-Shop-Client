import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Google = () => {
    const [googles, setGoogles] = useState([]);

    useEffect(() => {
        fetch('googles.json')
            .then(res => res.json())
            .then(data => setGoogles(data))
    }, [])


    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/Fmj1sny/pexels-elena-chioru-15802450.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/ZGWyrvS/pexels-czapp-rp-d-10774600.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/qMtxX3d/digital-marketing-1725340.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10">

                <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
                    {
                        googles.map(google => (


                            <div key={google.Id} className="card w-full lg:w-96 bg-base-200 shadow-2xl mx-auto lg:mx-0">
                                    {/* <Link to={`${google.name}`}> */}
                                        <img src={google.Image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-black text-md font-medium">{google.Name}</h2>
                                            <h2>Price: {google.Price}</h2>
                                            <h2>Rating: {google.Rating}/5</h2>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to='/{google.Details}'><button className="btn btn-outline">Details</button></Link>
                                            <Link to='/{google.Update}'><button className="btn btn-outline">Update</button></Link>
                                        </div>
                                    {/* </Link> */}
                            </div>

                        ))
                    }
                </div>
            </div >
        </>
    );
};

export default Google;