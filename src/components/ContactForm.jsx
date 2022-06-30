import { useForm } from "../hooks/useForm";
import styles from './ContactForm.module.css';
import { Spinner } from "./Spinner";

const initialForm={ //Forma-Estuctura incial del Form-El atributo "name" de los elementos dispuestos en el form deben tener el mismo nombre que se les defina en este objeto (estrictamente deben coincidir)
    name:'',
    email:'',
    subject:'',
    comments:'',
   
};

const validationsForm= (form)=>{ //Se define la función validateForm, recibiendo como argumento el form
    let errors={}; //Se define un objeto errors que servirá de contenedor de errores para cada uno de los campos del form y de esta forma tenga un comportamiento controlado
    
    //Definición de las regular expressions
    let regexName= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Regex para el campo nombre 
    let regexEmail= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //Regex para el campo email
    let regexComments= /^.{1,255}$/; //Regex para el campo comments

    //Validaciones Name
    if(!form.name.trim()){ // Si no hay nada en el campo "name" de form...[el .trim() elimina los espacios en blanco para evitar tomar un simple espacio como cumplimiento de tener algo en el input]
        errors.name='* El campo Nombre es Requerido'; // añadiendo un tipo de error al objeto errors para el input 'name'
    }else if(!regexName.test(form.name.trim())){ //Sino, si (si ya existe algo en el input) se evalúa (test) lo que hay en el form.name y si este es diferente de la expresion regular definida para evaluar el campo, se añade otro tipo de error.
        errors.name='* El campo Nombre sólo acepta letras y espacios en blanco';
    }

    //Validaciones email-(misma lódgica en todas las validaciones)
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

    return errors; //Se retorna el objeto con los errores acorde a las validaciones definidas

};

export function ContactForm(){ //Componente ContactForm
    const  {form, 
            errors, 
            loading, 
            response, 
            handleChange, 
            handleBlur, 
            handleSubmit,
            }   
            = useForm(initialForm, validationsForm); // se destructura la hook personalizada que se hizo, 'useForm' para hacer uso de ella y con todos sus elementos lograr renderizar nuevamente el componente
            
    return(
        <div className={styles.allContainer}>
             <h2>FORMULARIO DE CONTACTO</h2> {/*Titulo */}
            <form onSubmit={handleSubmit}> {/*Controlando el Submit*/}
                <div className={styles.formContainer}>
                    {/*Input de name*/}
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Escribe tu nombre aquí' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.name}
                        required
                    />

                    {errors.name && <p className={styles.errors}>{errors.name}</p>} {/*true && true, ejecuta el último true...Existe errors.name...un párrafo con todos los errors.name*/}


                    {/*Misma estructura y lógica para todos los demás campos del form*/}
                    <input  
                        type='email' 
                        name='email' 
                        placeholder='Escribe tu email aquí' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.email}
                        required
                    />
                    
                    {errors.email && <p className={styles.errors}>{errors.email}</p>}

                    <input 
                        type='text' 
                        name='subject' 
                        placeholder='Asunto a tratar' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={form.subject}
                        required
                    />

                    {errors.subject && <p className={styles.errors}>{errors.subject}</p>}

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

                    {errors.comments && <p className={styles.errors}>{errors.comments}</p>}

                    <button type='submit'>Enviar</button>
                </div>

                {loading && <div> <Spinner /></div>}
            </form>

        </div>



    )
}