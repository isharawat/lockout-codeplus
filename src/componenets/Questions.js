import React from 'react'
import useFetch from './useFetch'
import Componen from './Component';

const Questions = () => {
  const questions = useFetch("https://codeforces.com/api/problemset.problems?tags=implementation")
  let total = [];
  var x = {
    800: [], 
    900: [], 
    1000: [], 
    1100: [], 
    1200: [], 
    1300: [], 
    1400: [],  
    1500: [], 
    1600: [], 
    1700: [], 
    1800: [], 
    1900: [], 
    2000: [], 
    2100: [],  
    2200: [],  
    2300: [], 
    2400: [], 
    2500: [], 
    2600: [],  
    2700:[], 
  };
  var map = new Map();
  for(let q in questions) {
    let p = questions[q].rating;
    total.push(questions[q]);
    // x.p.push(questions[q]);
    
  }
  console.log(total);
  return (
    <>
      {
      total.map((obj) => ( 
       <> 
        <Componen key = {obj.contestId + obj.index} obj = {obj}/>
     </> 
     ))}
       
    </>

  )
}

export default Questions