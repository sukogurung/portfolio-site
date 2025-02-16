import React from 'react';

const experiences = [
  {
    Position: 'Student IT System Admin',
    Company: 'Portland State University',
    Date: 'Sep 2024 - Present',
    Description: 'IT System Admin for the Computer Science Department at PSU. Responsible for managing and maintaining the department\'s servers and network infrastructure.'
  },
  {
    Position: 'IT Support Specialist',
    Company: 'University of Oregon',
    Date: 'Sep 2022 - Sep 2024',
    Description: 'Provided technical support to students, faculty, and staff at the University of Oregon. Assisted with troubleshooting hardware and software issues.'
  }
];

const projects = [
  {
    title: 'Financial Dashboard',
    description: 'A financial dashboard app that helps users track their expenses, set budgets, and visualize their finacial data and even predicts  the KPIs for the next year.',
    label: ['Next', 'React', 'Redux', 'Tailwind CSS'],
    source: 'https://github.com/sukogurung/projects-repo/tree/main/FinDash'
  },
  {
    title: 'Suduko with Solver',
    description: 'A game that generates a random Sudoku puzzle and allows users to solve it. The app also includes a solver that can solve any valid Sudoku puzzle.',
    label: ['Python', 'OOP', 'Pygame', 'Backtracking'],
    source: 'https://github.com/sukogurung'
  },

  {
    title: 'Real-time Chat App',
    description: 'A real-time chat application that allows users to create chat rooms and send messages in real-time. Built with Node.js, Express, and Socket.io.',
    label: ['Backend', 'Node.js', 'WebSockets'],
    source: 'https://github.com/sukogurung'
  },

  {
    title: 'Siem Log Analyzer',
    description: 'A security information and event management (SIEM) log analyzer that helps organizations monitor and analyze their log data for security threats.',
    label: ['Backend', 'Python', 'Express'],
    source: 'https://github.com/sukogurung'
  }
];

const Experience = () => {
  return (
    <div id='experience' className='w-full py-6 scroll-mt-20 rounded-3xl'>
      <h5 className='text-2xl mb-4'>experience.</h5>
      
      <div>
        {experiences?.length > 0 && experiences.map((experience, index) => (
          <div key={index} className='bento-item-exp w-full px-2 mb-4 transition-transform transform hover:scale-105'>
            <div className='w-full h-auto border border-gray-500 rounded-md p-4'>
              <div className='flex justify-between items-center'>
                <h6 className='text-xl font-bold'>{experience.Position}</h6>
                <span className='text-gray-600 text-sm'>{experience.Date}</span>
              </div>
              <p className='text-slate-700'>{experience.Company}</p>
              <p>{experience.Description}</p>
            </div>
          </div>
        ))}
      </div>

     
        <ul className='w-full rounded-xl text-sm flex gap-2 mb-6'>
          <button className='px-2 border rounded-2xl border-gray-500 inline-flex items-center text-gray-700 text-sm'>Frontend</button>
          <button className='px-2 border rounded-2xl border-gray-500 inline-flex items-center text-gray-700 text-sm'>Security</button>
          <button className='px-2 border rounded-2xl border-gray-500 inline-flex items-center text-gray-700 text-sm'>ML/AI</button>
          <button className='px-2 border rounded-2xl border-gray-500 inline-flex items-center text-gray-700 text-sm'>Security</button>
        </ul>
      

      <div id='projects' className='scroll-mt-20'>
        <h5 className='text-2xl mb-4'>selected projects</h5>
        <div className='flex flex-wrap -mx-2'>
          {projects?.length > 0 && projects.map((project, index) => (
            <div key={index} className=' bento-item-exp w-full md:w-1/2 px-2 mb-4 transition-transform transform hover:scale-105'>
              <div className='h-auto border border-gray-500 rounded-md p-4'>
                <div className='flex justify-between items-center'>
                  <h6 className='text-xl font-bold'>{project.title}</h6>
                  <a 
                    href={project.source} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:underline hover:text-blue-300 transition'
                  >
                    Source Code
                  </a>
                </div>
                <p>{project.description}</p>
                <div className='flex gap-2 mt-2'>
                  {project.label.map((label, labelIndex) => (
                    <span 
                      key={labelIndex} 
                      className='px-2 py-0.5 border rounded-2xl border-gray-500 text-gray-700 text-sm hover:bg-gray-200 transition'
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
