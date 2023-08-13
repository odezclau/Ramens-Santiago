import React from "react";

function Footer() {
  return (
    <section className="ct-footer">
      <div className="container-fluid os_container os_container_big">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <div className="ct-footer-logo">
              <img
                className="ct-footer-logo__img"
                alt="Bao"
                title="Bao"
                src="/assets/images/apple-touch-icon.png"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-3">
            <a className="ct-footer-logo__links footer__link" href="#">
              Información Legal
            </a>
            <a className="ct-footer-logo__links footer__link" href="#">
              Términos y Condiciones de Uso
            </a>
            <a className="ct-footer-logo__links footer__link" href="#">
              Política de Privacidad
            </a>
          </div>

          <div className="col-xs-12 col-sm-3">
            <h3>Redes sociales</h3>
            <a
              className="ct-footer-logo__links footer__link"
              target="blank"
              href="https://www.instagram.com/baoscl/">
              Instagram
            </a>
            <a
              className="ct-footer-logo__links footer__link"
              target="blank"
              href="https://www.facebook.com/restobao">
              Facebook
            </a>
          </div>

          <div className="col-xs-12 col-sm-3">
            <h3>Mi cuenta</h3>
            <a className="ct-footer-logo__links footer__link" href="#">
              Pedir
            </a>
            <a className="ct-footer-logo__links footer__link" href="#">
              PuntosBAO
            </a>
            <a className="ct-footer-logo__links footer__link" href="#">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
