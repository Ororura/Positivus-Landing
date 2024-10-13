import { FC } from 'react';
import { Heading } from 'components/heading/ui';
import { TeamMember } from 'components/teamMember/ui';

const Team: FC = () => {
  return (
    <div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
      <Heading
        title={'Team'}
        maxWidth={'max-w-[628px]'}
        desc={<p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>}
      />
      <div className={'mt-[80px] grid grid-cols-3 gap-[40px]'}>
        <TeamMember
          photo={'John.png'}
          name={'John Smith'}
          position={'CEO and Founder'}
          experience={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}
        />
        <TeamMember
          photo={'Jane.png'}
          name={'Jane Doe'}
          position={'Director of Operations'}
          experience={
            '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
          }
        />
        <TeamMember
          photo={'Michael.png'}
          name={'Michael Brown'}
          position={'Senior SEO Specialist'}
          experience={
            '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
          }
        />
        <TeamMember
          photo={'Emily.png'}
          name={'Emily Johnson'}
          position={'PPC Manager'}
          experience={
            '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
          }
        />
        <TeamMember
          photo={'Brian.png'}
          name={'Brian Williams'}
          position={'Social Media Specialist'}
          experience={
            '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
          }
        />
        <TeamMember
          photo={'Sarah.png'}
          name={'Sarah Kim'}
          position={'Content Creator'}
          experience={
            '2+ years of experience in writing and editing\n' +
            'Skilled in creating compelling, SEO-optimized content for various industries'
          }
        />
      </div>
      <div className={'mt-[40px] flex w-full justify-end'}>
        <div className={'grid h-[68px] w-[269px] items-center rounded-2xl bg-black text-center text-white'}>
          <p>See all team</p>
        </div>
      </div>
    </div>
  );
};

export { Team };
