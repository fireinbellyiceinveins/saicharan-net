import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getWriting, renderMarkdown } from "../utils/content";
import invariant from "tiny-invariant";

export async function loader({ params }) {
  invariant(params.slug, "Expected params.slug");
  const writing = getWriting(params.slug);
  if (!writing) {
    throw new Response("Not Found", { status: 404 });
  }
  const html = renderMarkdown(writing.content);
  return json({ writing, html });
}

export default function WritingSlug() {
  const { writing, html } = useLoaderData();

  return (
    <>
      <div className="post-header">
        <h1 className="post-title">{writing.title}</h1>
        <p className="post-date">
          {new Date(writing.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
} 