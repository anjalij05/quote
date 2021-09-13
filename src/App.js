import React,{useState} from 'react' 
import './App.css';
import quotes from './component/quote';


const App=() => { 

  const[quote,setQuote]=useState([quotes[0].quote])
  const[author,setAuthor]=useState([quotes[0].author])

  const randomQuote=() => {
    const randomNumber= Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber]; 
    }
   const handleClick = () => {
   const generateRandomQuote= randomQuote();
   setQuote([generateRandomQuote.quote])
     setAuthor([generateRandomQuote.author])
   
    }

return (
<div className='d-flex justify-content-center main align-items-center'>
<div className='app '>
      <h1 className='text-center mb-4'>Quote App</h1>
<div className='author'>
        <p>{quote}</p>
<div className=''>
          <p>{author}</p>
 <button className='btn btn-primary' onClick={handleClick}>Next Quote</button>
      </div>
    </div>
 </div>
</div>
)
}

  


export default App;
