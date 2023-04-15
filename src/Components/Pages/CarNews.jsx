import React, { useEffect, useState } from "react";

export const TechNews = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7").then((result)=>{
            result.json().then((resp)=>{
                console.warn("result",resp)
                setdata(resp)
            })

        })
        


    },[])
    console.log(data)
  
  
// 
  return (
    <div>
      <h3>Bestselling</h3>
    </div>
  );
};
