import axios from "axios"

const BASE_URL ='https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json'
const API_KEY = 'sk.eyJ1IjoibXl0aDAiLCJhIjoiY2x2ajY1OGRtMWxzMTJqbzQ5Y3pxZDJqeCJ9.W-iXj1uOfqiv0eTfjqB8RQ'

const config= {
    headers:{
            'content-type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
            'X-Goog_FieldMask':['places.displayName', 'places.formattedAddress','places.location','places.parking',
        'places.photos']
    }

   
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config);

export default{
    NewNearByPlace
}