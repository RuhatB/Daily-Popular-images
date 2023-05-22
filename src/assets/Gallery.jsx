import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useGlobalContext } from './context';

const url = 'https://api.unsplash.com/search/photos?client_id=eFuBS7wzRTFkz3ttGp83zP5UxBxAdH7ZAfjq4P-ojcU';

const Gallery = () => {
  const {searchTerm} = useGlobalContext()
   
  const response = useQuery({
    queryKey:['images',searchTerm],
    queryFn:async () => {
      const result =await axios.get((`${url}&query=${searchTerm}`));

      return result.data;
    },

    

  })
   
  if(response.isLoading){
    return <section className='image-container'>
      <h2>Loading...</h2>
    </section>
  }

  if(response.isError){
    return <section className='image-container'>
      <h2>.Error..</h2>
    </section>
  }
  
  const empty = response.data.results
  if(empty.length < 1){
    return (<section className='image-container'>
    <h2>.Error..</h2>
  </section>
  );
  }

  return (
    <section className='image-container'>
      {empty.map((item)=>{
        const url = item?.url?.regular
       return ( <img src={url} key={item.id} alt={item.alt_description} 
        className='img'></img>
       );
      })}
    </section>
  );
  
};

export default Gallery;