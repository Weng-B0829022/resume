import React from 'react';

interface SideProjectItem {
	title: string;
	period: string;
	description: string;
	organization: string;
	image: string;
}

interface SideProjectsProps {
	data: SideProjectItem[];
}

const SideProjects: React.FC<SideProjectsProps> = ({ data }) => {
	return (
		<section>
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">Side Projects</h2>
		<div className="space-y-6">
			{data.map((project, index) => (
				<div key={index}>
					<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
						<h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
						<span className="text-gray-600 md:text-right">{project.period}</span>
					</div>
					<img src={project.image} alt={project.title} className="w-1/2 h-1/2" />
					<p className="text-gray-700">
						{project.description}
						<span className="block text-sm text-gray-600 mt-1 justify-end flex">{project.organization}</span>
					</p>
				</div>
			))}
		</div>
		</section>
	);
};

export default SideProjects; 