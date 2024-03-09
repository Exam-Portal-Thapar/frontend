// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API = "http://127.0.0.1:8000/api/get-questions/";

// function Cardcopy() {
//   const [dArray, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch(API)
//       .then((response) => response.json())
//       .then((data) => setQuestions(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <main>
//       {dArray.length > 0 ? (
//         dArray.map((data, index) => {
//           return (
//             <div className="container">
//               {data.questions}
//             </div>
//           );
//         })
//       ) : (
//         <p>Loading...</p>
//       )}
//     </main>
//   );
// }

// export default Cardcopy;

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
//       console.log(response.data)
//       const dataArray = response.data;
//       console.log(dataArray)
//       if (Array.isArray(dataArray)) {
//         setQuestions(dataArray);
//         //console.log("done")
//       } else {
//         console.error("Converted data is not an array:", dataArray);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     const names=[];
//     dataArray.map((item)=>{
//       names.push(item.question)
//       return item;
//     })
//     console.log(names);
//   } 
//   useEffect(() => {
//       getAllQuestions(API);
//   }, []);

//   //statevariable 
//   //loading bollean variable

//   return (
//     <main>
//       {
//         dataArray.map((data,index)=>{
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
  //  // Empty dependency array ensures data is fetched only once on component mount
  // //  useEffect(() => {
  // //   if(data){
  // //     console.log(data)
  // //     setQuestions(data[0]);
     
  // //   }
      

  //  }, [data])
   

  if (isLoading) {
    return <p>Loading data...</p>; 
  }

  if (!data || !data.length) {
    return <p>No data available yet.</p>; // Message for empty array
  }


  return (
    <div>
    {/* <p>{JSON.stringify(data)}</p> */}
      {question!=null && (
      <ul>

          <li>{question.question}</li>
          <li>{question.Subject}</li>
          <li>{question.marks}</li>

      </ul>
      )}
      <button onClick={fetchJsonData}>Fetch JSON Data</button>
    </div>
  );
  
};


export default Card;











