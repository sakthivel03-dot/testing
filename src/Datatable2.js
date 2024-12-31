// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component'
// import Category from './Category'

// function Datatable2() {
//     let [record,setrecord]=useState([])

//     useEffect(()=>{
//        fetchdata()
//     },[])
//     let fetchdata=async()=>{
//          let res=await axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
//             console.log(res.data)
//             setrecord(res.data.CategoryList)
        
//     }
//     let columns=[
//         // {name:"Name",selector:row=>row.name,sortable:true},
//         { name:"CategoryId",selector:row=>row.CategoryId},
//         {name:"Category",selector:row=>row.Category},
//         {name:"Description",selector: row => row.description
//         }
//     ]
//     let customStyles={
//         headRow:{style:{backgroundColor:"black",fontSize:"8px",color:"white"}},
//         cells:{style:{color:"blue",fontSize:"15px"}}
//     }
//   return (
//     <div>
//         <h1>Datatable2</h1>
//       <DataTable
//        data={record||[]}
//        columns={columns}
//        customStyles={customStyles}
//        pagination
//        paginationPerPage={2}
//        paginationRowsPerPageOptions={[10,20,30,40,50,60,70,80,80,90,100]}/>
//     </div>
//   )
// }

// export default Datatable2