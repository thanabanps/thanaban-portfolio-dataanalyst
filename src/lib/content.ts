import { getCollection, type CollectionEntry } from 'astro:content';

export type Folder = CollectionEntry<'folders'>;
export type Project = CollectionEntry<'projects'>;

export async function getFolders(): Promise<Folder[]> {
  const folders = await getCollection('folders');
  return folders.sort((a, b) => a.data.order - b.data.order);
}

/** Published projects only (draft: true is hidden from the site). */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function projectsIn(folder: Folder, projects: Project[]): Project[] {
  return projects.filter((p) => p.data.folder.id === folder.id);
}

export function folderOf(project: Project, folders: Folder[]): Folder {
  const f = folders.find((x) => x.id === project.data.folder.id);
  if (!f) throw new Error(`Project "${project.id}" points to unknown folder "${project.data.folder.id}"`);
  return f;
}
