import { ImSpinner } from 'react-icons/im';
import styles from './Spinner.module.css';

export function Spinner(){

    return (
        <div className={styles.allContainer}>
            <ImSpinner className={styles.spinner} size='70'/>
            <p>Enviando Formulario...</p>
        </div>
    )
}