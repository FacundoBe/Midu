
export default async function getRandomFact () {

    return fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}

// con Await Async

//export const getRandomFact = async () => {
//    const res = await fetch('https://catfact.ninja/fact')
//    const data = await res.json()
//    const { fact } = data
//    return fact
//  }
  