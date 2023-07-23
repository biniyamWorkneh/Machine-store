
import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import myImage from 'T:\Biniam\Programming\bini'
import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = ()=>{
//   const [name,setName]= useState('')
//     const handleClick = (e)=>{
//       setName(e.target.value)
//     }
// return (
//     <div>
//       <h1>Welcome my dear {name}</h1>
//       Name: <input onChange={e =>handleClick(e)} />
//     </div>
// )
// }
// export default Home
//import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img src="..myImage." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
//