import React from "react";
import Btn from "../../components/Btn";
import { useTranslation } from "react-i18next";

import dom1 from "../../assets/dom1.png";
import dom2 from "../../assets/dom2.png";
import dom3 from "../../assets/dom3.png";
import dom4 from "../../assets/dom4.png";
import pochta from "../../assets/pochta.png";
import karta from "../../assets/karta.png";
import car from "../../assets/car.png";
import racurs from "../../assets/racurs.png";

const Prices = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1100px] mx-auto p-[20px] ">
          <div className="text-[#FFFFFF] p-[30px]">
            <p>Главная / Цены</p>
            <h2 className=" md:text-[38px] font-bold	leading-[34px] not-italic	sm:text-[20px] mt-[20px]">
              Услуги доставки из Великобритании
            </h2>
          </div>
        </div>
      </div>
      <div className="section4 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="pricas_h2 grid lg:grid-cols-4 gap-[60px] items-center sm:grid-cols-1 md:grid-cols-2 ">
            <div className="sm:text-center md:text-start">
              <div>
                <img src={dom1} alt="" className="sm:m-auto" />
              </div>
              <div>
                <h2>Ваш личный адрес для покупок</h2>
              </div>
              <div>
                <p className="mt-[10px]">
                  На нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
              </div>
              <div className="mt-[20px]">
                <button className="bg-[#41B7E9] text-[#FFF] p-[10px] px-[20px] rounded-[8px]">
                  Бесплатно
                </button>
              </div>
            </div>
            <div className="sm:text-center md:text-start">
              <div>
                <img src={dom2} alt="" className="sm:m-auto" />
              </div>
              <div>
                <h2>Объединение нескольких посылок в одну</h2>
              </div>
              <div>
                <p className="mt-[10px]">
                  Ведь часто отправлять несколько посылок в одной коробке
                  гораздо выгоднее, чем по одной
                </p>
              </div>
              <div className="mt-[20px]">
                <button className="bg-[#41B7E9] text-[#FFF] p-[10px] px-[20px] rounded-[8px]">
                  Бесплатно
                </button>
              </div>
            </div>
            <div className="sm:text-center md:text-start">
              <div>
                <img src={dom3} alt="" className="sm:m-auto" />
              </div>
              <div>
                <h2>Усиленная упаковка по запросу</h2>
              </div>
              <div>
                <p className="mt-[10px]">
                  Мы дополнительно упакуем вашу посылку в пленку, коробку с
                  двойными стенками.
                </p>
              </div>
              <div className="mt-[20px]">
                <button className="bg-[#41B7E9] text-[#FFF] p-[10px] px-[20px] rounded-[8px]">
                  Бесплатно
                </button>
              </div>
            </div>
            <div className="sm:text-center md:text-start">
              <div>
                <img src={dom4} alt="" className="sm:m-auto" />
              </div>
              <div>
                <h2>Хранение входящих посылок 30 дней</h2>
              </div>
              <div>
                <p className="mt-[10px]">
                  чем больше срок хранения посылок на складе – тем больше вы
                  сможете собрать
                </p>
              </div>
              <div className="mt-[20px]">
                <button className="bg-[#41B7E9] text-[#FFF] p-[10px] px-[20px] rounded-[8px]">
                  Бесплатно
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 py-[20px]">
        <div className="container max-w-[1200px] mx-auto  sm:px-[20px]">
          <div className="md:w-[48%] sm:w-full">
            <h2 className="text-[#1F2428] text-[34px]   font-extrabold leading-[40px]">
              Онлайн-калькулятор стоимости доставки товара
            </h2>
            <p className="mt-[20px]">
              Задайте необходимые параметры посылки, и калькулятор рассчитает
              приблизительную стоимость доставки вашей посылки из Англии.
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
          <div className="md:w-[34%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Услуги склада:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-1 py-[20px]">
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Консолидация </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Заполнение декларации </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Дополнительная упаковка </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Упаковка xрупкиx предметов </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Заполнение декларации </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Разделение заказа </h4>
              <span>£1.00/1 трек</span>
            </div>
          </div>
          {/* <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center py-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Сборка исходящей посылки вне очереди или экспресс сборка
              </h4>
              <p>Чтобы сэкономить время</p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>£5.00</span>
            </div>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center mt-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Фото содержимого входящей посылки
              </h4>
              <p>
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный
              </p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>£1.00 за 1 фото</span>
            </div>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center mt-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Возврат вещей в магазин
              </h4>
              <p>
                В случае, если вещи нельзя отправить в страну назначения,
                возврат в магазин для услуги
              </p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>£10 + почтовые расходы</span>
            </div>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center mt-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Проверка техники на работоспособность
              </h4>
              <p>
                Проверка электроники на включение/выключение (запрос через
                тикеты).
              </p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>£5.00</span>
            </div>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center mt-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Удаление инвойса
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>Бесплатно</span>
            </div>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center mt-[30px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Дополнительная упаковка
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>По договоренности</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="section4 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[54%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Покупки с операторами Okeypost.com
            </h2>
          </div>
          <div className="bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] sm:flex  sm:flex-col md:flex md:flex-row justify-between items-center py-[30px] gap-[80px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Быстрое оформление покупок в интернет-магазинах
              </h4>
              <p>
                Вы присылаете ссылки, а оформлением заказов занимаются операторы
                Почтой.ком. Они сделают покупки за вас, проконтролируют доставку
                на склад и сообщат, когда всё будет готово.
              </p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>
                5% от стоимости товаров минимум £7 для каждого магазина Но не
                менее £7 для каждого лота eBay
              </span>
            </div>
          </div>
          <div className="mt-[20px] bg-[#FFF] drop-shadow-lg rounded-[16px] p-[20px_30px] flex justify-between items-center py-[30px] gap-[80px]">
            <div>
              <h4 className="text-[#222] text-[18px] font-bold ">
                Фото товара по услуге "Покупка с операторами"{" "}
              </h4>
              <p>
                Три фото выбранного вами товара, приобретенного по услуге
                "Полное сопровождение"
              </p>
            </div>
            <div className="border-l-2 pl-[40px] font-bold text-[18px]">
              <span>£2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1200px] mx-auto p-[16px] ">
          <div className=" flex items-center gap-[60px] sm:flex-wrap">
            <div>
              <img src={racurs} alt="" />
            </div>
            <div className="md:w-[58%] sm:w-full">
              <h2 className="text-[#FFFFFF] md:text-[26px] font-bold	leading-[34px] not-italic	sm:text-[20px]">
                Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку
                на товар, его купят и доставят на наш склад в кратчайшие сроки.{" "}
              </h2>
              <div className="flex text-[#FFF] gap-4 border-b-2 leading-[50px] items-center md:w-[65%] sm:w-full mt-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M12.4258 7.25477L14.4366 5.24393C14.8515 4.82865 15.3441 4.49919 15.8864 4.27435C16.4286 4.04952 17.0099 3.93373 17.5969 3.93359C18.1839 3.93346 18.7652 4.04898 19.3076 4.27356C19.8499 4.49814 20.3427 4.82737 20.7578 5.24246C21.1729 5.65755 21.5021 6.15035 21.7267 6.69271C21.9513 7.23507 22.0668 7.81636 22.0667 8.40338C22.0666 8.9904 21.9508 9.57164 21.7259 10.1139C21.5011 10.6562 21.1716 11.1488 20.7564 11.5637L17.8837 14.4363C17.4688 14.8513 16.9761 15.1804 16.434 15.405C15.8918 15.6296 15.3107 15.7452 14.7238 15.7452C14.137 15.7452 13.5559 15.6296 13.0137 15.405C12.4716 15.1804 11.9789 14.8513 11.564 14.4363"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5745 18.7453L11.5637 20.7561C11.1488 21.1714 10.6562 21.5009 10.1139 21.7257C9.57164 21.9505 8.9904 22.0663 8.40338 22.0665C7.81636 22.0666 7.23507 21.9511 6.69271 21.7265C6.15035 21.5019 5.65755 21.1727 5.24246 20.7576C4.82737 20.3425 4.49814 19.8497 4.27356 19.3074C4.04898 18.765 3.93346 18.1837 3.93359 17.5967C3.93373 17.0097 4.04952 16.4284 4.27435 15.8862C4.49919 15.3439 4.82865 14.8513 5.24393 14.4364L8.11655 11.5637C8.53151 11.1488 9.02415 10.8196 9.56632 10.595C10.1085 10.3705 10.6896 10.2549 11.2764 10.2549C11.8633 10.2549 12.4444 10.3705 12.9866 10.595C13.5287 10.8196 14.0214 11.1488 14.4363 11.5637"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Введите ссылку на товар</p>
              </div>
              <div className="sm:flex sm:flex-col md:flex md:flex-row items-center gap-[40px] mt-[50px] sm:text-center md:text-start">
                <div>
                  <Btn name={t("home.btn2")}></Btn>
                </div>
                <div className="text-[#FFF] mt">
                  <p>
                    Нажимая на кнопку вы подтверждаете согласие с правилами
                    предоставления услуги и политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 py-[90px]">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <div className="md:w-[34%] sm:w-full sm:text-center md:text-start">
            <h2 className="text-[#1F2428] text-[28px]   font-extrabold leading-[40px]">
              Дополнительная упаковка
            </h2>
          </div>
          <div className=" upakovka grid md:grid-cols-2 gap-6 sm:grid-cols-1 py-[20px]">
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Многослойная пленка </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Упаковка в пакет </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Упаковка в коробку с двойными стенками </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Наклейка “Обращаться с осторожностью” </h4>
              <span>£1.00/1 трек</span>
            </div>
            <div className="bg-[#FFF] drop-shadow-lg  flex justify-between rounded-[16px] p-[20px_30px]">
              <h4>Наклейка “Хрупкий груз” </h4>
              <span>£1.00/1 трек</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1100px] mx-auto">
          <div className="text-[#FFF] flex justify-evenly p-[38px] items-center flex-wrap">
            <h2 className="  md:text-[24px] font-bold	leading-[34px] not-italic	sm:text-[16px] ">
              Остались вопросы? Спросите нас в соцсетях!{" "}
            </h2>
            <div className="flex gap-3  sm:mt-[20px] md:mt-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <circle
                  cx="33"
                  cy="33"
                  r="32.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <circle
                  cx="33"
                  cy="33"
                  r="32.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z"
                  fill="white"
                />
                <path
                  d="M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z"
                  fill="white"
                />
                <path
                  d="M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z"
                  fill="white"
                />
                <path
                  d="M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z"
                  fill="white"
                />
                <path
                  d="M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <circle
                  cx="33"
                  cy="33"
                  r="32.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z"
                  fill="white"
                />
                <path
                  d="M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z"
                  fill="white"
                />
                <path
                  d="M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
