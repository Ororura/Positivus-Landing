import { FC } from 'react';
import Image from 'next/image';

const Header: FC = () => {
	return (
		<header className={'max-w-1440 px-100 h-68 m-60-custom flex justify-between items-center'}>
			<Image src={'/assets/svg/Logo.svg'} width={220} height={36} alt='Logo' />
			<nav className='flex gap-10'>
				<a>About us</a>
				<a>Services</a>
				<a>Use Cases</a>
				<a>Pricing</a>
				<a>Blog</a>
				<a>Request quote</a>
			</nav>
		</header>
	);
};

export { Header };
