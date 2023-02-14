import { func } from 'prop-types';
import {useState, useEffect} from 'react'

function Cointracker(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [coinName, setCoinName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [userSubmited, setUserSubmited] = useState(false);
    const [coinNum, setCoinNum] = useState(0);
    
    useEffect( ()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response=>response.json())
        .then(json=>{
            setLoading(false);
            setCoins(json);
        });
    },[]);

    useEffect(()=>{
        console.log("!!!")
        console.log(userSubmited)
        if(coinName==''){
            setCoinNum(null);
        }else{
            setCoinNum(inputValue/ 1200 / parseFloat(coins.filter((coin)=>coin.name===coinName)[0].quotes.USD.price))
        }
        
        
    },[userSubmited, coinName]);

    let userInput= function(event){
        
        console.log(parseInt(event.target.value===''?0:event.target.value))
        setInputValue(parseInt(event.target.value===''?0:event.target.value));
        setUserSubmited(false)
        // console.log(event);
    }
    let userSubmit = function(event){
        setUserSubmited(true)
        event.preventDefault();
        // console.dir(event.target[0].value);
        
    }
    let selectCoin=function(event){
        setCoinName(event.target.value);
        console.dir(event.target)
    }

    
//:{coin.quotes.USD.price} USD
    return(
        <div>
            <h1>The Coins ({coins.length})</h1>
            {loading ?<strong>Loading...</strong>:
                <select onChange={selectCoin}>
                    <option>Select A Coin...</option>
                    {coins.map((coin)=><option  value = {coin.name} >{coin.name} ({coin.symbol})</option>)}
                </select>
            }
            
            
            <form onSubmit={userSubmit}>
                <input  maxLength ={17} value={inputValue} placeholder='원화 입력' onChange={userInput}></input>
                <button>Submit</button>
            </form>
            <h3>환율은 1200원/1달러로 하였습니다</h3>
            <p>{inputValue === ''?"asdfasfd":null}</p>
            <h3>{inputValue==='' || !userSubmited ? 'Loading...':
                `${coinNum} 개`
            }</h3>

            
            
        </div>
    );

   

}export default Cointracker;