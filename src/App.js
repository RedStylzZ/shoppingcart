import './App.css';
import React, {useState} from "react";
import Items from './Items.js'

function App() {
    let itemInput = React.createRef()
    const [items, setItems] = useState([])

    const clickHandler = () => {
        if (itemInput.current.value) {
            setItems([...items, itemInput.current.value])
            itemInput.current.value = "";
        }
    }

    const removeItem = (item) => {
        console.log(item)
        setItems(items.filter((i) => i !== item))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Einkaufsliste</h1>
                <div>
                    <input type={"textarea"} ref={itemInput} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            clickHandler()
                        }
                        return null;
                    }}/>
                    <input type={"button"} value={"Senden"} onClick={() => clickHandler()}/>
                </div>
                <div className={"Outer"}>
                    <div className={"Inner"}>
                        <Items items={items} remove={removeItem}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
