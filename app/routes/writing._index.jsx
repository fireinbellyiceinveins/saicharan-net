import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { getWritings } from "../utils/content";

export async function loader() {
  const writings = getWritings();
  return json({ writings });
}

export default function Writing() {
  const { writings } = useLoaderData();
  
  return (
    <>
      <div className="page-header">
        <h1>thoughts</h1>
        <p>Thoughts, ideas, and things I've learned along the way.</p>
      </div>
      {writings.length === 0 ? (
        <div className="card">
          <h3>No writings yet</h3>
          <p>I'm working on some thoughts. Check back soon!</p>
        </div>
      ) : (
        <ul className="writing-list">
          {writings.map((writing) => (
            <li key={writing.slug}>
              <Link to={`./${writing.slug}`} className="writing-list-item">
                <span className="writing-title">{writing.title}</span>
                <span className="writing-date">
                  {new Date(writing.date).toLocaleDateString('en-US', {
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