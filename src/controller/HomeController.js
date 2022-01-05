import uuid from "react-uuid";
import {useEffect} from "react";

export default function HomeController() {
    /*
    [
        {
            "id":"1"
            "Name":"Bier",
            "count":"1"
        }
    ]
     */
    const STORAGE_KEY = 'shopping_cart'
    let [items, setItems] = localStorage.getItem(STORAGE_KEY) || []

    useEffect(() => {
        console.log("Set")
        localStorage.setItem(STORAGE_KEY, items)
    }, [items])

    return {
        getItems: () => [...items],
        getItemByUUID: (uuid) => items.filter((item) => item.id === uuid)[0].name,

        addItem: (newItem) => {
            // Return if UUID is already in the array, but the name is different
            if (items.filter((item) => item.id === uuid && item.name !== newItem).length > 0) return [...items]

            // Check the current item count
            const itemCount = items.filter((item) => item.name === newItem).length + 1
            // Increase the item count if the item is already in the array
            if (itemCount > 1) {
                items.filter((item) => item.name === newItem).map((item) => item.count++)
            // Add new Item to array
            } else {
                const newItemObj = {id: uuid(), name: newItem, count: itemCount}
                items = [...items, newItemObj]
            }
            return [...items]
        },

        removeItem: (item) => {
            const index = items.indexOf(item)
            if (item.count <= 1) {
                items.splice(index, 1)
            } else {
                items[index].count--
            }
            return [...items]
        },
        changeItem: (uuid, name) => items.filter((item) => item.id === uuid).map((item) => item.name = name)
    }
}