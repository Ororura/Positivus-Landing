import { FC } from 'react';
import { Card } from 'components/card/ui';
import { useSplitTitle } from 'components/services/hooks';
import { getData } from 'components/services/lib';

const Services: FC = async () => {
	const { split } = useSplitTitle();
	const data = (await getData()) as [
		{
			title: string;
			bgColorText: string;
			bgColor: string;
			learnMoreIcon: string;
			learnMoreColor: string;
			image: string;
		},
	];

	console.log(data);

	return (
		<div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
			<div className={'flex max-w-[798px] items-center'}>
				<h2 className={'bg-primary-light-green rounded-2xl px-[7px] text-[40px]'}>Services</h2>
				<p className={'ml-10 text-lg'}>
					At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
					These services include:
				</p>
			</div>
			<div className={'mt-[80px] grid grid-cols-2 gap-10'}>
				{data &&
					data.map((data, idx) => (
						<Card
							key={idx}
							title={split(data.title)}
							image={data.image}
							bgColorText={data.bgColorText}
							bgColor={data.bgColor}
							learnMoreIcon={data.learnMoreIcon}
							learnMoreColor={data.learnMoreColor}
						/>
					))}
			</div>
		</div>
	);
};

export { Services };
