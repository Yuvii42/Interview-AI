// // src/pages/Dashboard.jsx
// import React from 'react';
// import InterviewCard from '../components/InterviewCard';
// import {
//   CodeBracketIcon,
//   CpuChipIcon,
//   ChatBubbleLeftEllipsisIcon,
//   CommandLineIcon,
//   CloudIcon,
//   ChartBarIcon,
//   ShieldCheckIcon,
//   DevicePhoneMobileIcon,
//   PresentationChartLineIcon,
//   CurrencyDollarIcon,
//   BriefcaseIcon,
//   WrenchScrewdriverIcon,
// } from '@heroicons/react/24/solid';

// const Dashboard = () => {
//   return (
//     <main className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen">
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-gray-800">
//             Choose Your Interview Domain
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
//             Practice mock interviews in all major technical, managerial, and behavioral domains.
//           </p>
//         </div>

//         {/* Interview Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <InterviewCard
//             title="Frontend Development"
//             description="HTML, CSS, JavaScript & React."
//             icon={<CodeBracketIcon className="w-8 h-8 text-blue-600" />}
//             path="/interview?domain=frontend"
//           />
//           <InterviewCard
//             title="Backend Development"
//             description="Node.js, Django, Express & APIs."
//             icon={<CpuChipIcon className="w-8 h-8 text-green-600" />}
//             path="/interview?domain=backend"
//           />
//           <InterviewCard
//             title="HR / Behavioral"
//             description="Soft skills, culture-fit, and scenario-based questions."
//             icon={<ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-yellow-500" />}
//             path="/interview?domain=hr"
//           />
//           <InterviewCard
//             title="DSA / Problem Solving"
//             description="Master data structures and algorithms."
//             icon={<CommandLineIcon className="w-8 h-8 text-purple-600" />}
//             path="/interview?domain=dsa"
//           />
//           <InterviewCard
//             title="DevOps & Cloud"
//             description="Docker, Kubernetes, AWS, CI/CD pipelines."
//             icon={<CloudIcon className="w-8 h-8 text-indigo-600" />}
//             path="/interview?domain=devops"
//           />
//           <InterviewCard
//             title="Data Science & ML"
//             description="Models, Python, statistics, AI tools."
//             icon={<ChartBarIcon className="w-8 h-8 text-pink-600" />}
//             path="/interview?domain=datascience"
//           />
//           <InterviewCard
//             title="Cybersecurity"
//             description="Threat modeling, security protocols, ethical hacking."
//             icon={<ShieldCheckIcon className="w-8 h-8 text-red-600" />}
//             path="/interview?domain=cybersecurity"
//           />
//           <InterviewCard
//             title="Mobile Development"
//             description="Android, iOS, Flutter & mobile app logic."
//             icon={<DevicePhoneMobileIcon className="w-8 h-8 text-orange-600" />}
//             path="/interview?domain=mobile"
//           />
//           <InterviewCard
//             title="System Design"
//             description="Design scalable and robust architectures."
//             icon={<PresentationChartLineIcon className="w-8 h-8 text-teal-600" />}
//             path="/interview?domain=systemdesign"
//           />
//           <InterviewCard
//             title="Product Management"
//             description="Prioritization, user stories, roadmapping."
//             icon={<BriefcaseIcon className="w-8 h-8 text-gray-700" />}
//             path="/interview?domain=product"
//           />
//           <InterviewCard
//             title="Business & Consulting"
//             description="Case studies, strategy, market sizing."
//             icon={<CurrencyDollarIcon className="w-8 h-8 text-emerald-600" />}
//             path="/interview?domain=business"
//           />
//           <InterviewCard
//             title="Mechanical / Core Engg."
//             description="Thermodynamics, manufacturing, CAD basics."
//             icon={<WrenchScrewdriverIcon className="w-8 h-8 text-sky-700" />}
//             path="/interview?domain=core"
//           />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import InterviewCard from '../components/InterviewCard';
import {
  CodeBracketIcon, CpuChipIcon, ChatBubbleLeftEllipsisIcon,
  CommandLineIcon, CloudIcon, ChartBarIcon, ShieldCheckIcon,
  DevicePhoneMobileIcon, PresentationChartLineIcon, CurrencyDollarIcon,
  BriefcaseIcon, WrenchScrewdriverIcon
} from '@heroicons/react/24/solid';

const allDomains = [
  {
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript & React.",
    icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
    path: "/interview?domain=frontend",
  },
  {
    title: "Backend Development",
    description: "Node.js, Django, Express & APIs.",
    icon: <CpuChipIcon className="w-8 h-8 text-green-600" />,
    path: "/interview?domain=backend",
  },
  {
    title: "HR / Behavioral",
    description: "Soft skills, culture-fit, and scenario-based questions.",
    icon: <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-yellow-500" />,
    path: "/interview?domain=hr",
  },
  {
    title: "DSA / Problem Solving",
    description: "Master data structures and algorithms.",
    icon: <CommandLineIcon className="w-8 h-8 text-purple-600" />,
    path: "/interview?domain=dsa",
  },
  {
    title: "DevOps & Cloud",
    description: "Docker, Kubernetes, AWS, CI/CD pipelines.",
    icon: <CloudIcon className="w-8 h-8 text-indigo-600" />,
    path: "/interview?domain=devops",
  },
  {
    title: "Data Science & ML",
    description: "Models, Python, statistics, AI tools.",
    icon: <ChartBarIcon className="w-8 h-8 text-pink-600" />,
    path: "/interview?domain=datascience",
  },
  {
    title: "Cybersecurity",
    description: "Threat modeling, security protocols, ethical hacking.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-red-600" />,
    path: "/interview?domain=cybersecurity",
  },
  {
    title: "Mobile Development",
    description: "Android, iOS, Flutter & mobile app logic.",
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-orange-600" />,
    path: "/interview?domain=mobile",
  },
  {
    title: "System Design",
    description: "Design scalable and robust architectures.",
    icon: <PresentationChartLineIcon className="w-8 h-8 text-teal-600" />,
    path: "/interview?domain=systemdesign",
  },
  {
    title: "Product Management",
    description: "Prioritization, user stories, roadmapping.",
    icon: <BriefcaseIcon className="w-8 h-8 text-gray-700" />,
    path: "/interview?domain=product",
  },
  {
    title: "Business & Consulting",
    description: "Case studies, strategy, market sizing.",
    icon: <CurrencyDollarIcon className="w-8 h-8 text-emerald-600" />,
    path: "/interview?domain=business",
  },
  {
    title: "Mechanical / Core Engg.",
    description: "Thermodynamics, manufacturing, CAD basics.",
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-sky-700" />,
    path: "/interview?domain=core",
  },
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDomains = allDomains.filter(domain =>
    domain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Choose Your Interview Domain
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Practice mock interviews in all major technical, managerial, and behavioral domains.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search domain..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDomains.length > 0 ? (
            filteredDomains.map((domain, index) => (
              <InterviewCard
                key={index}
                title={domain.title}
                description={domain.description}
                icon={domain.icon}
                path={domain.path}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No domains found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
