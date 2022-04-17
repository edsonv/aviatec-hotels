import PropTypes from "prop-types";
import { useState } from "react";
import { Stars } from "./Stars";

export const Filter = ({ search, searchInput, handleSearch, selection }) => {
  return (
    <section id="filters" className="c-filters u-d-flex">
      <h2 className="c-filters-title">
        <i className="icon-filter_list u-pr-1 u-d-lg-none"></i> Filtrar
      </h2>
      <form action="" className="c-filters-form">
        <fieldset>
          <legend
            style={{
              padding: "1rem 0",
              borderBottom: "1px solid",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <i className="icon-search"></i> Nombre del Hotel
          </legend>
          <div className="c-input-group">
            <input
              type="text"
              name="hotelName"
              id="hotelName"
              placeholder="Hotel"
              value={search}
              ref={searchInput}
              onChange={handleSearch}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend
            style={{
              padding: "1rem 0",
              borderBottom: "1px solid",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <i className="icon-star"></i> Estrellas
          </legend>
          <div className="c-input-group">
            <input
              type="radio"
              name="all-stars"
              id="all-stars"
              value=""
              checked={selection === ""}
              onChange={handleSearch}
            />
            <label htmlFor="all-stars">Todas las estrellas</label>
          </div>

          <div className="c-input-group">
            <input
              type="radio"
              name="one-star"
              id="one-star"
              value={1}
              checked={selection === "1"}
              onChange={handleSearch}
            />
            <label htmlFor="one-star">
              <Stars count={1} />
            </label>
          </div>

          <div className="c-input-group">
            <input
              type="radio"
              name="two-stars"
              id="two-stars"
              value={2}
              checked={selection === "2"}
              onChange={handleSearch}
            />
            <label htmlFor="two-stars">
              <Stars count={2} />
            </label>
          </div>

          <div className="c-input-group">
            <input
              type="radio"
              name="three-stars"
              id="three-stars"
              value={3}
              checked={selection === "3"}
              onChange={handleSearch}
            />
            <label htmlFor="three-stars">
              <Stars count={3} />
            </label>
          </div>

          <div className="c-input-group">
            <input
              type="radio"
              name="four-stars"
              id="four-stars"
              value={4}
              checked={selection === "4"}
              onChange={handleSearch}
            />
            <label htmlFor="four-stars">
              <Stars count={4} />
            </label>
          </div>

          <div className="c-input-group">
            <input
              type="radio"
              name="five-stars"
              id="five-stars"
              value={5}
              checked={selection === "5"}
              onChange={handleSearch}
            />
            <label htmlFor="five-stars">
              <Stars count={5} />
            </label>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

Filter.propTypes = {
  search: PropTypes.string,
  searchInput: PropTypes.object,
  handleSearch: PropTypes.func,
  selection: PropTypes.string,
};
