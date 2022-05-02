import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "./components/Loading";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import {Alert} from "./components/Alert";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Add = lazy(() => import(/* webpackChunkName: "add" */ "./pages/Add"));
const Edit = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/Edit"));

function App() {
  const state = {
    title: "EMDB",
    nav: [
      { url: "/", label: "Home" },
      { url: "/add", label: "Add movie" },
    ],
  };

  const [alert, setAlert] = useState({
    visible: false,
    content:''
   
  })

  const editSucces =() =>{
    setAlert({
      visible: true,
      content :" scheda aggiornata con successo!",
    }); 
    setTimeout(() => {
      setAlert(false);
      
    }, 2000);
    
  };
  const addSucces =() =>{
    setAlert({
      visible: true,
      content :" scheda aggiunta con successo!",
    }); 
    setTimeout(() => {
      setAlert(false);
      
    }, 2000);
  };

  const delSucces =() =>{
    setAlert({
      visible: true,
      content :"scheda rimossa con successo!",
    });
    setTimeout(() => {
      setAlert(false);
      
    }, 2000);
  };

  return (
    <>
      <Nav title={state.title} data={state.nav} />
      <main>
      <Alert visible ={alert.visible} content={alert.content}/>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<Loading />}>
                <Add editCallback={addSucces} />
              </Suspense>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Edit editCallback={editSucces} delCallback={delSucces} />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
