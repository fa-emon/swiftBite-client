import useMenu from "../../../hooks/useMenu";
import DisplayManageItems from "./DisplayManageItems";


const ManageItems = () => {
    const [menu] = useMenu();

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '20vh', width: '20vh', objectFit: 'contain' }} src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png" alt="" />
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">MANAGE</span> ALL ITEMS : {menu.length}</p> 
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

            <div className="overflow-x-auto text-white w-full rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#C9AB81]">
                        <tr>
                            <th>IMAGE</th>
                            <th>FOOD NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map(items => <DisplayManageItems
                                key={items._id}
                                items={items}>
                            </DisplayManageItems>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageItems;