import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProject, renderMarkdown } from "../utils/content";
import invariant from "tiny-invariant";

export async function loader({ params }) {
  invariant(params.slug, "Expected params.slug");
  const project = getProject(params.slug);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  const html = renderMarkdown(project.content);
  return json({ project, html });
}

export default function ProjectSlug() {
  const { project, html } = useLoaderData();

  return (
    <>
      <div className="post-header">
        <h1 className="post-title">{project.title}</h1>
        <p className="post-date">
          {new Date(project.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      {project.image && <img src={project.image} alt={project.title} style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />}
      {project.link && <p><a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a></p>}
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
} 