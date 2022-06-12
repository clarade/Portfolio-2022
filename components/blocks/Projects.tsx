import { INSPECT_MAX_BYTES } from 'buffer';
import { useEffect, useState } from 'react';
// import { title } from 'process';
import { BlockProjects, Item } from '../Project.types';
import Card from './Card';

function Projects(props: BlockProjects) {
	const [projects, setProjects] = useState<Item[]>([]);

	useEffect(() => {
		const firstSix = props.items.slice(0, 6);

		setProjects(firstSix);
	}, []);

	return (
		<div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto my-8">
				{projects.map((item) => (
					<Card {...item} key={item.id} />
				))}
			</div>

			{props.withPagination && props.items.length > 6 && (
				<div className="flex flex-row justify-center m-4">
					<div className="btn-group">
						<button className="btn btn-sm">1</button>
						<button className="btn btn-sm btn-active">2</button>
						<button className="btn btn-sm">3</button>
						<button className="btn btn-sm">4</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;
