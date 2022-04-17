import { Header } from "../components/Header";
// import { Filter } from "../components/Filter";
import { Hotels } from "../components/Hotels";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="u-d-flex" style={{ "--gap": "40px" }}>
        {/* <Filter /> */}
        <Hotels />
      </main>
    </>
  );
};
