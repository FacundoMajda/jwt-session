// eslint-disable-next-line react/prop-types
const BlogPost = ({ src, alt, title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={src} className="w-full h-48 object-cover" alt={alt} />
        <div className="p-6">
          <h5 className="text-2xl font-bold mb-2">{title}</h5>
          <p className="text-gray-700 mb-4">{description}</p>
          <a
            href="#"
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
