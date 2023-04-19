const HomeUser = ({ mockEmployees }) => {
    const renderForm = (
        <table>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
            {mockEmployees.map((ele) =>
                <tr key={ele.id}>
                    <td>{ele.name}</td>
                    <td>{ele.lastname}</td>
                    <td>{ele.position}</td>
                </tr>
            )}
        </table>
    )
    
    return (
        <div>
            {renderForm}
        </div>
    )
}

export default HomeUser