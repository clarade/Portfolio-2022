import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
import apiFetcher, { API_URL } from '../../api/fetcher';
import { useConfig } from '../../components/ConfigContext';
import { ProjectDetails } from '../../types/projectDetails';
import { Item } from '../../components/Project.types';

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
		<div>
			<div className="font-font_Argesta">{props.project.title}</div>
			<div>{props.project.description}</div>
		</div>
	);
}

export function Infos(props: ProjectDetails) {
	return (
		<>
			<div className="badge badge-primary badge-outline font-font_Argesta">{props.tag}</div>
			<div>{props.date}</div>
			<div>{props.img_square}</div>
			<div>
				{props.isMainImage ? (
					<div>
						<figure>
							<img />
						</figure>
					</div>
				) : <></> || props.isMainVideo ? (
					<div>
						<img />
					</div>
				) : (
					<></>
				)}
			</div>
			<div>{props.isGrid ? <div></div> : <div></div>}</div>
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
