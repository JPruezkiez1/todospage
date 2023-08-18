import React from "react";


function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    try {
        parsedItem = JSON.parse(localStorageItem);
    } catch (error) {
        console.error(`Error parsing ${itemName} from localStorage:`, error);
    }

    const [item, setItem] = React.useState(parsedItem || initialValue);

    const saveItem = newItem => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
}

export { useLocalStorage }