import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/slices/userSlice';

export const useUserData = (url) => {

    const dispatch = useDispatch();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isDataError, setIsDataError] = useState(false);

    const fetchData = async (token) => {

        setIsDataLoading(true);
        setIsDataError(false);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Fetch failed');
            }
            const result = await response.json();
            if (result.body) {
                dispatch(setUser({ firstName: result.body.firstName, lastName: result.body.lastName }));
            }
            return result;
        } catch (error) {
            setIsDataError(true);
            console.error(error);
        } finally {
            setIsDataLoading(false);
        }
    };

    return { fetchData, isDataError, isDataLoading };
};
