const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 p-4">
          <p className="text-lg leading-relaxed mb-4">
            Bienvenidos a <strong>LockDev</strong>, un espacio dedicado a todos
            los entusiastas del desarrollo de software, tanto principiantes como
            profesionales. Fundado en 2020 por un grupo de apasionados
            desarrolladores, nuestro objetivo es compartir conocimiento,
            experiencias y recursos que ayuden a otros a crecer en su carrera
            profesional.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Nuestra misión es simplificar el aprendizaje del desarrollo de
            software proporcionando contenido de calidad, tutoriales prácticos y
            consejos útiles sobre las últimas tecnologías y mejores prácticas de
            la industria. Creemos en el poder de la comunidad y en la
            importancia de mantenerse actualizado en un campo tan dinámico y en
            constante evolución como es el desarrollo de software.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            En LockDev, cubrimos una amplia gama de temas, desde lenguajes de
            programación como JavaScript, Python y Java, hasta frameworks
            modernos, metodologías ágiles, y herramientas de DevOps como Docker
            y Kubernetes. Nos enfocamos en crear contenido accesible y fácil de
            entender, sin importar el nivel de experiencia de nuestros lectores.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Únete a nuestra comunidad y participa en la conversación. Nos
            encantaría escuchar tus ideas, sugerencias y experiencias. Juntos,
            podemos construir un futuro mejor a través de la tecnología.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
          <img
            src="/src/assets/img/lockdev.webp"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
            alt="Equipo de LockDev"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
