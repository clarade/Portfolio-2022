import { PropsWithChildren } from 'react';
import Hero from './blocks/Hero';
import { useConfig } from './ConfigContext';
import Navbar from './Navbar';

function Layout({ children }: PropsWithChildren<{}>) {
	const { header } = useConfig();
	return (
		<>
			<Hero full_name={header.fullName} job={header.job} logo={header.logo} />
			<Navbar />
			<main className="mx-auto container">{children}</main>
			<footer className="footer footer-center p-6 text-primary">
				<div>
					<p>Copyright © 2022 - Tous droits réservés, fait avec des larmes de sel</p>
				</div>
			</footer>
		</>
	);
}

export default Layout;
