import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/w0lF07/Coffee-Shop-Sales" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/Coffee-Shop-Sales" target="_blank" rel="noreferrer"><h2>Coffee Shop Sales Data Analysis | Python | Power Bi</h2></a>
                <p>Analyzed sales data with MySQL, transformed it using Power Query, built custom DAX measures, and developed an interactive Power BI dashboard with detailed insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/w0lF07/Automatic-API-Calling/blob/main/Automatic%20Api%20Calling.ipynb" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/Automatic-API-Calling/blob/main/Automatic%20Api%20Calling.ipynb" target="_blank" rel="noreferrer"><h2>Automating Crypto Website API Pull | Python</h2></a>
                <p>Built a real-time crypto tracker with CoinMarketCap API, automated data collection using Python, and analyzed trends with pandas, Seaborn, and Matplotlib.</p>
            </div>
            <div className="project">
                <a href="https://github.com/w0lF07/Amazon-Web-Scrapping/blob/main/Amazon%20Data%20Scraping.ipynb" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/Amazon-Web-Scrapping/blob/main/Amazon%20Data%20Scraping.ipynb" target="_blank" rel="noreferrer"><h2>Web Scraping Amazon Data | Python</h2></a>
                <p>Built a web scraper with BeautifulSoup to track Amazon product prices daily, stored data in CSV, and automated email alerts for price drops.</p>
            </div>
            <div className="project">
                <a href="https://github.com/w0lF07/Excel-Portfolio/blob/main/Europe%20Bike%20Sales%20Data.xlsx" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/Excel-Portfolio/blob/main/Europe%20Bike%20Sales%20Data.xlsx" target="_blank" rel="noreferrer"><h2>EDA of Europe Bike Sales Data | Excel</h2></a>
                <p>Transformed raw data into a readable format using Excel, calculated key metrics, and created pivot tables with visualizations for efficient analysis.</p>
            </div>
            <div className="project">
                <a href="https://github.com/w0lF07/Excel-Portfolio/blob/main/Coffee%20Orders%20Data.xlsx" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/Excel-Portfolio/blob/main/Coffee%20Orders%20Data.xlsx" target="_blank" rel="noreferrer"><h2>EDA of Coffee Shop Sales Data | Excel</h2></a>
                <p>Organized raw data in Excel, calculated essential metrics, and built pivot tables with visualizations to streamline analysis.</p>
            </div>
            <div className="project">
                <a href="https://public.tableau.com/views/HRDashboard_17457854557430/HRSummary?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/w0lF07/HR-Tableau-Visualization/tree/main" target="_blank" rel="noreferrer"><h2>HR Data Visualization | Tableau</h2></a>
                <p>Used Tableau to read HR dataset, clean it and developed dynamic dashboard for in-depth visualization and analysis.</p>
            </div>     
        </div>
    </div>
    );
}

export default Project;