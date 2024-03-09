// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// const API = "http://127.0.0.1:8000/api/get-questions/";

// // function q.map()
// function Card() {
//   const[dataArray,setQuestions]=useState([])
//   async function getAllQuestions(API) {
//     try {
//       const response = await axios.get(API);
//       console.log(response.data);
//       const dataArray = response.data;
//       //console.log(dataArray)
//       if (Array.isArray(dataArray)) {
//         setQuestions(dataArray);
//         //console.log("done")
//       } else {
//         console.error("Converted data is not an array:", dataArray);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   } 
//   useEffect(() => {
//       getAllQuestions(API);
//   }, []);

//   //statevariable 
//   //loading bollean variable
//   const names = dataArray.map((item)=>{
//     return(item.question)
//   })
//   console.log(names);
//   return (
//     <main>
//       {
//         dArray.map((data,index)=>{
//           return(
//             <div className="container">
//             <div className="top">
//               <div className="quesNo">
//                 <h3 key={index}>{ data.id }</h3>
//               </div>

//               <div className="MarkMenu">
//                 <div className="gen" >{ data.marks }</div>
//                 <label className="burger" htmlFor="burger">
//                   <input type="checkbox" id="burger" />
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </label>
//               </div>
//             </div>
    
//             <div className="question" >
//               <p key={index}>
//                 {data.question}
//               </p>
//             </div>
            
//             <div className="options">
//               <div className="option">
//                 <input type="radio" name="answer" className="answer" />
//                 <span className="op">a. option1</span>
//               </div>
    
//               <div className="option">
//                 <input type="radio" name="answer" className="answer" />
//                 <span className="op">a. option2</span>
//               </div>
    
//               <div className="option">
//                 <input type="radio" name="answer" className="answer" />
//                 <span className="op">a. option3</span>
//               </div>
    
//               <div className="option">
//                 <input type="radio" name="answer" className="answer" />
//                 <span className="op">a. option4</span>
//               </div>
//             </div>
            
//             <div className="bottom">
//               <span className="leftbtn">
//                 <input type="button" className="button" value="&larr; Prev. Question" />
//               </span>
//               <span className="rightbtn">
//                 <input type="button" className="button" value="Next Question &rarr;" />
//               </span>
//             </div>
//           </div>
//           )
//         })
//       }
//     </main>
//   );
// }
// export default Card;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Card() {
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [question, setQuestions] = useState(null); 
  const [counter, setCounter] = useState(0);
  const hasFetchedData = useRef(false); // Ref to track if data has been fetched

  useEffect(() => {
    console.log("useEffect is running");
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-questions/');
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);
  
  
  const fetchJsonData = () => {
    console.log(data[counter])
    setCounter(counter+1);
    //setQuestions(data[counter]);
    }
    useEffect(() => {
      if (data.length > 0) {
        setQuestions(data[counter]);
        console.log(data);
        console.log(data[counter]);
      }
    }, [data, counter]);


  const revfetchJsonData = () => {
    console.log(data[counter])
    setCounter(counter-1);
    //setQuestions(data[counter]);
    }
    useEffect(() => {
      if (data.length > 0) {
        setQuestions(data[counter]);
        console.log(data);
        console.log(data[counter]);
      }
    }, [data, counter]);
   
  if (isLoading) {
    return <p>Loading data...</p>; 
  }

  if (!data || !data.length) {
    return <p>No data available yet.</p>; 
  }

    return (
        <main>
          {
                    <div className="container">
                        <div className="top">
                          <div className="quesNo">
                            {/* <h3 key={index}>{ data.id }</h3> */}
                          </div>
            
                          <div className="MarkMenu">
                            <div className="gen" >
                               {question!=null && (
                                  <h4>Makrs :<span>{question.marks}</span></h4>
                               )}
                            </div>
                            <label className="burger" htmlFor="burger">
                              <input type="checkbox" id="burger" />
                              <span></span>
                              <span></span>
                              <span></span>
                            </label>
                          </div>
                        </div>
                
                        <div className="question" >
                        {question!=null && (
                          <span>
                            <h3>Q.</h3>{question.question}
                          </span>
                        )}
                        </div>
                        
                        <div className="options">
                          <div className="option">
                            <input type="radio" name="answer" className="answer" />
                            <span className="op">option1</span>
                          </div>
                
                          <div className="option">
                            <input type="radio" name="answer" className="answer" />
                            <span className="op">option2</span>
                          </div>
                
                          <div className="option">
                            <input type="radio" name="answer" className="answer" />
                            <span className="op">option3</span>
                          </div>
                
                          <div className="option">
                            <input type="radio" name="answer" className="answer" />
                            <span className="op">option4</span>
                          </div>
                        </div>
                        
                        <div className="bottom">
                          <span className="leftbtn" onClick={revfetchJsonData}>
                            <input type="button" className="button" value="&larr; Prev. Question" />
                          </span>
                          <span className="rightbtn" onClick={fetchJsonData}>
                            <input type="button" className="button" value="Next Question &rarr;" />
                          </span>
                        </div>
                  </div>
          }
        </main>
    );
};

export default Card;