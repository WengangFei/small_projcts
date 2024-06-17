// import Image_scroll from "./component/Image_scroll"
// import LoadProduct from "./component/LoadProduct"
// import Toggle from "./component/Toggle"
// import Select_stars from "./component/Select_stars"
// import Change_color from "./component/Change_color";
// import ChangeTheme from "./component/ChangeTheme";
// import QRCodeGenerator from "./component/QRCodeGenerator"
// import GetAllUsers from "./component/GetAllUsers"
// import GitHubUser from "./component/GitHubUser";
// import OpenPop from "./component/OpenPop";
// import RandomContent from "./component/RandomContent"
// import Game from "./component/Game"
// import { useState } from "react";
// import HiddenContent from "./component/HiddenContent"
// import Hook from "./component/Hook"
// import LayOut from "./component/LayOut"
// import Test from "./component/Test"
// import Hook from "./component/Hook"
// import LayOut from "./component/LayOut"
// import Scroll from "./component/Scroll"
// import SearchCityInfo from "./component/SearchCityInfo"
// import Test from "./component/Test"
// import Favorite from "./component/Favorite";
// import FoodRecipe from "./component/FoodRecipe"
// import ScrollToCard from "./component/ScrollToCard"
// import ShowAllRecipes from "./component/ShowAllRecipes";
// import SingleDetail from "./component/SingleDetail";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import Layout from './component/shoppingCart/Layout';
import Home from './component/shoppingCart/Home';
import Cart from './component/shoppingCart/Cart';



function App() {

  // const name = [
  //   {
  //     name:'QR code generator',
  //     id:0,
  //     component: <QRCodeGenerator />
  //   },
  //   {
  //     name:'open pop',
  //     id:1,
  //     component: <OpenPop />
  //   },
  //   {
  //     name:'get users',
  //     id:2,
  //     component: <GetAllUsers />
  //   },
  //   {
  //     name:'game',
  //     id:3,
  //     component: <Game />
  //   }
  // ]

  // const[flag,setFlag] = useState(0);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={ <FoodRecipe />}>
  //       <Route path='/favorites' element={<Favorite />}/>
  //       <Route path='/all_recipes' element={<ShowAllRecipes />}/>
  //       <Route path='/single_detail/:id' element={<SingleDetail />}/>
  //     </Route>
  //   )
  // )

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />}/>
      </Route>
    )
  )





  
  return (


    // <Change_color />
    // <Select_stars />
    // <Image_scroll />
    // <LoadProduct />
    // <Toggle />
    // <QRCodeGenerator />
    // <ChangeTheme />
    // <RandomContent />
    // <OpenPop />
    // <GitHubUser />
    // <GetAllUsers />
    // <Game />
    // <Hook />
    // <LayOut />
    // <Test />
    // <Scroll />
    // <ScrollToCard />
    // <SearchCityInfo />
    <RouterProvider router={router} />



    // <div className="text-center">
    //   {
    //     name.map(comp=>{
    //       return(

    //         <button key={comp.id} className="bg-gray-300 mx-2 rounded-md py-1 px-2 my-8"
    //           onClick={()=>setFlag(comp.id)}
    //         >
    //           {comp.name}
    //         </button>
            

    //       )
    //     })
    //   }
    //   { flag === name[flag].id && name[flag].component }
    // </div>
  ) 
}

export default App
