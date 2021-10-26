import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Titulo from '../components/Titulo'
import ListaProdutos from '../components/ListaProdutos'

function Home(props) {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
        .then((response)=> {    
            setProdutos(response.data)
        })
        .catch((err)=> {
            console.error("Ops! ocorreu um erro" + err)
        })
    }, [])

    return(
        <>
        <Titulo texto="Home"/>

        <ListaProdutos produtos={produtos}/>
        </>
    )
}

export default Home