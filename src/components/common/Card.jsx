export const Card = ({ title, img, description, price, }) => {
  return (
    <div className="box-container__content content">
      <div className="box-container__img-ct">
        <img
          className="box-container__img-class"
          src={img}
          alt={title}
          title={title}
        />
      </div>

      <div className="ct-desc">
        <div className="ct-desc__title">
          {title}
        </div>
        <div className="ct-desc__desc">
          {description}
        </div>
        <div className="ct-desc__gap"></div>
        <div className="ct-desc__price">${price}</div>
      </div>

      <a className="full-product-info" href="#">
        Ver producto
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="svg-class"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </a>
    </div>
  )
}
