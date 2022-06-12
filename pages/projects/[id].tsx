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
	return <div>{props.project.Title}</div>;
}

function Infos(props: ProjectDetails) {
	return (
		<>
			<div>{props.date}</div>
			<div>{props.created_at}</div>
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
