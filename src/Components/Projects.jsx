import { PROJECTS } from "../constants/index";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {  // ✅ Fixed class name
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",  // ✅ Fixed "erase" typo
                stagger: 0.3,
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 90%",
                    end:"bottom 20%",
                    toggleActions: "play none none reverse",
                    markers:false,
                },
            });
        }, projectsRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section className="pt-16" id="projects" ref={projectsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Projects ({PROJECTS.length})
                </h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.length === 0 ? (
                        <p className="text-center text-lg text-red-500">No projects found</p>
                    ) : (
                        PROJECTS.map((project) => {
                            console.log("🔹 Rendering project:", project);
                            return (
                                <div key={project.id} className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
                                    <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <img src={project.imgSrc} alt={project.title} className="h-60 w-full object-cover"/>
                                        </a>
                                        <div className="p-6">
                                            <h3 className="mb-2 text-lg font-medium lg:text-2xl">{project.title}</h3>
                                            <p className="mb-2"><strong>Tech Stack:</strong></p>
                                            <ul className="mb-4 flex flex-wrap">
                                                {project.techStack.map((tech, index) => (
                                                    <li key={index} className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
