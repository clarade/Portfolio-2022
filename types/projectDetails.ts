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
	small: Small;
	thumbnail: Thumbnail;
}

// export interface Image {
// 	id: number;
// 	name: string;
// 	alternativeText: string;
// 	caption: string;
// 	width: number;
// 	height: number;
// 	formats: Formats;
// 	hash: string;
// 	ext: string;
// 	mime: string;
// 	size: number;
// 	url: string;
// 	previewUrl?: any;
// 	provider: string;
// 	provider_metadata?: any;
// 	created_at: Date;
// 	updated_at: Date;
// }

// export interface ProjectDetails {
// 	id: number;
// 	date: string;
// 	text: string;
// 	published_at: Date;
// 	created_at: Date;
// 	updated_at: Date;
// 	images: Image[];
// }

export interface ImgSquare {
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

export interface VideoMain {
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

export interface ImgMain {
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

export interface ImgRectangle {
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

export interface ImgGif {
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

export interface Images {
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

export interface ProjectDetails {
	id: number;
	date: string;
	text: string;
	published_at: Date;
	created_at: Date;
	updated_at: Date;
	isMainImage?: Boolean;
	tag?: any;
	isMainVideo?: Boolean;
	isGrid?: boolean;
	images: Images[];
	video_main: VideoMain;
	img_main: ImgMain[];
	img_gif: ImgGif[];
}
