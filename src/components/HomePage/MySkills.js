import React from 'react';
import '../../Styles/HomePage.css';

const setSkills = (skills) => {
        
    return skills.map((skill) => {
         return <>
         <div class="item">
             <div class="content">
             <div class="header">{skill.topic}</div>
             </div>    
         </div>
         {/* <div class="proficiency">
         <div class="skills html"></div>
         </div> */}
         <div class="progress">
            <div class="progress-bar bg-teal" role="progressbar" style={{ width: `${skill.proficiency}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        
         </>
       })
 }

const MySkills = ( {skills} ) => {
     return (
        <div className="work-section skill-section">
        <div className="row">
            <div className="col-sm-12">
              <h1>My Skills</h1>
              <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            </div>            
        </div>
        <div className="ui middle aligned selection list skills-list">
            <div className="col-sm-6 align-right">            
            {setSkills(skills.slice(0, skills.length/2))}
            </div>
            <div className="col-sm-6 align-left">
            {setSkills(skills.slice(skills.length/2))}
            </div>
            </div>
        </div>
     )
}

export default MySkills;

