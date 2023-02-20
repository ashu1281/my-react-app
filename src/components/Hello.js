import './Hello.css';
import giphy from './giphy.gif';
function Hello(props){
    let msg = "Learning React!";
    return (
        <div className='somestyle'>
            <h1>Hello {props.name}! {msg} </h1>
            <img src={giphy} alt="giphy" />    
        </div>
    );
}

export default Hello;