import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="markdown-content">
        <h1>Saicharan</h1>
        <p>
          I'm a developer and designer. My interests span a broad spectrum of
          subjects, encompassing web development, creative coding, and human-computer
          interaction.
        </p>
        <p>
          This website serves as my digital garden where I document my journey, 
          thoughts, and experiences. I built it with Remix and ❤️.
        </p>
        <p>
          You can gain further insights into my background and interests through my{" "}
          <a href="/writing">thoughts</a> and <a href="/projects">projects</a>, 
          or find me on social media.
        </p>
      </div>
    </Layout>
  );
} 