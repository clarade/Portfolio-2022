import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import apiFetcher, { API_URL } from '../../api/fetcher';
import { ProjectDetail } from '../../api/Project.types';
import { useConfig } from '../../components/ConfigContext';
import { ProjectDetails } from '../../types/projectDetails';

function Project(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { setHeader, setLinks } = useConfig();

	useEffect(() => {
		setHeader({
			fullName: props.config.full_name,
			job: props.config.job,
			logo: `${API_URL}${props.config.logo.url}`,
		});

		setLinks(props.config.pages || []);
	}, []);

	return (
		<>
			<div>
				{/* <div className="max-w-xs text-sm breadcrumbs p-8 mt-6 mb-12">
					<ul>
						<li>Long text 1</li>
						<li>Long text 2</li>
					</ul>
				</div> */}
			</div>
			<div>
				<div className="p-5 project-title text-center">{props.project.title}</div>
				<Infos {...props.project.project_detail} />
			</div>
		</>
	);
}

export function Infos(props: ProjectDetail) {
	// const mainImg = `${API_URL}${props.img_main.url}`;
	// const mainVideo = `${API_URL}${props.video_main.url}`;
	return (
		<>
			<div>
				{/* {props.isMainImage ? (
					<div className="flex justify-center rounded">
						<figure>{<img src={mainImg} />}</figure>
					</div>
				) : (
					<div></div>
				)}
				{props.isMainVideo ? <div className="flex justify-center w-5/6">{<img src={mainVideo} />}</div> : <div></div>} */}
			</div>
			<div>
				{props.isGridPhoto ? (
					<div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 p-4">
						{props.images.map((image) => {
							return (
								<img className="h-full w-full object-cover" src={`${API_URL}${image.url}`} alt="" key={image.hash} />
							);
						})}
					</div>
				) : (
					<div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 p-4 sm:grid-cols-2">
						{props.images.map((image) => {
							return <img className="" src={`${API_URL}${image.url}`} alt="" key={image.hash} />;
						})}
					</div>
				)}
			</div>
			<div className="grid grid-cols-1 m-4">
				<span className="w-full thin my-4 bg-primary"></span>
				<div className="badge badge-primary badge-outline font-font_Argesta py-4">{props.tag}</div>
				<div className="my-4">
					<i>{props.date}</i>
				</div>
				<div className="mb-24">
					<ReactMarkdown>{props.text}</ReactMarkdown>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	if (!ctx.params) {
		throw new Error();
	}

	const config = await apiFetcher.getConfig();

	const project = await apiFetcher.getProject(ctx.params.id as string);

	return {
		props: {
			project,
			config,
		},
	};
};

export default Project;
