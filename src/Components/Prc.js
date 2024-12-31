// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Card } from 'Card';
// // import CardContent from 'CardContent';
// // import CardMedia from 'CardMedia';
// // import Typography from 'Typography';
// // import { CardActionArea } from 'CardActionArea';/
// import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';



// function Useeffectimg() {
//     let [record, setRecord] = useState([]);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products").then(res => {
//             console.log(res.data)
//             setRecord(res.data);
//         });
//     }, []);



//     return (
//         <div>
//             <h1>Useeffectimg</h1>
        
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
//                 {/* {record.map((item) => ( */}
//                 {Array.isArray(record) && record.map((item) => (
//                     <Card 
//                         key={item.id} 
//                         style={{ width: "250px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
//                     >
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="150"
//                                 image={item.image}
//                                 alt={item.title}
//                                 style={{ objectFit: "contain", marginTop: "10px" }}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     ${item.price}
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Useeffectimg
        
            