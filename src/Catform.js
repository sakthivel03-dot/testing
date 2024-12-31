// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import DataTable from "react-data-table-component";
// let CategoryForm = () => {
//   let [category, setCategory] = useState("");
//   let [description, setDescription] = useState("");
// let [categoryId,setcategoryid]=useState("")
// let [edit,setedit]=useState(false)

// let handleSubmit=()=>{
//   if(edit){
//     handleupdate()
//   }
//   else{
//     handleSave()
//   }
// }
//   let handleSave = () => {
//     let data={
//       category:category,
//       description:description
//     }
//   axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",data)
//   alert("data saved")
//   fetchdata()
  
//   };
//   let handleupdate= () => {
//     let data={
//       categoryId:categoryId,
//       category:category,
//       description:description
//     }
//   axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",data)
//   alert("data updated")
//   fetchdata()
  
//   };
//   let handleCancel = () => {
//     setCategory("");
//     setDescription("");
//     console.log("Form reset");
//   };
  
//   let [record,setrecord]=useState([])

//       useEffect(()=>{
//          fetchdata()
//       },[])
//       let fetchdata=async()=>{
//            let res=await axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
//               console.log(res.data)
//               setrecord(res.data.categoryList)
          
//       }
//       let columns=[
//           // {name:"Name",selector:row=>row.name,sortable:true},
//           { name:"CategoryId",selector:row=>row.categoryId},
//           {name:"Category",selector:row=>row.category},
//           {name:"Description",selector: row => row.description
//           },{
//             name:"Action",cell:row=>(
//               <div>
//                 <button onClick={()=>handleedit(row.categoryId)}>edit</button>
//                 <button onClick={()=>handledelete(row.categoryId)}>delete</button>
//               </div>
//             )
//           }
//       ]
//       let handleedit=(id)=>{
// let filtereddata=record.find(item=>item.categoryId==id)
// console.log(filtereddata)
// setCategory(filtereddata.category)
// setDescription(filtereddata.description)
// setcategoryid(filtereddata.categoryId)
// setedit(true)
//       }
//       let handledelete=(id)=>{
//         let data={
//           categoryId:id
//         }
//         axios.post("http://catodotest.elevadosoftwares.com/Category/RemoveCategory",data)
//         alert("data deleted")
//         fetchdata()
//       }
//       let customStyles={
//           headRow:{style:{backgroundColor:"black",fontSize:"8px",color:"white"}},
//           cells:{style:{color:"blue",fontSize:"15px"}}
//       }

//   return (
//     <div >
      
//         <label >Category:</label>
//         <input
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
          
//         />
      
      
//         <label>Description:</label>
//         <input type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
          
//         />
  
      
//         <button onClick={handleSubmit} >
//           Save
//         </button>
//         <button onClick={handleCancel} >
//           Cancel
//         </button>
//        <DataTable
//        data={record||[]}
//        columns={columns}
//        customStyles={customStyles}
//        pagination
//        paginationPerPage={10}
//        paginationRowsPerPageOptions={[10,20,30]}/> 
//     </div>
//   );
// };

// export default CategoryForm;