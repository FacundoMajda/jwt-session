import github from "/src/assets/img/github.svg";

const GitHubIcon = () => {
  return (
    <img
      src={github}
      alt="GitHub Logo"
      width="62"
      height="62"
      className="transition-opacity hover:opacity-75"
    />
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center">
      <footer className="bg-indigo-500 text-white py-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {currentYear} LockDev. Todos los derechos reservados.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center">
          <div className="mt-16">
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://github.com/FacundoMajda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">GitHub</span>
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
