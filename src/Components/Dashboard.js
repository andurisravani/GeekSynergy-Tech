// import React, { Component } from 'react';
// import './Dashboard.css';
// import Card from '@mui/material/Card';
// import { AuthServices } from '../Services/auth-services';
// import { blue } from '@mui/material/colors';
// import { FaChevronUp } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import {FaAlignJustify} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// class Dashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }


//     handleTabChange = (tabName) => {
//         this.setState({
//             activeTab: tabName,
//             searchTerm: tabName,
//         });
//     };

//     componentDidMount() {
//         this.GetMovies();
//     }

//     GetMovies = () => {
//         const data = {
//             category: "movies",
//             language: "kannada",
//             genre: "all",
//             sort: "voting"
//         };
//         AuthServices.GetResult(data, this.handleSuccessMovies, this.onFailureMovies);
//     };

//     handleSuccessMovies = (response) => {
//         console.log(response, '<-----handleSuccessMovies');
//         this.setState({ data: response.result });
//     };

//     onFailureMovies = (error) => {
//         alert(error, 'service error');
//     };

//     render() {
//         const { data } = this.state;

//         return (
//             <div className="app-container" style={{backgroundColor:'#07468f'}}>
//                 <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',height:'5vh',padding:20}}>
//                 <h1 style={{color:'#07468f',fontSize:20}}>Movies List</h1>
//             <FaAlignJustify onClick={()=>this.navigation('/about')}/>
//             </div>
//                 <div className="image-gallery">
//                     {data.map((each, index) => (
//                         // maxWidth: 300 ,
//                         <Card style={{ margin: 5, height: 350, alignItems: 'center' }}>
//                             <div style={{ margin: 5, display: 'flex', flexDirection: 'row', }}>
//                                 <div style={{
//                                     padding: 10, justifyContent: 'center',
//                                     alignSelf: 'center', textAlign: 'center'
//                                 }}>
//                                     <FaChevronUp size={20} />
//                                     <p style={{ margin: 2, fontSize: 24 }}>{each.voting}</p>
//                                     <FaChevronDown size={20} />
//                                     <p>votes</p>
//                                 </div>
//                                 <img
//                                     key={index}
//                                     alt={undefined}
//                                     src={each.poster}
//                                     style={{ width: '10vw' }}
//                                 />
//                             </div>
//                             {/* <div> */}

//                             <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>

//                                 <div style={{ padding: 5 }}>
//                                     <p style={{ fontSize: 14 }}>Title: {each.title}</p>
//                                     <p style={{ fontSize: 12 }}>Genre: {each.genre}</p>
//                                     <p style={{ fontSize: 12 }}>Director: {each.director}</p>
//                                     <p style={{ fontSize: 12 }}>starring: {each.stars}</p>
//                                     <p style={{ fontSize: 12 }}>Language: {each.language}</p>
//                                 </div>
//                             </div>
//                             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
//                                 <h2 style={{ fontSize: 12 }}>Views {each.pageViews}</h2>
//                                 <h2 style={{ fontSize: 12, color: blue }}>votted by {each.voting} people</h2>
//                             </div>
//                             {/* </div> */}
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Dashboard;

/****Functional component */
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Card from '@mui/material/Card';
import { AuthServices } from '../Services/auth-services';
import { blue } from '@mui/material/colors';
import { FaChevronUp, FaChevronDown, FaAlignJustify } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
const navigation = useNavigate()
  useEffect(() => {
    GetMovies();
  }, []);

  const GetMovies = () => {
    const data = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    };
    AuthServices.GetResult(data, handleSuccessMovies, onFailureMovies);
  };

  const handleSuccessMovies = (response) => {
    console.log(response, '<-----handleSuccessMovies');
    setData(response.result);
  };

  const onFailureMovies = (error) => {
    alert(error, 'service error');
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#07468f' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', height: '5vh', padding: 20 }}>
        <h1 style={{ color: '#07468f', fontSize: 20 }}>Movies Lists</h1>
        <FaAlignJustify onClick={() => navigation('/about')} />
      </div>
      <div className="image-gallery">
        {data.map((each, index) => (
          <Card style={{ margin: 5, height: 350, alignItems: 'center' }} key={index}>
            <div style={{ margin: 5, display: 'flex', flexDirection: 'row', }}>
              <div style={{
                padding: 10, justifyContent: 'center',
                alignSelf: 'center', textAlign: 'center'
              }}>
                <FaChevronUp size={20} />
                <p style={{ margin: 2, fontSize: 24 }}>{each.voting}</p>
                <FaChevronDown size={20} />
                <p>votes</p>
              </div>
              <img
                alt={undefined}
                src={each.poster}
                style={{ width: '10vw' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
              <div style={{ padding: 5 }}>
                <p style={{ fontSize: 14 }}>Title: {each.title}</p>
                <p style={{ fontSize: 12 }}>Genre: {each.genre}</p>
                <p style={{ fontSize: 12 }}>Director: {each.director}</p>
                <p style={{ fontSize: 12 }}>starring: {each.stars}</p>
                <p style={{ fontSize: 12 }}>Language: {each.language}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <h2 style={{ fontSize: 12 }}>Views {each.pageViews}</h2>
              <h2 style={{ fontSize: 12, color: blue }}>voted by {each.voting} people</h2>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
