import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Brands() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <>
            <div className="lg:p-10 bg-white dark:bg-black">
                <h1 className="text-center text-5xl font-bold pt-20 py-10 dark:text-white text-[#1C1B1B]">Our Partner</h1>
                <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                    <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
                        {
                            brands.map(brand => (


                                <div key={brand.id} className="card w-full lg:w-96 bg-base-200 shadow-2xl mx-auto lg:mx-0">
                                    <button className="hover:bg-emerald-500 hover:rounded-xl">
                                        <Link to={`${brand.name}`}>
                                            <img src={brand.img} alt="" className="rounded-xl w-[300px] h-[200px] mx-auto mt-10" />
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-black text-md font-medium">{brand.name}</h2>
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div >
            </div>
        </>
    );
}
