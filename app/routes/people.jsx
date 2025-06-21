import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Layout from "../components/Layout";
import { getPeople } from "../utils/content";

export async function loader() {
  const people = getPeople();
  return json({ people });
}

export default function People() {
  const { people } = useLoaderData();

  return (
    <Layout>
      <div className="page-header">
        <h1>People</h1>
        <p>People that had an impact on me.</p>
      </div>

      {people.length === 0 ? (
        <div className="card">
          <h3>No one here yet...</h3>
          <p>I'm still compiling my list of impactful people. Check back soon!</p>
        </div>
      ) : (
        <div className="people-grid">
          {people.map((person) => (
            <div key={person.name} className="person-card">
              <a href={person.link} target="_blank" rel="noopener noreferrer">
                <img src={person.image} alt={person.name} className="person-image" />
                <div className="person-name">{person.name}</div>
              </a>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
} 