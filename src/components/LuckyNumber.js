import {useState} from 'react';
function LuckyNumber(){
    
    //let luckyNumber = Math.floor(Math.random() * 10) + 1;
    //let luckyNumber; //normal way to declare js variable
    const [luckyNumber, setLuckyNumber] = useState(); //react way to declare runtime changing variable
    function generatenum(){
        //alert("working!");
        //luckyNumber = Math.ceil(Math.random() * 10);
        setLuckyNumber(Math.ceil(Math.random()*10));
        //console.log(luckyNumber);
    }

    return (
        <div>
            <center>
                <button className='btn-lucky' onClick={generatenum} disabled={luckyNumber > 0}>Click Here</button> <br /> to reveal your lucky number!
                {luckyNumber > 0 && <h1>Your Lucky Number is {luckyNumber}</h1>}
            </center>
        </div>
        

    )

}

export default LuckyNumber;