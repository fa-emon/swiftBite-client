import useAuth from "../../../hooks/useAuth";


const ShowHistory = ({ item, index }) => {
    const { user } = useAuth();
    const { transactionId, status, price, date } = item;

    return (
        <>
            <tr className='text-[#C9AB81]'>
                <td className="heading-font tracking-wide">
                    {index + 1}
                </td>
                <td className="heading-font tracking-wide">
                    {user?.email}
                </td>
                <td className='heading-font'>
                    <span className="text-green-600">{transactionId}</span>
                </td>
                <td className='heading-font'>
                    <span className="text-red-600">{status}</span>
                </td>
                <td className='heading-font'>
                    ${price}
                </td>
                <td className='heading-font'>
                    {date}
                </td>
            </tr>
        </>
    );
};

export default ShowHistory;