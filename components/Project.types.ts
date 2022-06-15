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

export interface Thumbnail2 {
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
	small: Small;
	thumbnail: Thumbnail2;
}

export interface Thumbnail {
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

export interface Item {
	id: number;
	title: string;
	description: string;
	published_at: Date;
	created_at: Date;
	updated_at: Date;
	slug: string;
	project_detail: number;
	thumbnail: Thumbnail;
	isLandscape: boolean;
	cta_button: string;
}

export interface BlockProjects {
	__component: 'block.projects';
	id: number;
	items: Item[];
	withPagination: boolean;
	title: string;
}
