import axios from 'axios';
import { ProjectDetails } from '../types/projectDetails';
import { Project } from './Project.types';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
	baseURL: API_URL,
});

type Body = { email: string; message: string };

interface Fetcher {
	getHomepage: () => Promise<Homepage>;
	getPage: (slug: string) => Promise<Homepage>;
	getConfig: () => Promise<Config>;
	createMessage: (body: Body) => Promise<Body>;
	getProjectDetails: (id: string) => Promise<ProjectDetails>;
	getProject: (id: string) => Promise<Project>;
}

const apiFetcher: Fetcher = {
	getHomepage: () => api.get('/pages?slug=home').then((res) => res.data[0]),
	getPage: (slug) => api.get(`/pages?slug=${slug}`).then((res) => res.data[0]),
	getConfig: () =>
		api.get('/config').then((res) => {
			const { pages, ...rest } = res.data;
			return {
				...rest,
				pages: pages.map(({ ...page }) => page), //blocks,
			};
		}),
	createMessage: (body) => api.post('/messages', body).then((res) => res.data),
	getProjectDetails: (id) => api.get(`/project-details/${id}`).then((res) => res.data),
	getProject: (id) => api.get(`/projects/${id}`).then((res) => res.data),
};

export default apiFetcher;

interface Homepage {
	id: number;
	slug: string;
}

interface Config {
	id: number;
	full_name: string;
	job: string;
	logo: { url: string };
	pages: Page[];
}

export interface Page {
	id: number;
	title: string;
	slug: string;
	name: string;
}
