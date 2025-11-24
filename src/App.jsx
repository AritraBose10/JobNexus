import {
  ArrowLeft,
  Bell,
  Bookmark,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Clock,
  Code,
  Cpu,
  DollarSign,
  FileText,
  Filter,
  Globe,
  LayoutDashboard,
  MapPin,
  Plus,
  Search,
  Star,
  Upload,
  User,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from "./assets/SOFLOGO.png";

/**
 * MOCK DATA (Localized for India)
 */
const INITIAL_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    location: "Bangalore, KA",
    type: "Full-time",
    salary: "₹25L - ₹35L",
    posted: "2 days ago",
    applicants: 45,
    logoColor: "bg-blue-600",
    tags: ["React", "TypeScript", "Redux"],
    description: "We are looking for an experienced Frontend Engineer to lead our core product team. You will be responsible for architecting scalable UI components and ensuring a seamless user experience.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Deep understanding of web performance and accessibility",
      "Experience with state management (Redux, Zustand, or Context)",
      "Strong communication skills and ability to mentor juniors"
    ],
    benefits: ["Health Insurance", "Stock Options", "Remote Friendly", "Annual Retreat"]
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Pulse",
    location: "Mumbai, MH",
    type: "Contract",
    salary: "₹80k - ₹1.2L / mo",
    posted: "4 hours ago",
    applicants: 12,
    logoColor: "bg-purple-600",
    tags: ["Figma", "UI/UX", "Prototyping"],
    description: "Creative Pulse is seeking a visionary Product Designer to shape the future of our mobile applications. You will work closely with PMs and engineers to translate user needs into elegant interfaces.",
    requirements: [
      "Portfolio demonstrating strong UX/UI skills",
      "Proficiency in Figma and prototyping tools",
      "Experience working in an agile environment",
      "Ability to conduct user research and usability testing"
    ],
    benefits: ["Flexible Hours", "Remote Options", "Project Bonuses"]
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DataStream Corp",
    location: "Hyderabad, TS",
    type: "Full-time",
    salary: "₹18L - ₹24L",
    posted: "1 day ago",
    applicants: 28,
    logoColor: "bg-emerald-600",
    tags: ["Go", "Python", "Kubernetes"],
    description: "Join our backend infrastructure team to build high-performance APIs and microservices. You will be handling large datasets and optimizing for low latency.",
    requirements: [
      "Strong proficiency in Go or Python",
      "Experience with Docker and Kubernetes",
      "Knowledge of SQL and NoSQL databases",
      "Familiarity with AWS or Google Cloud Platform"
    ],
    benefits: ["PF & Gratuity", "Gym Membership", "Free Lunch", "Annual Retreats"]
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Growth Hacking Inc.",
    location: "Gurugram, HR",
    type: "Full-time",
    salary: "₹12L - ₹18L",
    posted: "3 days ago",
    applicants: 89,
    logoColor: "bg-rose-500",
    tags: ["SEO", "Content", "Strategy"],
    description: "We need a data-driven Marketing Manager to oversee our paid acquisition channels. You will manage budgets, analyze campaign performance, and drive growth.",
    requirements: [
      "3+ years in digital marketing",
      "Expertise in Google Ads and LinkedIn Ads",
      "Strong analytical skills (GA4, Mixpanel)",
      "Excellent copywriting abilities"
    ],
    benefits: ["Performance Bonuses", "Travel Allowance", "Private Healthcare"]
  },
  {
    id: 5,
    title: "Junior DevOps Engineer",
    company: "CloudScale",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹6L - ₹10L",
    posted: "Just now",
    applicants: 5,
    logoColor: "bg-orange-500",
    tags: ["AWS", "Linux", "CI/CD"],
    description: "Perfect role for someone looking to start their career in DevOps. You will help maintain our CI/CD pipelines and monitor system health.",
    requirements: [
      "Basic understanding of Linux administration",
      "Familiarity with git and version control",
      "Scripting skills (Bash/Python)",
      "Willingness to learn new technologies"
    ],
    benefits: ["Mentorship Program", "Certification Budget", "Remote Work"]
  },
  {
    id: 6,
    title: "UX Researcher",
    company: "Insight Labs",
    location: "Pune, MH",
    type: "Contract",
    salary: "₹50k - ₹75k / mo",
    posted: "5 days ago",
    applicants: 18,
    logoColor: "bg-cyan-600",
    tags: ["Research", "User Testing", "Data"],
    description: "Help us understand our users better. Conduct interviews, surveys, and usability tests to inform product decisions.",
    requirements: [
      "Degree in HCI, Psychology, or related field",
      "Experience with qualitative and quantitative research methods",
      "Strong presentation skills",
      "Ability to work independently"
    ],
    benefits: ["Flexible Schedule", "Internet Reimbursement"]
  }
];

const USER_MOCK = {
  name: "Alex Doe",
  email: "demo@example.com",
  title: "Software Engineer",
  avatar: "AD",
  stats: {
    applied: 12,
    reviewed: 5,
    interviewing: 2,
    saved: 4
  }
};

/**
 * COMPONENTS
 */

// Post Job Component
const PostJob = ({ onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    tags: '',
    description: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      ...formData,
      posted: 'Just now',
      applicants: 0,
      logoColor: 'bg-indigo-600',
      tags: formData.tags.split(',').map(t => t.trim()),
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      benefits: ["Standard Benefits", "Great Culture"]
    };
    onSubmit(newJob);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 flex-shrink-0">
                <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Post a New Job</h2>
              <p className="text-slate-400 text-sm sm:text-base">Reach thousands of tech professionals across India.</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Job Title</label>
              <input
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="e.g. Senior React Developer"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Company Name</label>
              <input
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="e.g. NextGen Tech"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Location (India)</label>
              <input
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="e.g. Bangalore, KA"
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
              />
            </div>
             <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Job Type</label>
              <select
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
              >
                <option>Full-time</option>
                <option>Contract</option>
                <option>Part-time</option>
                <option>Freelance</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Salary Range (INR)</label>
              <input
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="e.g. ₹15L - ₹25L or ₹50k / mo"
                value={formData.salary}
                onChange={e => setFormData({...formData, salary: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Tags (Comma separated)</label>
              <input
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="e.g. React, Node.js, AWS"
                value={formData.tags}
                onChange={e => setFormData({...formData, tags: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Description</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="Describe the role and responsibilities..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
          </div>

          <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Requirements (One per line)</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="- 3+ years experience&#10;- Knowledge of Redux&#10;- B.Tech in CS"
                value={formData.requirements}
                onChange={e => setFormData({...formData, requirements: e.target.value})}
              />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-4 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20"
            >
              Post Job Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Modal for Application
const ApplyModal = ({ job, isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900 bg-opacity-80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-slate-800 rounded-3xl shadow-2xl shadow-cyan-500/10 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh] border border-slate-700">
        <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
          <div>
            <h3 className="text-lg font-bold text-white">Apply for {job.title}</h3>
            <p className="text-sm text-slate-400">{job.company}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
              <input type="text" defaultValue="Alex Doe" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input type="email" defaultValue="demo@example.com" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Resume/CV</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-700 border-dashed rounded-xl hover:bg-slate-800/50 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <div className="flex text-sm text-slate-400">
                    <span className="relative cursor-pointer rounded-md font-bold text-cyan-400 hover:text-cyan-300 focus-within:outline-none">
                      Upload a file
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
               <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-cyan-900/50 hover:shadow-cyan-900/80 transform hover:-translate-y-0.5">
                 Submit Application
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = ({ user, onViewChange, onLogout }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onViewChange('home')}>
             <img
                src={logo}
                alt="JobNexus"
                className="w-20 h-20 sm:w-20 sm:h-20 object-contain rounded-xl"
            />
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter group-hover:text-cyan-200 transition-colors">JobNexus</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
            {user ? (
                <div className="flex items-center gap-2 sm:gap-4 bg-slate-900/50 backdrop-blur-md p-1.5 rounded-full border border-slate-700/50">
                    <button className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                    </button>
                    <div className="flex items-center gap-2 sm:gap-3 pr-2">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 font-bold text-xs">
                             {user.avatar}
                         </div>
                         <button onClick={onLogout} className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                            Sign Out
                         </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2 sm:gap-4">
                    <button onClick={() => onViewChange('login')} className="text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors whitespace-nowrap">Sign In</button>
                    <button onClick={() => onViewChange('login')} className="bg-white text-slate-900 hover:bg-cyan-50 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap">
                        Post Job
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

// Hero Component (Responsive Navigation)
const Hero = ({ currentView, onViewChange, user }) => {
    return (
        <div className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Dynamic Backgrounds */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[400px] sm:w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="relative max-w-5xl mx-auto text-center z-10">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                    Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Future</span> <br/>
                    of Your Career.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                    The next-gen platform for tech professionals. Connect with top startups and giants instantly.
                </p>

                {/* Central Control Unit (Navigation + Search) */}
                <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-2 rounded-3xl shadow-2xl shadow-black/50 max-w-3xl mx-auto">

                    {/* Navigation Tabs - Grid on Mobile, Flex on Desktop */}
                    <div className="grid grid-cols-2 sm:flex p-1 bg-slate-900/50 rounded-2xl mb-4 gap-1 sm:gap-0">
                        {[
                            { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
                            { id: 'jobs', label: 'Explore', icon: Search },
                            { id: 'post-job', label: 'Post Job', icon: Plus },
                            { id: 'saved', label: 'Saved', icon: Bookmark }
                        ].map((tab) => {
                             const isActive = currentView === tab.id || (tab.id === 'jobs' && currentView === 'job-detail');
                             return (
                                <button
                                    key={tab.id}
                                    onClick={() => onViewChange(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                                        isActive
                                        ? 'bg-slate-700 text-white shadow-lg'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                                >
                                    <tab.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : ''}`} />
                                    {tab.label}
                                </button>
                             );
                        })}
                    </div>

                    {/* Search Bar - Responsive Flex */}
                    <div className="flex flex-col sm:flex-row gap-2 p-2">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-4 top-3.5 text-slate-500 w-5 h-5 group-focus-within:text-cyan-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Job title..."
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all"
                            />
                        </div>
                         <div className="flex-1 relative group">
                            <MapPin className="absolute left-4 top-3.5 text-slate-500 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Location..."
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all"
                            />
                        </div>
                        <button
                            onClick={() => onViewChange('jobs')}
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 active:scale-95"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Stats / Social Proof - Hidden on small mobile */}
                <div className="mt-10 hidden sm:flex justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                        <span className="text-slate-300">140+</span> New Jobs Today
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"/>
                        <span className="text-slate-300">2.5k</span> Active Companies
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"/>
                        <span className="text-slate-300">10k+</span> Monthly Hires
                    </div>
                </div>
            </div>
        </div>
    );
}

// Job Card Component
const JobCard = ({ job, onClick, isSaved, onToggleSave }) => (
  <div
    onClick={(e) => {
        if(e.target.closest('button')) return;
        onClick(job);
    }}
    className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-5 sm:p-6 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-5 relative overflow-hidden"
  >
    {/* Glow Effect on Hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

    <div className={`${job.logoColor} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl sm:text-2xl shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300 relative z-10`}>
      {job.company.charAt(0)}
    </div>
    <div className="flex-1 relative z-10">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {job.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 flex items-center gap-1">
             {job.company}
             <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
          </p>
        </div>
        <button
            onClick={(e) => { e.stopPropagation(); onToggleSave(job.id); }}
            className={`p-2.5 rounded-xl transition-all ${isSaved ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-500 hover:text-white hover:bg-slate-700'}`}
        >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags && job.tags.map(tag => (
           <span key={tag} className="px-2 sm:px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-slate-600 transition-colors">
             {tag}
           </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-sm text-slate-400 border-t border-slate-700/50 pt-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-slate-500" />
          {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-slate-500" />
          {job.type}
        </div>
        <div className="flex items-center gap-2 font-bold text-emerald-400">
          <DollarSign className="w-4 h-4" />
          {job.salary}
        </div>
        <div className="ml-auto text-xs text-slate-600">
            {job.posted}
        </div>
      </div>
    </div>
  </div>
);

// Job Details Page
const JobDetailPage = ({ job, onBack, isSaved, onToggleSave, onApply }) => {
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => setHasApplied(false), [job.id]);

  if (!job) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <button
        onClick={onBack}
        className="flex items-center text-sm font-bold text-slate-400 hover:text-white mb-6 transition-colors group"
      >
        <div className="bg-slate-800 border border-slate-700 p-2 rounded-xl mr-3 group-hover:border-slate-600 transition-colors">
             <ArrowLeft className="w-4 h-4" />
        </div>
        Back to Search
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700 p-6 sm:p-8 shadow-xl">

            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
               <div className="flex gap-5 items-center">
                  <div className={`${job.logoColor} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}>
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{job.title}</h1>
                    <div className="text-base sm:text-lg text-slate-400 mt-1 font-medium">{job.company}</div>
                  </div>
               </div>
               <div className="flex gap-3 w-full sm:w-auto">
                   <button
                     onClick={() => onToggleSave(job.id)}
                     className={`flex-1 sm:flex-none p-3 rounded-xl border transition-all ${isSaved ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' : 'border-slate-600 text-slate-400 hover:border-slate-500 hover:text-white'}`}
                   >
                       <Bookmark className={`w-5 h-5 mx-auto ${isSaved ? 'fill-current' : ''}`} />
                   </button>
                   <button
                    onClick={() => onApply(job)}
                    className="flex-1 sm:flex-none bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
                   >
                    Apply Now
                   </button>
               </div>
            </div>

            {/* Quick Stats Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                    { icon: DollarSign, label: "Salary", val: job.salary },
                    { icon: MapPin, label: "Location", val: job.location.split(',')[0] },
                    { icon: Clock, label: "Type", val: job.type },
                    { icon: User, label: "Applicants", val: job.applicants },
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-1">
                            <stat.icon className="w-3 h-3" /> {stat.label}
                        </div>
                        <div className="text-white font-bold text-sm truncate">{stat.val}</div>
                    </div>
                ))}
             </div>

            {/* Description */}
            <div className="mt-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-cyan-400"/>
                </div>
                Job Description
              </h3>
              <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
                <p>{job.description}</p>
                <p>We are a fast-growing team dedicated to building tools that empower the next generation of developers. You will work with cutting-edge tech including Next.js, Rust, and WebAssembly.</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-purple-400"/>
                </div>
                Requirements
              </h3>
              <ul className="grid gap-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-300 bg-slate-900/30 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6">Benefits & Perks</h3>
            <div className="flex flex-wrap gap-2">
                 {job.benefits.map((benefit, idx) => (
                   <span key={idx} className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 text-cyan-100 rounded-lg text-xs font-bold">
                     {benefit}
                   </span>
                 ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase">Tech Stack</h4>
                <div className="flex gap-3">
                     <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center" title="React"><Code className="w-4 h-4 text-blue-400"/></div>
                     <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center" title="Server"><Cpu className="w-4 h-4 text-green-400"/></div>
                     <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center" title="Cloud"><Globe className="w-4 h-4 text-orange-400"/></div>
                </div>
            </div>
          </div>

           <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-6 border border-white/10 relative overflow-hidden group cursor-pointer">
             <div className="relative z-10">
                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-yellow-400">
                     <Star className="fill-current w-5 h-5"/>
                 </div>
                 <h4 className="font-bold text-white text-lg mb-2">Pro Insights</h4>
                 <p className="text-blue-100 text-sm mb-4 leading-relaxed">Unlock salary predictions and hiring trends for this role.</p>
                 <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:gap-2 transition-all">
                     Unlock Now <ChevronRight className="w-4 h-4"/>
                 </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

// Login Page
const Login = ({ onLogin, onCancel }) => {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        if (email === 'demo@example.com' && password === 'password') {
        onLogin();
        } else {
        setError('Invalid credentials.');
        setIsLoading(false);
        }
    }, 800);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 animate-fadeIn">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-md w-full space-y-8 bg-slate-800/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl shadow-black/50 relative z-20">
        <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-6">
                <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
                Welcome Back
            </h2>
            <p className="mt-2 text-slate-400">
                Enter the future of work.
            </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-2">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {error}
              </div>
            )}

            <div className="bg-slate-900/50 p-4 rounded-xl text-sm border border-slate-700 flex flex-col gap-1">
               <span className="font-bold text-cyan-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"/> Demo Access</span>
               <div className="flex justify-between text-xs text-slate-400 mt-1">
                   <span>Email: <span className="text-slate-300">demo@example.com</span></span>
                   <span>Pass: <span className="text-slate-300">password</span></span>
               </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-4 px-4 rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all ${isLoading ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02] hover:shadow-cyan-500/25'}`}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors"
            >
              Back to Home
            </button>
        </form>
      </div>
    </div>
  );
};

// Job Feed Section
const JobFeed = ({ jobs, onJobClick, savedJobs, onToggleSave }) => {
  const [filterType, setFilterType] = useState('All');

  // Simple filter logic for demo
  const filteredJobs = filterType === 'All' ? jobs : jobs.filter(j => j.type === filterType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-slate-700 sticky top-32">
            <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-cyan-400"/>
                <h3 className="font-bold text-white text-lg">Filters</h3>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Job Type</h4>
              <div className="space-y-3">
                {['All', 'Full-time', 'Contract', 'Part-time'].map(type => (
                   <label key={type} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                        <input
                        type="radio"
                        name="jobType"
                        checked={filterType === type}
                        onChange={() => setFilterType(type)}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-600 checked:border-cyan-500 checked:bg-cyan-500 transition-all bg-slate-900"
                        />
                    </div>
                    <span className={`ml-3 text-sm font-medium transition-colors ${filterType === type ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
                onClick={() => setFilterType('All')}
                className="w-full py-3 border border-slate-600 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
               Reset Filters
            </button>
          </div>
        </div>

        {/* Feed */}
        <div className="lg:w-3/4">
           <div className="mb-6 flex items-end justify-between">
             <div>
                <h2 className="text-2xl font-bold text-white">
                    Latest Openings
                </h2>
                <p className="text-slate-500 text-sm mt-1">Showing {filteredJobs.length} active roles</p>
             </div>
           </div>

           <div className="space-y-4">
             {filteredJobs.length > 0 ? (
                 filteredJobs.map(job => (
                <JobCard
                    key={job.id}
                    job={job}
                    onClick={onJobClick}
                    isSaved={savedJobs.includes(job.id)}
                    onToggleSave={onToggleSave}
                />
                ))
             ) : (
                 <div className="text-center py-20 bg-slate-800/30 rounded-3xl border border-slate-700 border-dashed">
                     <h3 className="text-lg font-bold text-white">No jobs found</h3>
                     <p className="text-slate-500">Try adjusting your filters.</p>
                 </div>
             )}
           </div>

           {filteredJobs.length > 0 && (
            <div className="mt-12 text-center">
                <button className="inline-flex items-center px-8 py-3 border border-slate-700 shadow-lg text-sm font-bold rounded-xl text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all">
                Load More
                </button>
            </div>
           )}
        </div>

      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 mt-auto relative z-10">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2 md:col-span-1">
           <div className="flex items-center gap-2 mb-4 group cursor-default">
             <img
                src="/assets/logo.png"
                alt="JobNexus"
                className="w-14 h-14 object-contain rounded-lg"
            />
              <span className="text-xl font-black text-white tracking-tighter">JobNexus</span>
           </div>
           <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
             The leading platform for future-focused careers. Built for the modern professional.
           </p>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-4">Platform</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Browse Jobs</a></li>
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Talent Solutions</a></li>
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Career Guide</a></li>
            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Help Center</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600">
          &copy; 2024 JobNexus Inc. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);


/**
 * MAIN APP COMPONENT
 */
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [jobs, setJobs] = useState(INITIAL_JOBS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
      if(notification) {
          const timer = setTimeout(() => setNotification(null), 3000);
          return () => clearTimeout(timer);
      }
  }, [notification]);

  const handleLogin = () => {
    setUser(USER_MOCK);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setCurrentView('job-detail');
  };

  const handleViewChange = (view) => {
    if (view === 'post-job' && !user) {
        setNotification({ type: 'info', message: 'Please sign in to post a job.' });
        setCurrentView('login');
        return;
    }
    setCurrentView(view);
  };

  const handlePostJob = (newJob) => {
    setJobs(prev => [newJob, ...prev]);
    setCurrentView('jobs');
    setNotification({ type: 'success', message: 'Job posted successfully!' });
  };

  const toggleSaveJob = (jobId) => {
      setSavedJobs(prev => {
          const isSaved = prev.includes(jobId);
          if (isSaved) {
              setNotification({ type: 'info', message: 'Job removed from saved list' });
              return prev.filter(id => id !== jobId);
          } else {
              setNotification({ type: 'success', message: 'Job saved successfully' });
              return [...prev, jobId];
          }
      });
  };

  const submitApplication = () => {
      setIsApplyModalOpen(false);
      setNotification({ type: 'success', message: 'Application sent successfully!' });
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200 flex flex-col selection:bg-cyan-500/30">

      {/* Absolute Header replacing Navbar */}
      <Header user={user} onViewChange={handleViewChange} onLogout={handleLogout} />

      {/* Notification Toast */}
      {notification && (
          <div className={`fixed top-24 right-4 z-[60] px-6 py-4 rounded-xl shadow-2xl transform transition-all animate-slideIn flex items-center gap-3 border ${notification.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-slate-800 border-slate-700 text-white'}`}>
              {notification.type === 'success' ? <CheckCircle className="w-5 h-5"/> : <Bookmark className="w-5 h-5"/>}
              <span className="font-bold text-sm">{notification.message}</span>
          </div>
      )}

      {selectedJob && (
          <ApplyModal
            job={selectedJob}
            isOpen={isApplyModalOpen}
            onClose={() => setIsApplyModalOpen(false)}
            onSubmit={submitApplication}
          />
      )}

      <main className="flex-grow relative">

        {/* Only show Hero on non-login pages to prevent clutter */}
        {currentView !== 'login' && currentView !== 'post-job' && (
            <Hero currentView={currentView} onViewChange={handleViewChange} user={user} />
        )}

        {currentView === 'home' && (
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
                 {/* Dashboard or Landing Content */}
                 {user ? (
                     <div>
                         <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-white">Recommended for you</h2>
                            <button onClick={() => setCurrentView('jobs')} className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">View all</button>
                         </div>
                         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {jobs.slice(0, 3).map(job => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    onClick={handleJobClick}
                                    isSaved={savedJobs.includes(job.id)}
                                    onToggleSave={toggleSaveJob}
                                />
                            ))}
                        </div>
                     </div>
                 ) : (
                    <div>
                        <div className="text-center mb-12">
                             <h2 className="text-2xl font-bold text-white">Latest Opportunities</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {jobs.map(job => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    onClick={handleJobClick}
                                    isSaved={savedJobs.includes(job.id)}
                                    onToggleSave={toggleSaveJob}
                                />
                            ))}
                        </div>
                    </div>
                 )}
            </div>
        )}

        {currentView === 'jobs' && (
          <JobFeed
            jobs={jobs}
            onJobClick={handleJobClick}
            savedJobs={savedJobs}
            onToggleSave={toggleSaveJob}
          />
        )}

        {currentView === 'post-job' && (
            <PostJob
                onCancel={() => setCurrentView('home')}
                onSubmit={handlePostJob}
            />
        )}

        {currentView === 'saved' && (
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn min-h-[50vh]">
                 <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                     <Bookmark className="fill-current text-cyan-400"/> Saved Jobs
                 </h2>
                 {savedJobs.length === 0 ? (
                     <div className="text-center py-20 bg-slate-800/30 rounded-3xl border border-slate-700 border-dashed">
                         <div className="mx-auto w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                             <Bookmark className="w-8 h-8 text-slate-600" />
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">No saved jobs yet</h3>
                         <p className="text-slate-500 mb-8">Jobs you save will appear here for easy access.</p>
                         <button onClick={() => setCurrentView('jobs')} className="bg-slate-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-600 transition-colors">
                             Browse Jobs
                         </button>
                     </div>
                 ) : (
                     <div className="grid gap-6">
                         {jobs.filter(job => savedJobs.includes(job.id)).map(job => (
                             <JobCard
                                key={job.id}
                                job={job}
                                onClick={handleJobClick}
                                isSaved={true}
                                onToggleSave={toggleSaveJob}
                             />
                         ))}
                     </div>
                 )}
             </div>
        )}

        {currentView === 'job-detail' && (
          <JobDetailPage
            job={selectedJob}
            onBack={() => setCurrentView('jobs')}
            isSaved={savedJobs.includes(selectedJob?.id)}
            onToggleSave={toggleSaveJob}
            onApply={() => {
                if(!user) return setCurrentView('login');
                setIsApplyModalOpen(true);
            }}
          />
        )}

        {currentView === 'login' && (
          <Login onLogin={handleLogin} onCancel={() => setCurrentView('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
