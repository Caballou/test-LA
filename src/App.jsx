import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Calibracion from "./pages/Calibracion";
import { useEffect } from "react";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import Form from "./pages/Form";
import Gracias from "./pages/Gracias";

const App = () => {
  const test1 = JSON.parse(sessionStorage.getItem("test-1"));
  const test2 = JSON.parse(sessionStorage.getItem("test-2"));
  const intro2 = JSON.parse(sessionStorage.getItem("intro-2"));
  const form = JSON.parse(sessionStorage.getItem("form"));
  const gracias = JSON.parse(sessionStorage.getItem("gracias"));
  const calibracion = JSON.parse(sessionStorage.getItem("calibracion"));
  const navigate = useNavigate();

  useEffect(() => {
    if (test1) {
      if (intro2) {
        if (test2) {
          if (form) {
            if (gracias) {
              navigate("/gracias", { replace: true });
            } else {
              navigate("/form", { replace: true });
            }
          } else {
            navigate("/test-2", { replace: true });
          }
        } else {
          navigate("/intro-2", { replace: true });
        }
      } else {
        navigate("/test-1", { replace: true });
      }
    } else if (calibracion) {
      navigate("/calibracion", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calibracion" element={<Calibracion />} />
        <Route path="/intro-1" element={<Intro1 />} />
        <Route path="/intro-2" element={<Intro2 />} />
        <Route path="/test-1" element={<Test1 />} />
        <Route path="/test-2" element={<Test2 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </div>
  );
};

export default App;
