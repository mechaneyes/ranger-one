import React, { useEffect, useState, useRef } from 'react'

// function ReactMapComponent({
//     center,
//     zoom
//   }) {
//     const ref = useRef();

//     useEffect(() => {
//       new window.google.maps.Map(ref.current, {
//         center,
//         zoom,
//       });
//     });

//     return <div ref={ref} id="map" />;
//   }

const ReactMapComponent = () => {
    const ref = useRef();
    const [map, setMap] = useState();

    const Map: React.FC<{}> = () => {};

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const zoom = {
        zoom: 10
    }

    const apiUrl = process.env.REACT_APP_GOOGLE_API_KEY

    // useEffect(() => {
    //     fetch("https://earthview.withgoogle.com/_api/photos.json", {
    //         mode: 'cors',
    //         key: process.env.REACT_APP_GOOGLE_API_KEY,
    //         method: 'GET',
    //         headers: {
    //             "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    //             'Access-Control-Allow-Methods': 'GET',
    //             'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data[0].slug))
    // })

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    return <div ref={ref} />
    // return (
    //     <img src="https://www.gstatic.com/prettyearth/assets/full/1003.jpg" ref={ref} />
    // )
}

export default ReactMapComponent