import React, { useState } from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../../redux/actions'
import './Home.css'
import Paginated from '../Paginated/Paginated';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar'

export default function Home(){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemons)
    const [currentPage, SetCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)

    const [render, setRender] = useState("")


    const paginated = (pageNumber) => {
        SetCurrentPage(pageNumber)
    }

    const previus = (pageNumbers) => {
        if(currentPage === pageNumbers.length - pageNumbers.length + 1){
           return SetCurrentPage(pageNumbers.length)
        }
        SetCurrentPage(currentPage - 1)
    }

    const next = (pageNumbers) => {      
        if(currentPage === pageNumbers.length){
           return SetCurrentPage(pageNumbers.length - pageNumbers.length + 1)
        }
        SetCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        dispatch(actions.getAllPokemons())
    },[dispatch])

    useEffect(() => {
        dispatch(actions.getAllTypes())
    },[dispatch])

    function handleSort(e){
        e.preventDefault()
        dispatch(actions.filterByOrder(e.target.value))
        setRender(e.target.value)
    }

    function handleAttack(e){
        e.preventDefault()
        dispatch(actions.filterByAttack(e.target.value))
        setRender(e.target.value)
    }

    function handleType(e){
        e.preventDefault()
        SetCurrentPage(1)
        dispatch(actions.filterByType(e.target.value))
        setRender(e.target.value)
    }
    
    function handleCreated(e){
        SetCurrentPage(1)
        dispatch(actions.filterByCreated(e.target.value))
        setRender(e.target.value)
    }

    return(
       <div className="home-sc-p">
                      
            <SearchBar 
            handleSort={handleSort}
            handleAttack={handleAttack}
            handleType={handleType}
            handleCreated={handleCreated}
            ></SearchBar>{        
            currentPokemons.length?
            <div>
            <Cards currentPokemons={currentPokemons}/>         
            
            <Paginated
            pokemonPerPage = {pokemonPerPage}
            allPokemons = {allPokemons.length}
            paginated = {paginated}
            previus = {previus}
            next = {next}
            ></Paginated>
    
            </div> : <p className="div-carga">Loading Pokemóns...</p>}

                     
        </div>
    )
}