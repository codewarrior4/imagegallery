import React,{useState,useEffect} from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';


const App = () => {
    const api="20100318-b29c8cad2677e2a7d3559d567"
    const [image,setImage]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [term,setTerm]=useState('')

    useEffect(() => {
        
        
       fetch(`https://pixabay.com/api/?key=${api}&q=${term}&image_type=photo`)
       .then(res=>res.json())
       .then(data =>{
           setImage(data.hits)
           
           setIsLoading(false)
        })
           
       .catch(err =>console.log(err))
    }, [term])

    return (
            <div className="container mx-auto">
                <ImageSearch searchText={(text)=>setTerm(text)} />

                {!isLoading && image.length ===0 && <h1 className="text-4xl text-center mx-auto mt-32">No Images Found</h1>}

                <div className="grid grid-cols-3 gap-4">
                    {image.map(images=>(
                        <ImageCard key={images.id} images={images} />
                    ))}
                </div>}

            </div>
         )
}

export default App
