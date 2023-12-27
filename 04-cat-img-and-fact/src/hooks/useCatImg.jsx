import { useEffect, useState } from "react"

export default function useCatImg({ fact }) {

    const [imgUrl, setImg] = useState("")

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => setImg(data[0].url))
    }
        , [fact])

    return { img:imgUrl  }
}