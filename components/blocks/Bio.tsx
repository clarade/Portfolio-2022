import ReactMarkdown from 'react-markdown';
import { BlockBio } from '../Bio.types';
import apiFetcher, { API_URL } from '../../api/fetcher';

function Bio(props: BlockBio) {
	// [onclick, setOnclick] = useState();
	const fullUrl = (url: string) => `${API_URL}${url}`;

	const thumbnail = fullUrl(props.thumbnail.url);
	const cvPicture = fullUrl(props.cv_picture.url);

	return (
		<>
			<div className="card bg-base-100 shadow-xl mt-10 mb-4 mx-4">
				<div className="figure">
					<figure>
						<img src={thumbnail} alt={props.title} className="rounded-full h-48 w-auto mt-8 mb-4" />
					</figure>
				</div>
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<ReactMarkdown>{props.description}</ReactMarkdown>
					<div className="card-actions justify-end mt-8">
						<a target="_blank" href={cvPicture} rel="noopener noreferrer" className="btn btn-primary btn-sm">
							Consulter le CV
						</a>
					</div>
				</div>
			</div>
			<div className="card lg:card-side bg-base-100 shadow-xl m-4">
				<div className="card-body">
					<h2 className="card-title">{props.tools}</h2>
					<div className="grid grid-cols-3 lg:grid-cols-5 my-6 place-items-center gap-4">
						{props.tools_img.map((img) => {
							return <img src={fullUrl(img.url)} key={img.hash} width={40} height={40} />;
						})}
					</div>
					<h2 className="card-title">{props.interests}</h2>
					<div className="grid grid-cols-3 lg:grid-cols-5 my-6 place-items-center gap-4">
						{props.interests_img.map((img) => {
							return <img src={fullUrl(img.url)} width={40} height={40} key={img.hash} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Bio;
