import ItemCard from "./ItemCard";

export default function Items(props) {
    if (Array.isArray(props.items)) {
        return props.items.map((item) =>
            (<ItemCard item={item} key={item.id} add={props.add} remove={props.remove}/>)
        )
    }
    return null
}