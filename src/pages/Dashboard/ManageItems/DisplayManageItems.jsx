import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { LuPenSquare } from "react-icons/lu";
import { MdDelete } from 'react-icons/md';


const DisplayManageItems = ({ items }) => {
    const { name, image, price, _id } = items;

    const [axiosSecure] = useAxiosSecure();
    const [, , refetch] = useMenu();

    const handleUpdate = () => {

    }

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            refetch(); // for refresh
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr className='text-[#C9AB81]'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-md w-28 h-28">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="heading-font tracking-wide">
                {name}
            </td>
            <td className='heading-font'>
                ${price}
            </td>
            <th>
                <LuPenSquare onClick={() => handleUpdate(_id)} className='text-xl hover:text-green-600'></LuPenSquare>
            </th>
            <th>
                <MdDelete onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600'></MdDelete>
            </th>
        </tr>
    );
};

export default DisplayManageItems;