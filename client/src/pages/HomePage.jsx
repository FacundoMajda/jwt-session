import Footer from "../components/Footer/Footer";
import Header from "../components/Head/Head";
import ServiceSection from "../components/Section/ServiceSection";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <div className="container-fluid m-10">
        <ServiceSection
          title="Desarrollo Web"
          description="En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente."
          src="/src/assets/img/home-desarrollo-web.webp"
          alt="Desarrollo Web"
        />
        <hr />
        <ServiceSection
          title="Desarrollo de Aplicaciones Móviles"
          description="Diseñamos y desarrollamos aplicaciones móviles innovadoras y personalizadas para Android e iOS, garantizando una experiencia de usuario óptima y una alta performance en cada dispositivo."
          src="/src/assets/img/home-desarrollo-movil.jpg"
          alt="Desarrollo de Aplicaciones Móviles"
          reverse
        />
        <hr />
        <ServiceSection
          title="Seguridad de Software"
          description="En LockDev, nos preocupamos por la seguridad de tus. Ofrecemos auditorías de seguridad y soluciones robustas para proteger tus sistemas de posibles amenazas y vulnerabilidades."
          src="/src/assets/img/home-seguridad-software.webp"
          alt="Seguridad de Software"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
