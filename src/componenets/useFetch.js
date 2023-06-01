import React,{useState,useEffect} from 'react'

function useFetch(URL) {
  const [articles, setArticles] = useState(null)


  const abortCont = new AbortController();
  
  useEffect(() => {
   fetch(URL)
     .then(res => res.json())
     .then(
       (results) => {
         const articles = results.result.problems;
         
         setArticles(articles);
 
       })
       .catch(err=>{
           console.log(err.message);
       })
       return ()=> abortCont.abort();
 }, [URL])
 return articles;
}

export default useFetch
