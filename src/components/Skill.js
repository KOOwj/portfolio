import React from 'react';

import './css/Skill.css';

function Skill(){
    return(
        <div className="Skill">
            <div className="Title">
                <span className="no1">Skills</span><br/>
                <span className="no2">What I can do</span>
            </div>
            <div className="List">
                <div className="no1">
                    <span><b>Java</b></span>
                    <ul>
                        <li>JSP</li>
                        <li>Spring Framework</li>
                        <li>Spring MVC</li>
                        <li>Spring Boot</li>
                        <li>SOAP API</li>
                        <li>REST API</li>
                    </ul>

                    <span><b>Javascript</b></span>
                    <ul>
                        <li>React</li>
                        <li>Jquery</li>
                        <li>AJAX</li>
                    </ul>

                    <span><b>DB</b></span>
                    <ul>
                        <li>Oracle</li>
                        <li>PostgreSQL</li>
                        <li>MSSQL</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="no2">
                    <span><b>Etc</b></span>
                    <ul>
                        <li>Unix</li>
                        <li>Linux</li>
                        <li>Git, Gitlab</li>
                        <li>Sourcetree</li>
                        <li>Jira</li>
                        <li>Wiki</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill;