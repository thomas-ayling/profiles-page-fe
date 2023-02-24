import React from 'react';
import { MdBusiness } from 'react-icons/md';
import Markdown from '../../markdown/Markdown';
import ProfileSection from '../ProfileSection';
import { ExperienceDataType } from './ExperienceDataType';

type Props = { data: ExperienceDataType };

const ExperienceBlock = ({ data }: Props) => {
  return (
    <ProfileSection title={data.title} icon={<MdBusiness className='w-5 h-5' />}>
      <h1 className='font-semibold'>{data.company}</h1>
      <h2 className='font-semibold'>{data.timeline}</h2>
      <hr className='my-2' />
      <h3 className='mb-2 font-semibold'>Role Summary:</h3>
      <Markdown text={data.summary} />
      <hr className='my-2' />
      <h3 className='mb-2 font-semibold'>Technologies:</h3>
      <ul className='flex -ml-2 list-disc'>
        {data.technologies.map((tech) => (
          <li className='ml-6'>{tech}</li>
        ))}
      </ul>
    </ProfileSection>
  );
};

export default ExperienceBlock;
