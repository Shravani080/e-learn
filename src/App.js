import React from 'react'
import ToDo from './ToDo/ToDo'

function App() {
  return (
    <div>
      <ToDo/>
    </div>
  )
}

export default App













// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import LoginPage from "./Components/LoginPage/LoginPage";
// import './App.css';
// import UserInformation from "./Components/UserInformation/UserInformation";
// import Header from "./Components/Header/Header";
// import { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';


// function App() {
//   const [display, setDisplay] = useState(true);
//   const location = useLocation();

//   useEffect(()=>{
    
//     if(location.pathname === "/loginpage" || location.pathname === "/" ){
//       setDisplay(false)
//     }else{
//       setDisplay(true)
//     }
//   },[location.pathname])
 

//   return (
//     <div className="body">
//       {display && <Header />}
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/loginpage" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/userinformation" element={<UserInformation />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;





// {todos.map((item, index) => (
//   <li>
//     <input
//       type="text"
//       value={item}
//       onChange={(e) => (todos[index] = e.target.value)}
//     />
//     <button onClick={() => todos.splice(index, 1)}>Delete</button>
//   </li>
// ))}