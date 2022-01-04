import {useParams, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function ChangeItem(props) {
    const {controller} = props
    const params = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState(controller.getItemByUUID(params.uuid))

    const changeItem = (event) => {
        controller.changeItem(params.uuid, event.target.elements[0].value)
        setName(controller.getItemByUUID(params.uuid))
        event.preventDefault()
        navigate("/")
    }

    return (
        <div className={"ChangePage"}>
            <h1>{name}</h1>
            <form onSubmit={changeItem}>
                <input type="text"/>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    )
}