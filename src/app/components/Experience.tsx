import React from 'react';

const Experience = () => {
	return (
		<section className="container mx-auto px-6 py-8">
		<h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">EXPERIENCE</h2>
		<div className="mb-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-xl font-semibold text-gray-800">Freelancer — 全端工程師</h3>
				<span className="text-gray-600 md:text-right">2024.02 – 迄今</span>
			</div>
			<ul className="list-disc pl-6 text-gray-700 space-y-2">
				<li>
					<span className="font-medium">
						使用Nextjs Django開發AI新聞台 串接OpenAI, Leonardo api 以及內部自行開發的AI新聞主播
						整合成下關鍵字生成AI新聞台的分鏡稿影片
					</span>
				</li>
			</ul>
		</div>
		{/* ALove crop. */}
		<div className="mb-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-xl font-semibold text-gray-800">歐德堡有限公司 — 軟體工程師</h3>
				<span className="text-gray-600 md:text-right">2024.02 – 2025.02</span>
			</div>
			<ul className="list-disc pl-6 text-gray-700 space-y-2">
				<li>
					<span className="font-medium">
						使用react開發前端, go當作後端開發智慧城鄉app，提供醫院人員管理及使用並檢測實時顯示病人的健康指標及飲食狀況
					</span>
				</li>
				<li>
					<span className="font-medium">
						使用.NET開發政府的平台，並串接政府API及其內部的管理以及使用
					</span>
				</li>
			</ul>
		</div>
		{/* <div className="mb-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
				<h3 className="text-xl font-semibold text-gray-800">圖靈股份有限公司 — 實習生</h3>
				<span className="text-gray-600 md:text-right">2022.07 – 2022.08</span>
			</div>
			<ul className="list-disc pl-6 text-gray-700 space-y-2">
				<li>
					<span className="font-medium">
						
					</span>
				</li>
			</ul>
		</div> */}

		</section>
	);
};

export default Experience; 