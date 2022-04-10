import { Link } from "react-router-dom";

import { Image } from "./Image";

import * as sampleData from "../data.json";
import { Stars } from "./Stars";

export const Hotels = () => {
  const data = Array.from(sampleData);

  return (
    <section
      id="hotels"
      className="c-hotels u-d-flex"
      style={{ "--gap": "10px" }}
    >
      {data.map((item) => (
        <article className="c-card u-bg-white" key={item.id}>
          <div>
            <div>
              <Image filename={item.image} />
            </div>
            <div>
              <h2 className="u-fs-600 u-text-blue-2">{item.name}</h2>
              <span>
                <Stars count={item.stars} />
              </span>
              <div className="u-d-flex" style={{ "--gap": "6px" }}>
                {item.amenities.map((ammenity) => {
                  return (
                    <i
                      className={`icon-${ammenity} u-fs-700`}
                      key={ammenity}
                    ></i>
                  );
                })}
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className="u-text-grey-1 u-fs-300">
              Precio por noche por habitación
            </p>
            <p className="u-text-yellow-2">
              ARS <span className="u-fw-700">{item.price}</span>
            </p>
            <Link to="#">Ver hotel</Link>
          </div>
        </article>
      ))}
    </section>
  );
};
