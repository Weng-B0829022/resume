import React from 'react';

interface skillsDataType {
	name: string;
	years: string;
	description: string;
	tags: string[];
	fullWidth: boolean;
}
const Skills = () => {
	// 定义技能数据
	const skillsData: skillsDataType[] = [ 
		{ 
			name: "Python", 
			years: "4 years", 
			description: "熟悉使用Python進行網頁後端開發和數據分析，能夠實現各種演算法", 
			tags: ["Flask","FastAPI","Django","matplotlib","Algorithm"],
			fullWidth: true 
		}, 
		{ 
			name: "React", 
			years: "3 years", 
			description: "擅長使用React框架開發app，以及熟悉其檔案架構(sigle resposibility, make component reusable)", 
			tags: ["typescript","Next.js","TailwindCSS"], 
			fullWidth: true 
		}, 
		{ 
			name: "C++", 
			years: "4 years", 
			description: "熟悉C++程式語言，掌握指標的技巧及其應用", 
			tags: [], 
			fullWidth: true 
		}, 
		{ 
			name: "Docker", 
			years: "2 years", 
			description: "用於建立、管理和運行應用程式容器，透過鏡像(image)和容器(container)實現應用隔離和部署", 
			tags: [], 
			fullWidth: false 
		}, 
		{ 
			name: "Linux", 
			years: "2 years", 
			description: "熟悉Linux系統操作和AWS部署方案，能夠進行伺服器管理和維護", 
			tags: [], 
			fullWidth: false 
		}, 
		{ 
			name: "Git", 
			years: "2 years", 
			description: "使用git進行版本控制以及多人協作", 
			tags: [], 
			fullWidth: false 
		}, 
		{ 
			name: "Database", 
			years: "2 years", 
			description: "使用PostgreSQL進行資料整合和處理", 
			tags: ["PostgreSQL"], 
			fullWidth: false 
		}, 
		{ 
			name: "Node.js", 
			years: "2 years", 
			description: "使用Node.js開發後端服務和API", 
			tags: [], 
			fullWidth: false 
		}, 
		{ 
			name: "ASP.NET MVC", 
			years: "1 years", 
			description: "熟悉.NET開發高效能的平台", 
			tags: [], 
			fullWidth: false 
		},
		{ 
			name: "ML & DL", 
			years: "1 years", 
			description: "LSTM, KNN, SVM, Transformer, Regression", 
			tags: [], 
			fullWidth: false 
		} 
	];
	// 渲染单个技能项
	const renderSkillItem = (skill: skillsDataType, index: number) => {
		const baseClasses = skill.fullWidth ? "" : "grid grid-cols-1 md:grid-cols-3 gap-4";
		
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
		const fullWidthSkills = skillsData.filter(skill => skill.fullWidth);
		const groupedSkills = skillsData.filter(skill => !skill.fullWidth);
		
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