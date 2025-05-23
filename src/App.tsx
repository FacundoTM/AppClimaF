import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Creamos un estado en donde guardar el clima actual.
  const [climaAct, setClimaAct] = useState({
    data: {
      location: { region: "", name: "", country: "", localtime: "" },
      current: { temp_c: "", condition: { text: "", icon: "" } },
    },
  });

  // Hacemos la petición del clima actual hacia nuestra API.
  async function consultarClimaActual(ciudad: string) {
    const response = await axios.get(
      `https://appclimab.onrender.com/clima/${ciudad}`
    );

    return response;
  }

  // Para que inicialmente cargue un valor y lo guarde en nuestro estado de clima, hacemos uso de UseEffect para que al iniciar la App
  // se ejecute la función de consultarClimaActual con un valor que definimos previamente.
  useEffect(() => {
    async function consultarClimaInicial() {
      const res: any = await consultarClimaActual("Tigre, Buenos Aires");

      setClimaAct(res);
    }
    consultarClimaInicial();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col lg:flex-row h-220">
        <div className="card bg-base-300 rounded-box grid h-full grow place-items-center">
          <div className="text-center">
            <Search setClima={setClimaAct} />
            <Card clima={climaAct} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
