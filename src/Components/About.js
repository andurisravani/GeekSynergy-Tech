// // src/ListAppClass.js
// import React from 'react';
// import './Dashboard.css';
// import Card from '@mui/material/Card';
// import FaAngleLeft from 'react-icons/fa'
// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }

//     render() {
//         return (
//             <div style={{height:'100vh',backgroundColor:'#07468f'}}>
//                 <FaAngleLeft/>
//                 <h1 style={{color:'white'}}>About the Company</h1>
//                 <Card style={{margin:10,padding:40}}>
//                     <div></div>
//                     <p>Company: Geeksynergy Technologies Pvt Ltd</p>
//                     <p>Address: Sanjayanagar, Bengaluru-56</p>
//                     <p>Phone: XXXXXXXXX09</p>
//                     <p>Email: XXXXXX@gmail.com</p>
//                 </Card>
//             </div>
//         );
//     }
// }

// export default About;


import React from 'react';
import './Dashboard.css';
import Card from '@mui/material/Card';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigation = useNavigate()
  return (
    <div style={{ height: '100vh', backgroundColor: '#07468f' }}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',alignContent:'center'}}>
        <FaAngleLeft size={25} color='white'style={{padding:10}}  onClick={()=>navigation('/dasboard')}/>

            <p style={{paddingLeft:5,color:"white",fontSize:18}}>back</p>
      </div>
      <h1 style={{ color: 'white' }}>About the Company</h1>
      <Card style={{ margin: 10, padding: 40 }}>
        <div></div>
        <p>Company: Geeksynergy Technologies Pvt Ltd</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
      </Card>
    </div>
  );
};

export default About;
