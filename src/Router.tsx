import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Start } from "./pages/Start";
import { Login } from "./pages/login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/start" element={<Start/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  )
}