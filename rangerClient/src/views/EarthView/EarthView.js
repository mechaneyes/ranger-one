// // https://swissmacuser.ch/google-pretty-earth-random-image-link-generator/
// // import { Wrapper } from "@googlemaps/react-wrapper";
// import React, { useEffect } from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//     width: '100vw',
//     height: '80vh'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// const zoom = {
//     zoom: 10
// }

// const EarthView = () => {
//     let imgSrc
//     let i = 0

//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         setMap(map)
//     }, [])

//     useEffect(() => {
//         fetch("https://earthview.withgoogle.com/_api/photos.json")
//             .then(response => response.json())
//             .then(data => console.log(data[0].slug))
//     })

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <div>
//             <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />
//         </div>
//     ) : <></>

//     // fetch("https://earthview.withgoogle.com/_api/photos.json")
//     //     .then(response => response.json())
//     //     .then(data => console.log(data[0].slug))

//     //     // .then(data => console.log(data[0]))
//     // //     .then(data => {
//     // //         const objsArray = data
//     // //         // console.log(objsArray)

//     // //         while (i < objsArray.length) {
//     // //             // console.log(objsArray[i].slug)
//     // //             i++
//     // //         }

//     // //         imgSrc = '<img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />'

//     // //         // useEffect(() {
//     // //         //     console.log('imgSrc', imgSrc)
//     // //         // })

//     // //         // return console.log('imgSrc', imgSrc)
//     // //         // return <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />
//     // //         // return <div>are dub</div>

//     // //         return (
//     // //             <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />
//     // //         )
//     // //     })

//     // // return (
//     // //     <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />
//     // // )  
//     // return isLoaded ? (
//     // <div>
//     //   <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" />
//     // </div>
//     //   ) : <></>
// }

// export default EarthView