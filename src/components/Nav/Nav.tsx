import { useRef } from "react";
import { useEffect } from "react";
import s from "./nav.module.scss";
import { navArr } from "./navData";

interface propsNav {
  isMenu: Boolean;
  active: Number;
  clickHanler: (i: number, elem: object) => void;
  show: Boolean;
}

export const Nav = ({ isMenu, active, clickHanler, show }: propsNav) => {
  const refLi = useRef<any>(null);

  const style: any = isMenu
    ? { transform: "translate(0%, 10%)", backgroundColor: "#fff" }
    : null;

  useEffect(() => {
    if (show) {
      refLi.current.children[6].classList.remove("show__item");
      refLi.current.children[7].style.display = "flex";
      refLi.current.children[8].style.display = "flex";
    } else {
      refLi.current.children[6].classList.add("show__item");
      refLi.current.children[7].style.display = "none";
      refLi.current.children[8].style.display = "none";
    }
  }, [show]);

  return (
    <aside style={style} className={s.nav__aside}>
      <nav>
        <h2>Меню</h2>
        <ul ref={refLi}>
          {navArr.map((elem, i) => (
            <li
              onClick={() => clickHanler(i, elem)}
              className={i === active ? s.active : null}
              key={i}
            >
              {elem.svg}
              <p>{elem.title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
