import { FC } from 'react';
import { Landing } from 'components/landing/ui/Landing';
import { Services } from 'components/services/ui';
import { CTA } from 'components/cta/ui';
import { CaseStudies } from 'components/caseStudies/ui';

const Home: FC = () => {
	return (
		<main>
			<Landing />
			<Services />
			<CTA />
			<CaseStudies />
			{/*<WorkingProcess />*/}
		</main>
	);
};

export default Home;
