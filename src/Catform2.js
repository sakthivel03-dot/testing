// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import DataTable from "react-data-table-component";
// let CategoryForm = () => {
//   let [phone, setphone] = useState("");
//   let [address, setaddress] = useState("");
//   let [edit,setedit]=useState(false)
// let [clientId,setclientId]=useState("")


//   let handleSubmit=()=>{
//     if(edit){
//       handleupdate()
//     }
//     else{
//       handleSave()
//     }

//   }
//   let handleSave = () => {
//     let data={
//       phone:phone,
//       address:address
//     }
//   axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",data)
//   alert("data saved")
//   fetchdata()
  
//   };

//   let handleupdate= () => {
//     let data={
//       phone:phone,
//       address:address,
//       clientId:clientId,
   
    
//     }
//     console.log(data)
//   axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",data)
//   alert("data updated")
//   fetchdata()
  
//   };




//   let handleCancel = () => {
//     setphone("");
//     setaddress("");
//     console.log("Form reset");
//   };
  
//   let [record,setrecord]=useState([])

//       useEffect(()=>{
//          fetchdata()
//       },[])

//       let fetchdata=async()=>{
//            let res=await axios.get("http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails")
//               console.log(res.data)
//               setrecord(res.data.clientList)
          
//       }
//       let columns=[
//           // {name:"Name",selector:row=>row.name,sortable:true},
//           { name:"ClientId",selector:row=>row.clientId},
//           {name:"ClientName",selector:row=>row.clientName},
//           {name:"Phone",selector:row=>row.phone},
//           {name:"Address",selector:row=>row.address},
//         //   {name:"Description",selector: row => row.description
//         //   }
      
//         {
//           name:"Action",cell:row=>(
//             <div>
             
//               <button onClick={()=>handledelete(row.clientId)}>delete</button>
//               <button onClick={()=>handleedit(row.clientId)}>edit</button>
//             </div>
//           )
//         }
      
      
      
//       ]

//       let handleedit=(id)=>{
//         let filtereddata=record.find(item=>item.clientId==id)
//         console.log(filtereddata)
//         setphone(filtereddata.phone)
//         setaddress(filtereddata.address)
//         setclientId(filtereddata.clientId)
      
//         setedit(true)
//               }

//               let handledelete=(id)=>{
//                 let data={
//                   clientId:id
//                 } 

              

   
      
//         axios.post("http://catodotest.elevadosoftwares.com/Client/RemoveClient",data)
//         alert("data deleted")
//         fetchdata()
//       }
//       // let customStyles={
//       //     headRow:{style:{backgroundColor:"black",fontSize:"8px",color:"white"}},
//       //     cells:{style:{color:"blue",fontSize:"15px"}}
//       // }
    
//   return (
//     <div >
      
//         <label >phone:</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setphone(e.target.value)}
          
//         />
      
      
//         <label>address:</label>
//         <input type="text"
//           value={address}
//           onChange={(e) => setaddress(e.target.value)}
          
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
//       //  customStyles={customStyles}
//        pagination
//        paginationPerPage={10}
//        paginationRowsPerPageOptions={[10,20,30]}/> 
//     </div>
//   );
// };


// export default CategoryForm;