import PropTypes from "prop-types";
import { useImage } from "../hooks/useImage";

export const Image = ({ filename }) => {
  const { image, error } = useImage(filename);

  if (error) return <p>Error Loading</p>;
  return <img src={image} alt="" />;
};

Image.propTypes = {
  filename: PropTypes.string,
};
