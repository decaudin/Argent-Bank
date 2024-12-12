import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/slices/userSlice';

export const useUpdateUserData = (url) => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const updateUserData = async (token, updatedData) => {

        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error('Fetch failed');
            }
            const result = await response.json();
            if (result.body) {
                dispatch(setUser({ firstName: result.body.firstName, lastName: result.body.lastName,}));
            }
            return result;
        } catch (error) {
            setIsError(true);
            console.error('Error during fetch:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { updateUserData, isError, isLoading };
};