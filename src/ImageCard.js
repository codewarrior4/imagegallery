import React from 'react'

const ImageCard = ({images}) => {

    const tags=images.tags.split(',')
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            
        <img className="w-full" src={images.webformatURL} alt={images.user} />

        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl">
                Photo By {images.user}
            </div>
            <ul>
                <li>
                    <strong>Views:</strong>
                    {images.views}
                </li>
                <li>
                    <strong>Downloads:</strong>
                    {images.downloads}
                </li>
                <li>
                    <strong>Likes:</strong>
                    {images.likes}
                </li>

            </ul>
        </div>
        <div className="px-6 py-4">
            
           {tags.map((tag,index)=>(
               <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
               #{tag}
           </span>
           ))}
           

        </div>
        <div className="px-6 py-4">
            
                <a className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 " href={images.largeImageURL} download>Download
                </a>

                <a className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 " href={images.pageURL} target="_blank">View more Details
                </a>
              
          
           

        </div>
        </div>
   
    )
}

export default ImageCard
