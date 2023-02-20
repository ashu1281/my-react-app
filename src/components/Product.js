import './Product.css';

function Product(props) {

    return (
        <div className='card'>
            <center>
            <img src={props.link}/>
                <div className='container'>
                    <h4><b>{props.name}</b></h4>
                    <p>{props.price}</p>
                </div>
            </center>
        </div>

    );

}

export default Product;