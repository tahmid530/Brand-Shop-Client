import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateForm = () => {
    const updateData = useLoaderData()
    console.log(updateData);
    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updateProducts = { name, brand, type, price, description, rating, image }
        console.log(updateProducts);

        fetch(`http://localhost:5000/products/${updateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
        
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }


    return (
        <div>
            <div className="bg-[#F4F3F0] px-24 py-12">
                <h2 className="text-3xl font-extrabold mb-8">Update Product</h2>
                <form onSubmit={handleUpdate}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.name} name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.brand} name="brand" placeholder="Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.type} name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.description} name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData ?.image} name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                   <input type="submit" value="Update Product" className="btn btn-outline w-full" />

                </form>
            </div>
        </div>
    );
};

export default UpdateForm;