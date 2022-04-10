import { useEffect, useState } from "react";

export const useImage = (filename) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await import(`../assets/images/hotels/${filename}`);
        setImage(response.default);
      } catch (err) {
        setError(err);
      }
    };

    getImage();
  }, [filename]);

  return {
    image,
    error,
  };
};
