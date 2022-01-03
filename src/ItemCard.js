function ItemCard({item, remove}) {
    console.log(item)
    return (
        <div className={"Item"} itemID={item}>
            <h2>{item}</h2>
            <div className={"ItemActions"}>
                <input type={"button"} value={"Add"} onClick={() => {
                    console.log("Add:", item)
                }}/>
                <input type={"button"} value={"Remove"} onClick={() => {
                    remove(item)
                }}/>
            </div>
        </div>
    );
}

export default ItemCard