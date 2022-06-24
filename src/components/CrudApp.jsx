//
/*Componente que contiene los usuarios iniciales, todos lo métodos a implementar en los componentes que 
lo conforman, pasándolos como atributo.
Los métodos son: createData, updateData, deleteData.
Los compoenetes que la conforman son: crudeForm y crudTable
Posee 2 estados internos: data (base de datos) y dataToEdit(iniciando en null)
*/
import { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialUsers=[
    {id:1,
     name:'Sofy',
     age: 13,
    },
    {id:2,
     name:'Angie',
     age: 26,
    },
    {id:3,
     name:'Mabel',
     age: 70,
    },
    {id:4,
     name:'Lina',
     age: 55,
    },
    {id:5,
     name:'Ana',
     age: 26,
    },
    {id:7,
     name:'Juan Carlos',
     age: 60,
    },
]; //arreglo de objetos con información de users inciales

export function CrudApp(){
    const [data, setData]=useState(initialUsers); // Estado para base de datos
    const [dataToEdit,setDataToEdit]=useState(null); //estado para datos a editar
    

    //Métodos del crudApp:

    //CreateData: para Crear un nuevo registro de usuario
    const createData= (newData)=>{ //Debe recibir como argumento la nueva data a registrar
        newData.id=Date.now() //Id=date de ahora mismo para lograr id´s únicos porque el form sólo recibe
                              //los datos de Name y Age, el id debe generarse y ser único
        setData( //usamos la funcion seteadora de la base de datos
        [...data,       //Como es un arreglo se encierra entre corchetes [] y se escribe ...data para indicar que se 
                        //traiga la info que ya viene en data y agregarle la newData (Que sería la info del nuevo usario a registrar)
            newData,    
        ])
        //console.log(newData); [Controlando datos]
    };
    //console.log(data); [Controlando datos]

    //updateData: Para actualizar un usuario que ya se encuentra en la base de datos registrado
    const updateData= (dataToChange)=>{ //Recibe toda la data del usuario a actualizar/Editar
        let newData=  initialUsers.map(user=> //newData será el nuevo arreglo de objetos de usuarios con el usuario en cuestión ya editado
            user.id===dataToChange.id? dataToChange : user); //para modifcar la info del uasario que se desea editar/actualizar, en donde si el id del usuario examinado en el momento en el recorrido del .map tiene un id igual al de la info del usuario a editar, se le asigna la info pasada por argumento al usuario en cuestión, actualizando de esta manera la info.
        setData(newData); //Se setea la base de datos con el nuevo arreglo obtenido del .map (newData)
    };

    const deleteData=(id, name)=>{ //Recibe como argumento el id y el name de un user en específico
        let isDelete= window.confirm('Estás seguro(a) de eliminar al usuario '+name+' con id: ' +id); //Para confirmar (si-true o no-false) si la persona esta segura de eliminar dicho usuario
        if(isDelete){ //Si isDelete es true...
            let newData=  data.filter(user=>user.id!==id); //Se genera un nuevo arreglo (newData) con todos los usuarios que cumplan con la condición del filtro, es decir que el user en cuestión del recorrido no tenga por id el id ingresado por argumento (del usurario que sí se desea eliminar)
            setData(newData); //Se setea la base de datos con el nuevo arreglo obtenido del .filter (newData)
        }
    };


    return(
        <div>
            <h2>CRUD APP-PERSONAS/USUARIOS</h2>
            <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                dataUsers={data}  
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
 

    )
}