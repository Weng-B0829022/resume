'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ResumeData } from '../../types/resume';

export default function SettingsPage() {
  const router = useRouter();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState<string>('header');

  useEffect(() => {
    fetchResumeData();
  }, []);

  const fetchResumeData = async () => {
    try {
      const response = await fetch('/api/resume');
      const data = await response.json();
      setResumeData(data as ResumeData);
    } catch (error) {
      console.error('Error fetching resume data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus('saving');
    
    try {
      const response = await fetch('/api/resume', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
      });

      if (!response.ok) throw new Error('Failed to save');
      
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Error saving resume data:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const addExperience = () => {
    if (!resumeData) return;
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { title: '', period: '', description: '' }]
    });
  };

  const addSkill = () => {
    if (!resumeData) return;
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, { name: '', years: '', description: '', tags: [], fullWidth: false }]
    });
  };

  const addEducation = () => {
    if (!resumeData) return;
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { school: '', period: '' }]
    });
  };

  const addProject = () => {
    if (!resumeData) return;
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { title: '', period: '', description: '', organization: '', image: '' }]
    });
  };

  const addSideProject = () => {
    if (!resumeData) return;
    setResumeData({
      ...resumeData,
      sideProjects: [...resumeData.sideProjects, { title: '', period: '', description: '', organization: '', image: '' }]
    });
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!resumeData) {
    return <div className="p-8">Error loading resume data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Resume Settings</h1>
        
        {/* Navigation */}
        <div className="flex space-x-4 mb-6 border-b pb-4">
          <button
            onClick={() => setActiveSection('header')}
            className={`px-4 py-2 rounded ${activeSection === 'header' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Header
          </button>
          <button
            onClick={() => setActiveSection('experience')}
            className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveSection('skills')}
            className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveSection('education')}
            className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`px-4 py-2 rounded ${activeSection === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('sideProjects')}
            className={`px-4 py-2 rounded ${activeSection === 'sideProjects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Side Projects
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header Section */}
          {activeSection === 'header' && (
            <>
              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Header Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      value={resumeData.header.name}
                      onChange={(e) => setResumeData({
                        ...resumeData,
                        header: { ...resumeData.header, name: e.target.value }
                      })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={resumeData.header.title}
                      onChange={(e) => setResumeData({
                        ...resumeData,
                        header: { ...resumeData.header, title: e.target.value }
                      })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Photo URL</label>
                  <input
                    type="text"
                    value={resumeData.header.photo}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      header: { ...resumeData.header, photo: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={resumeData.header.showPhoto}
                      onChange={(e) => setResumeData({
                        ...resumeData,
                        header: { ...resumeData.header, showPhoto: e.target.checked }
                      })}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">Show Profile Photo</span>
                  </label>
                </div>
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="text"
                      value={resumeData.header.contact.phone}
                      onChange={(e) => setResumeData({
                        ...resumeData,
                        header: {
                          ...resumeData.header,
                          contact: { ...resumeData.header.contact, phone: e.target.value }
                        }
                      })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={resumeData.header.contact.email}
                      onChange={(e) => setResumeData({
                        ...resumeData,
                        header: {
                          ...resumeData.header,
                          contact: { ...resumeData.header.contact, email: e.target.value }
                        }
                      })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Profile</h2>
                <textarea
                  value={resumeData.header.profile}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    header: { ...resumeData.header, profile: e.target.value }
                  })}
                  className="w-full p-2 border rounded h-32"
                />
              </div>
            </>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Experience</h2>
                <button
                  type="button"
                  onClick={addExperience}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Experience
                </button>
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border p-4 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience];
                          newExperience[index] = { ...exp, title: e.target.value };
                          setResumeData({ ...resumeData, experience: newExperience });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Period</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience];
                          newExperience[index] = { ...exp, period: e.target.value };
                          setResumeData({ ...resumeData, experience: newExperience });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={typeof exp.description === 'string' ? exp.description : exp.description.join('\n')}
                      onChange={(e) => {
                        const newExperience = [...resumeData.experience];
                        newExperience[index] = { ...exp, description: e.target.value };
                        setResumeData({ ...resumeData, experience: newExperience });
                      }}
                      className="w-full p-2 border rounded h-32"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Skills</h2>
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Skill
                </button>
              </div>
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="border p-4 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const newSkills = [...resumeData.skills];
                          newSkills[index] = { ...skill, name: e.target.value };
                          setResumeData({ ...resumeData, skills: newSkills });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Years</label>
                      <input
                        type="text"
                        value={skill.years}
                        onChange={(e) => {
                          const newSkills = [...resumeData.skills];
                          newSkills[index] = { ...skill, years: e.target.value };
                          setResumeData({ ...resumeData, skills: newSkills });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={skill.description}
                      onChange={(e) => {
                        const newSkills = [...resumeData.skills];
                        newSkills[index] = { ...skill, description: e.target.value };
                        setResumeData({ ...resumeData, skills: newSkills });
                      }}
                      className="w-full p-2 border rounded h-32"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={skill.tags.join(', ')}
                      onChange={(e) => {
                        const newSkills = [...resumeData.skills];
                        newSkills[index] = { ...skill, tags: e.target.value.split(',').map(tag => tag.trim()) };
                        setResumeData({ ...resumeData, skills: newSkills });
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={skill.fullWidth}
                        onChange={(e) => {
                          const newSkills = [...resumeData.skills];
                          newSkills[index] = { ...skill, fullWidth: e.target.checked };
                          setResumeData({ ...resumeData, skills: newSkills });
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium">Full Width</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Education</h2>
                <button
                  type="button"
                  onClick={addEducation}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Education
                </button>
              </div>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border p-4 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">School</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) => {
                          const newEducation = [...resumeData.education];
                          newEducation[index] = { ...edu, school: e.target.value };
                          setResumeData({ ...resumeData, education: newEducation });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Period</label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) => {
                          const newEducation = [...resumeData.education];
                          newEducation[index] = { ...edu, period: e.target.value };
                          setResumeData({ ...resumeData, education: newEducation });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Projects</h2>
                <button
                  type="button"
                  onClick={addProject}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Project
                </button>
              </div>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border p-4 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects];
                          newProjects[index] = { ...project, title: e.target.value };
                          setResumeData({ ...resumeData, projects: newProjects });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Period</label>
                      <input
                        type="text"
                        value={project.period}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects];
                          newProjects[index] = { ...project, period: e.target.value };
                          setResumeData({ ...resumeData, projects: newProjects });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects];
                        newProjects[index] = { ...project, description: e.target.value };
                        setResumeData({ ...resumeData, projects: newProjects });
                      }}
                      className="w-full p-2 border rounded h-32"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Organization</label>
                    <input
                      type="text"
                      value={project.organization}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects];
                        newProjects[index] = { ...project, organization: e.target.value };
                        setResumeData({ ...resumeData, projects: newProjects });
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects];
                        newProjects[index] = { ...project, image: e.target.value };
                        setResumeData({ ...resumeData, projects: newProjects });
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Side Projects Section */}
          {activeSection === 'sideProjects' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Side Projects</h2>
                <button
                  type="button"
                  onClick={addSideProject}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Side Project
                </button>
              </div>
              {resumeData.sideProjects.map((project, index) => (
                <div key={index} className="border p-4 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const newSideProjects = [...resumeData.sideProjects];
                          newSideProjects[index] = { ...project, title: e.target.value };
                          setResumeData({ ...resumeData, sideProjects: newSideProjects });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Period</label>
                      <input
                        type="text"
                        value={project.period}
                        onChange={(e) => {
                          const newSideProjects = [...resumeData.sideProjects];
                          newSideProjects[index] = { ...project, period: e.target.value };
                          setResumeData({ ...resumeData, sideProjects: newSideProjects });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const newSideProjects = [...resumeData.sideProjects];
                        newSideProjects[index] = { ...project, description: e.target.value };
                        setResumeData({ ...resumeData, sideProjects: newSideProjects });
                      }}
                      className="w-full p-2 border rounded h-32"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Organization</label>
                    <input
                      type="text"
                      value={project.organization}
                      onChange={(e) => {
                        const newSideProjects = [...resumeData.sideProjects];
                        newSideProjects[index] = { ...project, organization: e.target.value };
                        setResumeData({ ...resumeData, sideProjects: newSideProjects });
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) => {
                        const newSideProjects = [...resumeData.sideProjects];
                        newSideProjects[index] = { ...project, image: e.target.value };
                        setResumeData({ ...resumeData, sideProjects: newSideProjects });
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Back to Resume
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={saveStatus === 'saving'}
            >
              {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {saveStatus === 'success' && (
            <div className="text-green-500 mt-2">Changes saved successfully!</div>
          )}
          {saveStatus === 'error' && (
            <div className="text-red-500 mt-2">Error saving changes. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
} 