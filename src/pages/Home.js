import Items from "../components/Items";
import React, {useState} from "react";
import '../styles/Home.scss';

export default function Home(props) {
    const {controller} = props
    const [items, setItems] = useState(controller.getItems)

    const addItem = (event) => {
        if (event.target) {
            if (event.target.elements[0].value.length > 100) {
                alert("Maximum 100 characters allowed")
            } else {
                setItems(controller.addItem(event.target.elements[0].value))
            }
            event.target.elements[0].value = ""
            event.preventDefault()
        } else {
            setItems(controller.addItem(event[0]))
        }
    }

    const removeItem = (item) => {
        setItems(controller.removeItem(item[0]))
    }

    return (
        <div className={"Home"}>
            <h1>Einkaufsliste</h1>
            <form onSubmit={addItem}>
                <input type={"textarea"}/>
                <input type={"submit"} value={"Senden"}/>
            </form>
            <div className={"Outer"}>
                <div className={"Inner"}>
                    <Items items={items} add={addItem} remove={removeItem}/>
                </div>
            </div>
        </div>
    )
}