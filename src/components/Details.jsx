// import {Link} from 'react-router-dom'
import { FcFilmReel, FcClock, FcRating } from 'react-icons/fc'
import Navigation from './Navigation';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Details = () => {

    const [detail, setDetail] = useState({})
    const {id} = useParams();

    const fetchDetail = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4b3a75071a697bbfe208113850d7ca5a`) 
            setDetail(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    const convertBudget = (param) => {
        if(param !== 0){
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(param);
        }
    }

    const convertMinutes = (param) => {
        const minutes = param % 60
        const hours = Math.floor(param/60)

        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }

    const convertVote = (param) => {
        const rating = Math.round(param*100)/100
        return rating
    }

  return (
    <div>
        <section className=' w-full md:px-10'>
            <Navigation/>
            {/* <h3 className='text-center py-4'>Movie Details</h3> */}
            <div className="px-8 py-4 md:py-8 md:flex md:gap-x-6">
                <div className='flex p-4 bg-slate-800 md:bg-white rounded-lg gap-x-2 md:p-0 md:gap-2 md:w-3/4 lg:w-1/4 md:flex-col'>
                    <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500/${detail.poster_path})`}}
                    className="w-3/4 h-64 md:w-full md:h-96 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat rounded-lg">
                    </div>
                    <div className='w-1/4 text-center flex flex-col justify-center items-center gap-y-5 md:justify-between md:flex-row md:gap-6 md:w-full'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <FcFilmReel size='1.5em'/>      
                            <p className='text-sm font-light text-white md:text-black'>Genre</p>                                              
                            <p className='font-bold text-white md:text-black'>Action</p>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <FcClock size='1.5em'/>      
                            <p className='text-sm font-light text-white md:text-black'>Duration</p>                                              
                            <p className='font-bold text-white md:text-black'>{convertMinutes(detail.runtime)}</p>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <FcRating size='1.5em'/>      
                            <p className='text-sm font-light text-white md:text-black'>Rating</p>                                              
                            <p className='font-bold text-white md:text-black'>{convertVote(detail.vote_average)}</p>                            
                        </div>                        
                    </div>
                </div>
                <div className="md:flex md:flex-col lg:w-3/4">            
                    <div className="flex gap-2 items-center pt-4">
                        <h2 className="text-xl font-bold">{detail.title}</h2>
                        <h2 className="p-2 bg-blue-200 rounded-lg text-sm"> 17+ </h2>
                    </div>
                    <hr className="my-4"/>
                    <h2 className="font-bold text-xl mb-2">&quot; {detail.tagline} &quot;</h2>
                    <div className="">                        
                        <p>{detail.overview}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <div className='flex items-center gap-x-2'>
                            <p className='font-semibold text-md'>Budget: </p>                
                            <p className='p-2 bg-blue-200 rounded-lg font-bold'>{convertBudget(detail.budget)}</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <p className='font-semibold text-md'>Release Date: </p>                
                            <p className='p-2 bg-blue-200 rounded-lg font-bold'>{detail.release_date}</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <p className='font-semibold text-md'>Status: </p>                
                            <p className='p-2 bg-blue-200 rounded-lg font-bold'>{detail.status}</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <p className='font-semibold text-md'>Vote: </p>                
                            <p className='p-2 bg-blue-200 rounded-lg font-bold'>{detail.vote_count}</p>
                        </div>                                                               
                    </div>
                </div>
            </div>
        </section>
    </div>
    // <Link to={'/'}>
    // <div>Details</div>
    // </Link>
  )
}

export default Details