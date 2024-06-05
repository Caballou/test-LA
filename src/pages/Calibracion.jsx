import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Calibracion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [test, setTest] = useState(false);
  const calibration = useRef(new Audio(`/stimulis/CAL.wav`));

  const playPause = () => {
    if (isPlaying) {
      calibration.current.pause();
    } else {
      calibration.current.play();
      calibration.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
      <div className="border h-[80%] items-center justify-center flex flex-col w-fit max-w-[90%] min-w-[350px] p-10 my-6">
        <div className="flex flex-col text-justify text-xl max-w-[800px]">
          <p className="text-4xl font-bold my-10 flex text-center justify-center">
            Calibración:
          </p>
          <p className="text-2xl">
            Reproducí el audio de calibración haciendo click en PLAY, y{" "}
            <b>subí o bajá</b> el volumen de tu computadora hasta que le pieza
            musical sea <b>apenas audible y entendible</b>.
          </p>
        </div>
        <div className="mt-10">
          <button
            className={`mx-5 h-[80px] text-xl cursor-pointer border-2 border-[#965fd4]`}
            onClick={() => {
              playPause();
              setTest(true);
            }}
          >
            {!isPlaying ? "PLAY" : "STOP"}
          </button>
          {/* <button
            className={`mx-5 h-[80px] text-xl  ${
              stopDisabled
                ? "cursor-not-allowed text-[#444] hover:border-transparent transition-none"
                : "cursor-pointer border-2 border-[#965fd4]"
            }`}
            onClick={() => {
              setStopDisabled(true);
              setPlayDisabled(false);
              calibration("stop");
            }}
          >
            STOP
          </button> */}
        </div>
        <div className="flex flex-col text-justify text-xl max-w-[800px] mt-10">
          <p className="text-2xl">
            Una vez calibrado el volumen{" "}
            <b className="text-red-600">
              por favor no modifiques el volumen hasta finalizar todo el test!
            </b>{" "}
          </p>
          <div className="flex justify-center mt-10">
            {test ? (
              <Link to="/intro-1">
                <button
                  className="cursor-pointer border-2 border-[#965fd4] text-xl h-[80px]"
                  onClick={() => {
                    sessionStorage.removeItem("calibracion");
                    calibration.current.pause();
                    setIsPlaying(false);
                  }}
                >
                  COMENZAR TEST
                </button>
              </Link>
            ) : (
              <button className=" text-xl h-[80px] border-2 cursor-not-allowed text-[#444] hover:border-transparent transition-none">
                TEST
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calibracion;
