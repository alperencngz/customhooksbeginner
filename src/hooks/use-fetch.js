import { useState } from "react";

const useFetch = async (action, taskText = "") => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    setIsLoading(true);
    setError(null);
    try {

        const response = "";

        if (action = "GET") {
            response = await fetch(
                'https://customhooks-f2f4e-default-rtdb.firebaseio.com/tasks.json'
            );
        }

        if (action = "POST") {
            response = await fetch(
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

        data = await response.json();

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);

    return [this.data, isLoading, error]
};

export default useFetch;