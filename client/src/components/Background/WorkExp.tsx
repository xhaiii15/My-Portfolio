import React from 'react';

//Define the Experience interface
interface Experience {
  company: string;
  title: string;
  dates: string,
  description: string;
  technologies: string[];
}
//Define prop types
interface WorkExperienceProps {
    experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
    return(
    <section className='text-white mt-4 font-[Poppins]'>
      {experiences.map((experience, index) => (
        <div key={index} className='bg-[#333446] p-5 rounded '>
          <h3>{experience.company}</h3>
          <h4>{experience.title}</h4>
          <p>{experience.dates}</p>
          <p>{experience.description}</p>
          <ul>
            {experience.technologies.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
