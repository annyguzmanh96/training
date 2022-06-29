import { SearchTableRow } from "./SearchTableRow";

export function SearchTable({users}){
    
    return(
        <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>Name</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>
                        <SearchTableRow user={user} key={user.id} />
                    )}

                </tbody>

            </table>
    )
}