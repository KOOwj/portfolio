import React, {Component} from 'react';

import Intro from './Intro';
import Skill from './Skill';
import './css/About.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <Intro/>
                <Skill/>
            </div>
        )
    }
}

export default About;