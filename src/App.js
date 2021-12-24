import './App.css';
import React, {useState} from "react";

function Item(props) {
    return (
        <div className={"Item"} itemID={props}>
            <h2>{props}</h2>
            <div className={"ItemActions"}>
                <input type={"button"} value={"Add"} onClick={() => {
                    console.log(props)
                    addItemCount(props.items, props.setItems)
                    return null
                }}/>
                <input type={"button"} value={"Remove"} onClick={() => {
                    return null
                }}/>
            </div>
        </div>
    );
}

function addItemCount(items, setItems) {
    return null
}

function removeItem(items, setItem) {

}

function Items(props) {
    console.log(props.items)
    if (Array.isArray(props.items)) {
        return (props.items.map(Item))
    }
    return null
}

const addItem = (newItem, items, setItems) => {
    console.log(newItem)
    if (newItem.length !== 0 && newItem !== "" && !(newItem in items)) {
        setItems([...items, newItem])
    }
}

function clickHandler(itemInput, items, setItems) {
    addItem(itemInput.current.value, items, setItems)
    itemInput.current.value = "";
}

function App() {
    let itemInput = React.createRef()
    const [items, setItems] = useState([])

    const getItems = () => items;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Einkaufsliste</h1>
                <div className={"Outer"}>
                    <div className={"Inner"}>
                        <Items items={items} setItems={setItems}/>
                    </div>
                </div>
                <div>
                    <input type={"textarea"} ref={itemInput} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            clickHandler(itemInput, items, setItems)
                        }
                        return null;
                    }}/>
                    <input type={"button"} value={"Senden"} onClick={() => clickHandler(itemInput, items, setItems)}/>
                </div>
            </header>
        </div>
    );
}

export default App;
