import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "../../Pages/HeroPage";    
import ProjectPage from "../../Pages/ProjectPage";
import SkillPage from "../../Pages/SkillPage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
import ExperienceSection from "../../Pages/ExperiencePage";

const Body = () => {
    return (
        <main className="body_container">
            <Routes>
                <Route path="/" element={<HeroSection/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/projects" element={<ProjectPage/>} />
                <Route path="/skills" element={<SkillPage/>} />
                <Route path="/experience" element={<ExperienceSection/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </main>
    );
}

export default Body;