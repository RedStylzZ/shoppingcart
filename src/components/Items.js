import ItemCard from "./ItemCard";

export default function Items(props) {
    if (JSON.stringify(props.items) !== "{}") {
        return Object.entries(props.items).map((item) => (<ItemCard item={item} key={item} add={props.add} remove={props.remove}/>))
    }
    return null
}