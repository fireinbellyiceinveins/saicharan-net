import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getProjects } from "../utils/content";

export async function loader() {
  const projects = getProjects();
  return json({ projects });
}

export default function Projects() {
  const { projects } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>Projects</h1>
        <p>A collection of projects I've worked on.</p>
      </div>
      {projects.length === 0 ? (
        <div className="card">
          <h3>No projects yet</h3>
          <p>I'm currently working on adding my projects. Please check back later.</p>
        </div>
      ) : (
        <ul className="writing-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link to={`./${project.slug}`} className="writing-list-item">
                <span className="writing-title">{project.title}</span>
                <span className="writing-date">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).replace(/\//g, '.')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
} 