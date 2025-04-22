import React from 'react';

interface SkillItem {
	name: string;
	years: string;
	description: string;
	tags: string[];
	fullWidth: boolean;
}

interface SkillsProps {
	data: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
	// 渲染单个技能项
	const renderSkillItem = (skill: SkillItem, index: number) => {
		
		if (skill.fullWidth) {
			return (
				<div key={index}>
					<div className="flex justify-between mb-2">
						<h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
						<span className="text-gray-600">{skill.years}</span>
					</div>
					<p className="text-gray-700 text-sm">{skill.description}</p>
					{skill.tags.length > 0 && (
						<div className="mt-2 flex flex-wrap">
							{skill.tags.map((tag: string, tagIndex: number) => (
								<span key={tagIndex} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
							))}
						</div>
					)}
				</div>
			);
		} else {
			return (
				<div key={index}>
					<div className="flex justify-between mb-2">
						<h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
						<span className="text-gray-600">{skill.years}</span>
					</div>
					<p className="text-gray-700 text-sm">{skill.description}</p>
					{skill.tags.length > 0 && (
						<div className="mt-2 flex flex-wrap">
							{skill.tags.map((tag: string, tagIndex: number) => (
								<span key={tagIndex} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
							))}
						</div>
					)}
				</div>
			);
		}
	};

	// 渲染技能组
	const renderSkillGroups = () => {
		const fullWidthSkills = data.filter(skill => skill.fullWidth);
		const groupedSkills = data.filter(skill => !skill.fullWidth);
		
		return (
			<div className="grid grid-cols-1 gap-6">
				{/* 渲染全宽技能 */}
				{fullWidthSkills.map((skill, index) => renderSkillItem(skill, index))}
				
				{/* 渲染分组技能 */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{groupedSkills.slice(0, 3).map((skill, index) => renderSkillItem(skill, index + fullWidthSkills.length))}
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{groupedSkills.slice(3).map((skill, index) => renderSkillItem(skill, index + fullWidthSkills.length + 3))}
				</div>
			</div>
		);
	};

	return (
		<section>
			<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">SKILLS</h2>
			{renderSkillGroups()}
		</section>
	);
};

export default Skills; 