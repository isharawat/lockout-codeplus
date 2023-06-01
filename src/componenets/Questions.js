import React from 'react'
import useFetch from './useFetch'

const Questions = () => {
    const questions=useFetch("https://codeforces.com/api/problemset.problems?tags=implementation")
    console.log(questions);
  return (
 <></>

  )
}

export default Questions