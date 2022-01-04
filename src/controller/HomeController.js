import uuid from "react-uuid";

export default function homeController() {
    /*
    [
        {
            "id":"1"
            "Name":"Bier",
            "count":"1"
        }
    ]
     */
    let items = []

    return {
        getItems: () => [...items],
        getItemByUUID: (uuid) => items.filter((item) => item.id === uuid)[0].name,

        addItem: (newItem) => {
            if (items.filter((item) => item.id === uuid && item.name !== newItem).length > 0) return [...items]

            const itemCount = items.filter((item) => item.name === newItem).length + 1
            if (itemCount > 1) {
                items.filter((item) => item.name === newItem).map((item) => item.count++)
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