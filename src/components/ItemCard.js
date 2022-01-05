import {Link} from "react-router-dom";

function ItemCard({item, add, remove}) {
    const name = `${item[1].count}x ${item[0]}`
    return (
        <div className={"Item"} itemID={item}>
            <h2>{name}</h2>
            <div className={"ItemActions"}>
                <input type={"button"} value={"Add"} onClick={() => {
                    add(item)
                }}/>
                <input type={"button"} value={"Remove"} onClick={() => {
                    remove(item)
                }}/>
                <Link to={`/change/${item[0]}`}>
                    <input type={"button"} value={"Change"}/>
                </Link>
            </div>
        </div>
    );
}

export default ItemCard