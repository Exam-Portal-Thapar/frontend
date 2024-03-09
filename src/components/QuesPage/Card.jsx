// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// function Card() {
//   const [data, setData] = useState([]); 
//   const [isLoading, setIsLoading] = useState(false); 
//   const [question, setQuestions] = useState(null); 
//   const [counter, setCounter] = useState(0);
//   const hasFetchedData = useRef(false); // Ref to track if data has been fetched

//   useEffect(() => {
//     console.log("useEffect is running");
//     const fetchData = async () => {
//       setIsLoading(true); 
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/get-questions/');
//         setData(response.data.data);
//         console.log(response.data.data.answer[0]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false); 
//       }
//     };
//     fetchData();
//   }, []);
  
  
//   const fetchJsonData = () => {
//     //console.log(data[counter])
//     setCounter(counter+1);
//     //setQuestions(data[counter]);
//     }
//     useEffect(() => {
//       if (data.length > 0) {
//         setQuestions(data[counter]);
//         //console.log(data);
//         //console.log(data[counter]);
//       }
//     }, [data, counter]);


//   const revfetchJsonData = () => {
//     //console.log(data[counter])
//     setCounter(counter-1);
//     //setQuestions(data[counter]);
//     }
//     useEffect(() => {
//       if (data.length > 0) {
//         setQuestions(data[counter]);
//         //console.log(data);
//         //console.log(data[counter]);
//       }
//     }, [data, counter]);
   
//   if (isLoading) {
//     return <p>Loading data...</p>; 
//   }

//   if (!data || !data.length) {
//     return <p>No data available yet.</p>; 
//   }

//     return (
//         <main>
//           {
//                     <div className="container">
//                         <div className="top">
//                           <div className="quesNo">
//                             {/* <h3 key={index}>{ data.id }</h3> */}
//                           </div>
            
//                           <div className="MarkMenu">
//                             <div className="gen" >
//                                {question!=null && (
//                                   <h4>Makrs :<span>{question.marks}</span></h4>
//                                )}
//                             </div>
//                             <label className="burger" htmlFor="burger">
//                               <input type="checkbox" id="burger" />
//                               <span></span>
//                               <span></span>
//                               <span></span>
//                             </label>
//                           </div>
//                         </div>
                
//                         <div className="question" >
//                         {question!=null && (
//                           <span>
//                             <h3>Q.</h3>{question.question}
//                           </span>
//                         )}
//                         </div>
                        
//                         <div className="options">
//                           <div className="option">
//                             <input type="radio" name="answer" className="answer" />
//                             <span className="op">option1</span>
//                           </div>
                
//                           <div className="option">
//                             <input type="radio" name="answer" className="answer" />
//                             <span className="op">option2</span>
//                           </div>
                
//                           <div className="option">
//                             <input type="radio" name="answer" className="answer" />
//                             <span className="op">option3</span>
//                           </div>
                
//                           <div className="option">
//                             <input type="radio" name="answer" className="answer" />
//                             <span className="op">option4</span>
//                           </div>
//                         </div>
                        
//                         <div className="bottom">
//                           <span className="leftbtn" onClick={revfetchJsonData}>
//                             <input type="button" className="button" value="&larr; Prev. Question" />
//                           </span>
//                           <span className="rightbtn" onClick={fetchJsonData}>
//                             <input type="button" className="button" value="Next Question &rarr;" />
//                           </span>
//                         </div>
//                   </div>
//           }
//         </main>
//     );
// };

// export default Card;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [question, setQuestions] = useState(null); 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-questions/');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setQuestions(data[counter]);
    }
  }, [data, counter]);

  const fetchNextQuestion = () => {
    setCounter(counter + 1);
  };

  const fetchPreviousQuestion = () => {
    setCounter(counter - 1);
  };

  if (isLoading) {
    return <p>Loading data...</p>; 
  }

  if (!data || !data.length) {
    return <p>No data available yet.</p>; 
  }

  return (
    <main>
      {question && (
        <div className="container">
          <div className="top">
            <div className="quesNo"></div>
              
            <div className="MarkMenu">
              <div className="gen">
                <h4>Marks: <span>{question.marks}</span></h4>
              </div>
              <label className="burger" htmlFor="burger">
                <input type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>
          <div className="question">
            <div>
              <h3>Q.{ counter+1 }</h3>{question.question}
            </div>
            <ul >
              <li >
                <input type="radio" name={`answer${question.id}`} className="answer" />
                <span className="op">{question.answers[0].answer}</span>
              </li>
              <li>
                <input type="radio" name={`answer${question.id}`} className="answer" />
                <span className="op">{question.answers[1].answer}</span>
              </li>
              <li>
                <input type="radio" name={`answer${question.id}`} className="answer" />
                <span className="op">{question.answers[2].answer}</span>
              </li>
              <li>
                <input type="radio" name={`answer${question.id}`} className="answer" />
                <span className="op">{question.answers[3].answer}</span>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <span className="leftbtn" onClick={fetchPreviousQuestion}>
              <input type="button" className="button" value="&larr; Prev. Question" />
            </span>
            <span className="rightbtn" onClick={fetchNextQuestion}>
              <input type="button" className="button" value="Next Question &rarr;" />
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Card;