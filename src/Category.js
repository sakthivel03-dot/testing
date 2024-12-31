// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Formik, ErrorMessage } from "formik";
// import * as yup from "yup";

//  let Category = () => {


//   let [user, setUser] = useState({
//     category: "",
//     description: "",
//   });


//   let schema = yup.object().shape({
//     category: yup.string().required("Category is required."),
//     description: yup
//       .string()
//       .min(10, "Description must be at least 10 characters.")
//       .required("Description is required."),
//   });


// let handleSubmit = () => {
//     console.log(user);
//     alert(`Category: ${user.category}, Description: ${user.description}`);
//   };


//   let handleInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };


// // let handleArrayDest = () => {
// //     navigate("/Arraydestructure");
// //   };

//   return (
//     <div>
//       <h1>Category and Description Form</h1>
//       <Formik
//         initialValues={user}
//         validationSchema={schema}
//         onSubmit={handleSubmit}
//       >
//         {({ handleSubmit, handleChange }) => (
//           <form onSubmit={handleSubmit} noValidate>
//             <div>
//               <label htmlFor="category">Category:</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={user.category}
//                 onChange={(e) => {
//                   handleInputChange(e);
//                   handleChange(e);
//                 }}
//                 placeholder="Enter category"
//               />
//               <ErrorMessage name="category"/>
//             </div>
//             <div>
//               <label htmlFor="description">Description:</label>
//               <input type="text"
//                 name="description"
//                 value={user.description}
//                 onChange={(e) => {
//                   handleInputChange(e);
//                   handleChange(e);
//                 }}
//                 placeholder="Enter description"
//               />
//               <ErrorMessage name="description" />
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
  
      
  
//     </div>
//   );
// };

// export default Category;
