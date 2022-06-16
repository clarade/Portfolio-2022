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
			<footer className="footer footer-center p-8 mt-4 mb-4 text-primary">
				<div>
					<p>Copyright © 2022 - Clara Desperben — Tous droits réservés</p>
				</div>
			</footer>
		</>
	);
}

export default Layout;
