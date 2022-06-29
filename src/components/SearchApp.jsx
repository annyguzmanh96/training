import { useEffect, useState } from "react"
import { SearchTable } from "./SearchTable";
import styles from './SearchApp.module.css'

const initialSearch={
    valueSearch: '',
}

export function SearchApp(){
    //Setear los Hooks useState:
    const [users, setUsers]= useState([]);
    const [search, setSearch]= useState(initialSearch);

    //Efecto secundario para traer los datos de la API:

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(usersData => setUsers(usersData));
    },[]);

    //Función de búsqueda-Manejando la entrada del input:

    const handleChange= (e)=>{
        setSearch({
            ...search,
            [e.target.name]:e.target.value,

        }
        )
    }

    //Método de filtrado:

    let resultsUsers=[];
    if(!search){
        resultsUsers=users;
    }else{
        resultsUsers= users.filter((user)=>
                user.name.toLowerCase().includes(search.valueSearch.toLocaleLowerCase())
        )
    }

    return( //Renderización de componente
        <div className={styles.allContainer}>
            <h2>SEARCH-APP</h2>
            <input type='text' name='valueSearch' placeholder='Search by Name...' className='form-control' value={search.valueSearch} onChange={handleChange}/>
            <SearchTable users={resultsUsers}/>
        </div>
    )
}