import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../../redux/slices/authSlice';

export const useLogin = (url) => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isNetworkError, setIsNetworkError] = useState(false);

    const loginUser = async (formData) => {
        
        setIsLoading(true);
        setIsError(false);
        setIsNetworkError(false);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('Incorrect credentials');
                } else {
                    throw new Error(`Server error: ${response.status}`);
                }
            }
            const data = await response.json();
            dispatch(setToken(data.body.token));
            return { success: true, data };
        } catch (error) {
            if (error.message === 'Incorrect credentials') {
                setIsError(true);
            } else {
                setIsNetworkError(true);
            }
            console.error('Error:', error.message);
            return { success: false, data: null };
        } finally {
            setIsLoading(false);
        }        
    };

    return { loginUser, isError, isNetworkError, isLoading };
};