 
   import axios from "axios";

   import {useEffect , useState} from "react";

   
   import style from "../SubjectComponent/Subject.module.css"
   


    function Result(){

        const [results , setResults] = useState([]);

        useEffect(()=>{
           
           async function getAllResults(){
               let value = await axios.get("http://localhost:3333/result");
               setResults(value.data);
           }
               getAllResults();
        },[]);

        return (
            <>
               <div id={style.displayHeadingBox}> 
                   <h2>Result List</h2>     
                </div>

                <div class="table">
                    <table className="table">
                       <thead>
                           <tr>
                             <th scope="col" id="center">User Email</th>
                             <th scope="col"id="center">Quiz Name</th>
                             <th scope="col"id="center">Quiz Date</th>
                             <th scope="col"id="center">Result Status</th>
                             <th scope="col"id="center">Your Score</th>  
                             <th scope="col"id="center">Total Marks</th>
                             <th scope="col"id="center">Total Question</th>  
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
                                    return(
                                          <tr key={i}>
                                              <td scope="row">{data.user_email}</td>
                                              <td>{data.exam_name}</td>
                                              <td>{data.exam_date}</td>
                                              <td>{data.result_status}</td>
                                              <td>{data.result_score}</td>
                                              <td>{data.total_marks}</td>
                                              <td>{data.total_Question}</td>
                                          </tr>
                                    );
                                })
                            }
                               
                        </tbody>
                     </table>
                </div>
            </>
        );
    }

    export default Result;