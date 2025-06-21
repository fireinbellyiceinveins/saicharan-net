import matter from 'gray-matter';
import { marked } from 'marked';
import peopleData from '../../content/people.json';

const writingsModules = import.meta.glob('../../content/writings/*.md', { as: 'raw', eager: true });
const projectsModules = import.meta.glob('../../content/projects/*.md', { as: 'raw', eager: true });

const allWritings = Object.entries(writingsModules).map(([path, rawContent]) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { data, content } = matter(rawContent);
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    content: content,
    ...data,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

const allProjects = Object.entries(projectsModules).map(([path, rawContent]) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { data, content } = matter(rawContent);
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    content: content,
    image: data.image,
    link: data.link,
    ...data,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export function getWritings() {
  return allWritings;
}

export function getWriting(slug) {
  return allWritings.find((writing) => writing.slug === slug);
}

export function getProjects() {
  return allProjects;
}

export function getProject(slug) {
  return allProjects.find((project) => project.slug === slug);
}

export function getPeople() {
  return peopleData;
}

export function renderMarkdown(content) {
  return marked(content);
} 