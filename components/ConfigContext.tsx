import { LinkProps } from 'next/link';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { Page } from '../api/fetcher';

interface ConfigContext {
	header: {
		fullName: string;
		job: string;
		logo: string;
	};
	setHeader: Dispatch<SetStateAction<{ fullName: string; job: string; logo: string }>>;
	links: Page[] | undefined;
	setLinks: Dispatch<SetStateAction<Page[]>>;
}

export const configContext = createContext({} as ConfigContext);

export const useConfig = () => {
	const config = useContext(configContext);
	return config;
};

export function ConfigProvider({ children }: PropsWithChildren<{}>) {
	const [header, setHeader] = useState({
		fullName: '',
		job: '',
		logo: '',
	});

	const [links, setLinks] = useState<Page[]>([]);

	return <configContext.Provider value={{ header, setHeader, links, setLinks }}>{children}</configContext.Provider>;
}
