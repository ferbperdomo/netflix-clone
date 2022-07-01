import { XIcon } from '@heroicons/react/solid'
import MuiModal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from "../atoms/modalAtom"
import { Movie } from '../typings'

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [trailer, setTrailer] = useState()
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
            const data = await fetch(
                `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
                }&language=es&append_to_response=videos`
            ).then((response) => response.json())
            setTrailer(data)
        }
        fetchMovie()
    }, [movie])
    console.log(trailer)

    const handleClose = () => {
        setShowModal(false)
    }

    return <MuiModal open={showModal} onClose={handleClose}>
        <>
            <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
                <XIcon className='h-6 w-6' />
            </button>
            <div>

            </div>
        </>
    </MuiModal>
}
export default Modal