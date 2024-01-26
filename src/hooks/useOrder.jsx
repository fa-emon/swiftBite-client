import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useOrder = () => {
    const { user } = useAuth();

    const { refetch, data: order = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/order?email=${user.email}`)
            return response.json();
        }
    })

    return [order, refetch];
};

export default useOrder;