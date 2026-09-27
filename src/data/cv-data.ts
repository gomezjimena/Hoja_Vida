import { CVData } from "@/types/cv";

// Toda la información de la hoja de vida vive en este archivo.
export const cvData: CVData = {
  profile: {
    name: "Jimena Muñoz Gomez",
    professionalTitle: "Estudiante de Ingeniería de Sistemas",
    photoUrl: "/foto_perfil2.png",
    shortBio:
      "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, enfocada en desarrollo de software, procesamiento de datos y machine learning.",
    fullBio:
      "Curso Ingeniería de Sistemas en la Universidad de Antioquia (UdeA), con asignaturas que cubren calidad de software, arquitectura de computadores, gestión de proyectos, machine learning y redes de comunicaciones. Tengo experiencia práctica en desarrollo full-stack con ASP.NET MVC, SQL Server y ADO.NET, y he trabajado como asistente administrativa en la UdeA y como instructora de machine learning en Link-Tech / Estud-IA. Me interesan los proyectos que combinan buen diseño de software con datos e inteligencia artificial.",
    hobbies: [
  { label: "Series y películas", icon: "Film" },
  { label: "Cocinar cosas nuevas", icon: "ChefHat" },
  { label: "Caminatas y aire libre", icon: "Mountain" },
  { label: "Música en vivo", icon: "Music" },
],
  },
  contact: {
    location: "Medellín, Colombia",
    email: "jimenamu27@gmail.com", 
    phone: "+57 302 301 9299", 
    edad: 20, 
  },
  languages: [
    { name: "Español", percentage: 100 },
    { name: "Inglés", percentage: 60 }, 
  ],
  programmingLanguages: [
    { name: "C# / .NET", percentage: 65 },
    { name: "SQL", percentage: 90 },
    { name: "Python", percentage: 95 },
    { name: "TypeScript / JavaScript", percentage: 70 },
  ],
  extraSkills: [
    "Trabajo en equipo",
    "Scrum Master",
    "Comunicación técnica",
    "Resolución de problemas",
    "Pensamiento analítico",
  ],
  knowledge: [
    {
      title: "Desarrollo full-stack",
      description:
        "Construcción de aplicaciones web con ASP.NET MVC, SQL Server y ADO.NET, desde la capa de datos hasta la interfaz.",
      icon: "Code2",
    },
    {
      title: "Machine Learning",
      description:
        "Fundamentos de aprendizaje automático aplicados en cursos y como instructora en Link-Tech / Estud-IA.",
      icon: "BrainCircuit",
    },
    {
      title: "Calidad de software",
      description:
        "Diseño y ejecución de técnicas de prueba (caja negra y caja blanca) para verificar la calidad de un sistema.",
      icon: "ShieldCheck",
    },
    {
      title: "Gestión de proyectos",
      description:
        "Manejo de épicas, historias de usuario y backlog bajo Scrum, incluyendo el rol de Scrum Master.",
      icon: "KanbanSquare",
    },
    {
      title: "Bases de datos",
      description:
        "Modelado y consulta de datos relacionales con SQL Server, incluyendo acceso a datos con ADO.NET.",
      icon: "Database",
    },
    {
      title: "Arquitectura de computadores",
      description:
        "Comprensión de los fundamentos de hardware y arquitectura que soportan el software que construyo.",
      icon: "Cpu",
    },
  ],
  education: [
    {
      institution: "Pascual Bravo",
      date: "2020 - 2022",
      title: "Técnica en Auxiliar de Sistemas",
      description:
        "Formación en desarrollo de software, calidad, arquitectura de computadores, gestión de proyectos, machine learning y redes de comunicaciones.",
    },
    {
      institution: "Universidad de Antioquia (UdeA)",
      date: "En curso",
      title: "Ingeniería de Sistemas",
      description:
        "Formación en desarrollo de software, calidad, arquitectura de computadores, gestión de proyectos, machine learning y redes de comunicaciones.",
    },
  ],
  projects: [
  {
    title: "Sistema de Bibliotecas",
    shortDescription:
      "Sistema web para la gestión de una biblioteca, desplegado en Vercel.",
    description:
      "Aplicación web para gestionar los procesos de una biblioteca (catálogo, préstamos, usuarios). Desplegada en producción en sistemadebibliotecas.vercel.app.",
    imageUrl: "/bibli.jpeg",
    githubUrl: "https://github.com/gomezjimena/sistemadebibliotecas",
  },
  {
    title: "Gestor de Tareas",
    shortDescription:
      "Servicio web para gestionar tareas, construido con Node.js y MySQL.",
    description:
      "Backend de un gestor de tareas construido con Node.js y Express, con persistencia de datos en MySQL y vistas renderizadas del lado del servidor.",
    imageUrl: "/gest.jpeg",
    githubUrl: "https://github.com/gomezjimena/gestor_tareas",
  },
  {
    title: "UdeAtlas",
    shortDescription:
      "Mapa interactivo de la Universidad de Antioquia.",
    description:
      "Aplicación con backend y frontend separados que muestra un mapa interactivo de la Universidad de Antioquia. Desplegada en ude-atlas.vercel.app.",
    imageUrl: "/map.jpeg",
    githubUrl: "https://github.com/gomezjimena/UdeAtlas",
  },
  {
    title: "Modelo de Afluencia del Metro de Medellín",
    shortDescription:
      "Modelos de machine learning para predecir la afluencia horaria del Metro de Medellín.",
    description:
      "Proyecto de machine learning en equipo (con Sebastián Flórez Jaramillo y Juan Pablo Herrera Jaramillo) que compara Regresión Lineal, KNN, Gradient Boosting, MLP y SVR para predecir la afluencia horaria de pasajeros del Metro de Medellín en 2024, con ingeniería de características y reducción de dimensión (PCA, UMAP). Los mejores modelos (KNN y MLP) alcanzaron un R² superior a 0.98.",
    imageUrl: "/red.jpeg",
    githubUrl: "https://github.com/gomezjimena/Modelo_afluencia_metro",
  },
],
  socialLinks: [
    { icon: "Github", label: "GitHub", url: "https://github.com/gomezjimena" }, 
    { icon: "Linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/jimena-muñoz-gómez" }, 
    { icon: "Mail", label: "Correo", url: "mailto:jimena.munoz@udea.edu.co" }, 
  ],
};
