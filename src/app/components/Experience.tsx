import React from 'react';

const Experience = () => {
	return (
		<section className="container mx-auto px-6 py-8">
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">EXPERIENCE</h2>
		
		{/* ALove crop. */}
		<div className="mb-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
			<h3 className="text-xl font-semibold text-gray-800">歐德堡有限公司 — 軟體工程師</h3>
			<span className="text-gray-600 md:text-right">2024.02 – 2025.02</span>
			</div>
			<ul className="list-disc pl-6 text-gray-700 space-y-2">
			<li>
				<span className="font-medium">GenAI Stars Competition – Top 20</span>
				<ul className="list-disc pl-6 mt-1">
				<li>blablabla	</li>
				</ul>
			</li>

			</ul>
		</div>

		</section>
	);
};

export default Experience; 