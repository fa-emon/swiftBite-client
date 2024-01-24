import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Order = () => {
    const location = useLocation();
    const specificDetails = location.state?.specificDetails;
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors },
        reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="pt-36 px-10">
            <h2 className="text-[#C9AB81] text-center text-5xl mb-10 heading-font">Order Now</h2>

            <>
                <div className="mb-10 heading-font tracking-wide bg-[#0a0a0a] px-5 pt-2 pb-6 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-full gap-6">
                            {/* {Food Name field} */}
                            <div className="mb-6 text-black w-full">
                                <div className="label">
                                    <span className="text-white">Food Name</span>
                                </div>
                                <input
                                    className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                    type="text"
                                    placeholder="Food Name"
                                    {...register("name", { required: true, maxLength: 80 })}
                                    value={specificDetails.name}
                                    readOnly
                                />

                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">food name is required!</p>
                                )}
                            </div>

                            {/* {Photo URL field} */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-white">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('image', { required: true })}
                                    placeholder="Photo URL"
                                    className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                    value={specificDetails.image}
                                    readOnly
                                />
                                {errors.image && <p className='text-red-600'>Photo URL is required!.</p>}
                            </div>

                        </div>

                        <div className="flex w-full gap-6">
                            {/* {Price field} */}
                            <div className="mb-6 text-black w-full">
                                <div className="label">
                                    <span className="text-white">Price</span>
                                </div>
                                <input
                                    className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                    type="number"
                                    value={specificDetails.price}
                                    readOnly
                                />

                                {errors.price?.type === "required" && (
                                    <p className="text-red-600">price is required!</p>
                                )}
                            </div>


                            {/* {Country field} */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-white">Country</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('country', { required: true })}
                                    placeholder="Country"
                                    className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                    readOnly
                                    value={specificDetails.country}
                                />
                                {errors.country && <p className='text-red-600'>Country is required!.</p>}
                            </div>

                        </div>

                        <div className="flex w-full gap-6">
                            {/* {Buyer Name field} */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-white">Buyer Name</span>
                                </label>
                                <input type="number"
                                    {...register('available_seats', { required: true })}
                                    className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]"
                                    value={user?.displayName}
                                    readOnly
                                />
                            </div>


                            {/* {Buyer Email field} */}
                            <div className="mb-6 text-black w-full">
                                <div className="label">
                                    <span className="text-white">Buyer Email</span>
                                </div>
                                <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="email"
                                    value={user?.email}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* {Category field} */}
                            <div className="w-full flex gap-6">
                                <div className="w-full">
                                    <div className="label">
                                        <span className="text-white"> Category</span>
                                    </div>
                                    <div className="">
                                        <input type="text"
                                            value={specificDetails.category}
                                            readOnly
                                            placeholder="0" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                                    </div>
                                </div>

                                {/* {Quantity field} */}
                                <div className="w-full">
                                    <div className="label">
                                        <span className="text-white">Quantity</span>
                                    </div>
                                    <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="number" placeholder="0" {...register("quantity", { required: true })} />

                                    {errors.quantity?.type === "required" && (
                                        <p className="text-red-600">quantity is required!</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* {Course Details field} */}
                            <div className="w-full">
                                <div className="label">
                                    <span className="text-white">Food Details</span>
                                </div>

                                <div className="w-full">
                                    <textarea className="textarea bg-[#202020] text-[#C9AB81] w-full textarea-md"
                                        value={specificDetails.short_description}
                                        readOnly
                                    ></textarea>

                                    {errors.short_description && <p className='text-red-600'>course details is required!.</p>}
                                </div>
                            </div>
                        </div>

                        <div>
                            <input className="btn btn-outline bg-[#C9AB81] text-black hover:text-[#C9AB81] hover:bg-black uppercase btn-sm w-full" type="submit" value="add to cart" />
                        </div>
                    </form>
                </div>
            </>
        </div>
    );
};

export default Order;
