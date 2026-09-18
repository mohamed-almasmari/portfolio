const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Git",
    "GitHub",
  ];
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
