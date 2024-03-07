export default function Table({ users }) {

    return (
        <table>
            <tr>
                <th> Foto</th>
                <th> Nombre</th>
                <th> Apellido</th>
                <th> Pais</th>
                <th> Acción</th>
            </tr>
            {users.map(user => {
                <h2>hola</h2>
                        }
            )}

        </table>
    )
}