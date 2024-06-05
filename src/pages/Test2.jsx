import { useEffect, useState } from "react";
import { images } from "../pairs";
import arrayShuffle from "array-shuffle";
import { useLocation, useNavigate } from "react-router-dom";

const Test2 = () => {
  const [disabledAudio, setDisabledAudio] = useState(false);
  const [enabledImg, setEnabledImg] = useState(false);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomImages, setRandomImages] = useState();
  const [data, setData] = useState(useLocation().state);
  const [selectedImage, setSelectedImage] = useState(null);
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  const playAudio = () => {
    const audio = new Audio(`/stimulis/${randomImages[count][1]}.wav`);
    setIsPlaying(true);
    audio.play();
    audio.onended = () => {
      setIsPlaying(false);
      setEnabledImg(true);
    };
  };

  const selection = (image) => {
    setCount(count + 1);
    setSelectedImage(image);
    if (count >= randomImages.length - 1) {
      setFinished(true);
    } else {
      setTimeout(() => {
        setEnabledImg(null);
        setDisabledAudio(false);
        setSelectedImage(null);
      }, 2200);
    }
  };

  useEffect(() => {
    setRandomImages(arrayShuffle(images));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    if (finished) {
      sessionStorage.setItem("form", true);
      setTimeout(() => {
        navigate("/form", { state: data });
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  return (
    <>
      {" "}
      {randomImages && !selectedImage && !finished ? (
        <div>
          <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
            <div className="mt-2 rounded-md min-w-[150px] flex flex-col justify-center items-center w-fit px-5 ">
              <h1 className="text-4xl mb-8">
                TEST 2 - Pregunta {count + 1}/{randomImages.length}
              </h1>

              <div className="flex">
                <div
                  className={`${
                    enabledImg
                      ? "hover:border-[#8bd450] hover:text-[#8bd450] border-white transition-all"
                      : "border-black cursor-not-allowed opacity-60"
                  } flex justify-center border-4 m-3 p-1`}
                  onClick={() => {
                    if (enabledImg) {
                      setData({
                        ...data,
                        [randomImages[count][0]]: randomImages[count][2],
                      });
                      selection("A");
                      if (count === randomImages.length - 1) {
                        setFinished(true);
                      }
                    }
                  }}
                >
                  {" "}
                  <p className="relative top-[50%] left-[50%] text-6xl -m-5 font-bold">
                    A
                  </p>
                  <img
                    src={`./stimulis/${randomImages[count][2]}.jpg`}
                    className="w-[35dvw] min-w-[350px]"
                  />{" "}
                </div>
                <div
                  className={`${
                    enabledImg
                      ? "hover:border-[#8bd450] hover:text-[#8bd450] border-white transition-all"
                      : "border-black cursor-not-allowed opacity-60"
                  } flex justify-center border-4  p-1 m-3`}
                  onClick={() => {
                    if (enabledImg) {
                      setData({
                        ...data,
                        [randomImages[count][0]]: randomImages[count][3],
                      });
                      selection("B");
                      if (count === randomImages.length - 1) {
                        setFinished(true);
                      }
                    }
                  }}
                >
                  {" "}
                  <p className="relative top-[50%] left-[50%] text-6xl -m-5 font-bold align-middle h-fit">
                    B
                  </p>
                  <img
                    src={`./stimulis/${randomImages[count][3]}.jpg`}
                    className="w-[35dvw] min-w-[350px]"
                  />
                </div>
              </div>
              {/* <div className="flex justify-evenly my-2 border-white border"> */}
              <div className="text-2xl text-center my-2 w-[50dvw] min-w-[350px] max-w-[800px]">
                ¿En cual de los dos lugares se grabó el audio escuchado? <br />
                (Click en la imagen para seleccionar)
              </div>

              <button
                className={`h-[60px] my-4 w-fit text-xl ${
                  disabledAudio
                    ? "cursor-not-allowed text-[#444] border-2 hover:border-transparent transition-none"
                    : "cursor-pointer border-2 border-[#965fd4]"
                }`}
                onClick={() => {
                  if (!isPlaying && !disabledAudio) {
                    setDisabledAudio(true);
                    playAudio();
                  }
                }}
              >
                Escuchar
              </button>
            </div>{" "}
            {/* </div> */}
          </div>
        </div>
      ) : selectedImage && !finished ? (
        <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
          <div className="border-2 border-[#965fd4] flex justify-center w-fit m-2 p-5 text-3xl items-center rounded-xl">
            <p className="text-center">
              Ha seleccionado la imagen: <br />
              <p className="border-2 text-4xl border-red-500 rounded-md m-8 p-4 w-[80px] text-[#8bd450] inline-block">
                {selectedImage}
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
                {selectedImage}
              </p>{" "}
              <br />
              Gracias por completar los Test, no cierres la ventana!
              <br />
              Solo unas preguntitas mas...
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Test2;
