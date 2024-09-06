import { useState } from "react";
import { fetchApi } from "../../API/api";
import { useForm } from "../../hooks/useForm";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [values, reset, handleChange] = useForm({
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
      const res = await fetchApi("/login", "POST", values);
      if (!res.user) {
        setError("Credenciales inválidas. Inténtalo de nuevo.");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(res.session.user));
      localStorage.setItem("token", JSON.stringify(res.session.authToken));

      alert("Inició sesión!!!");
      reset();
      navigate("/home");
    } catch (e) {
      setError("Error en la conexión. Inténtalo de nuevo.");
      console.log("error: ", e);
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
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
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
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
