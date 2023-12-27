
import { useEffect, useState } from 'react'
import getRandomFact from '.././services/facts'

export default function useCatFact( ) {

    const [fact, setFact] = useState("")

    function refreshFact() {
        getRandomFact().then(newFact => setFact(newFact))  // con promesa
    }

    useEffect(refreshFact, [setFact])

    return {fact,refreshFact}

}