import Link from 'next/link';
import { useEffect } from 'react';
import apiFetcher, { API_URL } from '../../api/fetcher';
import { useConfig } from '../../components/ConfigContext';
import { Item } from '../Project.types';

function Card(props: Item) {
	const img = `${API_URL}${props.thumbnail.url}`;
	return (
		<Link href={`/projects/${props.id}`}>
			<div className="card card-compact w-96 bg-base-100 shadow-xl m-4 h-full">
				<figure>
					<img className="h-96 w-full object-cover" src={img} alt={props.title} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<p>{props.description}</p>
				</div>
				<div className="p-4 flex justify-end">
					<button className="btn btn-primary btn-sm">{props.cta_button}</button>
				</div>
			</div>
		</Link>
	);
}

export default Card;
