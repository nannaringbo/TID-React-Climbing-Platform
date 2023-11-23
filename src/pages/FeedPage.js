import { LocationCard } from "../components/common/LocationCard";
import Sidebar from "../components/sections/Sidebar"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import React, { useState } from 'react';
import CreateLocation from "../components/common/CreateLocation";
import Parse from 'parse/dist/parse.min.js';
import { useNavigate } from 'react-router-dom';

function FeedPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const logout = () => {
        Parse.User.logOut().then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error('Failed to log out, with error: ', error);
        });
    }

    return (
        <div>
            <Navbar logout={logout} />
            <div className="main-wrapper">
                <Sidebar handleShow={handleShow} />
                <CreateLocation show={show} handleClose={handleClose} />
                <LocationCard />
            </div>
            <Footer />
        </div>

    );
}

export default FeedPage;