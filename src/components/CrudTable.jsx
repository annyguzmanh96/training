/*Componente que se refiere a la tabla con la base datos, en donde en el tbody, si la longitud de los datos es igual a cero, entonces <tr><td colSpan={3}>notData</td></tr>
sino, se recorre la dataUsers (base de batos) pasada como atributo desde su componente padre CrudApp y se van creando las filas de la tabla con cada
objeto del arreglo y se envía como argumento la key (que toda lista debe tener en react) el user, el setDataToEdit y el DeleteData que es la info
que se necesita manipular o poseer para cada columna de la tabla acorde al esquema del Crud Planteado
*/
import { CrudTableRow } from "./CrudTableRow";
import styles from "./CrudTable.module.css";

export function CrudTable({dataUsers,setDataToEdit,deleteData}){


    return(
        <table>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Acciones </th>
                </tr>
            </thead>
            <tbody>
                {dataUsers.length===0? <tr><td colSpan={3}>notData</td></tr>:
                 dataUsers.map( user=>
                    <CrudTableRow  
                        key={user.id} 
                        user={user} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData} 
                    />
                )
                }
            </tbody>
        </table>
    )

}