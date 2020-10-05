import React, { useState, useEffect } from 'react';
import '../../Styles/HomePage.css';
import profile from '../../images/profile.jpg'; 
import cv from '../../assets/Tamali_Roy_Resume.pdf';
import WorkExperience from './workExperience';
import MySkills from './MySkills';
import {
    Link,
    NavLink,
    Route
  } from 'react-router-dom';

const HomePage = () => {
    
    const userInfo = {
        name: 'Tamali Roy',
        occupation: 'Front end developer',
        skills: [{ topic: 'Angular8', proficiency: '8'},
        { topic: 'ReactJs', proficiency: '7'},
        { topic: 'Redux', proficiency: '6'},
        { topic: 'Javascript', proficiency: '8'},
        { topic: 'HTML', proficiency: '8'},
        { topic: 'CSS', proficiency: '7'}],
        aboutMe: 'Hello there. I am a Front end developer having 3 years of experience working in a corporate environment, with strong technical skill in complex web based applications. Have experience in developing responsive websites using Angular 8, ReactJs, Redux, javascript, HTML5, CSS3,Good experience in developing single page applications',
        toolsUsed: 'Visual Studio Code, GIT bash, NPM, Webpack, Gulp',
        contact: { email: 'tamali95roy@gmail.com', phoneNo: '9674352466'},
        workExperience: [{client: 'Fidelity Investment', duration: '2018 Jan - 2020 May', role: 'Front end developer having 3 years of experience'},
        {client: 'Nassau Re Insurance', duration: '2020 Jun - Present', role: 'Front end developer'},
        {client: 'Nassau Re Insurance', duration: '2020 Jun - Present', role: 'Front end developer'} ]

    }

    const [userDetails, setUserDetails] = useState(userInfo);

    const setContactDetails = () => {
      return (<>
         <div class="item">
            <div class="content">
                <div class="header">
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        {userDetails.contact.email}
                    </div>
                </div>    
            </div>
            <div class="item">
                <div class="content">
                    <div class="header">
                        <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                            {userDetails.contact.phoneNo}
                    </div>
                </div>    
            </div>
          </>          
      )
    }

    return (
        <>
        <div className="">
            <div className="row">
                <div className="col-sm-4 sidenav">
                  <div className="sidebar overlay">
                      <img src={profile} className="rounded-corners"/>
                      <h3 className="profile-name">{userDetails.name}</h3>
                      <h4>{userDetails.occupation.toUpperCase()}</h4><hr/>
                      <div className="contact-detail">
                      <div class="ui middle aligned selection list">
                      <div class="item">
                        <div class="content">
                          <div class="header">
                          <a href= {cv} download>MY CV</a>
                          </div>
                        </div>    
                     </div>
                     <div class="item">
                        <div class="content">
                          <div class="header">
                             MY OFFERS
                          </div>
                        </div>    
                     </div>
                    </div>
                    <h5>GET IN TOUCH</h5>
                            <a href="mailto:tamali95roy@gmail.com" target="_blank"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.google.com" target="_blank"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.google.com" target="_blank"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://github.com/tamaliroy" target="_blank"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://github.com/tamaliroy" target="_blank"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>                     
                      </div>
                      
                  </div>
                </div>
                <div className="col-sm-8 about">
                   <div id="about-section">
                       <div className="container">
                       <div className="row">
                         <h2>PORTFOLIO</h2>
                         <div>                           
                             <p>A <span className="text-color">front end developer</span> with <span className="text-color">3 years of experience.</span></p>
                             <p>{userDetails.aboutMe}</p>
                         </div>
                       </div><hr/>
                       <div className="row">
                           <p>My current experience and skills in front end includes:
                           <div class="ui bulleted list">
                            <div class="item">lead TypeScript/JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup;</div>
                            <div class="item">full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual snapshots,</div>
                            <div class="item">good sense of design and UX</div>
                            <div class="item">huge experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Redux-Observable, RxJS, Angular, Ionic Framework, Backbone, jQuery, Lodash/Underscore and many else.</div>
                            </div>
                           </p>
                       </div>
                     
                       </div>
                    
                      
                      
                   </div>
                </div>
            </div>   
            </div>  
            <MySkills skills={userDetails.skills}/>      
            <WorkExperience workHistory={userDetails.workExperience}/>
            
            </>
        
    
    );
};

export default HomePage;