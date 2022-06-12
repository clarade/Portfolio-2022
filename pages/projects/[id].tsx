import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
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
		<div>
			<div className="font-font_Argesta">{props.project.title}</div>
			<div>{props.project.description}</div>

			<Infos {...props.project.project_detail} />
		</div>
	);
}

export function Infos(props: ProjectDetail) {
	return (
		<>
			<div className="badge badge-primary badge-outline font-font_Argesta">{props.tag}</div>
			<div>
				{props.isMainImage ? (
					<div className="flex justify-center rounded">
						<figure>
							<img />
						</figure>
					</div>
				) : <></> || props.isMainVideo ? (
					<div className="flex justify-center rounded">
						<img />
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
				{props.images.map((image) => {
					return <img src={`${API_URL}${image.url}`} alt="" key={image.hash} />;
				})}
			</div>

			<div>{props.date}</div>
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
