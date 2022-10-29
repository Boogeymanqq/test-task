import { AnyCnameRecord } from "dns";
import { useState } from "react";
import s from "./address.module.scss";

export const Address = () => {
  const [searchValue, setSearchValue] = useState("");
  const [getAddress, setGetAddress] = useState([]);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function postValue() {
    async function addresses(): Promise<any> {
      try {
        const url =
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "05c5678b090db58fdb56f6815ee5d98cf725b246";
        const query = searchValue;
        const options: Object = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify({ query }),
        };
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Ошибка при получении адресов!");
        }

        const data = await response.json();

        if (data.suggestions <= 0) {
          alert("Ничего не найдено");
        }

        setGetAddress(data.suggestions);
      } catch (error) {
        alert(error);
      }
    }
    if (searchValue.length >= 3) {
      addresses();
      setSearchValue("");
    } else {
      alert("Вы должны ввести более 3 символов");
    }
  }

  return (
    <section className={s.address__block}>
      <h2>Поиск адресов</h2>
      <p>Введите интересующий вас адрес</p>
      <div className={s.address__search}>
        <div className={s.search}>
          <input
            value={searchValue}
            onChange={(e) => changeHandler(e)}
            placeholder="Введите интересующий вас адрес"
            type="text"
          />
        </div>
        <button onClick={() => postValue()}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z"
              fill="white"
            />
          </svg>
          <p>Поиск</p>
        </button>
      </div>
      <div className={s.address__pin}>
        <h2>Адреса</h2>
        <ul>
          {getAddress !== undefined
            ? getAddress.map((ad: any, i) => <li key={i}>{ad.value}</li>)
            : null}
        </ul>
      </div>
    </section>
  );
};
