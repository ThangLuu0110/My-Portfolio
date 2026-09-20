import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/homePage";    
import ProjectPage from "../../Pages/projectPage";
import AboutPage from "../../Pages/aboutPage";
import ContactPage from "../../Pages/contactPage";

const Body = () => {
    return (
        <main className="body_container">
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/projects" element={<ProjectPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </main>
    );
}

export default Body;