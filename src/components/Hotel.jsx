import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "./Image";
import { Stars } from "./Stars";

export const Hotel = ({ item }) => {
  return (
    <article className="c-card u-d-flex u-bg-white" key={item.id}>
      <div className="c-card-header u-d-flex">
        <div>
          <Image filename={item.image} />
        </div>
        <div
          className="c-card-description u-d-flex"
          style={{ "--gap": "0.7rem" }}
        >
          <h2 className="u-fs-600 u-text-blue-2">{item.name}</h2>
          <span>
            <Stars count={item.stars} />
          </span>
          <div className="u-d-flex" style={{ "--gap": "6px" }}>
            {item.amenities.map((ammenity) => {
              return (
                <i className={`icon-${ammenity} u-fs-700`} key={ammenity}></i>
              );
            })}
          </div>
        </div>
      </div>
      <div className="c-card-preview u-d-flex">
        <p className="u-text-grey-1 u-fs-300 u-text-center">
          Precio por noche por habitación
        </p>
        <p className="u-text-yellow-2 u-text-center u-fs-700">
          ARS <span className="u-fw-700">{item.price}</span>
        </p>
        <Link to="#" className="c-card-button u-text-center">
          Ver hotel
        </Link>
      </div>
    </article>
  );
};

Hotel.propTypes = {
  item: PropTypes.object,
};
