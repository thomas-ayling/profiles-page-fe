import React from 'react';
import ProfileSection from '../ProfileSection';
import ExperienceBlock from './ExperienceBlock';

const Experience = () => {
  const experienceData = [
    {
      company: 'GlobalLogic UK&I, Manchester, UK',
      title: 'Trainee Developer',
      timeline: 'Nov 22 - Present',
      summary: `- Graduated from 3 month training pathway.  
      \n- Worked in an agile team to create a full stack website for the Engineering center.
      \n- Supported the team and collaborated with others in the company to achieve our goals and meet deadlines.
      \n- Currently working on desiging a site for EVeryYouth, a charity focused on helping homeless yound people get back on their feet.`,
      technologies: ['Java', 'Spring', 'MyBatis', 'PostgreSql', 'Typescript', 'React', 'TailwindCss'],
    },
    {
      company: 'QA Ltd, Manchester, UK',
      title: 'Trainee Consultant',
      timeline: 'Apr 22 - Present',
      summary: `- Graduated from 3 month training pathway.  
      \n- Worked in an agile team to create a full stack website for the Engineering center.
      \n- Supported the team and collaborated with others in the company to achieve our goals and meet deadlines.
      \n- Currently working on desiging a site for EVeryYouth, a charity focused on helping homeless yound people get back on their feet.`,
      technologies: ['Java', 'Spring', 'MyBatis', 'PostgreSql', 'Typescript', 'React', 'TailwindCss'],
    },
  ];

  return (
    <div>
      <ProfileSection title='Experience'>
      {experienceData.map((data) => (
        <ExperienceBlock data={data} />
      ))}
      </ProfileSection>
    </div>
    
  );
};

export default Experience;
