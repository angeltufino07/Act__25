import React from "react";
import "./styles.css";

export const FilteredListApp = ({search,tableST})=>{

    const results = !search ? tableST : tableST.filter((elemento)=> elemento.description.toLowerCase().includes(search.toLocaleLowerCase())); 
    console.log(results);

    return(
        <table className="TableDesi">  
            <th>ID</th>
            <th>Category</th>
            <th>Description</th>
            <tbody>
            
                {results && results.map((descrip)=>(
                    <tr key={descrip.id}>
                        <td>
                            {descrip.id}
                        </td>
                        <td>
                            {descrip.category}
                        </td>
                        <td>
                            {descrip.description}
                        </td>
                    </tr>
                    
                    ))}
            
            </tbody>
        </table>
    )
}
