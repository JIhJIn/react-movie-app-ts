import { BrowserRouter, Routes, Route } from "react-router-dom"

//페이지 컴포넌트
import MainPage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<MainPage/>}></Route>
        <Route path="/detail/:id" element= {<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App