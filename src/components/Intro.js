import React from 'react';

import me from './imgs/951109_w.jpg';
import './css/Intro.css';

function Intro(){
    return(
        <div className="Intro" name="about">
            <div className="Title">
                <span className="no1">Intro</span><br/>
                <span className="no2">About Me</span>
            </div>
            <div className="List">
                <div className="no1">
                    <span><b>Profile</b></span><img src={me} alt="koo" width="180" height="240"/>
                    <ul>
                        <li>이름: 구원준 (KOO WONJUN)</li>
                        <li>나이: 26 (1995.11.09)</li>
                        <li>주소: 경기도 하남시</li>
                    </ul>

                    <span><b>Education</b></span>
                    <ul>
                        <li>2019.01 ~ 2019.02 SIMILE 인턴</li>
                        <li>2019.07 ~ 2019.12 더존비즈온 인턴</li>
                        <li>2014.02 ~ 2020.02 한림대학교 컨텐츠IT학과 졸업</li>
                    </ul>

                    <span><b>Keyword</b></span>
                    <ul>
                        <li>책임감</li>
                        <li>열정</li>
                        <li>끈기</li>
                        <li>축구</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Intro;