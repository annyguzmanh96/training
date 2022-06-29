/*Hook personalizada para crear el formulario de conacto, que contiene toda la lógica del form...El estado form
el estado de los errores, los métodos: handleChange, handleBlur y handleSubmit y retorna  todos estos
*/
import { useState } from "react";

export function useForm (initialForm, validateForm){
    //Estados de la hook
    const [form, setForm]=useState(initialForm); //Controlando el form
    const [errors, setErrors]=useState({}); // Controlando los  errores
    const [loading, setLoading]=useState(false); //Controlando la carga de un spinner
    const [response, setResponse]=useState(null); //Envío de respuesta

    //Métodos de la hook
    const handleChange= (e)=>{ //Controlando los cambios efectuados en el form-Recibe un evento
        setForm( //Se hace uso de la función seteadora-actualizadora del form
            { //Como el form es un objeto...
                ...form, //Se trae lo que ya viene en el form
                [e.target.name]: e.target.value, //se le añade lo que se está tecleando en el momento
            } //Como el form es un objeto...
        );
    };
    const handleBlur=(e)=>{ //Controlando los cambios efectuados cuando el elemento pierda el foco
        setErrors(validateForm(form)); //se setea los errors haciendo uso de la función validateForm (que contiene todas las validaciones del form y va llenando un objeto errors si no se cumplen)
    }
    const handleSubmit= (e)=>{ //Controlando el envío del form
        e.preventDefault(); //Trabajando una SPA
        setErrors(validateForm(form)); //Validando objeto erros

        if(Object.keys(errors).length===0){ //Si el objeto errors está vacío
            alert('Enviando Formulario'); //se envía el form
        }else{ //Si no...
            return; //No se retorna nada (no se envía form)
        }

    }; 

    return( //Se retornan los 4 estados y los 3 métodos
        {   
            form, 
            errors, 
            loading, 
            response, 
            handleChange, 
            handleBlur, 
            handleSubmit,
        }
    )
   
}