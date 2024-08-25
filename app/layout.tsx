import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('http://localhost:3000/'),
	title: 'Car Shop | Eng.Ahmed',
	description: 'Car Shop To Rent and Buy Cars',
	openGraph: {
		images: '/og-image.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='relative'>
				{children}
			</body>
		</html>
	)
}
