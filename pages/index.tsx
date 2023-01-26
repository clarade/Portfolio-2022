import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios, { AxiosError } from 'axios';
import BlockRenderer from '../components/BlockRenderer';
import apiFetcher, { API_URL } from '../api/fetcher';
import { useConfig } from '../components/ConfigContext';
import { useEffect } from 'react';

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const { setHeader, setLinks } = useConfig();

	useEffect(() => {
		setHeader({
			fullName: props.config.full_name,
			job: props.config.job,
			logo: `${API_URL}${props.config.logo.url}`,
		});

		setLinks(props.config.pages);
	}, []);

	return (
		<div className="flex flex-col gap-5">
			{/* {projects.map((p) => {
				return (
					<div className="row my-4">
						<div className="card card-compact w-96 bg-base-100 shadow-xl">
							<figure>
								<img
									src={
										'http://localhost:1337' +
										p.attributes.Thumbnail.data.attributes.url
									}
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

			{props.page.blocks.map((block: any) => (
				<BlockRenderer {...block} key={block.__component + block.id} />
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const config = await apiFetcher.getConfig();
		const homepage = await apiFetcher.getHomepage();

		return {
			props: {
				page: homepage,
				config,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				error: (error as AxiosError).message,
				page: {
					blocks: [],
				},
				config: {
					logo: {},
				},
			},
		};
	}
};

export default Home;
