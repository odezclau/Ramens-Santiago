export const Slider = () => {
  return (
    <div className="ct-slider">
      <div className="ct-slider__wrapper">
        <div className="carousel-root" tabIndex="0">
          <div className="carousel carousel-slider">
            <ul className="control-dots">
              <li
                className="dot selected"
                value="0"
                role="button"
                tabIndex="0"
                aria-label="slide item 1"></li>
            </ul>
            <button
              type="button"
              aria-label="previous slide / item"
              className="control-arrow control-prev control-disabled"></button>
            <div className="slider-wrapper axis-horizontal">
              <ul className="slider animated">
                <li className="slide selected previous">
                  <div className="_2durO9KZkaITFPWx0xVVuV">
                    <img src="/assets/images/imagenlargaprincipal.webp" alt="plato de ramen con una salsa a su lado" title="" />
                  </div>
                </li>
                <li className="slide selected previous">
                  <div className="_2durO9KZkaITFPWx0xVVuV">
                    <img src="/assets/images/imagenlargaprincipal.webp" alt="" title="" />
                  </div>
                </li>
              </ul>
            </div>
            <button
              type="button"
              aria-label="next slide / item"
              className="control-arrow control-next control-disabled"></button>
          </div>
        </div>
      </div>
    </div>

  )
}
