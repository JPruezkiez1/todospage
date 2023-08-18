import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            try {
                parsedItem = JSON.parse(localStorageItem);
            } catch (error) {
                console.error(`Error parsing ${itemName} from localStorage:`, error);
            }

            if (parsedItem) {
                // Simulate loading delay using setTimeout
                setTimeout(() => {
                    setItem(parsedItem);
                    setLoading(false);
                }, 2000); // Adjust the delay time as needed
            } else {
                setLoading(false);
            }

        } catch (error) {
            setError(true);
        }
    }, [itemName]);

    const saveItem = newItem => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, saveItem, loading, error };
}

export { useLocalStorage };