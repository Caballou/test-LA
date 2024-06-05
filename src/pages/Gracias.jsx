const Gracias = () => {
  sessionStorage.setItem("gracias", true);
  return (
    <div className=" w-full h-[100dvh] flex flex-col justify-center items-center">
      <div className=" border items-center justify-evenly flex flex-col w-fit max-w-[90%] min-w-[350px] p-10 my-6">
        <h1 className="font-bold flex text-center my-10">Gracias! 🙏</h1>

        <div className="flex flex-col text-justify  text-2xl max-w-[800px]">
          <p>
            Gracias por tomarte el tiempo de realizar el test! Tus respuestas ya
            fueron registradas y son de mucha ayuda para completar mi
            investigación.
          </p>
          <br />
          <p className="text-center text-3xl mt-10">
            ¡Ya podés cerrar la pestaña! 🤗
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Gracias;
