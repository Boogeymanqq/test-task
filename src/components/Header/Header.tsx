import React from "react";
import s from "./header.module.scss";
import { SvgLogo } from "./SvgLogo";
import { NameLogo } from "./SvgName";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <SvgLogo />
        <p>Wrench CRM</p>
      </div>
      <div className={s.header__name}>
        <NameLogo />
        <p>Имя Фамилия</p>
      </div>
    </header>
  );
};
