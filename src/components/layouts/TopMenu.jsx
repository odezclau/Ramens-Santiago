import React from "react";

function TopMenu() {
  return (
    <div className="navbar mainNavbar">
      <div className="button_iniciar_session buttonShadow">
        <a className="button_iniciar_session__text">
          Iniciar sesión{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
          </svg>
        </a>
        <span></span>
      </div>

      <div className="logo">
        <div>
          <a href="/">
            <div className="logo__container">
              <span>
                <img
                  alt="Bao"
                  title="Bao"
                  src="/assets/images/principal.webp"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="navbarLinks navbarLinksContainer">
        <a className="navbarLinks__a navbarLink appSubtitle" href="#">
          Inicio
        </a>
        <a className="navbarLinks__a navbarLink appSubtitle" href="#">
          Menú
        </a>
        <a className="navbarLinks__a navbarLink appSubtitle" href="#">
          Nuestros Locales y Coberturas
        </a>
      </div>
    </div>
  );
}

export default TopMenu;
