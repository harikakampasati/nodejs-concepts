/**
 * JSON = javascript object notation
 * in json data format we store data as a javascript object
 * json object has key value pair
 * each object is an element of this array 
 * 
 * why json data 
 * most node application used the database no sql like mongodb 
 * in mongodb documents, it store data in the form of the json
 * JSON.parse convert json data into javascript object
 * if we want to use these product json data in our node application first we need to convert into javascript object
 * differnce between json object and javascript object is :-
 *   - json object keys and values in  between the quotes
 *   - javscript objects key is not in between the quotes
 * const products = JSON.parse(fs.readFileSync(`${__dirname}/Data/products.json`, 'utf-8'));

 * [
    {
      "id": 0,
      "name": "APPLE iPhone SE",
      "color":"Black",
      "ROM": 128,
      "price": 990,
      "modeName": "iPhone SE",
      "modelNumber": "MHGT3HN/A",
      "size": "11.94 cm (4.7 inch) Retina HD Display",
      "camera": "12MP Rear Camera | 7MP Front Camera",
      "Description": "Widescreen HD LCD Retina Multi-touch IPS Display (1400:1 Contrast Ratio (Typical), True Tone Display, Wide Color Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint-resistant Oleophobic Coating, Display Zoom, Reachability)",
      "productImage":"http://atlas-content-cdn.pixelsquid.com/stock-images/iphone-x-smartphone-xwVXQLD-600.jpg"
    },
    {
      "id": 1,
      "name": "APPLE iPhone XR",
      "color":"White",
      "ROM": 64,
      "price": 790,
      "modeName": "iPhone XR",
      "modelNumber": "MH6N3HN/A",
      "size": "15.49 cm (6.1 inch) Display",
      "camera": "12MP Rear Camera | 7MP Front Camera",
      "Description": "1400:1 Contrast Ratio (Typical), True Tone Display (Six-channel Light Sensor), Wide Colour Display (P3), 625 nits Maximum Brightness (Typical), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously, Liquid Retina HD Display, Tap to Wake, Wide Colour Gamut",
      "productImage":"https://c8.alamy.com/zooms/6/e98284ded5444c08949d7fd9f2bae166/2cd68c5.jpg"
    }
]
 */