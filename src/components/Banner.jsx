

const Banner = () => {
    const img1 = 'https://i.ibb.co/b7cNPp6/Stock-Snap-JMDDUP42-F4.jpg';
    const img2 = 'https://i.ibb.co/B6pBLYX/Stock-Snap-RM676-MH2-KP.jpg';
    const img3 = 'https://i.ibb.co/jWtZPhT/Stock-Snap-T2-VQ2-QPA3-R.jpg';
    const img4 = 'https://i.ibb.co/ww0BqVC/Stock-Snap-TAGHTEUDXZ.jpg';


    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <p className="text-center text-red-600 text-3xl font-bold">Discover Tomorrow's Tech Today <br />
                            Explore the Latest Gadgets and Electronics from <br /> Top Brands</p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-center text-orange-400 text-3xl font-bold">Discover Tomorrow's Tech Today <br />
                            Explore the Latest Gadgets and Electronics from <br /> Top Brands</p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-center text-black text-3xl font-bold">Discover Tomorrow's Tech Today <br />
                           Explore the Latest Gadgets and Electronics from <br /> Top Brands</p>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} alt="" className="w-full opacity-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-center text-white text-3xl font-bold">Discover Tomorrow's Tech Today <br />
                           Explore the Latest Gadgets and Electronics from <br /> Top Brands</p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;