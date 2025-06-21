import Layout from "../components/Layout";

export default function Work() {
  return (
    <Layout>
      <div className="page-header">
        <h1>Work</h1>
        <p>Over the past years, I've been super lucky to work with some amazing people, on a variety of great projects, ranging from open-source libraries to large-scale applications.</p>
      </div>

      <div className="markdown-content">
        <h2>Work Experience 1</h2>
        <p>
          Detailed description of your first work experience. Talk about the company, your role, the projects you worked on, technologies used, and your key contributions and learnings.
        </p>
        
        <h2>Work Experience 2</h2>
        <p>
          Detailed description of your second work experience. Talk about the company, your role, the projects you worked on, technologies used, and your key contributions and learnings.
        </p>

        <blockquote>
          "Choose a job you love, and you will never have to work a day in your life." - Confucius
        </blockquote>
      </div>
    </Layout>
  );
} 