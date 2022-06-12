export interface Large {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Small {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Medium {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Formats {
	large: Large;
	small: Small;
	medium: Medium;
	thumbnail: Thumbnail;
}

export interface Image {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: any;
	provider: string;
	provider_metadata?: any;
	created_at: Date;
	updated_at: Date;
}

export interface ProjectDetail {
	id: number;
	date: string;
	text: string;
	published_at: Date;
	created_at: Date;
	updated_at: Date;
	isMainImage?: any;
	tag: string;
	isMainVideo?: any;
	isGrid?: any;
	images: Image[];
	img_square: any[];
	video_main?: any;
	img_main: any[];
	img_gif: any[];
}

export interface Large2 {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Small2 {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Medium2 {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Thumbnail3 {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: any;
	size: number;
	width: number;
	height: number;
}

export interface Formats2 {
	large: Large2;
	small: Small2;
	medium: Medium2;
	thumbnail: Thumbnail3;
}

export interface Thumbnail2 {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats2;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: any;
	provider: string;
	provider_metadata?: any;
	created_at: Date;
	updated_at: Date;
}

export interface Project {
	id: number;
	Title: string;
	description: string;
	published_at: Date;
	created_at: Date;
	updated_at: Date;
	slug: string;
	project_detail: ProjectDetail;
	title: string;
	isLandscape: boolean;
	cta_button: string;
	thumbnail: Thumbnail2;
}
