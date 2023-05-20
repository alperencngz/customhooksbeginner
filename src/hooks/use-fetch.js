import { useState } from "react";

const useFecth = async (action, taskText = "") => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    try {

        if (action = "GET") {
            const response = await fetch(
                'https://customhooks-f2f4e-default-rtdb.firebaseio.com/tasks.json'
            );
        }

        if (action = "POST") {
            const response = await fetch(
                'https://customhooks-f2f4e-default-rtdb.firebaseio.com/tasks.json',
                {
                    method: 'POST',
                    body: JSON.stringify({ text: taskText }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);

    return [data, isLoading, error]
};

export default useFecth;