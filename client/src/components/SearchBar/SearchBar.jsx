import React from 'react'
import "./SearchBar.css"
import {useSelector} from 'react-redux'

export default function SearchBar({handleSort, handleAttack, handleType, handleCreated}){
 
    const allTypes = useSelector(state => state.allTypes)
   
    return (
        
        <div className='c-div'>
      
        <select className='s-bt'  onChange={(e) => handleType(e)}>
            <option value="all">types</option>  
        {
            allTypes && allTypes.map(t => {
                return(
                    <option                   
                    value={t.name} 
                    key={t.id}>
                    {t.name}
                    </option>
                )
            })
        }
        </select>
        
        <select className='s-bt' onChange={(e) => handleCreated(e)}>                      
        <option value='all'>all</option>
        <option value='created'>created</option>
        </select>
        <select className='s-bt' onClick={(e) => handleSort(e)}>          
            <option value='asc'>Ascendente</option>
            <option value='desc'>Descendente</option>
        </select>
        <select className='s-bt' onClick={(e) => handleAttack(e)}>
            <option value='biggest'>biggest attack</option>
            <option value='minor'>minor attack</option>              
        </select>
        </div>
        

    )
}