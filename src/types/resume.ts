export interface ResumeData {
  header: {
    name: string;
    title: string;
    photo: string;
    showPhoto: boolean;
    contact: {
      phone: string;
      email: string;
      github: string;
      location: string;
    };
    profile: string;
  };
  experience: Array<{
    title: string;
    period: string;
    description: string | string[];
  }>;
  skills: Array<{
    name: string;
    years: string;
    description: string;
    tags: string[];
    fullWidth: boolean;
  }>;
  education: Array<{
    school: string;
    period: string;
  }>;
  projects: Array<{
    title: string;
    period: string;
    description: string;
    organization: string;
    image: string;
  }>;
  sideProjects: Array<{
    title: string;
    period: string;
    description: string;
    organization: string;
    image: string;
  }>;
  footer: {
    email: string;
    github: string;
  };
} 