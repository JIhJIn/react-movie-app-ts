import { useState } from "react"

type Props = {
    search : (value : string) => void
}

const Search = ({search} : Props) => {

    const [searchValue,setSearchValue] = useState("")

    const handleSearch = () => {
        if(searchValue === "") {
                alert("검색어가 비어있습니다.")
                return
            } 
            search(searchValue)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        // console.log(e.target.value)
    }
    
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            handleSearch()
        }
    }
    
    return (
        <div>
            <input type="text" value={searchValue} onChange={onChange} onKeyDown={onKeyDown}/>
            <button onClick={handleSearch}>검색</button>
        </div>
    )
}

export default Search