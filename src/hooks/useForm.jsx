import { useState } from "react";

export function useForm (initialForm, validateForm){
    //Estados de la hook
    const [form, setForm]=useState(initialForm);
    const [errors, setErrors]=useState({});
    const [loading, setLoading]=useState(false);
    const [response, setResponse]=useState(null);

    //Métodos de la hook
    const handleChange= (e)=>{
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            }
        );
    };
    const handleBlur=(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    }
    const handleSubmit= (e)=>{};

    return(
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