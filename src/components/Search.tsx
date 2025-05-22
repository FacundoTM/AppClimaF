import axios from "axios";
import { useState } from "react";

function Search({ setClima }: any) {
  const [query, setQuery] = useState("San Miguel, Buenos Aires"); // Guardamos la busqueda en un estado, por defecto será "San Miguel".

  const handleSubmit = async (e: any) => {
    // Prevenimos el evento por defecto para poder controlar lo que se escribe en el input.
    e.preventDefault();
    try {
      const url = "https://appclimab.onrender.com/consultarClima"; // Seteamos la URL de la API.
      const body = { ciudad: query }; // Le enviamos la ciudad por el body.

      const response = await axios.post(url, body); // Enviamos la petición POST.
      setClima(response); // Seteamos la "respuesta" de la petición en climaAct que está definido en App.tsx
    } catch (error) {
      console.error(error); // En caso de error lo controlamos y lo imprimimos por consola.
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="input w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Buenos Aires..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}

export default Search;
