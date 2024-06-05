import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState(useLocation().state);

  const navigate = useNavigate();

  const submitHandler = () => {
    axios
      .post(
        "https://sheet.best/api/sheets/4dd75c33-1b31-481f-aefa-dea71b89d181",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/gracias");
        } else {
          alert("Algo salió mal al enviar tus datos, intentá nuevamente");
        }
      });
  };

  return (
    <div>
      <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center border-2 border-[#965fd4]  w-fit m-2 p-5 text-xl  rounded-xl">
          <h1 className="text-5xl">Formulario</h1>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
            className="flex flex-col items-center  max-w-[800px]"
          >
            <div className="flex items-center flex-col">
              <label className="mt-4 mb-2">Nombre</label>
              <input
                className="text-center"
                name="name"
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="mt-4 mb-2">Edad</label>
              <input
                name="age"
                min={10}
                max={90}
                className="text-center"
                type="number"
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              ></input>
            </div>
            <label className="mt-4 mb-2">¿Tenés problemas auditivos?</label>
            <div className=" flex justify-center">
              <div className="flex w-fit p-2 border border-white rounded-xl">
                <div className="mx-4">
                  <label className="px-2">Sí</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="hearing"
                    value="1"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="mx-4">
                  <label className="px-2">No</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="hearing"
                    value="0"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <label className="mt-4 mb-2">
              ¿Prestás atención a cómo suenan las habitaciones/recintos?
            </label>
            <div className=" flex justify-center">
              <div className="flex w-fit p-2 border border-white rounded-xl">
                <div className="mx-4">
                  <label className="px-2">Sí</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="room"
                    value="1"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="mx-4">
                  <label className="px-2">No</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="room"
                    value="0"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <label className="mt-4 mb-2">
              ¿Sueles asistir a conciertos en vivo de distintos géneros
              musicales?
            </label>
            <div className=" flex justify-center">
              <div className="flex w-fit p-2 border border-white rounded-xl">
                <div className="mx-4">
                  <label className="px-2">Sí</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="live"
                    value="1"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="mx-4">
                  <label className="px-2">No</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="live"
                    value="0"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <label className="mt-4 mb-2">
              ¿Alguna vez has asistido a una misa dentro de un edificio
              religioso? (Iglesía, capilla, etc)
            </label>
            <div className=" flex justify-center">
              <div className="flex w-fit p-2 border border-white rounded-xl">
                <div className="mx-4">
                  <label className="px-2">Sí</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="mass"
                    value="1"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="mx-4">
                  <label className="px-2">No</label>
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="mass"
                    value="0"
                    required
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 border-2 border-[#965fd4] w-[40%]"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
