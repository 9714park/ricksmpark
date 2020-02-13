import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      /*       var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      }); */
      var prog_lang = this.props.data.programming_language.map(function(
        skills
      ) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var web_dev = this.props.data.web_development.map(function(skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var mob_dev = this.props.data.mobile_development.map(function(skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id='resume'>
        {/* 
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}

        <div className='column1'>
          <div className='row skill'>
            <div className='three columns header-col'></div>

            <div className='nine columns main-col'>
              <h1>
                <span>Programming Languages</span>
              </h1>
              <div className='bars'>
                <ul className='skills'>{prog_lang}</ul>
              </div>
            </div>
          </div>
        </div>

        <div className='column2'>
          <div className='row skill'>
            <div className='three columns header-col'></div>

            <div className='nine columns main-col'>
              <h1>
                <span>Web Development</span>
              </h1>
              <div className='bars'>
                <ul className='skills'>{web_dev}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
