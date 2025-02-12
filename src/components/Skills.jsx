import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/java-icon.svg',
    label: 'Java',
    desc: 'Programming'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/aws-svgrepo-com.svg',
    label: 'AWS',
    desc: 'Database'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/python-icon.svg',
    label: 'Python',
    desc: 'Programming'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/sql-database-generic-svgrepo-com.svg',
    label: 'SQL',
    desc: 'Database'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/vuejs-icon.svg',
    label: 'Vue',
    desc: 'Framework'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/Charlie-Wilson-Portfolio/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];


const Skills = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Technical Skills
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Some tools i have experience with...
                </p>

                <div className="grid gao-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
                    {
                        skillItem.map(({ label, imgSrc, desc}, key) => (
                            <SkillCard 
                            imgsrc={imgSrc}
                            label={label}
                            desc={desc}
                            key={key}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills