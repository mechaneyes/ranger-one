import { useEffect, useState } from 'react'

let EarthView = () => {
    const [randomSlugNum, setRandomSlugNum] = useState('6578')
    const [slugNoNum, setSlugNoNum] = useState('')

    useEffect(() => {
        fetch("http://localhost:9000/gMapsAPI")
            .then(res => res.json())
            .then(result => {
                console.log('result[0]', result[0].slug)
                // console.log('result.length', result.length)

                let randomSlug = Math.floor(Math.random() * result.length)
                console.log('randomSlug:', result[randomSlug].slug)

                let slugToSplit = result[randomSlug].slug.split("-");
                let slugNum = slugToSplit[slugToSplit.length - 1];
                setSlugNoNum(slugToSplit.slice(0, -1).join('::'))

                setRandomSlugNum(slugNum)
            })
    }, [])

    return (
        <div>
            <p>slugNum: {randomSlugNum}</p>
            <p>slugNoNum: {slugNoNum}</p>
            <img src={`https://www.gstatic.com/prettyearth/assets/full/${randomSlugNum}.jpg`} />
        </div>
    )
}

export default EarthView;