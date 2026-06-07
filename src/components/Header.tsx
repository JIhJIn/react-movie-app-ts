import { useNavigate } from "react-router-dom"
import Search from "../components/Search"
import "./Header.css"

type Props = {
    search? : (value : string) => void
}

function Header({search} : Props) {
    const navigate = useNavigate()
    const goToMainPage = () => {
        navigate('/')
    }
    return (
        <div className="headerComponent">
            <button onClick={goToMainPage}>홈 버튼</button>
            {search && <Search search={search}/>}
        </div>
    )
}

export default Header