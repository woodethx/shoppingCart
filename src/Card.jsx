import { useEffect, useState } from "react";

function Card(props){
    const [imgSrc, setImgSrc] = useState(null);
    const [name, setName] = useState(null);
    const [desc, setDesc] = useState(null);
    const [price, setPrice] = useState(null);

    const id=props.id;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>{
            const prod = json[id];
            setImgSrc(prod.image);
            setName(prod.title);
            setDesc(prod.description);
            setPrice(prod.price);
        })
    },[]);
    return(
        <>
        <p>{imgSrc}</p>
        <p>{name}</p>
        <p>{desc}</p>
        <p>{price}</p>
        </>
    )
}

export default Card;