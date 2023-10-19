import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer';



const Root = () => {
    return (
        <>
            <div className='max-w-[1920px] mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;