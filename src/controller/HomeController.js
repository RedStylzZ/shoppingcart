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
    const re = new RegExp(/\s/g)
    let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

    const setItems = (value) => {
        items = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }

    return {
        getItems: () => items,
        getItemByUUID: (uuid) => items.find((item) => item.id === uuid)[0].name,

        addItem: (newItem) => {
            if (!re.test(newItem) && newItem) {
                const temp = {...items}
                temp[newItem] = temp[newItem] ? {count: temp[newItem].count + 1} : {count: 1}
                setItems(temp)
            }
            return {...items}
        },

        removeItem: (item) => {
            const test = {...items}
            test[item].count <= 1 ? delete test[item] : test[item].count--
            setItems(test)
            return {...items}
        },
        changeItem: (oldName, newName) => {
            if (newName && !newName.match(re)) {
                const test = {...items}
                test[newName] = test[oldName]
                delete test[oldName]
                setItems(test)
            }
            return {...items}
        }
    };

}