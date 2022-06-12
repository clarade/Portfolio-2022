import { BlockRendererProps } from './BlockRenderer.types';
import Projects from './blocks/Projects';
import Bio from './blocks/Bio';
import Contact from './blocks/Contact';

function BlockRenderer(props: BlockRendererProps) {
	if (props.__component === 'block.projects') {
		return <Projects {...props} />;
	}

	if (props.__component === 'block.bio') {
		return <Bio {...props} />;
	}

	if (props.__component === 'block.contact') {
		return <Contact {...props} />;
	}

	return null;
}

export default BlockRenderer;
