import Link from 'next/link';
import { useConfig } from './ConfigContext';

function Navbar() {
	const { links } = useConfig();

	return (
		<>
			<div>
				<div className="row flex justify-center my-4">
					<div className="tabs font-argesta_regular main-tabs">
						{(links || []).map((link) => (
							<Link key={link.id} href={`/${link.slug === 'home' ? '' : link.slug}`}>
								<a className="tab tab-bordered">{link.name}</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
