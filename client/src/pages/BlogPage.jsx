import BlogPost from "../components/Blog/BlogPost";
import Header from "../components/Blog/Header";
import Footer from "../components/Footer/Footer";

const BlogPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Publicaciones Recientes</h2>
        <div className="flex mb-16">
          <BlogPost
            src="/src/assets/img/javascript.png"
            alt="JavaScript"
            title="Introducción a JavaScript ES6"
            description="Descubre las nuevas características de ES6 que están cambiando la forma en que escribimos JavaScript."
          />
          <BlogPost
            src="/src/assets/img/docker.png"
            alt="Docker"
            title="Docker para Desarrolladores"
            description="Aprende cómo Docker puede simplificar la configuración de tu entorno de desarrollo."
          />
          <BlogPost
            src="/src/assets/img/agile.png"
            alt="Agile"
            title="Metodologías Ágiles"
            description="Explora cómo las metodologías ágiles pueden mejorar la eficiencia y la colaboración en tu equipo de desarrollo."
          />
        </div>
        {/* <CategoryList /> */}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
