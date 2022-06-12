import Link from 'next/link';
import { useRouter } from 'next/router';
import { useConfig } from './ConfigContext';

function Navbar() {
	const router = useRouter();
	const { links } = useConfig();

	const isActive = (current: string) => `/${current}` === router.asPath;

	return (
		<>
			<div>
				<div className="row flex justify-center my-4">
					<div className="tabs font-argesta_regular main-tabs">
						{(links || []).map((link) => (
							<Link key={link.id} href={`/${link.slug === 'home' ? '' : link.slug}`}>
								<a className={`tab tab-bordered ${isActive(link.slug === 'home' ? '' : link.slug) && 'tab-active'}`}>
									{link.name}
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
