import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Menu } from "../../components/Menu";
import "./style.css";

export const ElementInicioDeSesion = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="element-inicio-de-sesion">
      <div className="div-2">
        {screenWidth < 1440 && (
          <div className="overlap-group">
            <img className="BG" alt="Bg" src="https://c.animaapp.com/0csqBBFP/img/bg-1.png" />
            <div className="login">
              <div className="button-primary">
                <div className="text-wrapper-2">Ingresar</div>
              </div>
              <div className="text-wrapper-3">¿Olvidaste tu contraseña?</div>
            </div>
            <div className="text-wrapper-4">Contraseña</div>
            <div className="text-wrapper-5">Mostrar</div>
            <img className="img" alt="Bg" src="https://c.animaapp.com/0csqBBFP/img/bg-1.png" />
            <div className="text-wrapper-6">Numero de documento</div>
            <div className="text-wrapper-7">Iniciar Sesión</div>
          </div>
        )}

        <img
          className="image"
          style={{
            left:
              screenWidth < 1440
                ? "655px"
                : screenWidth >= 1440 && screenWidth < 1440
                ? "92px"
                : screenWidth >= 1440
                ? "653px"
                : undefined,
            top:
              screenWidth < 1440
                ? "80px"
                : screenWidth >= 1440 && screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                ? "38px"
                : undefined,
          }}
          alt="Image"
          src="https://c.animaapp.com/0csqBBFP/img/image-58-2.png"
        />
        {screenWidth < 1440 && <div className="text-wrapper-8">A TU NIVEL</div>}

        {screenWidth >= 1440 && (
          <Menu
            className="menu-instance"
            menuItemDescription="Contacto"
            menuItemLabel="Configuracion Usuarios"
            menuItemLabel1="Ingreso Peso"
            menuItemLabel2="Seleccion Rutina"
            menuItemLabel3="Dias Entrenamento"
            menuItemLabel4="Informacion General"
            text="MENU PRINCIPAL"
          />
        )}
      </div>
    </div>
  );
};
