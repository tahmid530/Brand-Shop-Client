import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Samsung = () => {
    const [samsungs, setSamsungs] = useState([]);

    useEffect(() => {
        fetch('samsungs.json')
            .then(res => res.json())
            .then(data => setSamsungs(data))
    }, [])


    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/nw7SrSp/silivan-munguarakarama-Hing5i-QTUn-M-unsplash.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/Vmr80vd/anh-nhat-u-Cq-Ma-s-JDg-unsplash.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/NjsdQFr/daniel-romero-Pdfq-LVSk-kg-unsplash.jpg'} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly mb-10 lg:my-10">

                <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
                    {
                        samsungs.map(samsung => (


                            <div key={samsung.Id} className="card w-full lg:w-96 bg-base-200 shadow-2xl mx-auto lg:mx-0">
                                    {/* <Link to={`${samsung.name}`}> */}
                                        <img src={samsung.Image} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-black text-md font-medium">{samsung.Name}</h2>
                                            <h2>Price: {samsung.Price}</h2>
                                            <h2>Rating: {samsung.Rating}/5</h2>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to='/{samsung.Details}'><button className="btn btn-outline">Details</button></Link>
                                            <Link to='/{samsung.Update}'><button className="btn btn-outline">Update</button></Link>
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

export default Samsung;