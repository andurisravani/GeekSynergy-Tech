import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // If you're using React Router
import NavigationBar from './Components/NavigationBar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import UserLogin from './Components/Register/UserLogin';
import UserRegistration from './Components/Register/UserRegistration';


const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/signup" element={<UserRegistration />} />

        <Route exact path="/dasboard" element={<Dashboard />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// src/App.js
// import React from 'react';
// import UserRegistration from './Components/Register/UserRegistration';
// import UserLogin from './Components/Register/UserLogin';

// const App = () => {
//   return (
//     <div>
//       <UserRegistration />
//       <UserLogin />
//     </div>
//   );
// };

// export default App;
