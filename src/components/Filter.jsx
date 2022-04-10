export const Filter = () => {
  return (
    <section id="filters" className="c-filters">
      <h2 className="c-filters-title u-text-blue-1 u-fw-400 u-fs-600">
        <i className="icon-filter_list u-pr-1"></i> Filtrar
      </h2>
      <form action="" className="c-filters-form">
        <fieldset>
          <legend>
            <i></i> Nombre del Hotel
          </legend>
          <label htmlFor="name">
            <i></i>
          </label>
          <input type="text" name="name" id="name" placeholder="Hotel" />
        </fieldset>
        <fieldset>
          <legend>
            <i></i> Estrellas
          </legend>

          <input type="checkbox" name="all-stars" id="all-stars" />
          <label htmlFor="all-stars">Todas las estrellas</label>

          <input type="checkbox" name="one-star" id="one-star" />
          <label htmlFor="one-star">
            <i></i>
          </label>

          <input type="checkbox" name="two-stars" id="two-stars" />
          <label htmlFor="two-stars">
            <i></i>
          </label>

          <input type="checkbox" name="three-stars" id="three-stars" />
          <label htmlFor="three-stars">
            <i></i>
          </label>

          <input type="checkbox" name="four-stars" id="four-stars" />
          <label htmlFor="four-stars">
            <i></i>
          </label>

          <input type="checkbox" name="five-stars" id="five-stars" />
          <label htmlFor="five-stars">
            <i></i>
          </label>
        </fieldset>
      </form>
    </section>
  );
};
