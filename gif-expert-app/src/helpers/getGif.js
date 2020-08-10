export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=02mtTxcYt3HmzG3K2777vl3eyeD5x3MT`
    //hace la peticion de gif al end point
    const resp = await fetch ( url );
    //toma la respuesta y las convierte en un json
    const {data}= await resp.json();
   
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
   
        }
    })
  return gifs;
   }