import React from 'react';

const Projects = () => {
	return (
		<section>
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">Projects</h2>
		<div className="space-y-6">
			<div>
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-lg font-semibold text-gray-800">Generative AI Startup Competition (Special Award)</h3>
				<span className="text-gray-600 md:text-right">2024.06 – 2024.07</span>
			</div>
			<p className="text-gray-700">
				Selected as one of 12 teams out of hundreds to pitch directly to venture capitalists.
				<span className="block text-sm text-gray-600 mt-1">Taiwania Capital x AWS x NVIDIA</span>
			</p>
			</div>
			
			<div>
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-lg font-semibold text-gray-800">Global Generative AI Agents Developer Contest (Top 100)</h3>
				<span className="text-gray-600 md:text-right">2024.05 – 2024.07</span>
			</div>
			<p className="text-gray-700">
				Utilizing NVIDIA technologies and LangChain to create dynamic avatars from live speech, integrating RIVA ASR and TTS with Audio2Face for real-time, expressive digital interactions.
				<span className="block text-sm text-gray-600 mt-1">NVIDIA x LangChain</span>
			</p>
			</div>
			
			<div>
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-lg font-semibold text-gray-800">AI Emerging Leader Competition (First Place)</h3>
				<span className="text-gray-600 md:text-right">2019.09 – 2019.11</span>
			</div>
			<p className="text-gray-700">
				Led the planning and scheduling of project timelines, focusing on aircraft fuel consumption and cost issues, handling millions of data points.
				<span className="block text-sm text-gray-600 mt-1">SAS x China Life x EVA Air</span>
			</p>
			</div>
		</div>
		</section>
	);
};

export default Projects; 