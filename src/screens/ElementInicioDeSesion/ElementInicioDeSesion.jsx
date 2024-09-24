import React from "react";
import "./style.css";

export const ElementInicioDeSesion = () => {
  return (
    <div className="element-inicio-de-sesion">
      <div className="div">
        <div className="overlap-group">
          <img className="BG" alt="Bg" src="/img/bg-1.png" />
          <div className="login">
            <div className="button-primary">
              <div className="text-wrapper">Ingresar</div>
            </div>
            <div className="text-wrapper-2">¿Olvidaste tu contraseña?</div>
          </div>
          <div className="text-wrapper-3">Contraseña</div>
          <div className="text-wrapper-4">Mostrar</div>
          <img className="img" alt="Bg" src="/img/bg-1.png" />
          <div className="text-wrapper-5">Numero de documento</div>
          <div className="text-wrapper-6">Iniciar Sesión</div>
        </div>
        <img className="image" alt="Image" src="/img/image-58.png" />
        <div className="text-wrapper-7">A TU NIVEL</div>
      </div>
    </div>
  );
};
