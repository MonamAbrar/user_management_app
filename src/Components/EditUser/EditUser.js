import React, { useState } from "react";

// import './EditUser.css';
import '../CreateUser/CreateUser.css';


const EditUser = ({ closeHandler, saveHandler, userDetails}) => {
    const [name, setName] = useState(userDetails.name);  // useState('');
    const [email, setEmail] = useState(userDetails.email);  // useState('');
    const [website, setWebsite] = useState(userDetails.website);  // useState('');
    const [city, setCity] = useState(userDetails?.address?.city);  // useState('');
    const [street, setStreet] = useState(userDetails?.address?.street);  // useState('');

    const updatedUserObject = {
        id: userDetails.id,
        name,
        email,
        website,
        address: {
            city,
            street,
        },
    };

    const updateHandler = () => {
        saveHandler(updatedUserObject);
    }

    // console.log('updated user object: ', updatedUserObject);

    // const onSave = () => {
    //     const newUser = {
    //         name,
    //         email,
    //         website,
    //         address: {
    //             city,
    //             street,
    //         }
    //     }
    //     saveHandler(newUser);
    // }

    return (
        <div className="create-user">
            <h2>Edit User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="user-input"
            />
            <div className='create-user-controls'>
                {/* <button onClick={onSave} className="create-button">Save</button> */}
                <button onClick={updateHandler} className="create-button">Confirm</button>
                <button onClick={closeHandler} className="create-button">Cancel</button>
            </div>
        </div>
    );
};

export default EditUser;