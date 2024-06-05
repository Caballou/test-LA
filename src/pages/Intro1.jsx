import { Link } from "react-router-dom";

const Intro1 = () => {
  return (
    <div className=" w-full min-h-[100dvh] flex flex-col justify-center items-center">
      <div className=" border items-center justify-evenly flex flex-col  max-w-[90%] min-w-[350px] p-10 my-2">
        <h1 className="font-bold flex text-center">TEST - Parte 1</h1>
        <div className="flex flex-col text-2xl max-w-[800px]">
          <br />
          <p className="text-justify">
            <p>1) Durante cada pregunta deberás escuchar 2 audios (A y B)</p>
            <p>
              2){" "}
              <span className="font-semibold">
                ¡Prestá atención al escucharlos ya que{" "}
                <span className="text-red-600">solo sonarán 1 vez</span>!{" "}
              </span>
            </p>
            <p>
              3) Luego de la escucha, se mostrará la imagen de un espacio
              cerrado.
            </p>
            <p>
              4) Tendrás que elegir cual de los 2 audios escuchados (A o B)
              suena como si estuviese grabado dentro del lugar que se muestra en
              la imagen.
            </p>
          </p>
        </div>
        <br />
        <div className="flex flex-col justify-center items-center">
          <p className="border border-white rounded p-2 text-2xl mb-4">
            Cuando estés listo, hacé click en COMENZAR para inciar el test.
          </p>
          <Link to="/test-1">
            <button
              className="cursor-pointer border-2 border-[#965fd4] text-xl h-[80px]"
              onClick={() => sessionStorage.setItem("test-1", true)}
            >
              COMENZAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro1;
