// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component'

// function Datatable1() {
//     let [record,setrecord]=useState([])

//     useEffect(()=>{
//        fetchdata()
//     },[])
//     let fetchdata=async()=>{
//          let res=await axios.get("https://jsonplaceholder.typicode.com/todos")
//             console.log(res.data)
//             setrecord(res.data)
        
//     }
//     let columns=[
//         // {name:"Name",selector:row=>row.name,sortable:true},
//         { name:"Id",selector:row=>row.id},
//         {name:"Title",selector:row=>row.title},
//         {name:"Completed",cell: row => row.completed ? "True" : "False"
//         }
//     ]
//     let customStyles={
//         headRow:{style:{backgroundColor:"black",fontSize:"8px",color:"white"}},
//         cells:{style:{color:"blue",fontSize:"15px"}}
//     }
//   return (
//     <div>
//         <h1>Datatable</h1>
//       <DataTable
//        data={record}
//        columns={columns}
//        customStyles={customStyles}
//        pagination
//        paginationPerPage={10}
//        paginationRowsPerPageOptions={[10,20,30,40,50,60,70,80,80,90,100]}/>
//     </div>
//   )
// }

// export default Datatable1