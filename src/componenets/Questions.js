import React from 'react'
import useFetch from './useFetch'
import Componen from './Component';

const Questions = () => {
  const questions = useFetch("https://codeforces.com/api/problemset.problems?tags=implementation")
  let total = [];
  for(let q in questions) {
    total.push(questions[q]);
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