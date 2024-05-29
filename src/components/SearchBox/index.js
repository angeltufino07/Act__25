import React from "react";
import '../SearchBox/styles.css';


export const SearchBoxApp =({search,setSearch})=>{

    const handleChange = (e) => {
        setSearch(e.target.value)   
       }

return (         
    <div className='InputContainer'>
            <input
            className="dataI"
            value={search}
            placeholder="Search by Description"
            onChange={handleChange}
            />
    </div>)

}
