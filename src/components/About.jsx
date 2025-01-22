
const aboutItems = [
    {
      label: 'Undergraduate GPA',
      number: 3.85
    },
    // {
    //   label: 'Years of experience',
    //   number: 10
    // }
  ];

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hi! I’m Charlie Wilson, a software developer from St. Paul, MN, passionate about creating user-centered applications and solving technical challenges. 
                    I’m currently pursuing a Master of Science in Computer Science, building on my Magna Cum Laude graduation in Computer Science and Data Science.
                    I’ve gained hands-on experience through an internship at Ameriprise Financial, as well as by helping others grow their skills as a Programming Tutor. 
                    As the Captain of Hamline University’s Football Team, I’ve developed strong leadership and teamwork skills, earning honors like First-Team Academic All-American and 
                    being and Campbell Trophey Semi-Finalist. With my skills,  I’m actively seeking opportunities to contribute to innovative projects and grow as a developer. 
                    Let’s connect and create something amazing!
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div
                                key={key}
                                > 
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default About