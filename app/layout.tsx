import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Positivus',
	description: 'Digital marketing agency',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${spaceGrotesk.className}`}>{children}</body>
		</html>
	);
}
