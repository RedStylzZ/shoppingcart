import ItemCard from "./ItemCard";

function Items(props) {
    console.log(props.items)
    if (Array.isArray(props.items)) {
        return props.items.map((item, index) =>
            (<ItemCard item={item} key={index} remove={props.remove}/>)
        )
    }
    return null
}

export default Items