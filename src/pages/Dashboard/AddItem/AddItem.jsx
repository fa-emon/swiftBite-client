import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const AddItem = () => {
    const { register, handleSubmit, formState: { errors },
        reset } = useForm()

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = (data) => {
        const { name, image, price, category, admin_name, admin_email, short_description, quantity, country } = data;

        const newData = { name, image, price: parseFloat(price), quantity: parseFloat(quantity), category, short_description, country, admin_email, admin_name }

        axiosSecure.post('/menu', newData)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "One item added successfully!",
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
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">ADD A</span> NEW ITEM</p>
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

            <div className="mb-10 heading-font tracking-wide bg-[#0a0a0a] px-5 pt-2 pb-6 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-6">
                        {/* {Food Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Food Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="text" placeholder="Food Name" {...register("name", { required: true, maxLength: 80 })} />

                            {errors.name?.type === "required" && (
                                <p className="text-red-600">food name is required!</p>
                            )}
                        </div>

                        {/* {photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Photo URL</span>
                            </label>
                            <input type="text"
                                {...register('image', { required: true })}
                                placeholder="Photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6 mb-6">
                        {/* {Category field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Choose Category</span>
                            </div>
                            <div className="">
                                <select className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" {...register("category", { required: true })}>
                                    <option value="soup">soup</option>
                                    <option value="drinks">drinks</option>
                                    <option value="desserts">desserts</option>
                                    <option value="pizza">pizza</option>
                                    <option value="salad">salad</option>
                                    <option value="burger">burger</option>
                                    <option value="sandwich">sandwich</option>
                                    <option value="seafood">seafood</option>
                                    <option value="steak">steak</option>
                                    <option value="pasta">pasta</option>
                                    <option value="vegetarian">vegetarian</option>
                                    <option value="healthy_option">healthy_option</option>
                                    <option value="popular_food">popular_food</option>
                                    <option value="offer">offer</option>
                                </select>
                            </div>
                        </div>

                        {/* {Quantity field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Quantity</span>
                            </label>
                            <input type="number"
                                {...register('quantity', { required: true })}
                                placeholder="0" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.quantity && <p className='text-red-600'>quantity is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Country field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Country</span>
                            </label>
                            <input type="text"
                                {...register('country', { required: true })}
                                placeholder="Country" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.country && <p className='text-red-600'>country is required!.</p>}
                        </div>

                        {/* {Price field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Price</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="number" placeholder="$" {...register("price", { required: true, maxLength: 80 })} />

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
                                <span className="text-[#C9AB81]">Food Details</span>
                            </div>

                            <div className="w-full">
                                <textarea className="textarea bg-[#202020] text-[#C9AB81] w-full textarea-md" placeholder="Food Details" {...register("short_description", { required: true })}></textarea>

                                {errors.short_description && <p className='text-red-600'>food details is required!.</p>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <input className="btn btn-outline bg-black text-[#C9AB81] hover:text-black hover:bg-[#C9AB81] uppercase btn-sm w-full" type="submit" value="add item" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddItem;