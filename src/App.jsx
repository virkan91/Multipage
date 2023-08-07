import './App.css'
// import "./18n"
// import { useTranslation } from 'react-i18next';
// import MyTranslation from './components/MyTanslation';
// import DarkMode from './components/DarkMode';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
// Pages
import Home from "./pages/home/Home";
import HowToBy from './pages/howToBy/HowToBy';
import Sales from './pages/sales/Sales';
import Prices from './pages/prices/Prices';
import Help from './pages/help/Help';
import Bonuses from './pages/bonuses/Bonuses';
import Blog from './pages/blog/Blog';
import TheShops from './pages/theShops/TheShops';
import UserById from './pages/UserById/UserById';
import Nothing from './pages/nothing/Nothing';

function App() {
  // Translation 
  // const { t, i18n } = useTranslation();

  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        // Главная
        {
          index: true,
          element: <Home></Home>
        },
        // Как покупать
        {
          path: 'howToBy',
          element: <HowToBy></HowToBy>
        },
        // Распродажи
        {
          path: 'sales',
          element: <Sales></Sales>
        },
        // Цены
        {
          path: 'prices',
          element: <Prices></Prices>
        },
        // Помошь
        {
          path: 'help',
          element: <Help></Help>
        },
        // Бонусы
        {
          path: 'bonuses',
          element: <Bonuses></Bonuses>
        },
        // Блог
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        // Магазины
        {
          path: 'theShops',
          element: <TheShops></TheShops>
        },


        {
          path: 'apple/:id',
          element: <UserById></UserById>
        }
        
      ]
    },

    {
          path: '*',
          element: <Nothing></Nothing>
        }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
