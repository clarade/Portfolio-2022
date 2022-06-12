type HeroProps = {
	full_name: string;
	job: string;
	logo: string;
};

function Hero({ full_name, job, logo }: HeroProps) {
	return (
		<>
			<div className="flex justify-center">
				<img src={logo} alt={full_name} height={40} width={40} />
			</div>
			<div className="flex justify-center">
				<h1 className="font-parking">{full_name}</h1>
			</div>
			<div className="flex justify-center">
				<h2 className="font-argesta_courant text-center">{job}</h2>
			</div>
		</>
	);
}

export default Hero;
