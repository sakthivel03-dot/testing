// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Useeffecthook() {
//     let [record,setrecord]=useState([])

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
//             console.log(res.data)
//             setrecord(res.data)
//         })
//     },[])

//   return (
//     <div>
//         <h1>Useeffecthook</h1>
//         <ol>
//             {record.slice(0,10).map(item=>(
//                 <li>{item.userId} - {item.id}- {item.completed.toString()}</li>
//             ))}
//         </ol>
//     </div>
//   )
// }

// export default Useeffecthook