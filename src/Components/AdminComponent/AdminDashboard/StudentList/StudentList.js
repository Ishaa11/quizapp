

   import {useState , useEffect} from "react";
   import axios from "axios";

   import {NavLink} from "react-router-dom";

   import style from "../SubjectComponent/Subject.module.css";

     function StudentList(){

       const [students , setStudents] = useState([]);

       useEffect(()=> {
         async function getAllStudent(){
           let value = await axios.get("http://localhost:3333/user");
           setStudents(value.data);
         }
         getAllStudent();
       },[])

         return (
             <>
               <div className="container" id={style.displayHeadingBox}> 
                   <h2>User List</h2>     
                </div>

                <div id={style.tableBox}>
                   <table className="table">
                      <thead>
                         <tr>
                            <th scope="col" id={style.center}>User Name</th>
                            <th scope="col"id={style.center}>User Email</th>
                            <th scope="col"id={style.center}>Options</th>
                         </tr>
                       </thead>
                       <tbody>
                         {
                           students.map((data , i) => {
                             return(
                              <tr key={i}>
                                 <td scope="row">{data.user_name}</td> 
                                 <td>{data.user_email}</td> 
                                 <td>
                                   <NavLink exact to={`/AdminDashboard/StudentList/Details/${data.id}`}>
                                     <button type="button" class="btn btn-primary">View Result</button> 
                                   </NavLink>
                                   </td>
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

     export default StudentList;