import { useState } from 'react';

export const useLogin = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const loginUser = async (formData) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            return { success : true, data }; 
        } catch (error) {
            setIsError(true);
            console.log(error);
            return { success : false, data: null }
        } finally {
            setIsLoading(false);
        }
    };

    return { loginUser, isError, isLoading };
};