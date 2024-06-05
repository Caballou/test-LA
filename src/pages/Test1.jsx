import arrayShuffle from "array-shuffle";
import { useEffect, useState } from "react";
import { group1, group2, group3 } from "../pairs";
import "./Test.css";
import { useNavigate } from "react-router-dom";

const Test1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [randomPairs, setRandomPairs] = useState();
  const [data, setData] = useState({});
  const [disabledA, setDisabledA] = useState(false);
  const [disabledB, setDisabledB] = useState(true);
  const [listen, setListen] = useState(0);
  const [choose, setChoose] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  const playAudio = (num) => {
    const audio = new Audio(`/stimulis/${randomPairs[count][num]}.wav`);
    setIsPlaying(true);
    audio.play();

    audio.onended = () => {
      setIsPlaying(false);
      if (num === 1) {
        setDisabledA(true);
        setDisabledB(false);
      } else {
        setDisabledA(false);
        setDisabledB(true);
      }
      setListen(listen + 1);
    };
  };

  if (listen === 2) {
    setChoose(true);
    setListen(0);
  }

  const selection = (audio) => {
    setCount(count + 1);
    setSelectedAudio(audio);
    if (count >= randomPairs.length - 1) {
      setFinished(true);
    } else {
      setTimeout(() => {
        setChoose(false);
        setSelectedAudio(false);
      }, 1500);
    }
  };

  useEffect(() => {
    const group = Math.floor(Math.random() * 3);
    if (group === 0) {
      setRandomPairs(arrayShuffle(group1));
    } else if (group === 1) {
      setRandomPairs(arrayShuffle(group2));
    } else {
      setRandomPairs(arrayShuffle(group3));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group1, group2, group3]);

  useEffect(() => {
    if (finished) {
      sessionStorage.setItem("intro-2", true);
      setTimeout(() => {
        navigate("/intro-2", { state: data });
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  return (
    <>
      {randomPairs && !choose && !finished ? (
        <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
          <h1 className="text-4xl">
            TEST 1 - Pregunta {count + 1}/{randomPairs.length}
          </h1>
          <div className="border flex flex-col justify-evenly w-fitmax-w-[600px] min-w-[350px] py-10 my-6">
            <div className="text-4xl text-center my-2">Escuchar: </div>
            <div className="flex justify-evenly my-2">
              <button
                className={`button  ${
                  disabledA
                    ? "cursor-not-allowed text-[#444] hover:border-transparent transition-none"
                    : "cursor-pointer border-2 border-[#965fd4]"
                }`}
                onClick={() => {
                  if (!isPlaying && !disabledA) {
                    setDisabledA(true);
                    playAudio(1);
                  }
                }}
              >
                A
              </button>
              <button
                className={`button ${
                  disabledB
                    ? "cursor-not-allowed text-[#444] border-2 hover:border-transparent transition-none"
                    : "cursor-pointer border-2 border-[#965fd4]"
                }`}
                onClick={() => {
                  if (!isPlaying && !disabledB) {
                    setDisabledB(true);
                    playAudio(2);
                  }
                }}
              >
                B
              </button>
            </div>
          </div>{" "}
        </div>
      ) : choose && !selectedAudio ? (
        <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
          <h1 className="text-4xl">Pregunta {count + 1}</h1>
          <div className="flex justify-center border-4  p-1 my-6">
            <img
              src={`./stimulis/${randomPairs[count][3]}.jpg`}
              className="w-[50dvw] min-w-[350px]"
            />
          </div>

          <div className="mt-2 border-2 border-slate-200 rounded-md min-w-[150px] flex flex-col justify-center items-center w-fit px-5 ">
            <div className="text-xl text-center my-2 w-[50dvw] min-w-[350px] max-w-[800px] ">
              ¿Que audio suena como si estuviese grabado dentro del espacio que
              se muestra en la imagen?{" "}
            </div>
            <div className="flex justify-evenly my-2">
              <button
                className={`button cursor-pointer border-2 border-[#965fd4]`}
                onClick={() => {
                  setData({
                    ...data,
                    [randomPairs[count][0]]: randomPairs[count][1],
                  });
                  selection("A");
                }}
              >
                A
              </button>
              <button
                className={`button cursor-pointer border-2 border-[#965fd4]`}
                onClick={() => {
                  setData({
                    ...data,
                    [randomPairs[count][0]]: randomPairs[count][2],
                  });

                  selection("B");
                }}
              >
                B
              </button>
            </div>
          </div>
        </div>
      ) : selectedAudio && !finished ? (
        <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
          <div className="border-2 border-[#965fd4] flex justify-center w-fit m-2 p-5 text-3xl items-center rounded-xl">
            <p className="text-center">
              Ha seleccionado el audio: <br />
              <p className="border-2 text-4xl border-red-500 rounded-md m-8 p-4 w-[80px] text-[#8bd450] inline-block">
                {selectedAudio}
              </p>{" "}
              <br />
              Siguiente pregunta...
            </p>
          </div>
        </div>
      ) : finished ? (
        <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
          <div className="border-2 border-[#965fd4] flex justify-center w-fit m-2 p-5 text-3xl items-center rounded-xl">
            <p className="text-center">
              Ha seleccionado el audio: <br />
              <p className="border-2 text-4xl border-red-500 rounded-md m-8 p-4 w-[80px] text-[#8bd450] inline-block">
                {selectedAudio}
              </p>{" "}
              <br />
              Gracias por completar la Parte 1, no cierres la ventana!
              <br />
              Redireccionando a la Parte 2...
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Test1;
