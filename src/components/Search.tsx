import { useState } from "react"

type Props = {
    search : (value : string) => void
}

const Search = ({search} : Props) => {

    const [searchValue,setSearchValue] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        // console.log(e.target.value)
    }
    
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            search(searchValue)
        }
    }
    
    return (
        <div>
            <input type="text" value={searchValue} onChange={onChange} onKeyDown={onKeyDown}/>
            <button>검색</button>
        </div>
    )
}

export default Search