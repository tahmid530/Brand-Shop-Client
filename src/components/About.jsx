

const About = () => {
    return (
        <>
            <div className="my-15 lg:p-10 dark:text-white text-black bg-white dark:bg-black">
                <h3 className="text-5xl text-center font-bold py-10">About Us</h3>
                <div className="flex flex-col lg:flex-row items-center">
                    <div>
                        <img src="https://i.ibb.co/ZV6hjVv/undraw-Team-spirit-re-yl1v.png" alt="" />
                    </div>
                    <div className="space-y-6 p-4 md:p-6">
                        <p className="text-2xl font-medium">At TechFusion, we are dedicated to delivering cutting-edge technology and electronics products to our valued customers.
                        <br /> Our mission is to provide high-quality devices and gadgets that enhance your life and connect you to the future.
                        <br /> With a rich history of 5 years in the industry, we have established ourselves as a trusted source for top brands like Apple, Samsung, Sony, Google, Intel, and Oppo. 
                        <br /> Our passionate team of tech enthusiasts is committed to staying at the forefront of innovation, ensuring that you have access to the latest advancements. 
                        <br /> Join us in the world of technology, where possibilities are limitless.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;