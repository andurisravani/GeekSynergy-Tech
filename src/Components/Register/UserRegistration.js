// src/UserRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const navigation = useNavigate()
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRegistration = () => {
        const userData = {
            name: name,
            email: email,
            password: password,
            phonenumber: phonenumber,
            profession: selectedOption
        };
        localStorage.setItem('UsersLogin', JSON.stringify(userData));
        // window.location.reload();
        navigation('/')
    };

    return (
        <div style={{ height: '100vh', backgroundColor: '#07468f', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '50vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 50 }}>

                <h2 style={{ color: 'black', marginBottom: 20 }}>User Registration</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    style={{ width: '25vw', height: '5vh', borderRadius: 10, margin: 2, borderColor: 'blue', paddingLeft: 5 }}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    style={{ width: '25vw', height: '5vh', borderRadius: 10, margin: 2, borderColor: 'blue', paddingLeft: 5 }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}

                    style={{
                        width: '25vw', height: '5vh', borderRadius: 10, margin: 2, borderColor: 'blue',
                        paddingLeft: 5
                    }}
                />
                <input
                    type="text"
                    placeholder="Phone number"
                    value={phonenumber}
                    onChange={handlePhoneNumberChange}
                    style={{ width: '25vw', height: '5vh', borderRadius: 10, margin: 2, borderColor: 'blue', paddingLeft: 5 }}
                />
                <select value={selectedOption} onChange={handleSelectChange}
                    style={{ width: '26vw', height: '5vh', borderRadius: 10, margin: 2, borderColor: 'blue', paddingLeft: 5 }}

                >
                    <option value="">Select an Profession</option>
                    <option value="option1">Student</option>
                    <option value="option2">Employee</option>
                    <option value="option3">Bussiness</option>
                    {/* Add more options as needed */}
                </select>
                <button style={{ width: '25vw', height: '5vh', borderRadius: 10, marginTop: 10, backgroundColor: '#07468f', color: 'white' }} onClick={handleRegistration}>Register</button>
            </div>
        </div>
    );
};

export default UserRegistration;
