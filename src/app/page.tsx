'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';
import { ResumeData } from '../types/resume';

const initialResumeData: ResumeData = {
	header: {
		name: "",
		title: "",
		photo: "",
		showPhoto: false,
		contact: {
			phone: "",
			email: "",
			github: "",
			location: ""
		},
		profile: ""
	},
	experience: [],
	skills: [],
	education: [],
	projects: [],
	sideProjects: [],
	footer: {
		email: "",
		github: ""
	}
};

export default function Home() {
	const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchResumeData();
	}, []);

	const fetchResumeData = async () => {
		try {
			const response = await fetch('/api/resume');
			const data = await response.json();
			setResumeData(data);
		} catch (error) {
			console.error('Error fetching resume data:', error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <div className="p-8">Loading...</div>;
	}

	return (
		<div className="bg-gray-100 min-h-screen font-sans">
			<div className="max-w-5xl mx-auto bg-white shadow-lg">
				<Header data={resumeData.header} />
				<Experience data={resumeData.experience} />
				
				{/* Skills & Education Section */}
				<div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<Skills data={resumeData.skills} />
					<div>
						<Education data={resumeData.education} />
						<Projects data={resumeData.projects} />
						<SideProjects data={resumeData.sideProjects} />
					</div>
				</div>
			</div>
			<Footer data={resumeData.footer} />
		</div>
	);
}