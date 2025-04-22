import React from 'react';

interface ExperienceItem {
	title: string;
	period: string;
	description: string | string[];
}

interface ExperienceProps {
	data: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
	return (
		<section className="container mx-auto px-6 py-8">
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">EXPERIENCE</h2>
		{data.map((item, index) => (
			<div key={index} className="mb-8">
				<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
					<h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
					<span className="text-gray-600 md:text-right">{item.period}</span>
				</div>
				<ul className="list-disc pl-6 text-gray-700 space-y-2">
					{typeof item.description === 'string' ? (
						<li>
							<span className="font-medium">{item.description}</span>
						</li>
					) : (
						item.description.map((desc, descIndex) => (
							<li key={descIndex}>
								<span className="font-medium">{desc}</span>
							</li>
						))
					)}
				</ul>
			</div>
		))}
		</section>
	);
};

export default Experience; 