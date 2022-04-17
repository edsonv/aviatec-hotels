import { useCallback, useRef, useMemo, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

import { Filter } from "./Filter";
import { Hotel } from "./Hotel";

export const Hotels = () => {
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState("");
  const searchInput = useRef(null);
  const { state } = useContext(AppContext);
  const hotels = state;

  const handleSearch = useCallback(
    (e) => {
      setSearch(searchInput.current.value);
      setSelection(e.target.value);
    },
    [searchInput]
  );

  const filteredHotels = useMemo(
    () =>
      hotels.filter((hotel) => {
        return (
          hotel.name.toLowerCase().includes(search.toLowerCase()) &&
          (parseInt(selection) === hotel.stars || selection === "")
        );
      }),
    [hotels, search, selection]
  );

  return (
    <>
      <Filter
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
        // handleSelection={handleSelection}
        selection={selection}
      />
      <section
        id="hotels"
        className="c-hotels u-d-flex"
        style={{ "--gap": "10px" }}
      >
        {filteredHotels.map((item) => (
          <Hotel item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};
