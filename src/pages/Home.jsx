import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
      <div className="h-[80dvh] border items-center justify-evenly flex flex-col w-fit max-w-[90%] min-w-[350px] p-10 my-6">
        <h1 className="font-bold flex text-center">Hola! Bievenido/a 😊</h1>

        <div className="flex flex-col text-justify text-2xl max-w-[800px]">
          <p>
            Primero que nada, gracias por tu tiempo. Mi nombre es Leandro Gómez
            y este es mi test para la materia Laboratorio de Acústica.
          </p>
          <br />
          <p className="border border-slate-200 w-full p-5 rounded text-center">
            El Test consta de 2 partes. Tranquilo/a, cada una de las partes se
            explica antes de comenzar a contestar 🫡
          </p>

          <div className="flex justify-center flex-col">
            <p className="mt-10">
              Antes que nada, vamos a calibrar el volumen de tus auriculares
              para poder realizar el test correctamente:
            </p>
            <div className="flex justify-center mt-10">
              <Link to="/calibracion">
                <button
                  className="text-xl h-[80px] border-2 border-[#965fd4]"
                  onClick={() => sessionStorage.setItem("calibracion", true)}
                >
                  Calibrar Auriculares
                </button>
              </Link>
            </div>
          </div>

          {/* <div>
            <p>
              <p className="font-semibold">
                <u>El Test consiste en lo siguente:</u>{" "}
              </p>
              <br />
              <p>1) Durante cada pregunta deberás escuchar 2 audios (A y B)</p>
              <p>
                2){" "}
                <span className="font-semibold">
                  ¡Prestá atención al escucharlos ya que{" "}
                  <span className="text-red-600">solo sonarán 1 vez</span>!{" "}
                </span>
              </p>
              <p>
                3) Una vez escuchados, se mostrará la imagen de un espacio
                cerrado.
              </p>
              <p>
                4) Tendrás que elegir cual de los 2 audios escuchados (A o B)
                suena como si estuviese grabado dentro del espacio que se
                muestra en la imagen.
              </p>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
