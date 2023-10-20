import React from "react";
import useNavigate from "react-router-dom";
import Button from "../atoms/atoms";
import nanoid from "nanoid";
const notFound = () => {
  const navigate = useNavigate();
  return (
    <section className="top-sales">
      <h2 className="text-center">Страница не найдена</h2>
      <p>Извините, такая страница не найдена!</p>
      <Button
        key={nanoid()}
        text={"Вернуться на главную"}
        onClick={() => navigate("/fe-diplom-ver2")}
      />
    </section>
  );
};

export default notFound;