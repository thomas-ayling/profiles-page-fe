import React from 'react';
import Experience from '../components/profiles/experience/Experience';
import ProfilesHeader from '../components/profiles/profiles-header/ProfilesHeader';
import Summary from '../components/profiles/summary/Summary';

const Profile = () => {
  return (
    <div>
      <ProfilesHeader />
      <div className='w-2/3 m-auto h-fit'>
        <Summary />
        <Experience />
      </div>
    </div>
  );
};

export default Profile;
