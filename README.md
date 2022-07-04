
# Ranger One

This is a collection of views to be displayed on various screens within my apartment.

I can't stand black rectangles remaining black. Imagery displayed on them at all waking hours? Sure, why not.

  
  

## Earth View from Google

https://earthview.withgoogle.com/

The first interface I'm working on displays images from Earth View.

For it I've built an express server to fetch data from the Google Maps API. The interaction is initiated with a client app running within the larger React app.

I accomplished this in part via this breakdown: 
https://github.com/Joao-Henrique/React_Express_App_Medium_Tutorial

Right now a static image is being retrieved using the JSON file. A bit of string manipulation gives me something to build a URL for the final image.

This works, but the resulting image isn't really all that big ... it doesn't translate well enough on my 4K displays. Now on to getting a view while working off the lat/long which are also in that JSON file. 45° perspectives could also be nice.