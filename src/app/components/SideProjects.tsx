import React from 'react';

// 项目数据存储在数组中
const sideProjectsData = [
	{
		title: "OmniNews",
		period: "2024.07 – 2025.04",
		description: "新聞內容生成與多媒體處理的全端專案，採用 Django 後端搭配 React 前端架構。在這是新聞內容生成與多媒體處理的全端專案，採用 Django 後端搭配 React 前端架構。在內容處理方面，從google api爬蟲的新聞使用GPT處理為分鏡稿的格式，整合 gTTS、moviepy 等工具處理音視頻。使用 Celery 處理異步任務，設計queue來處理請求。整合 JWT 認證和 Google OAuth 實現登入功能。使用 Google Cloud Storage 存儲文件，需要處理大文件傳輸和成本控制。",
		organization: "好好聽FM",
		image: "news1.png"
	},
];

const SideProjects = () => {
	return (
		<section>
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">Side Projects</h2>
		<div className="space-y-6">
			{sideProjectsData.map((project, index) => (
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