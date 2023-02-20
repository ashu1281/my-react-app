
import Product from './Product';

function Cards(){
    
    let products = [
    {link:"https://m.media-amazon.com/images/I/31B0lcMBN8L._SX300_SY300_QL70_FMwebp_.jpg", name:"Nokia", price:"Rs. 12999"},
    {link:'https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg', name:"Samsung S23 Ultra", price:"Rs. 22999"},
    {link:"https://m.media-amazon.com/images/I/41ezRvTwcaL._SX300_SY300_QL70_FMwebp_.jpg", name:"Samsung Galaxy S20 FE 5G", price:"Rs. 34999"},
    {link:'https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg', name:"Samsung S23 Ultra", price:"Rs. 22999"},
    ]
    
    let p=[];
        for(let product of products){
        p.push(
            <Product
            link={product.link}
            name={product.name}
            price={product.price}
            />)
        }
    return <div>{p}</div>
}

export default Cards;