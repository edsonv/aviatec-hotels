export const Stars = ({ count }) => {
  return [...Array(count)].map((e, i) => (
    <i className="icon-star u-text-yellow-1 u-fs-700" key={i}></i>
  ));
};
