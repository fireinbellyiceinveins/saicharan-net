import matter from 'gray-matter';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export function getWritings() {
  const writingsDir = path.join(contentDir, 'writings');
  if (!fs.existsSync(writingsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(writingsDir);
  const writings = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(writingsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdown } = matter(content);
      const slug = file.replace('.md', '');
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || markdown.substring(0, 150) + '...',
        content: markdown,
        ...data
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  return writings;
}

export function getWriting(slug) {
  const writings = getWritings();
  return writings.find(writing => writing.slug === slug);
}

export function getProjects() {
  const projectsDir = path.join(contentDir, 'projects');
  if (!fs.existsSync(projectsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(projectsDir);
  const projects = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(projectsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdown } = matter(content);
      const slug = file.replace('.md', '');
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || markdown.substring(0, 150) + '...',
        content: markdown,
        image: data.image,
        link: data.link,
        ...data
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  return projects;
}

export function getProject(slug) {
  const projects = getProjects();
  return projects.find(project => project.slug === slug);
}

export function getPeople() {
  const peopleFile = path.join(contentDir, 'people.json');
  if (!fs.existsSync(peopleFile)) {
    return [];
  }
  
  const content = fs.readFileSync(peopleFile, 'utf8');
  return JSON.parse(content);
}

export function renderMarkdown(content) {
  return marked(content);
} 