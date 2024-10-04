import { FC } from 'react';
import { Heading } from 'components/heading/ui/Heading';
import { ProcessContainer } from 'components/workingProcess/ui/ProcessContainer';

const WorkingProcess: FC = () => {
	const description = () => {
		return (
			<p className={'ml-10 max-w-[580px] text-[18px]'}>
				Step-by-Step Guide to Achieving <br /> Your Business Goals
			</p>
		);
	};

	return (
		<div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
			<Heading maxWidth={'max-w-[828px]'} title={'Our Working Process '} desc={description()} />
			<div
				className={`min-h[310px] py mt-[80px] max-w-[1234px] rounded-[45px] border border-b-[6px] border-black bg-primary-light-green px-[60px] py-[41px]`}
			>
				<div className={'flex items-center'}>
					<span className={`text-[60px]`}>01</span>
					<span className={`ml-[25px] text-[30px]`}>Consultation</span>
				</div>
				<p className={`ml-[15px] border-t border-black pt-[30px] text-[20px]`}>
					During the initial consultation, we will discuss your business goals and objectives, target audience, and
					current marketing efforts. This will allow us to understand your needs and tailor our services to best fit
					your requirements.
				</p>
			</div>
			<ProcessContainer count={'02'} text={'Research and Strategy Development'} />
			<ProcessContainer count={'03'} text={'Implementation'} />
			<ProcessContainer count={'04'} text={'Monitoring and Optimization'} />
			<ProcessContainer count={'05'} text={'Reporting and Communication'} />
			<ProcessContainer count={'06'} text={'Continual Improvement'} />
		</div>
	);
};

export { WorkingProcess };
