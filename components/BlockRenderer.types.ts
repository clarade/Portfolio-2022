import { BlockBio } from './Bio.types';
import { BlockProjects } from './Project.types';
import { BlockContact } from './Contact.types';

export type BlockRendererProps = {
	id: number;
} & (BlockProjects | BlockBio | BlockContact);
