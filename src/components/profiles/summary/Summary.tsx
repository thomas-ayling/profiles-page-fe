import React from 'react';
import Markdown from '../../markdown/Markdown';
import ProfileSection from '../ProfileSection';

const Summary = () => {
  const text = `Hi there,
    \nI am a backend Software Developer working with GlobalLogic in order to help our clients create robust systems solutions.
    \nI have great people skills and experience developing full stack applications in Java, Spring, Typescript and React. 
    \n- Full stack application develpoment
    \n- Team management
    \n- Practiced agile methodologies
    \n- Passionate about UX`;
  return (
    <ProfileSection title='Summary'>
      <Markdown text={text} />
    </ProfileSection>
  );
};

export default Summary;
