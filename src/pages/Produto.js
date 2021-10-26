import React, { useState, useEffect} from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Titulo from '../components/Titulo'
import ProdutoItem from '../components/ProdutoItem';

function Produto(props) {

    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/produtos/${id}`)
            .then((response) => {
                setProduto(response.data)
            })
    }, [])

    return(
        <>
        <ProdutoItem produto={produto}/>
        </>
    )
}

export default Produto