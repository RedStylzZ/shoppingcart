import {useParams, useNavigate} from "react-router-dom";

export default function ChangeItem({controller}) {
    const params = useParams()
    const navigate = useNavigate()
    const name = params.name

    const changeItem = (event) => {
        controller.changeItem(params.name, event.target.elements[0].value)
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