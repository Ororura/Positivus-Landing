import { FC } from 'react';

type Props = {
	title: string;
	desc: string;
	maxWidth: string;
};

const Heading: FC<Props> = ({ title, desc, maxWidth }) => {
	return (
		<div className={`flex ${maxWidth} items-center`}>
			<h2 className={'bg-primary-light-green rounded-2xl px-[7px] text-[31px]'}>{title}</h2>
			<p className={'ml-10 max-w-[580px] text-[18px]'}>{desc}</p>
		</div>
	);
};

export { Heading };
