import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';

const Home = () => {
	return (
		<div className="bg-gray-100 min-h-screen font-sans">
			<div className="max-w-5xl mx-auto bg-white shadow-lg">
				<Header />
				<Experience />
				
				{/* Skills & Education Section */}
				<div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<Skills />
					<div>
						<Education />
						<Projects />
						<SideProjects />
						{/* <AdditionalExperience /> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;