import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Start } from "./pages/Start";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Auth } from "./pages/auth";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/start" element={<Start/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}