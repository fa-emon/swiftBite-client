import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddItem = () => {
    const { register, handleSubmit, formState: { errors },
        reset } = useForm()

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        const { name, image, price, ratings, category, instructor_name, instructor_email, instructor_image, short_description, available_seats, students_enrolled } = data;

        const newData = { name, image, price: parseFloat(price), ratings: parseFloat(ratings), category, instructor_name, instructor_image, instructor_email, short_description, available_seats: parseFloat(available_seats), students_enrolled: parseFloat(students_enrolled) }

        axiosSecure.post('/menu', newData)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "one item added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <>
            <h2 className="text-center text-[#C9AB81] heading-font my-4 tracking-[.5rem] text-xl bg-[#0a0a0a] py-2 rounded-md">ADD A NEW FOOD</h2>

            <div className="mb-10 heading-font tracking-wide bg-[#0a0a0a] px-5 pt-2 pb-6 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-6">
                        {/* {Course Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Course Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="text" placeholder="Course Name" {...register("name", { required: true, maxLength: 80 })} />

                            {errors.name?.type === "required" && (
                                <p className="text-red-600">course name is required!</p>
                            )}
                        </div>

                        {/* {photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Photo URL</span>
                            </label>
                            <input type="text"
                                {...register('image', { required: true })}
                                placeholder="photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Instructor Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Instructor Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="text" placeholder="Instructor Name" {...register("instructor_name", { required: true, maxLength: 80 })} />

                            {errors.instructor_name?.type === "required" && (
                                <p className="text-red-600">instructor name is required!</p>
                            )}
                        </div>

                        {/* {Instructor photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Photo URL</span>
                            </label>
                            <input type="text"
                                {...register('instructor_image', { required: true })}
                                placeholder="photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.instructor_image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Instructor Email field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Instructor Email</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="email" placeholder="Instructor Email" {...register("instructor_email", { required: true, maxLength: 80 })} />

                            {errors.instructor_email?.type === "required" && (
                                <p className="text-red-600">instructor email is required!</p>
                            )}
                        </div>

                        {/* {available_seats field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Available Seats</span>
                            </label>
                            <input type="number"
                                {...register('available_seats', { required: true })}
                                placeholder="0" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.available_seats && <p className='text-red-600'>available seats is required!.</p>}
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* {Choose Category field} */}
                        <div className="w-full flex gap-6">
                            <div className="w-full">
                                <div className="label">
                                    <span className="text-[#C9AB81]">Choose Category</span>
                                </div>
                                <div className="">
                                    <select className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" {...register("category", { required: true })}>
                                        <option value="Hair_Makeup">Hair_Makeup</option>
                                        <option value="Eye_Makeup">Eye_Makeup</option>
                                        <option value="Wedding_Makeup">Wedding_Makeup</option>
                                        <option value="Effect_Makeup">Effect_Makeup</option>
                                        <option value="Face_Makeup">Face_Makeup</option>
                                        <option value="Fashion_Makeup">Fashion_Makeup</option>
                                    </select>
                                </div>
                            </div>

                            {/* {Price field} */}
                            <div className="w-full">
                                <div className="label">
                                    <span className="text-[#C9AB81]">Price</span>
                                </div>
                                <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="number" placeholder="$" {...register("price", { required: true })} />

                                {errors.price?.type === "required" && (
                                    <p className="text-red-600">price is required!</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Students Enrolled field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Students Enrolled</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" type="number" placeholder="0" {...register("students_enrolled", { required: true, maxLength: 80 })} />

                            {errors.students_enrolled?.type === "required" && (
                                <p className="text-red-600">students enrolled is required!</p>
                            )}
                        </div>

                        {/* {Ratings field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#C9AB81]">Ratings</span>
                            </label>
                            <input type="number"
                                {...register('ratings', { required: true })}
                                placeholder="0-5" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#C9AB81]" />
                            {errors.ratings && <p className='text-red-600'>ratings is required!.</p>}
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* {Course Details field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#C9AB81]">Course Details</span>
                            </div>

                            <div className="w-full">
                                <textarea className="textarea bg-[#202020] text-[#C9AB81] w-full textarea-md" placeholder="Course Details" {...register("short_description", { required: true })}></textarea>

                                {errors.short_description && <p className='text-red-600'>course details is required!.</p>}
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