import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { News } from "../../components/News/News";
import s from "./home.module.scss";

export const Home = () => {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const navigate = useNavigate();

  function clickHanler(i: number, elem: any) {
    setActive(i);
    if (elem.title === "Настройки") {
      setShow(!show);
    }
    if (elem.title === "Поиск адресов") {
      navigate("/address");
    }
  }

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <button
          onClick={() => setIsMenu(!isMenu)}
          className={s.burger}
        ></button>
        <Nav
          isMenu={isMenu}
          active={active}
          clickHanler={clickHanler}
          show={show}
        />
        {active === 0 ? (
          <News />
        ) : (
          <h2 className={s.title}>Здесь ничего нету!</h2>
        )}
      </main>
    </div>
  );
};
