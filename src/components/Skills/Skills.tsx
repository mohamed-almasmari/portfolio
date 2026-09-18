
function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React Router",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express 5", "REST APIs", "Mongoose", "MongoDB"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "SQL", "Database Design"],
    },
    {
      title: "API & Web Development",
      skills: [
        "Fetch API",
        "URLSearchParams",
        "HTTP",
        "JSON",
        "CORS",
        "CRUD",
        "API Integration",
      ],
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "npm"],
    },
    {
      title: "Programming Concepts",
      skills: [
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "Debugging",
        "Problem Solving",
        "Software Testing",
        "Asynchronous JavaScript",
        "Promises",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies & Skills
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
