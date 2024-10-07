import { FC } from 'react';
import { Landing } from 'components/landing/ui/Landing';
import { Services } from 'components/services/ui';
import { CTA } from 'components/cta/ui';
import { CaseStudies } from 'components/caseStudies/ui';
import { WorkingProcess } from 'components/workingProcess/ui';
import { Team } from 'components/team/ui';

const Home: FC = () => {
  return (
    <main>
      <Landing />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Team />
    </main>
  );
};

export default Home;
