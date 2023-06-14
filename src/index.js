// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './components/Home';
// import Electronics from './components/Electronics';
// import Jewelery from './components/Jewelery';
// import Men from './components/Men';
// import Women from './components/Women';
// import { Provider } from 'react-redux'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { fakeStoreApi } from './redux/apiSlice';

// const appRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:"/electronics",
//         element:<Electronics/>
//       },
//       {
//         path:"/jewelery",
//         element:<Jewelery/>
//       },
//       {
//         path:"/men",
//         element:<Men/>
//       },
//       {
//         path:"/women",
//         element:<Women/>
//       },
//     ]
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <ApiProvider api={fakeStoreApi} >
//         <RouterProvider router={appRouter} />
//       </ApiProvider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';
import SignIn from './components/SignIn'
import { Auth } from './components/Auth';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { fakeStoreApi } from './redux/apiSlice';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/electronics",
        element:<Electronics/>
      },
      {
        path:"/jewelery",
        element:<Jewelery/>
      },
      {
        path:"/men",
        element:<Men/>
      },
      {
        path:"/women",
        element:<Women/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      },
      {
        path:"/signup",
        element:<Auth/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <RouterProvider router={appRouter} />
     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
