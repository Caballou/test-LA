import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Intro2 = () => {
  const [data] = useState(useLocation().state);
  console.log(data);
  return (
    <div className=" w-full min-h-[100dvh] flex flex-col justify-center items-center">
      <div className=" border items-center justify-evenly flex flex-col  max-w-[90%] min-w-[350px] p-10 my-2">
        <h1 className="font-bold flex text-center">TEST - Parte 2</h1>
        <div className="flex flex-col text-2xl max-w-[800px]">
          <p className="text-justify">
            <br />
            <p>PARTE 2:</p>
            <p>1) Ya casi terminamos, esta parte es más corta!</p>
            <p>2) Te apareceran 2 imagenes (A y B) y 1 audio para escuchar</p>
            <p>
              3){" "}
              <span className="font-semibold">
                ¡Nuevamente prestá atención ya que{" "}
                <span className="text-red-600">solo sonará 1 vez</span>!{" "}
              </span>
            </p>
            <p>
              4) Similar a la Parte 1, deberás elegir que imagen (A o B)
              corresponde al sonido escuchado.
            </p>
          </p>
        </div>
        <br />
        <div className="flex flex-col justify-center items-center">
          <p className="border border-white rounded p-2 text-2xl mb-4">
            Cuando estés listo, hacé click en COMENZAR para inciar el test.
          </p>
          <Link to="/test-2" state={data}>
            <button
              className="cursor-pointer border-2 border-[#965fd4] text-xl h-[80px]"
              onClick={() => sessionStorage.setItem("test-2", true)}
            >
              COMENZAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
