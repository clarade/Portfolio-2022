import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import BlockRenderer from '../components/BlockRenderer';
import apiFetcher, { API_URL } from '../api/fetcher';
import { useConfig } from '../components/ConfigContext';
import { useEffect } from 'react';
import { BlockRendererProps } from '../components/BlockRenderer.types';
import { useRouter } from 'next/router';

function SlugPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { setHeader, setLinks } = useConfig();

	useEffect(() => {
		if (!router.isFallback) {
			setHeader({
				fullName: props.config.full_name,
				job: props.config.job,
				logo: `${API_URL}${props.config.logo.url}`,
			});
			setLinks(props.config.pages);
		}
	}, [router.isFallback]);

	if (router.isFallback) {
		return <div>loading...</div>;
	}

	return (
		<div className="flex flex-col gap-5">
			{/* {projects.map((p) => {
				return (
					<div className="row my-4">
						<div className="card card-compact w-96 bg-base-100 shadow-xl">
							<figure>
								<img
									src={'http://localhost:1337' + p.attributes.Thumbnail.data.attributes.url}
									alt={p.attributes.Title}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{p.attributes.Title}</h2>
								<label>{p.attributes.Date}</label>
								<p>{p.attributes.Description}</p>
							</div>
						</div>
					</div>
				);
			})} */}

			{props.page?.blocks.map((block: BlockRendererProps) => (
				<BlockRenderer {...block} key={block.__component + block.id} />
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const [config, page] = await Promise.all([apiFetcher.getConfig(), apiFetcher.getPage(ctx.params!.slug as string)]);

		return {
			props: {
				page,
				config,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			notFound: true,
			props: {
				error,
			},
		};
	}
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export default SlugPage;
