import React from 'react';
import '../../Styles/HomePage.css';

const WorkExperience = ({ workHistory }) => {

   const displayWorkHistory = () => {
        return workHistory.map((item) => {
           return (
            <div className="row">
            <div className="col-sm-12 flex">
                <div className="col-sm-6" style={{textAlign: 'right'}}>
                 {item.client}{item.duration}                
                </div>  
                <span class="vertical-line"></span>             
               <i class="fa fa-briefcase fa-3x" aria-hidden="true"></i>
                <div className="col-sm-6" style={{textAlign: 'left'}}>
                {item.role}
                </div>
            </div>
            </div>
           )
        })
    }

    return(
        <div className="work-section">
        <div className="row">
            <div className="col-sm-12">
              <h1>Here is a little of my story</h1>
              <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            </div>            
        </div>
          {displayWorkHistory()}
        </div>
    )
}

export default WorkExperience;