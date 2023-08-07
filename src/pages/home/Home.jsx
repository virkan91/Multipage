import React from "react";
import Btn from "../../components/Btn";
import { useTranslation } from "react-i18next";
import Switcher from "../../components/Switcher/Switcher"

// import imges
import okpost from "../../assets/okpost.png";
import adej from "../../assets/adej.png";
import electron from "../../assets/electron.png";
import acses from "../../assets/acses.png";
import deti from "../../assets/deti.png";
import sport from "../../assets/sport.png";
import kosmetica from "../../assets/kosmetica.png";
import rfflag from "../../assets/rf.png";
import enflag from "../../assets/en.png";
import fbbleck from "../../assets/fbbleck.png";
import djins from "../../assets/djins.png";
import vectorleft from "../../assets/vectorleft.svg";
import vectorright from "../../assets/vectorright.svg";
import econom from "../../assets/econom.png";
import econom2 from "../../assets/econom2.png";
import econom3 from "../../assets/econom3.png";
import econom4 from "../../assets/econom4.png";
import kurtka from "../../assets/kurtka.png";
import dolar from "../../assets/dolar.png";
import pochta from "../../assets/pochta.png";
import karta from "../../assets/karta.png";
import car from "../../assets/car.png";
import tovar1 from "../../assets/tovar1.png";
import tovar2 from "../../assets/tovar2.png";
import tovar3 from "../../assets/tovar3.png";
import tovar4 from "../../assets/tovar4.png";
import comp from "../../assets/comp.png";
import dolar1 from "../../assets/dolar1.png";
import dolar2 from "../../assets/dolar2.png";
import dolar3 from "../../assets/dolar3.png";
import nicol1 from "../../assets/nikol1.png";
import nicol2 from "../../assets/nicol2.png";
import nicol3 from "../../assets/nicol3.png";
import nicol4 from "../../assets/nicol4.png";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      
      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1200px] mx-auto p-[60px] ">
          <div className=" grid md:grid-cols-2 gap-10 items-center sm:grid-cols-1">
            <div>
              <h1 className="text-[#FFFFFF] md:text-[53px] font-bold	leading-[60px] not-italic	sm:text-[36px]">
                Доставка товаров из Великобритании в Россию
              </h1>
              <p className="text-[#FFFFFF] mt-[20px] leading-[36px]">
                Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
                чтобы покупать со скидками в UK одежду, обувь, гаджеты известных
                брендов и безопасно отправлять вещи в Россию.
              </p>
              <div className="mt-[30px]">
                <Btn name={t("home.btn")}></Btn>
              </div>
            </div>
            <div className="sm:mt-[40px] md:mt-auto">
              <img src={okpost} alt="" className="w-[80%] m-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="section1 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[34%] sm:w-full">
            <h2 className="text-[#1F2428] text-[34px]   font-extrabold leading-[40px]">
              Насколько выгодно покупать?
            </h2>
          </div>
          <div className="categors grid md:grid-cols-6 gap-[20px] py-[20px] px-[10px] bg-[#FFF] drop-shadow-lg sm:grid-cols-2">
            <div className="flex gap-3 items-center">
              <img src={adej} alt="" />
              <h4>Одежда</h4>
            </div>
            <div className="flex gap-3 items-center">
              <img src={electron} alt="" />
              <h4>Электроника</h4>
            </div>
            <div className="flex gap-3 items-center">
              <img src={acses} alt="" />
              <h4>Аксессуары</h4>
            </div>
            <div className="flex gap-3 items-center">
              <img src={deti} alt="" />
              <h4>Для детей</h4>
            </div>
            <div className="flex gap-3 items-center">
              <img src={sport} alt="" />
              <h4>Для спорта</h4>
            </div>
            <div className="flex gap-3 items-center">
              <img src={kosmetica} alt="" />
              <h4>Косметика</h4>
            </div>
          </div>
          <div className="sm:flex sm:flex-col md:flex md:flex-row py-[70px] items-center gap-[60px]">
            <div>
              <div>
                <h3 className="font-bold text-[18px]">
                  Columbia Barlow Pass 550 Turbodown Jacket
                </h3>
              </div>
              <div className="flex gap-[20px] items-center bg-[#F2F6FC] p-[20px] rounded-[16px] mt-[35px]">
                <img src={rfflag} alt="" />
                <div>
                  <p className="font-normal	">Цена в России</p>
                  <span className="font-bold text-[18px]">7891,46₽</span>
                </div>
              </div>
            </div>
            <div className="bg_kurtka">
              <img src={kurtka} alt="" />
            </div>
            <div>
              <div>
                <h3 className="font-bold text-[18px]">
                  Доставка одежды из Великобритании от{" "}
                  <span className="text-[#01CD7D]">£7.79</span>
                </h3>
              </div>
              <div className="flex gap-[20px] items-center bg-[#F2F6FC] p-[20px] rounded-[16px] mt-[35px]">
                <img src={enflag} alt="" />
                <div>
                  <p className="font-normal	">Цена в UK</p>
                  <span className="text-[#01CD7D] font-bold text-[18px]">
                    7891,46₽
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-col md:flex md:flex-row sm:gap-y-[40px]  justify-between items-center  sm:mt-[40px] md:mt-auto">
            <div className="flex gap-11">
              <img src={fbbleck} alt="" />
              <img src={vectorleft} alt="" />
            </div>
            <div>
              <p>Срок доставки примерно 10 дней</p>
              <h3 className="font-bold text-[20px]">
                Вы экономите до <span className="text-[#01CD7D]">$119.56</span>
              </h3>
            </div>
            <div className="flex gap-11">
              <img src={vectorright} alt="" />
              <img src={djins} alt="" />
            </div>
          </div>
          <div className="uslugi grid md:grid-cols-4 gap-[20px] sm:grid-cols-1 bg-[#FFF] drop-shadow-lg">
            <div className="flex gap-4 items-center border-r-2	">
              <img src={econom} alt="" />
              <div>
                <h5>Экономия до 70%</h5>
              </div>
            </div>
            <div className="flex gap-4 items-center border-r-2">
              <img src={econom2} alt="" />
              <div>
                <h5>Только подлинная продукция</h5>
              </div>
            </div>
            <div className="flex gap-4 items-center border-r-2">
              <img src={econom3} alt="" />
              <div>
                <h5>Оперативная доставка</h5>
              </div>
            </div>
            <div className="flex gap-4 items-center sm: border-r-2 md:border-none	">
              <img src={econom4} alt="" />
              <div>
                <h5>Огромный выбор товаров</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1200px] mx-auto p-[16px] ">
          <div className=" flex items-center gap-[60px] sm:flex-wrap">
            <div>
              <img src={dolar} alt="" />
            </div>
            <div className="md:w-[58%] sm:w-full">
              <h2 className="text-[#FFFFFF] md:text-[26px] font-bold	leading-[34px] not-italic	sm:text-[20px]">
                Поручите нашим мастерам шопинга оформить заказы в английских
                магазинах и освободите время для более важных дел.
              </h2>
              <p className="text-[#FFFFFF] mt-[20px]">
                Такой способ покупки также подойдёт, если магазин принимает
                только английские карты.
              </p>
              <div className="mt-[30px]">
                <Btn name={t("home.btn2")}></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 py-[110px]">
        <div className="container max-w-[1200px] mx-auto  sm:px-[20px]">
          <div className="md:w-[64%] sm:w-full">
            <h2 className="text-[#1F2428] text-[34px]   font-extrabold leading-[40px]">
              OkeyPost удобная и быстрая доставка посылок из Великобритании
            </h2>
            <p className="mt-[20px]">
              Рассчитайте стоимость доставки из Англии к вам домой. Мы получим
              ваши посылки на складе, при необходимости объединим несколько
              доставок в одну и отправим их к вам надежно упакованными.
            </p>
          </div>
          <form
            action="#"
            className=" bg-[#FFF] drop-shadow-lg p-[25px] mt-[60px] rounded-[16px]"
          >
            <div className="grid md:grid-cols-5 gap-4 sm:grid-cols-1">
              <div>
                <h3>Страна</h3>
                <div className="flex border-b-2	gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.7511 17.3036L16.2377 13.9126C16.141 13.8531 16.033 13.8146 15.9206 13.7994L13.603 13.487C13.429 13.4636 13.2521 13.4971 13.0987 13.5827C12.9454 13.6682 12.8238 13.8011 12.7524 13.9615L11.3611 17.0834C11.2964 17.2285 11.2757 17.3895 11.3015 17.5463C11.3274 17.7032 11.3987 17.849 11.5066 17.9657L13.416 20.0309C13.5025 20.1245 13.5659 20.2372 13.6008 20.3598C13.6357 20.4825 13.6413 20.6116 13.6171 20.7368L13.2282 22.7474"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.59668 5.64746L5.68828 7.79548C5.60729 7.98701 5.60281 8.2023 5.67577 8.39703L6.84281 11.5118C6.8906 11.6393 6.96969 11.7528 7.07281 11.8418C7.17592 11.9308 7.29976 11.9924 7.43292 12.021L9.6094 12.4888C9.73017 12.5148 9.84343 12.5679 9.94057 12.6443C10.0377 12.7206 10.1162 12.818 10.17 12.9292L10.5565 13.7277C10.623 13.8651 10.7269 13.981 10.8563 14.0621C10.9856 14.1432 11.1352 14.1862 11.2878 14.1862H12.6521"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4841 3.56982L16.432 5.26779C16.5216 5.4283 16.5542 5.61446 16.5243 5.79586C16.4944 5.97725 16.4039 6.14316 16.2676 6.26647L13.5345 8.73825C13.4881 8.7802 13.437 8.81665 13.3822 8.84689L12.1389 9.53348C12.0187 9.5999 11.8835 9.63473 11.7462 9.63473H9.57828C9.41841 9.63473 9.26209 9.68189 9.1289 9.77031C8.99571 9.85874 8.89156 9.98448 8.8295 10.1318L7.98376 12.1395"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="Россия" />
                </div>
              </div>
              <div>
                <h3>Город</h3>
                <div className="flex border-b-2	gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M1.625 21.9358H24.375"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6244 21.9358V4.06079C14.6244 3.8453 14.5388 3.63864 14.3864 3.48627C14.234 3.33389 14.0274 3.24829 13.8119 3.24829H4.06189C3.8464 3.24829 3.63974 3.33389 3.48737 3.48627C3.33499 3.63864 3.24939 3.8453 3.24939 4.06079V21.9358"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.7494 21.9358V10.5608C22.7494 10.3453 22.6638 10.1386 22.5114 9.98627C22.359 9.83389 22.1524 9.74829 21.9369 9.74829H14.6244"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.49939 7.31079H9.74939"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.12439 13.8108H11.3744"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.49939 17.8733H9.74939"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8744 17.8733H19.4994"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8744 13.8108H19.4994"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="Москва" />
                </div>
              </div>
              <div>
                <h3>Индекс</h3>
                <div className="flex border-b-2 gap-1	">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M11.375 11.375H17.875"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.375 14.625H17.875"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.125 4.0625H4.875C4.42627 4.0625 4.0625 4.42627 4.0625 4.875V21.125C4.0625 21.5737 4.42627 21.9375 4.875 21.9375H21.125C21.5737 21.9375 21.9375 21.5737 21.9375 21.125V4.875C21.9375 4.42627 21.5737 4.0625 21.125 4.0625Z"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.125 4.0625V21.9375"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="Введите индекс" />
                </div>
              </div>
              <div>
                <h3>Вес посылки:</h3>
                <div className="flex border-b-2 gap-1	">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M8.9375 5.6875H6.5C6.05127 5.6875 5.6875 6.05127 5.6875 6.5V19.5C5.6875 19.9487 6.05127 20.3125 6.5 20.3125H8.9375C9.38623 20.3125 9.75 19.9487 9.75 19.5V6.5C9.75 6.05127 9.38623 5.6875 8.9375 5.6875Z"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 5.6875H17.0625C16.6138 5.6875 16.25 6.05127 16.25 6.5V19.5C16.25 19.9487 16.6138 20.3125 17.0625 20.3125H19.5C19.9487 20.3125 20.3125 19.9487 20.3125 19.5V6.5C20.3125 6.05127 19.9487 5.6875 19.5 5.6875Z"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.3125 8.125H22.75C22.9655 8.125 23.1722 8.2106 23.3245 8.36298C23.4769 8.51535 23.5625 8.72201 23.5625 8.9375V17.0625C23.5625 17.278 23.4769 17.4847 23.3245 17.637C23.1722 17.7894 22.9655 17.875 22.75 17.875H20.3125"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.6875 17.875H3.25C3.03451 17.875 2.82785 17.7894 2.67548 17.637C2.5231 17.4847 2.4375 17.278 2.4375 17.0625V8.9375C2.4375 8.72201 2.5231 8.51535 2.67548 8.36298C2.82785 8.2106 3.03451 8.125 3.25 8.125H5.6875"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 13H16.25"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.5625 13H25.1875"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.8125 13H2.4375"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="0.5" />
                </div>
              </div>
              <div>
                <h3>Дополнительные услуги:</h3>
                <div className="flex border-b-2	">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M20.3125 22.75H5.68746C5.47198 22.75 5.26532 22.6644 5.11296 22.512C4.96059 22.3596 4.87499 22.153 4.875 21.9375V4.0625C4.87499 3.84702 4.96059 3.64036 5.11296 3.48798C5.26532 3.33561 5.47198 3.25001 5.68746 3.25H15.4378L21.125 8.9375V21.9375C21.125 22.153 21.0394 22.3596 20.887 22.512C20.7347 22.6644 20.528 22.75 20.3125 22.75V22.75Z"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4375 3.25V8.9375H21.1258"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 13.8125H16.25"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 17.0625H16.25"
                      stroke="#1F2428"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="Выберите услуги" />
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <Btn name={t("home.btn3")}></Btn>
            </div>
          </form>
        </div>
      </div>

      <div className="section3 py-[60px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[34%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Варианты доставки:
            </h2>
          </div>
          <div className="dostavki mt-[30px] flex justify-between items-center sm:flex-wrap bg-[#FFF] drop-shadow-lg p-[10px_20px] rounded-[16px]">
            <div className="flex items-center gap-3 ">
              <img src={pochta} alt="" />
              <h6>Почта России</h6>
            </div>
            <div className="flex gap-[70px] items-center sm:mt-[20px] md:mt-auto">
              <div>
                <p>Сроки:</p>
                <span>10-14 дней</span>
              </div>
              <div>
                <p>Стоимость доставки:</p>
                <span>от £27.00</span>
              </div>
              <div>
                <p>Итого:</p>
                <span>£41.99</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="84"
                  viewBox="0 0 32 84"
                  fill="none"
                >
                  <path
                    d="M17 39L24 46L31 39"
                    stroke="#01CD7D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1V83"
                    stroke="#C0C9D7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="dostavki mt-[30px] flex justify-between items-center sm:flex-wrap bg-[#FFF] drop-shadow-lg p-[10px_20px] rounded-[16px]">
            <div className="flex items-center gap-3">
              <img src={karta} alt="" />
              <h6>EMS ПОЧТА РОССИЯ</h6>
            </div>
            <div className="flex gap-[70px] items-center sm:mt-[20px] md:mt-auto">
              <div>
                <p>Сроки:</p>
                <span>9-12 дней</span>
              </div>
              <div>
                <p>Стоимость доставки:</p>
                <span>от £40.00</span>
              </div>
              <div>
                <p>Итого:</p>
                <span>£41.99</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="84"
                  viewBox="0 0 32 84"
                  fill="none"
                >
                  <path
                    d="M17 39L24 46L31 39"
                    stroke="#01CD7D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1V83"
                    stroke="#C0C9D7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="dostavki mt-[30px] flex justify-between items-center sm:flex-wrap bg-[#FFF] drop-shadow-lg p-[10px_20px] rounded-[16px]">
            <div className="flex items-center gap-3">
              <img src={car} alt="" />
              <h6>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h6>
            </div>
            <div className="flex gap-[70px] items-center sm:mt-[20px] md:mt-auto">
              <div>
                <p>Сроки:</p>
                <span>10-14 дней</span>
              </div>
              <div>
                <p>Стоимость доставки:</p>
                <span>от £27.00</span>
              </div>
              <div>
                <p>Итого:</p>
                <span>£90.50</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="84"
                  viewBox="0 0 32 84"
                  fill="none"
                >
                  <path
                    d="M17 39L24 46L31 39"
                    stroke="#01CD7D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1V83"
                    stroke="#C0C9D7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[46%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              4 простых шага для ваших покупок в Великобритании
            </h2>
          </div>
          <div className="shagov grid md:grid-cols-4 sm:grid-cols-1  items-center gap-[40px] py-[30px]">
            <div className="sm:text-center md:text-start">
              <img src={tovar1} alt="" className="sm:m-auto" />
              <h2>ВЫ ВЫБИРАЕТЕ ТОВАР</h2>
              <p>
                в английском магазине, оплачиваете и указываете
                <span className="text-[#01CD7D] p-2 font-semibold">
                  адрес склада
                </span>
                OkeyPost
              </p>
            </div>
            <div className="sm:text-center md:text-start">
              <img src={tovar2} alt="" className="sm:m-auto" />
              <h2>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</h2>
              <p>и появляются в вашем личном кабинете на нашем сайте</p>
            </div>
            <div className="sm:text-center md:text-start">
              <img src={tovar3} alt="" className="sm:m-auto" />
              <h2>ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ</h2>
              <p>в надежной упаковке, по выгодной цене и очень быстро</p>
            </div>
            <div className="sm:text-center md:text-start">
              <img src={tovar4} alt="" className="sm:m-auto" />
              <h2>ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ</h2>
              <p>в пункте выдачи, на почте или с курьером</p>
            </div>
          </div>
          <div className=" md:w-[54%] py-[25px] sm:w-full sm:text-center md:text-start">
            <h6>
              Не хотите разбираться самостоятельно, наши мастера шопинга с
              радостью купят все товары за вас.
            </h6>
            <div className="mt-[30px]">
              <Btn name={t("home.btn4")}></Btn>
            </div>
          </div>
        </div>
      </div>
      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1200px] mx-auto p-[16px] ">
          <div className=" flex items-center gap-[60px] sm:flex-wrap">
            <div>
              <img src={comp} alt="" />
            </div>
            <div className="md:w-[58%] sm:w-full">
              <h2 className="text-[#FFFFFF] md:text-[26px] font-bold	leading-[34px] not-italic	sm:text-[20px]">
                Виртуальный тур по нашему складу в реальном времени
              </h2>
              <p className="text-[#FFFFFF] mt-[20px]">
                Вы можете всегда посмотреть на нашу слаженую работу на складе
              </p>
              <div className="mt-[30px]">
                <Btn name={t("home.btn2")}></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[46%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              120 000 довольных клиентов в России уже сделали свой выбор
            </h2>
            <p className="mt-[20px] leading-[30px]">
              За последний год десятки тысяч наших клиентов заказали товары из
              Англии и оставили 19 633 отзыва
            </p>
          </div>
          <div className="dolar py-[40px] grid md:grid-cols-3 gap-4 sm:grid-cols-1">
            <div className="bg-[#FFF] drop-shadow-md rounded-md p-[20px_14px]">
              <img src={dolar1} alt="" />
              <h3>Больше не значит дороже</h3>
              <p>
                С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                прогрессии.
              </p>
            </div>
            <div className="bg-[#FFF] drop-shadow-md rounded-md p-[20px_14px]">
              <img src={dolar2} alt="" />
              <h3>Быстрая обработка посылок</h3>
              <p>
                Посылка обрабатывается не дольше 48 часов после поступления на
                склад.
              </p>
            </div>
            <div className="bg-[#FFF] drop-shadow-md rounded-md p-[20px_14px]">
              <img src={dolar3} alt="" />
              <h3>SMS-уведомления</h3>
              <p>Отслеживайте весь процесс с помощью sms-уведомлений.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[40%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Отзывы и цитаты блогеров:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-1">
            <div className="flex bg-[#FFF] drop-shadow-md rounded-lg p-[12px] gap-8 items-center">
              <div>
                <img src={nicol1} alt="" />
              </div>
              <div>
                <h2 className="mb-[5px] font-bold">NIKOLAY S</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="17"
                  viewBox="0 0 89 17"
                  fill="none"
                >
                  <path
                    d="M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z"
                    fill="#FFA009"
                  />
                </svg>
                <p className="mt-[14px]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>

                <div className="flex gap-4 md:mt-[80px] sm:mt-[20px]">
                  <div className="font-bold">
                    <h2>Дата:</h2>
                    <h2> Город:</h2>
                  </div>
                  <div>
                    <p>16 Ноября 2021</p>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-[#FFF] drop-shadow-md rounded-lg p-[12px] gap-8 items-center">
              <div>
                <img src={nicol2} alt="" />
              </div>
              <div>
                <h2 className="mb-[5px] font-bold">DMITRIY D</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="17"
                  viewBox="0 0 89 17"
                  fill="none"
                >
                  <path
                    d="M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z"
                    fill="#FFA009"
                  />
                </svg>
                <p className="mt-[14px]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>

                <div className="flex gap-4 md:mt-[80px] sm:mt-[20px]">
                  <div className="font-bold">
                    <h2>Дата:</h2>
                    <h2> Город:</h2>
                  </div>
                  <div>
                    <p>16 Ноября 2021</p>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-[#FFF] drop-shadow-md rounded-lg p-[12px] gap-8 items-center">
              <div>
                <img src={nicol3} alt="" />
              </div>
              <div>
                <h2 className="mb-[5px] font-bold">VLADIMIR E</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="17"
                  viewBox="0 0 89 17"
                  fill="none"
                >
                  <path
                    d="M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z"
                    fill="#FFA009"
                  />
                </svg>

                <p className="mt-[14px]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>

                <div className="flex gap-4 md:mt-[80px] sm:mt-[20px]">
                  <div className="font-bold">
                    <h2>Дата:</h2>
                    <h2> Город:</h2>
                  </div>
                  <div>
                    <p>16 Ноября 2021</p>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-[#FFF] drop-shadow-md rounded-lg p-[12px] gap-8 items-center">
              <div>
                <img src={nicol4} alt="" />
              </div>
              <div>
                <h2 className="mb-[5px] font-bold">Оксана</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="17"
                  viewBox="0 0 89 17"
                  fill="none"
                >
                  <path
                    d="M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z"
                    fill="#FFA009"
                  />
                  <path
                    d="M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z"
                    fill="#FFA009"
                  />
                </svg>
                <p className="mt-[14px]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>

                <div className="flex gap-4 md:mt-[80px] sm:mt-[20px]">
                  <div className="font-bold">
                    <h2>Дата:</h2>
                    <h2> Город:</h2>
                  </div>
                  <div>
                    <p>16 Ноября 2021</p>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <Btn name={t("home.btn5")}></Btn>
          </div>
        </div>
      </div>

      <div className="section4 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div>
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Ваш личный адрес в Великобритании для покупок
            </h2>
            <p className="mt-[16px] leading-[34px]">
              С нами вы получаете целых два адреса в UK! У нас есть два склада
              для приема посылок – в Лондоне и Манчестере. Указывайте в магазине
              тот из них, отправка на который обойдется дешевле (или покупка
              будет без налогов). Чаще всего в Лондоне наши клиенты заказывают
              одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С
              OkeyPost вы всегда получаете максимальную выгоду! <br />
              При доставке из UK в Россию все ваши товары обязательно
              страхуются. Прием посылок на наш склад, их обработка, удаление
              лишних коробок, хранение сроком до 70 дней – у нас полностью
              бесплатно. Мы также бесплатно проводим объединение посылок из
              разных магазинов в одну. Это необходимо для снижения стоимости
              доставки посылок из UK в Россию.
              <br />У нас самая выгодная доставка! От $11.99 за посылку! А если
              у вас есть какие-то особенные требования, вроде проверки техники
              или дополнительной пленки для самых хрупких товаров, – операторы
              нашего склада с радостью выполнят их по спецзапросу. Okeypost.com
              – это надежно, быстро и выгодно. А в наших соцсетях вы всегда
              найдете информацию о лучших скидках fyukbqcrb магазинов. Не
              обязательно заходить в Черную пятницу или Prime Day, крутые акции
              проходят каждый день!
            </p>
          </div>
        </div>
      </div>

      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1200px] mx-auto p-[16px] ">
          <div className=" flex items-center  sm:flex-wrap p-[40px] justify-between">
            <div className="md:w-[38%] sm:w-full">
              <h2 className="text-[#FFFFFF] md:text-[26px] font-bold	leading-[34px] not-italic	sm:text-[20px]">
                Подпишитеть и будьте в курсе всех скидок и акций магазинов
                Великобритании!
              </h2>
            </div>
            <div className="flex text-[#FFF] gap-4 border-b-2 leading-[50px] items-center md:w-[35%] sm:w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M3.25 9.75V20.3125C3.25 20.528 3.3356 20.7347 3.48798 20.887C3.64035 21.0394 3.84701 21.125 4.0625 21.125H21.9375C22.153 21.125 22.3597 21.0394 22.512 20.887C22.6644 20.7347 22.75 20.528 22.75 20.3125V9.75L13 3.25L3.25 9.75Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.75 9.75L14.7728 15.4375H11.2272L3.25 9.75"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Введите ваш email</p>
            </div>

            <div className="mt-[30px] ">
              <Btn name={t("home.btn6")}></Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
