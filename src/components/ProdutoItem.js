import React from "react";
import { Link } from "react-router-dom";

export default function ProdutoItem(props) {
    const produto = props.produto || []

    return (
        <>
            <h1>{produto.nome}</h1>
            {
            <div>
                <h2>{produto.id} {produto.nome} R${produto.preco}</h2>
                <Link to="/">Voltar para home</Link>
            </div>
            }   
        
        </>
    )
}