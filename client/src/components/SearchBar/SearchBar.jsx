import React from 'react'
import "./SearchBar.css"
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import * as actions from '../../redux/actions'

export default function SearchBar({handleSort, handleAttack, handleType, handleCreated}){

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.allTypes)

    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        console.log(name)
        setName(e.target.value)
    }

    function handleSubmit(e){
        dispatch(actions.getPokemonByName(name))   
        setName("")        
    }
    
    return (
        
        <div className='s-color s-div s-column'>
            <input
             type="text"
             value={name}
             placeholder='buscar...'
             onChange={(e) => handleInputChange(e)}
             className="s-input"
            />
            <button className='s-bt' type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>      

       
        <div className='s-column s-order'>
                             

            
        
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
        
     </div>

    )
}