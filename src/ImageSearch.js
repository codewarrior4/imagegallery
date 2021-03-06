import React,{useState}  from 'react'

const ImageSearch = ({searchText}) => {
    const [text,setText]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        searchText(text)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto shadow-lg">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-red-500 py-2">
                    <input onChange={e =>setText(e.target.value)} className="appearance-none  border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none" type="text" placeholder="Enter Keyword"  />
                    <button className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
            
        </div>
    )
}

export default ImageSearch
