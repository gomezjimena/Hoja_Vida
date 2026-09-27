// Modelo de datos de la hoja de vida.
// Cada interfaz corresponde a un bloque de información definido en el
// análisis previo del proyecto 
export interface Profile {
  name: string;
  professionalTitle: string;
  photoUrl: string;
  shortBio: string;
  fullBio: string;
  hobbies: { label: string; icon: string }[];
}

export interface Contact {
  edad: number;
  location: string;
  email: string;
  phone: string;
}

// "Skill" se reutiliza tanto para idiomas como para lenguajes de
// programación: ambos comparten la misma forma (nombre + porcentaje).
export interface Skill {
  name: string;
  percentage: number; // 0 - 100
}

export interface Knowledge {
  title: string;
  description: string;
  icon: string; 
}

export interface Education {
  institution: string;
  date: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
}

export interface SocialLink {
  icon: string; 
  label: string;
  url: string;
}

export interface CVData {
  profile: Profile;
  contact: Contact;
  languages: Skill[];
  programmingLanguages: Skill[];
  extraSkills: string[];
  knowledge: Knowledge[];
  education: Education[];
  projects: Project[];
  socialLinks: SocialLink[];
}
