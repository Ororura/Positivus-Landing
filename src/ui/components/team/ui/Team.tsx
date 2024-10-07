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
      <div>
        <TeamMember />
      </div>
    </div>
  );
};

export { Team };
