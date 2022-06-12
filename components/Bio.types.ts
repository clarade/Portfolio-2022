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

export interface InterestsImg {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats?: any;
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

export interface ToolsImg {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats?: any;
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

export interface CvPicture {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats?: any;
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

export interface BlockBio {
	__component: 'block.bio';
	id: number;
	description: string;
	thumbnail: Thumbnail;
	title: string;
	cv_picture: CvPicture;
	interests: string;
	interests_img: InterestsImg[];
	tools: string;
	tools_img: ToolsImg[];
}
