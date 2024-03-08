export default function Table({ users, handleDelete, filasColor }) {

    const style1 = { backgroundColor: 'rgba(53, 54, 54, 0.6)' }
    const style2 = { backgroundColor: 'rgb(79, 81, 81,0.8)' }

    return (
        <table>
            <thead>
                <tr>
                    <th> <strong>Foto</strong></th>
                    <th> Nombre</th>
                    <th> Apellido</th>
                    <th> Pais</th>
                    <th> Acción</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return (<tr key={user.login.uuid} style={filasColor ? (index % 2 === 0 ? style1 : style2) : null}>
                        <td> <img src={user.picture.thumbnail} alt="" /></td>
                        <td> {user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td> {user.location.country}</td>
                        <td>
                            <button id={user.login.uuid}
                                onClick={() => handleDelete(user.login.uuid)}>
                                Delete
                            </button>
                        </td>
                    </tr>)
                }
                )}
            </tbody>

        </table>
    )
}