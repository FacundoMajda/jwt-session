import { useState } from "react";
import { fetchApi } from "../../API/api";
import { useForm } from "../../hooks/useForm";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [values, reset, handleChange] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetchApi("/register", "POST", values);

      if (res) {
        setLoading(false);
      }

      alert("Registrado@!!!");
      reset();
      navigate("/login");
    } catch (e) {
      console.log("error: ", e);
      setError("Error en la conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <Input
          label="Nombre de usuario"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Registrarse"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
