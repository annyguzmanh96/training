/*Componente que se refiere al contenido y forma de cada fila de la CrudTable, en donde se pasa para el renglón (tr) 4 td (table data) uno con el 
id del usuario , otro referente al name, otro referente a la age y otro con los botenes de editar con su OnClick se setea dataToEdit al valor de user 
y el de eliminar con su Onclick ejecuta el método deleteData pasando como argumento el id del user y su name.
El componente por destructuring recibe los atributos user, setDataToEdit y deleteData de su componente padre CrudTable*/


export function CrudTableRow({user,setDataToEdit,deleteData}){
    return(
        <tr>
            <td> {user.id}</td>
            <td> {user.name}</td>
            <td> {user.age} </td>
            <td>
                <button onClick={()=>setDataToEdit(user)}>Editar</button>
                <button onClick={()=>deleteData(user.id,user.name)}>Eliminar</button>
            </td>
        </tr>
    )
}