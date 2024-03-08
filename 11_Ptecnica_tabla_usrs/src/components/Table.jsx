export default function Table({ users, handleDelete, filasColor  }) {

    const style1 = {backgroundColor: '#8a8787'}
    const style2 = {backgroundColor: '#525151'}

    return (
        <table>
            <tr>
                <th> <strong>Foto</strong></th>
                <th> Nombre</th>
                <th> Apellido</th>
                <th> Pais</th>
                <th> Acción</th>
            </tr>
            {users.map((user, index) => {
                return (<tr key={user.login.uuid} style= {filasColor ? (index%2===0 ? style1 : style2) : null}> 
                    <td> <img src={user.picture.thumbnail} alt="" /></td>
                    <td> {user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td> {user.location.country}</td>
                    <td> <button id={user.login.uuid} onClick={()=> handleDelete(user.login.uuid)}>Delete</button></td>
                </tr>)
            }
            )}

        </table>
    )
}