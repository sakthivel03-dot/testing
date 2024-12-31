// import React,{createContext,useState} from "react";
// import Context2 from "./Context2";
// export let Usercontext=createContext()
// function Context1() {
//     let [name,setname]=useState("rain")
    
//     let [inputValue, setInputValue] = useState("")
    
//     let handleInputChange = (e) => {
//         setInputValue(e.target.value); }
        
//         let updateName = () => {
//             setname(inputValue); 
//             setInputValue("")
//     };
//     return(
//         <div>
//             <h1>contextone</h1>
            
//             <Usercontext.Provider value={[name,setname]}>
            
//             <p>Current Name:{name}</p>
            
//             <Context2/>
//             <div>
//                 <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter new name"/>
            
//             <button onClick={updateName}>change name</button>
//             </div>
//             </Usercontext.Provider>
//         </div>
//     )
// }
// export default Context1