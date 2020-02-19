import React from 'react';

import art from './imgs/no2.png';
import sft from './imgs/no1.png';  
import jwt from './imgs/no3.png';
import github from './imgs/github.png';
import './css/Project.css';

function Project(){
    return(
        <div className="Project" name="works">
            <div className="Title">
                <span>My works</span>
            </div>
            <div className="Task">
                <div className="no1">
                    <img src={art} alt="art" />
                </div>
                <div className="no2">
                    <div><span className="first">01</span><span className="second"> 온라인게임 페이지 <a href="https://github.com/KOOwj/aft-defense" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a></span></div>
                    <div>
                        <h3>개발기간: 2018.10 ~ 2018.11</h3>
                        
                        <h3>Jsp로 구성한 MVC패턴 MODEL1 구조 웹 어플리케이션</h3>
                    </div>
                </div>
            </div>
            <div className="no3">
                <table border="0">
                    <thead>
                        <tr>
                            <th>Contents</th>
                            <th>Related keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Model1</td>
                            <td>JSP, Model, View, Controller</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>데이터베이스</td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td>로그인, 로그아웃, 회원가입</td>
                            <td>DB, JSP, Javascript</td>
                        </tr>
                        <tr>
                            <td>게시판</td>
                            <td>DB, JSP, Javascript</td>
                        </tr>
                        <tr>
                            <td>마이페이지</td>
                            <td>DB, JSP, Javascript</td>
                        </tr>
                        <tr>
                            <td>기타</td>
                            <td>파일 다운로드, 파일 업로드, 파일 실행</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Task2">
                <div className="no1">
                    <div><span className="first">02</span><span className="second"> App소개, 교육카드 판매 페이지 <a href="https://github.com/KOOwj/mdk" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a></span></div>
                    <div>
                        <h3>개발기간: 2019.04 ~ 2019.05</h3>
                        
                        <h3>Spring Framework를 사용한 MVC패턴 웹 어플리케이션</h3>
                    </div>
                </div>
                <div className="no2">
                    <img src={sft} alt="sft" /> 
                </div>
            </div>
            <div className="no3">
                <table border="0">
                    <thead>
                        <tr>
                            <th>Contents</th>
                            <th>Related keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spring Framework</td>
                            <td>Bean Scopes, Anotation, DI , AOP, Maven, Mybatis</td>
                        </tr>
                        <tr>
                            <td>데이터베이스</td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td>로그인, 로그아웃, 회원가입</td>
                            <td>REST API, DB, Javascript, JQuery, AJAX</td>
                        </tr>
                        <tr>
                            <td>게시판</td>
                            <td>REST API, DB, Javascript, JQuery, AJAX</td>
                        </tr>
                        <tr>
                            <td>마이페이지, 관리자페이지</td>
                            <td>REST API, DB, Javascript, JQuery, AJAX</td>
                        </tr>
                        <tr>
                            <td>결제</td>
                            <td>아임포트, PG, API, DB</td>
                        </tr>
                        <tr>
                            <td>기타</td>
                            <td>챗 봇</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Task">
                <div className="no1">
                    <img src={jwt} alt="art" />
                </div>
                <div className="no2">
                    <div><span className="first">03</span><span className="second"> JWT기반 REST API</span></div>
                    <div>
                        <h3>개발기간: 2019.07.01 ~ 2018.12.12</h3>
                        
                        <h3>Spring Boot를 사용한 JWT기반 REST API</h3>
                    </div>
                </div>
            </div>
            <div className="no3">
                <table border="0">
                    <thead>
                        <tr>
                            <th>Contents</th>
                            <th>Related keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spring Boot</td>
                            <td>JPA, Entity, Repository, Lombok, Validation, JWT, Logback </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>데이터베이스</td>
                            <td>PostgreSQL</td>
                        </tr>
                        <tr>
                            <td>JWT 인증</td>
                            <td>Access Token, Refresh Token</td>
                        </tr>
                        <tr>
                            <td>카드빈 체크</td>
                            <td>SOAP API</td>
                        </tr>
                        <tr>
                            <td>가상계좌조회</td>
                            <td>REST API</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Project;