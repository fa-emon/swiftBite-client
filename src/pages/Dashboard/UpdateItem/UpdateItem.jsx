import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const items = useLoaderData();
    const { image, category, price, name, short_description } = items;

    const { register, handleSubmit, formState: { errors },
        reset } = useForm()

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = (data) => {
        const { name, image, price, category, admin_name, admin_email, short_description } = data;

        const newData = { name, image, price: parseFloat(price), category, short_description, admin_email, admin_name }

        axiosSecure.patch(`/menu/category/${items._id}`, newData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Item Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '20vh', width: '20vh', objectFit: 'contain' }} src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png" alt="" />
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">UPDATE </span>AN ITEM</p>
                <img
                    className="wobble-and-rotate"
                    style={{
                        height: '20vh',
                        width: '20vh',
                        objectFit: 'contain',
                        transform: 'scaleX(-1)',
                    }}
                    src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png"
                    alt=""
                />
            </div>

            <div className="mb-10 heading-font tracking-wide px-5 pt-2 pb-6 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-6 mb-6">
                        {/* {Name field} */}
                        <div className="text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="text" placeholder="$" {...register("name", { required: true, maxLength: 80 })}
                                defaultValue={name} />

                            {errors.name?.type === "required" && (
                                <p className="text-red-600">name is required!</p>
                            )}
                        </div>

                        {/* {photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Photo URL</span>
                            </label>
                            <input type="text"
                                defaultValue={image}
                                {...register('image', { required: true })}
                                placeholder="Photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Category field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Category</span>
                            </div>
                            <div className="">
                                <select className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" {...register("category", { required: true })} defaultValue={category}>
                                    <option disabled selected>Pick one</option>
                                    <option value="soup">Soup</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="burger">Burger</option>
                                    <option value="sandwich">Sandwich</option>
                                    <option value="seafood">Sea Food</option>
                                    <option value="steak">Steak</option>
                                    <option value="pasta">Pasta</option>
                                    <option value="vegetarian">Vegetarian</option>
                                    <option value="healthy_option">Healthy Option</option>
                                    <option value="popular_food">Popular Food</option>
                                    <option value="offer">Offer</option>
                                </select>
                            </div>
                        </div>

                        {/* {Price field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Price</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="number" placeholder="$" {...register("price", { required: true, maxLength: 80 })}
                                defaultValue={price} />

                            {errors.price?.type === "required" && (
                                <p className="text-red-600">price is required!</p>
                            )}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Admin Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Admin Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="text" placeholder="Admin Name" {...register("admin_name", { required: true, maxLength: 80 })}
                                readOnly
                                value={user?.displayName}
                            />
                        </div>

                        {/* {Admin Email field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Admin Email</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                {...register('admin_email', { required: true })} type="email"

                                value={user?.email}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* {Food Details field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Item Details</span>
                            </div>

                            <div className="w-full">
                                <textarea className="textarea bg-[#202020] text-[#C9AB81] w-full textarea-md" placeholder="Item Details" {...register("short_description", { required: true })} defaultValue={short_description}></textarea>

                                {errors.short_description && <p className='text-red-600'>product details is required!.</p>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <input className="btn btn-outline bg-black text-[#C9AB81] hover:text-black hover:bg-[#C9AB81] uppercase btn-sm w-full" type="submit" value="update item" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateItem;