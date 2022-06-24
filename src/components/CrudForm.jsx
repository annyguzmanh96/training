import { useEffect, useState } from "react";

const initialFormUsers={ //Definiendo el estado inicial del form users (id en null, name y age como ''), esto porque inicalmente no debe tener info pero se debe tener la estructura del form para luego utilizarla
    id: null,
    name:'',
    age:'',
}

export function CrudForm({createData,updateData,dataToEdit,setDataToEdit}){ //destructuring de los atributos pasados por medio del componente padre
 
    const [formUsers, setFormUsers]=useState(initialFormUsers); //Definiendo estado interno del componente formUsers como el initialFormUsers establecido antes


    const handleChange= (e)=>{ //Función handleCange Recibe un evento...
        setFormUsers({ //Setea el form de los users
            ...formUsers, //como es un objeto se escribe entre llaves {} ...formUsers para que traiga consigo toda la info ahí guardada hasta el momento....
            [e.target.name]:e.target.value, //Y los valores actuales (cada tap al teclado) en los input definidos con atributos name, tomen el valor actual tecleado sumándoselo a lo que viene del ...formUsers
        });
    };

    const handleSubmit= (e)=>{ // Función HandleSubmit, recibe un evento y ...
        e.preventDefault(); //método para prevenir que en cada submit se recargue la página (Comportamiento por defecto de un Submit)

        if(!formUsers.name || !formUsers.age){ //Condicional para comprobar si todos los datos del form están completos
            return (alert('Datos Incompletos')); //Si no están los datos completos se generá una alerta de "Datos Incompletos" para que el usuario termine de llenar el form
        }

        if(formUsers.id===null){ //Si formUsers.id es null (estado inicial establecido del id)...
            createData(formUsers); //Quiere decir que el usuario aún no existe en la base de datosy por ende se busca es crear un nuevo registro de usuario con la información 
        }else{ //Es decir, si existe un id en la info pasado por el form...
            updateData(formUsers); //Se actualiza el user con la info pasada por argumento al método updateData
        }
        
    };

    const handleReset= (e)=>{ //Función handleReset Recibe un evento...(el Onclick)
        setFormUsers(initialFormUsers); //se setean los campos del form a su forma inicial establecida (sin valores)
        setDataToEdit(null); //Y se setea la dataToEdit en null
    }


    useEffect(()=>{ //Se define un efecto secundario para controlar el form dependiendo de si existe un dataToEdit que básicamente es controlado por el onClick del botón editar establecido en cada fila por usuario
    
        if(dataToEdit){ //Si existe una dataToEdit...
            setFormUsers(dataToEdit); //Setear formUsers (sus campos) con la dataToEdit
        }else{ //Si no existe una dataToEdit...
            setFormUsers(initialFormUsers); //Setear el form en su contenido inicial
        }
    },[dataToEdit]); //El efecto seccundario se ejecutará, dependiendo de el dataToEdit


    return(
        <div>
            <h3>{dataToEdit? '¡EDITANDO INFORMACIÓN!':'AGREGAR'}</h3>  {/*Un h3 renderizado condicinal, si existe dataToEdit se renderiza "Editando, si no, "Agregar" */}
                <form onSubmit={handleSubmit}> {/*form donde el submit depende de la función handleSubmit */}
                    <input type='text' name='name' placeholder='write the name here...' value={formUsers.name}
                     onChange={handleChange}  /> {/*Input para el name*/}
                    <input type='number' name='age' placeholder='write the age here...' value={formUsers.age} 
                     onChange={handleChange}/> {/*Input para la age*/}
                    <button type='submit' value='enviar'>Agregar</button>{/*Botón Agregar*/}
                    <button type='reset' value='limpiar' onClick={handleReset}>Reset</button>{/*Boton Reset*/}
                </form>
        </div>
    )
}