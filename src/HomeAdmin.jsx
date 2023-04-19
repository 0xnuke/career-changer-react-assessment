import { useState } from "react"

const HomeAdmin = ({ handleSave, mockEmployees, handleDelete }) => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [position, setPosition] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleLastname = (event) => {
        setLastname(event.target.value)
    }

    const handlePosition = (event) => {
        setPosition(event.target.value)
    }

    const renderForm =
        (
            <div>
                <h2>Create User Here</h2>
                <input type="text" placeholder="Name" onChange={handleName}></input>
                <input type="text" placeholder="Last Name" onChange={handleLastname}></input>
                <input type="text" placeholder="Position" onChange={handlePosition}></input>
                <button type="submit" onClick={() => handleSave({ name, lastname, position })}>Save</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                    {mockEmployees.map((ele) =>
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.lastname}</td>
                            <td>{ele.position}</td>
                            <td><button onClick={() => handleDelete(ele.id)}>delete</button></td>
                        </tr>
                    )}
                </table>
            </div>
        )

    return (
        <div>
            {renderForm}
        </div>)
}

export default HomeAdmin
