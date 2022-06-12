import ReactMarkdown from 'react-markdown';
import { BlockBio } from '../Bio.types';
import apiFetcher, { API_URL } from '../../api/fetcher';

function Bio(props: BlockBio) {
	// [onclick, setOnclick] = useState();
	const fullUrl = (url: string) => `${API_URL}${url}`;

	const thumbnail = fullUrl(props.thumbnail.url);

	return (
		<>
			<div className="card bg-base-100 shadow-xl m-4">
				<div className="figure">
					<figure>
						<img src={thumbnail} alt={props.title} className="rounded" height={60} />
					</figure>
				</div>
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<ReactMarkdown>{props.description}</ReactMarkdown>
					<div className="card-actions justify-end mt-8">
						<button className="btn btn-primary btn-sm">Télécharger le CV</button>
					</div>
				</div>
			</div>
			<div className="card lg:card-side bg-base-100 shadow-xl m-4">
				<div className="grid grid-cols-5"></div>
				<div className="card-body">
					<h2 className="card-title">{props.tools}</h2>
					<div className="">
						{props.tools_img.map((img) => {
							return <img src={fullUrl(img.url)} width={40} height={40} />;
						})}
					</div>
					<h2 className="card-title">{props.interests}</h2>
					<div className="">
						{props.interests_img.map((img) => {
							return <img src={fullUrl(img.url)} width={40} height={40} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Bio;
