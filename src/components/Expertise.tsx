import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartSimple } from '@fortawesome/free-solid-svg-icons';  // Keep these icons here
import { faPython } from '@fortawesome/free-brands-svg-icons'; // Import from free-brands-svg-icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "MySQL",
    "Python",
    "Excel",
    "Tableau",
    "Power BI",
];

const labelsSecond = [
    "MySQL",
];

const labelsThird = [
    "Python",
    "C++",
    "Git",
    "GitHub",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartSimple} size="3x"/>
                    <h3>Data Analysis & Visualization</h3>
                    <p>Experience in creating interactive dashboards and visualizations to transform raw data into actionable insights, 
                        with strong proficiency in data manipulation and analysis along with advanced skills like automating scripts with Python.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Databases & SQL</h3>
                    <p>Expertise in relational databases and ensuring optimal database performance. Skilled in writing efficient SQL queries for data extraction, manipulation, and reporting. I ensure data integrity
                        and optimal performance for large datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython as any} size="3x"/> {/* Explicitly cast to any */}
                    <h3>Programming & Development</h3>
                    <p>Proficient in Git for version control and collaboration, with experience in Python and C++ programming.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
