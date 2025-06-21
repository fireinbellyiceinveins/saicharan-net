import Layout from "../components/Layout";
import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/about");
}

export default function Index() {
  return (
    <Layout>
      <div className="page-header">
        <h1>Welcome to my website</h1>
        <p>
          Hi, I'm Saicharan. This is my personal space where I share my thoughts, 
          projects, and the people who inspire me. Feel free to explore around.
        </p>
      </div>
      
      <div className="card">
        <h3>Recent Writings</h3>
        <p>Check out my latest thoughts and ideas in the writing section.</p>
        <a href="/writing">View all writings →</a>
      </div>
      
      <div className="card">
        <h3>Projects</h3>
        <p>Explore the projects I've been working on and my technical journey.</p>
        <a href="/projects">View all projects →</a>
      </div>
      
      <div className="card">
        <h3>People</h3>
        <p>Meet the people who have had a significant impact on my life and work.</p>
        <a href="/people">Meet the people →</a>
      </div>
    </Layout>
  );
} 