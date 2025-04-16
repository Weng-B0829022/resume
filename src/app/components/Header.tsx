import React from 'react';

const Header = () => {
	return (
		<header className="bg-white ">
		<div className="container mx-auto p-8">
			<div className="flex justify-between items-start">
			{/* Left Section */}
			<div className="flex-1">
				<div className="border-l-4 border-black pl-4 pr-10 flex flex-row space-x-8 justify-between">
					<div className="content-center">
						<h1 className="text-5xl font-bold text-gray-900 tracking-wide">翁旻醇<br /></h1>
						<h2 className="text-xl font-medium text-gray-600 mt-2">SORFWARE ENGINEER</h2>
					</div>
						{/* Right Section - Profile Image */}
					<div className="ml-8">
						<img 
							src="/photo.jpg" 
							alt="Profile" 
							className="w-40 h-40 rounded-full object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-row space-x-8">
					{/* Contact Information */}
					<div className="mt-6 space-y-2">
						<div className="flex items-center">
							<svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span className="text-gray-700">+886 978795005</span>
						</div>
						<div className="flex items-center">
							<svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						<span className="text-gray-700">dennis1989999@gmail.com</span>
						</div>
						<div className="flex items-center">
							<a href="https://github.com/Weng-B0829022"><svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.48v-1.71c-2.782.603-3.369-1.338-3.369-1.338-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.086.636-1.336-2.22-.254-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.852v2.747c0 .266.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
							</svg></a>
							<a href="https://github.com/Weng-B0829022"><span className="text-gray-700">Weng-B0829022</span></a>
						</div>
						<div className="flex items-center">
							<svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span className="text-gray-700">Taipei, Taiwan</span>
						</div>
					</div>

					{/* Profile Section */}
					<div className="mt-8">
						<h3 className="text-xl font-bold text-gray-800 uppercase mb-4">Profile</h3>
						<p className="text-gray-700 leading-relaxed max-w-2xl">
						畢業於長庚資工所，熟悉許多軟體開發工具與AI工具如Git、Docker、AWS、ChatGPT、Claude、Cursor等等，從碩一開始就有自己在
						做一些大大小小的平台、軟體的開發，至今已經有將近兩年的時間，也從中學習到許多軟體開發的經驗，不過唯一的不足是，大部分時間都是我獨自
						開發，在團隊合作上略顯經驗不足，因此我希望能夠加入你們，不論是學習也好，發表意見也好，讓我們在團隊合作上能夠有1+1大於2的效果，
						希望在未來可以與你們一起成長，一起學習，一起進步
						</p>
					</div>
				</div>
			</div>

			
			</div>
		</div>
		</header>
	);
};

export default Header;