import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/Pathfinder.png',
      title: 'Pathfinding App',
      tags: ['React', 'Algorithms'],
      projectLink: 'https://chazwilson01.github.io/PathfindingApp/'
    },
    {
      imgSrc: '/images/Quiz.png',
      title: 'Web Guessing Game',
      tags: ['Vue', 'Development', 'FireBase'],
      projectLink: 'https://github.com/chazwilson01/MacQuiz'
    },
    {
      imgSrc: '/images/Tackle.png',
      title: 'Tackle Probability',
      tags: ['Machine Learning', 'R'],
      projectLink: 'Projects/TackleProb.html'
    },

  ];

const Work = () => {
    return (
        <section className="section" id="work">

            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My Portfolio Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
                        <ProjectCard 
                        key={key}
                        imgsrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work