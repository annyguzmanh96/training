import { useForm } from "../hooks/useForm";
import styles from './ContactForm.module.css';

const initialForm={
    name:'',
    email:'',
    subject:'',
    comments:'',
   
};

const validationsForm= (form)=>{
    let errors={};
    //Definición de las regular expressions
    let regexName= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments= /^.{1,255}$/;

    //Validaciones Name
    if(!form.name.trim()){
        errors.name='* El campo Nombre es Requerido';
    }else if(!regexName.test(form.name.trim())){
        errors.name='* El campo Nombre sólo acepta letras y espacios en blanco';
    }

    //Validaciones email
    if(!form.email.trim()){
        errors.email='* El campo Email es Requerido';
    }else if(!regexEmail.test(form.email.trim())){
        errors.email='* El campo email sólo acepta correos electrónicos';
    }

    //Validación subject
    if(!form.subject.trim()){
        errors.subject='* El campo subject es Requerido';
    }

    //Validaciones comments
    if(!form.comments.trim()){
        errors.comments='* El campo comentarios es Requerido';
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments='* El campo sólo acepta 255 caracteres';
    }

    return errors;

};

export function ContactForm(){
    const  {form, 
            errors, 
            loading, 
            response, 
            handleChange, 
            handleBlur, 
            handleSubmit,
            }   
            = useForm(initialForm, validationsForm);
    return(
        <div className={styles.allContainer}>
            <h2>FORMULARIO DE CONTACTO</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Escribe tu nombre aquí' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.name}
                        required
                    />

                    {errors.name && <p>{errors.name}</p>}

                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Escribe tu email aquí' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.email}
                        required
                    />
                    
                    {errors.email && <p>{errors.email}</p>}

                    <input 
                        type='text' 
                        name='subject' 
                        placeholder='Asunto a tratar' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.subject}
                        required
                    />

                    {errors.subject && <p>{errors.subject}</p>}

                    <textarea 
                        name='comments' 
                        cols='50' 
                        rows='5' 
                        placeholder='Escribe tus comentarios...' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.comments}
                        required
                    ></textarea>

                    {errors.comments && <p>{errors.comments}</p>}

                    <button type='submit'>Enviar</button>
                </div>
            </form>

        </div>



    )
}