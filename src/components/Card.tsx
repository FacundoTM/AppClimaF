function Card({ clima }: any) {
  // Sacamos los datos necesarios del estado "ClimaAct" y lo guardamos en variables para que sean más faciles de identificar y el codigo quede más entendible.
  const _pais = clima.data.location.country;
  const _ciudad = clima.data.location.name;
  const _provincia = clima.data.location.region;
  const _horaYFecha = clima.data.location.localtime;
  const _temperatura = clima.data.current.temp_c;
  const _icono = clima.data.current.condition.icon;
  const _pronostico = clima.data.current.condition.text;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm mt-5 text-center">
        <h1 className="text-[20px] font-bold pt-5">
          {_pais || (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </h1>
        <h1 className="text-[16px] font-bold">
          {_provincia || (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          ,{" "}
          {_ciudad || (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </h1>
        <p>
          (
          {_horaYFecha || (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          )
        </p>
        <figure className="px-10 pt-3">
          <img
            src={_icono || "//cdn.weatherapi.com/weather/64x64/day/113.png"}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {_temperatura || (
              <span className="loading loading-spinner loading-xs"></span>
            )}{" "}
            °C
          </h2>
          <p>
            {_pronostico || (
              <span className="loading loading-spinner loading-xs"></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
