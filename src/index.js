import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Card";
import Footer from "./Component/footer";
import Header from "./Component/header";
// import Header as a from "./Component/header"; rename as my ways
import {arr,arr2} from "./utils/dummy"

// import {arr,arr2} from "./src/utils/dummy"


function App(){
          const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr2.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

let [A,setA]=useState(arr);

function sortArray(){
  A.sort((a,b)=>a.price-b.price);
  setA([...A]);
}

function priceAbove499(){
  
  const b=arr.filter((value)=>value.price>499);
  setA(b);
}

function clearFilter(){
  setA([...arr]);
}

function sortDiscount(){
  const b=A.sort((a,b)=>b.discount-a.discount)
  setA([...b]);
}

return (

  <>
    <Header />
    <img className="dee" src={arr2[currentIndex]} style={{ width: "100%", marginBottom: "20px", height:"400px" }} />
    <img className="dee1" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/28/FsMAaDFk_f9da781cb2634e80bfd24bf43468df58.jpg"/>
    <button className="butt butt1" onClick={sortArray}>Sort by Price</button>
    <button className="butt" onClick={priceAbove499}>Price above 499</button>
    <button className="butt" onClick={clearFilter}>Clear Filter</button>
    <button className="butt" >Comming Soon</button>
    <button className="butt" >Comming Soon</button>
    <button className="butt" >Comming Soon</button>
    <button className="butt" >Comming Soon</button>
    <button className="butt" >Comming Soon</button>
    <h1 className="title">Shop By Category</h1>
        <div className="middle" style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        
            {
                // due to {} in jsx wants to be an instruction(which gave num,str,arr) so map r/n an array
                A.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer} img={value.img} price={value.price}/>)
            }
        </div>
        <img className="im" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH3OJp88_77193d7b8a4c4a2289a48f5bbda182de.jpg" width="1300px"/>
            <Footer/>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);

// Modules vo hai jinko ham baar baar use kar rahe honge use code ko ek alag seprate js file me ragh do also called component
// utlis ke andar dummy data ho ya image kiska use baar baar kar rahe ho vo daal do
// 