import { FC } from 'react';
import { Heading } from 'components/heading/ui/Heading';
import { LearnMore } from 'components/learnMore/ui';

const CaseStudies: FC = () => {
	return (
		<div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
			<Heading
				maxWidth={'max-w-[885px]'}
				title={'Case Studies'}
				desc={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}
			/>
			<div
				className={
					'bg-primary-dark mt-[80px] flex justify-between rounded-[45px] px-[60px] pb-[93px] pt-[70px] text-white'
				}
			>
				<div className={'max-w-[286px]'}>
					<p>
						For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
						traffic and a 25% increase in sales.
					</p>
					<LearnMore />
				</div>
				<div className={'min-h-[186px] border-[1px] border-white'}></div>
				<div className={'max-w-[286px]'}>
					<p>
						For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key
						keywords and a 200% increase in organic traffic.
					</p>
					<LearnMore />
				</div>
				<div className={'min-h-[186px] border-[1px] border-white'}></div>
				<div className={'max-w-[286px]'}>
					<p>
						For a national retail chain, we created a social media marketing campaign that increased followers by 25%
						and generated a 20% increase in online sales.
					</p>
					<LearnMore />
				</div>
			</div>
		</div>
	);
};

export { CaseStudies };
