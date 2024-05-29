import Header from "./Header";
import { useState} from 'react';
import Info from "./Data";
  
import { SearchBoxApp } from "./SearchBox";
import { FilteredListApp } from "./FilteredList";
 
       const App = () =>{
    
            //Debería tener un estado para almacenar la lista de elementos y
            /// el texto de búsqueda
        const {data}= Info();    
        const [tableST]=useState(data);
        const [search, setSearch]= useState("");

        
    return ( 
        <>
            <Header/> 
            
                    <SearchBoxApp
                    setSearch={setSearch}
                    search={search}
                    />
                    <FilteredListApp
                    search={search}
                    tableST={tableST}
             
            />
       </>
        ) 
    }
export default App