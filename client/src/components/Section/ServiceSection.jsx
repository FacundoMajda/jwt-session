// eslint-disable-next-line react/prop-types
const ServiceSection = ({ title, description, src, alt, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center py-16 bg-gray-50`}
    >
      <div className="md:w-1/2 p-8">
        <img
          src={src}
          className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          alt={alt}
        />
      </div>
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
