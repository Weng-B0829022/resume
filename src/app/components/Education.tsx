import React from 'react';

interface EducationItem {
	school: string;
	period: string;
}

interface EducationProps {
	data: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
	return (
		<section>
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">EDUCATION</h2>
		<div className="mb-8">
			{data.map((item, index) => (
				<div key={index} className="flex flex-col md:flex-row md:items-center justify-between mb-2">
					<h3 className="text-xl font-semibold text-gray-800">{item.school}</h3>
					<span className="text-gray-600 md:text-right">{item.period}</span>
				</div>
			))}
			{/* <p className="text-gray-700 mt-2">
				<span className="font-medium">論文:</span> "複雜網路分析"
			</p> */}
			{/* <p className="text-gray-700 mt-2">
			<span className="font-medium">GPA:</span> 4.1 / 4.3
			</p> */}
		</div>
		</section>
	);
};

export default Education; 