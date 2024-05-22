import useMovie from "../api/useMovie"
import {Link} from 'react-router-dom'
import {TextInput} from 'flowbite-react'
import {HiSearchCircle} from 'react-icons/hi'
import {sMovie} from "../api/searchMovie"

function Movies() {

    const {data: movie, isLoading, setMovie} = useMovie()

    const renderData = () => {
        return movie.map((param) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500/${param.poster_path})`}} 
                className="md:w-60 w-full rounded-lg h-80 relative bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat bg-black overflow-hidden">
                    <Link to={`/movie/${param.id}`}>
                    <div className='bg-black/80 absolute bottom-0 px-4 py-2 w-full'>
                        <h5 className="text-xl font-bold text-center tracking-tight text-white dark:text-white">
                            {param.title}
                        </h5>                       
                    </div>
                    </Link>
                </div>        
            )
        })
    }

    const search = async (q) => {
        const query = await sMovie(q)
        setMovie(query.results) 
    }

  return (
    <div className="max-w-full h-screen">
        {/* Hero Section */}
        <section className="relative bg-[url('./assets/hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="bg-black/50 w-full absolute top-0 left-0 h-screen"/>
            <div className="relative h-screen px-10 w-full justify-center items-center lg:justify-start flex">
                <div className="max-w-full text-center">
                    <h1 className="text-3xl lg:text-left font-extrabold sm:text-5xl  text-white">
                        Watch your favorite
                        <strong className="block font-extrabold text-white mt-2"> Movie here. </strong>
                    </h1>

                    <p className="mt-4 text-white lg:text-left max-w-lg sm:text-xl/relaxed">
                        Search movie that you want to watch
                    </p>

                    <div className="mt-8 lg:justify-start">
                        <TextInput onChange={({ target }) => search(target.value)} type="text" icon={HiSearchCircle} placeholder="Movie" color='gray'/>
                    </div>
                </div>
            </div>
        </section>
        {/* Hero Section */}

        {/* Partner Section */}
        <section className='w-full px-10 py-5'>
            <div className='flex flex-row justify-between xs:flex-wrap'>
                <div className=''>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KPHBhdGggZD0iTSAwIDE5IEwgMC4yNjU2MjUgMTkuNzI2NTYzIEwgMiAyMCBMIDIgMjggQyAxLjUgMjguMTAxNTYzIDAuNzE4NzUgMjguMjQyMTg4IDAuMjE4NzUgMjguMzQzNzUgTCAwIDI5IEwgNiAyOSBMIDUuODAwNzgxIDI4LjMwMDc4MSBMIDQgMjggTCA0IDIwIEMgNC41IDIwIDUuNDAyMzQ0IDIwLjE0ODQzOCA1LjgwMDc4MSAyMC4zNDc2NTYgQyA2LjQwMjM0NCAyMC42NDg0MzggNi44MDA3ODEgMjEuMjUgNi44MDA3ODEgMjIuMDUwNzgxIEMgNi44MDA3ODEgMjMuNTUwNzgxIDUuNjI1IDI0LjE0MDYyNSA0LjM5ODQzOCAyNC4zMTY0MDYgTCA0LjM5ODQzOCAyNS4wMTU2MjUgQyA2LjUzMTI1IDI1LjAxNTYyNSA5IDIzLjY0ODQzOCA5IDIxLjI1IEMgOSAyMC44NTE1NjMgOC44MDA3ODEgMTkuOTQ5MjE5IDcuNjAxNTYzIDE5LjQ0OTIxOSBDIDYuODk4NDM4IDE5LjE0ODQzOCA1LjM5ODQzOCAxOSA0IDE5IFogTSAxMCAxOSBMIDEwLjIxODc1IDE5LjY1NjI1IEMgMTAuNzE4NzUgMTkuNzU3ODEzIDExLjUgMTkuODk4NDM4IDEyIDIwIEwgMTIgMjggQyAxMS41IDI4LjEwMTU2MyAxMC43MTg3NSAyOC4yNDIxODggMTAuMjE4NzUgMjguMzQzNzUgTCAxMCAyOSBMIDE2IDI5IEwgMTUuODAwNzgxIDI4LjMwMDc4MSBMIDE0IDI4IEwgMTQgMjAgTCAxNS44MDA3ODEgMTkuNjk5MjE5IEwgMTYgMTkgWiBNIDE3IDE5IEwgMTcuMjE4NzUgMTkuNjU2MjUgQyAxNy41NTA3ODEgMTkuNzIyNjU2IDE4LjAwMzkwNiAxOS44MDg1OTQgMTguNDIxODc1IDE5Ljg4NjcxOSBMIDE4LjQwMjM0NCAxOS45MDIzNDQgQyAxOC40MDIzNDQgMTkuOTAyMzQ0IDE5LjMwMDc4MSAyMC44OTg0MzggMTkuOTAyMzQ0IDIxLjY5OTIxOSBDIDIwLjUgMjIuNSAyMS4wOTc2NTYgMjMuMzAwNzgxIDIxLjU5NzY1NiAyMy45MDIzNDQgQyAyMSAyNC42OTkyMTkgMTguNjk5MjE5IDI3LjY5OTIxOSAxOC4wOTc2NTYgMjguMDk3NjU2IEMgMTguMDY2NDA2IDI4LjEzMjgxMyAxOC4wNTA3ODEgMjguMTYwMTU2IDE4LjAxOTUzMSAyOC4xODc1IEMgMTcuNzMwNDY5IDI4LjI0NjA5NCAxNy40NDUzMTMgMjguMjk2ODc1IDE3LjIxODc1IDI4LjM0Mzc1IEwgMTcgMjkgTCAyMiAyOSBMIDIxLjgwMDc4MSAyOC4zMDA3ODEgQyAyMS4yMDMxMjUgMjguMTk5MjE5IDIwLjYwNTQ2OSAyOC4xMDE1NjMgMjAuMDAzOTA2IDI4IEMgMjAuNTUwNzgxIDI2Ljk2ODc1IDIxLjYyODkwNiAyNS4yNjE3MTkgMjIuMDk3NjU2IDI0LjY5OTIxOSBDIDIyLjUgMjUuMDk3NjU2IDIzLjEwMTU2MyAyNS44OTg0MzggMjMuODAwNzgxIDI2LjY5OTIxOSBDIDI0LjY5OTIxOSAyNy42OTkyMTkgMjUuODAwNzgxIDI5LjE5OTIxOSAyNyAzMCBMIDI4IDMwIEwgMjMuNDAyMzQ0IDIzLjE5OTIxOSBDIDIzLjQwMjM0NCAyMy4xOTkyMTkgMjQuMzAwNzgxIDIyLjEwMTU2MyAyNC45MDIzNDQgMjEuNDAyMzQ0IEMgMjUuMzAwNzgxIDIwLjkwMjM0NCAyNS42OTkyMTkgMjAuMzk4NDM4IDI2LjE5OTIxOSAyMCBMIDI2LjIzMDQ2OSAxOS45NjQ4NDQgQyAyNi43NTM5MDYgMTkuODc1IDI3LjI3NzM0NCAxOS43ODkwNjMgMjcuODAwNzgxIDE5LjY5OTIxOSBMIDI4IDE5IEwgMjMgMTkgTCAyMy4yMTg3NSAxOS42NTYyNSBDIDIzLjU1ODU5NCAxOS43MjI2NTYgMjQuMDIzNDM4IDE5LjgxMjUgMjQuNDQ1MzEzIDE5Ljg5MDYyNSBDIDI0LjAyMzQzOCAyMC42MDkzNzUgMjMuMTc5Njg4IDIxLjgyNDIxOSAyMi42OTkyMTkgMjIuNDAyMzQ0IEMgMjIuMzI0MjE5IDIxLjgzOTg0NCAyMS4wODk4NDQgMjAuMDc0MjE5IDIwLjkzMzU5NCAxOS44NDM3NSBDIDIxLjIyMjY1NiAxOS43OTY4NzUgMjEuNTExNzE5IDE5Ljc0NjA5NCAyMS44MDA3ODEgMTkuNjk5MjE5IEwgMjIgMTkgWiBNIDMxIDE5IEwgMzEuMjE4NzUgMTkuNjU2MjUgQyAzMS42NDA2MjUgMTkuNzQyMTg4IDMyLjI1NzgxMyAxOS44NTU0NjkgMzIuNzQyMTg4IDE5Ljk0OTIxOSBDIDMyLjE2MDE1NiAyMS40NzI2NTYgMzAuMTA5Mzc1IDI2Ljk2NDg0NCAyOS42MDkzNzUgMjguMDc4MTI1IEMgMjkuMTQ4NDM4IDI4LjE2NDA2MyAyOC42MDE1NjMgMjguMjY1NjI1IDI4LjIxODc1IDI4LjM0Mzc1IEwgMjggMjkgTCAzMyAyOSBMIDMyLjgwMDc4MSAyOC4zMDA3ODEgQyAzMi4zNjcxODggMjguMjMwNDY5IDMxLjkzNzUgMjguMTU2MjUgMzEuNTAzOTA2IDI4LjA4MjAzMSBDIDMxLjY3NTc4MSAyNy4yMjY1NjMgMzIuMDYyNSAyNS43MjY1NjMgMzIuMjk2ODc1IDI1IEwgMzUuMzkwNjI1IDI1IEMgMzUuNzk2ODc1IDI2LjAyNzM0NCAzNi4xNTIzNDQgMjcuMDU0Njg4IDM2LjQ5NjA5NCAyOC4wODIwMzEgQyAzNi4wNjI1IDI4LjE1NjI1IDM1LjYzMjgxMyAyOC4yMzA0NjkgMzUuMTk5MjE5IDI4LjMwMDc4MSBMIDM1IDI5IEwgNDAgMjkgTCAzOS43ODEyNSAyOC4zNDM3NSBDIDM5LjUxNTYyNSAyOC4yODkwNjMgMzkuMTY3OTY5IDI4LjIyNjU2MyAzOC44MjQyMTkgMjguMTYwMTU2IEMgMzguODEyNSAyOC4xNDA2MjUgMzguODEyNSAyOC4xMjEwOTQgMzguNzk2ODc1IDI4LjEwMTU2MyBDIDM4LjE5OTIxOSAyNi45MDIzNDQgMzcuMzk4NDM4IDI0LjcwMzEyNSAzNyAyMy43MDMxMjUgQyAzNi41MDM5MDYgMjIuNDE0MDYzIDM1LjkxNDA2MyAyMC42NDQ1MzEgMzUuNjA5Mzc1IDE5LjgzMjAzMSBDIDM2LjA4NTkzOCAxOS43ODkwNjMgMzYuNTM5MDYzIDE5Ljc0NjA5NCAzNi43OTY4NzUgMTkuNzAzMTI1IEwgMzcgMTkgWiBNIDQwIDE5IEwgNDAuMjY1NjI1IDE5LjcyNjU2MyBMIDQyIDIwIEwgNDIgMjggTCA0MSAyOC4zNDM3NSBMIDQwLjc4MTI1IDI5IEwgNDYgMjkgTCA0NS44MDA3ODEgMjguMzAwNzgxIEwgNDQgMjggTCA0NCAyNSBMIDQ0LjY0MDYyNSAyNSBDIDQ1LjM3MTA5NCAyNi4wMjczNDQgNDYuNzM0Mzc1IDI3LjY4MzU5NCA0OC44MDA3ODEgMjkuMTk5MjE5IEwgNTAgMjkgQyA0OS4wMTE3MTkgMjcuOTI5Njg4IDQ3LjY4MzU5NCAyNi4xMTMyODEgNDYuNjg3NSAyNC42MDkzNzUgQyA0Ny42ODc1IDI0LjM3NSA0OS4wMzEyNSAyMy43NSA0OSAyMiBDIDQ4Ljk4NDM3NSAyMS4wNjI1IDQ4LjgxMjUgMTkgNDQgMTkgWiBNIDQ0IDIwIEMgNDQuNSAyMCA0NS40MDIzNDQgMjAuMTQ4NDM4IDQ1LjgwMDc4MSAyMC4zNDc2NTYgQyA0Ni40MDIzNDQgMjAuNjQ4NDM4IDQ2LjgwMDc4MSAyMS4yNSA0Ni44MDA3ODEgMjIuMDUwNzgxIEMgNDYuODAwNzgxIDIyLjg3ODkwNiA0Ni40MzM1OTQgMjMuNDIxODc1IDQ1LjkwNjI1IDIzLjc4MTI1IEMgNDUuNTcwMzEzIDIzLjkxNDA2MyA0NS4xOTE0MDYgMjMuOTc2NTYzIDQ0Ljg1NTQ2OSAyNCBMIDQ0IDI0IFogTSAzMy44MDA3ODEgMjAuNSBDIDM0LjEwMTU2MyAyMS4zOTg0MzggMzQuNjk5MjE5IDIzLjE5OTIxOSAzNSAyNCBMIDMyLjYyODkwNiAyNCBDIDMyLjk1NzAzMSAyMi45OTYwOTQgMzMuNDk2MDk0IDIxLjM0Mzc1IDMzLjgwMDc4MSAyMC41IFoiPjwvcGF0aD4KPC9zdmc+"/>
                </div>
                <div className=''>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0iI2U0MmQyZCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNNC43NSwxOWMwLjY4NzUsMCAxLjQyMTg4LDAgMi4xMDU0NywwYy0wLjAwNzgxLDQuMTgzNTkgLTAuMDE1NjIsOC4zNzEwOSAtMC4wMTk1MywxMi41NTQ2OWMtMC43MzgyOCwwLjA3ODEzIC0xLjU0Njg3LDAuMTc5NjkgLTIuMjc3MzQsMC4yNjE3MmMtMC45Mzc1LC0yLjYyMTA5IC0xLjUxNTYzLC00LjI1IC0yLjQ1NzAzLC03LjAxMTcyYzAsMi44MDQ2OSAtMC4wMDM5MSw0LjUzMTI1IC0wLjAwMzkxLDcuMzM1OTRjLTAuNjgzNTksMC4wODU5NCAtMS40MTQwNiwwLjE3OTY5IC0yLjA5NzY2LDAuMjc3MzRjMCwtNC40NzI2NiAwLC04Ljk0NTMxIDAsLTEzLjQxNzk3YzAuNzY5NTMsMCAxLjI1LDAgMi4wMTk1MywwYzAuOTEwMTYsMi45Mzc1IDEuODE2NDEsNC43ODUxNiAyLjcxODc1LDcuNTc4MTNjMC4wMDM5MSwtMi44NjMyOCAwLjAwNzgxLC00LjcxNDg0IDAuMDExNzIsLTcuNTc4MTJ6TTE0LjczMDQ3LDIxLjA3NDIyYzAsLTAuNjA1NDcgLTAuMDExNzIsLTEuNDcyNjYgLTAuMDExNzIsLTIuMDc0MjJjLTEuOTUzMTIsMCAtMy44Nzg5MSwwIC01LjgzMjAzLDBjLTAuMDA3ODEsNC4xMjUgLTAuMDE1NjIsOC4yNTM5MSAtMC4wMjM0NCwxMi4zNzg5MWMxLjk0OTIyLC0wLjE3NTc4IDMuOTAyMzQsLTAuMzIwMzEgNS44NTU0NywtMC40MzM1OWMwLjAwMzkxLC0wLjYwNTQ3IDAuMDAzOTEsLTEuNDcyNjYgMC4wMDM5MSwtMi4wNzQyMmMtMS4yNjk1MywwLjA3ODEzIC0yLjQ4NDM3LDAuMTU2MjUgLTMuNzUzOTEsMC4yNDIxOWMwLjAwMzkxLC0xLjEwNTQ3IDAuMDAzOTEsLTIuMDIzNDQgMC4wMDc4MSwtMy4xMzI4MWMwLjkyNTc4LC0wLjAxNTYyIDEuOTAyMzQsLTAuMDAzOTEgMi44NDc2NiwtMC4wMTk1M2MwLC0wLjYwNTQ3IDAuMDAzOTEsLTEuNDc2NTYgMC4wMDM5MSwtMi4wODIwM2MtMC45Mzc1LDAuMDE1NjMgLTEuOTI1NzgsMC4wMTk1MyAtMi44NDc2NiwwLjAzNTE2YzAsLTEuMTA5MzcgMC4wMDM5MSwtMS43MTg3NSAwLjAwNzgxLC0yLjgyODEyYzAuNTc4MTMsLTAuMDA3ODEgMy4yNTc4MSwtMC4wMDc4MSAzLjc0MjE5LC0wLjAxMTcyek0xNi4wODIwMywyMS4wNzAzMWMwLjA5Mzc1LDAgMi4xMTcxOSwwLjAxMTcyIDIuMTg3NSwwLjAxMTcyYy0wLjAwMzkxLDMuMzI4MTMgLTAuMDA3ODEsNi4zNjMyOCAtMC4wMTE3Miw5LjY5MTQxYzAuNjg3NSwtMC4wMjczNCAxLjQyMTg4LC0wLjA0Njg3IDIuMTA5MzgsLTAuMDYyNWMwLC0zLjMwODU5IDAuMDAzOTEsLTYuMzI4MTIgMC4wMDc4MSwtOS42MzY3MmMwLjcyNjU2LC0wLjAwMzkxIDEuNDc2NTYsLTAuMDA3ODEgMi4xOTkyMiwtMC4wMDc4MWMwLC0wLjU4OTg0IDAuMDAzOTEsLTEuNDY0ODQgMC4wMDM5MSwtMi4wNTQ2OWMtMi4xNDA2MiwwIC00LjM1NTQ3LDAgLTYuNDkyMTksMGMwLDAuNTk3NjYgLTAuMDAzOTEsMS40NjA5NCAtMC4wMDM5MSwyLjA1ODU5ek0yOS44MDA3OCwxOWMtMS45NTMxMiwwIC0zLjkwNjI1LDAgLTUuODU1NDcsMGMtMC4wMDM5MSwzLjg4MjgxIC0wLjAwMzkxLDcuNzY5NTMgLTAuMDAzOTEsMTEuNjUyMzRjMC4yMjY1NiwwIDAuNDU3MDMsMCAwLjY4NzUsMGMwLjQ2NDg0LDAgMC45Mzc1LDAgMS4zOTg0NCwwLjAwMzkxYzAsLTEuNjQ4NDQgMCwtMy4xNTIzNCAwLC00LjgwMDc4YzAuMTEzMjgsMCAyLjU3NDIyLC0wLjAwMzkxIDIuODUxNTYsMGMwLC0wLjU4OTg0IDAsLTEuNDY4NzUgLTAuMDAzOTEsLTIuMDU4NTljLTAuMjYxNzIsLTAuMDAzOTEgLTIuNzQyMTksMCAtMi44NDc2NiwwYzAsLTEuMDYyNSAtMC4wMDM5MSwtMS42NjAxNiAtMC4wMDM5MSwtMi43MTg3NWMwLjIzMDQ3LDAgMy4yMDcwMywwIDMuNzc3MzQsMC4wMDM5MWMwLC0wLjU5Mzc1IDAsLTEuNDg4MjggMCwtMi4wODIwM3pNMzMuMjYxNzIsMjguNzczNDRjLTAuMDAzOTEsLTMuMzU5MzcgMC4wMTU2MywtNi40MDYyNSAwLjAwNzgxLC05Ljc2NTYyYy0wLjY4MzU5LDAgLTEuNDE3OTcsMCAtMi4xMDU0NywwYzAuMDA3ODEsMy45MjE4OCAtMC4wMTE3Miw3Ljg0Mzc1IC0wLjAwNzgxLDExLjc2NTYzYzEuODcxMDksMC4wNzAzMSAzLjgzOTg0LDAuMTQ0NTMgNS43MTA5NCwwLjI3NzM0Yy0wLjAwMzkxLC0wLjYwNTQ3IC0wLjAwMzkxLC0xLjQ3MjY2IC0wLjAwMzkxLC0yLjA3NDIyYy0xLjE4MzU5LC0wLjA3MDMxIC0yLjQxNzk3LC0wLjE1NjI1IC0zLjYwMTU2LC0wLjIwMzEyek0zOC42MTcxOSwzMS4xNzU3OGMwLjY4NzUsMC4wNTQ2OSAxLjM5NDUzLDAuMTA5MzggMi4wODIwMywwLjE3MTg4YzAsLTQuMTA5MzcgMC4wMDc4MSwtOC4yMjY1NiAwLC0xMi4zMzU5NGMtMC42ODc1LDAgLTEuNDIxODcsMCAtMi4xMDU0NywwYzAuMDA3ODEsNC4wNTQ2OSAwLjAxNTYzLDguMTA5MzggMC4wMjM0NCwxMi4xNjQwNnpNNDcuMjQ2MDksMjUuMzI4MTNjMC44OTA2MywtMi4xMDU0NyAxLjc5Njg4LC00LjExMzI4IDIuNzIyNjYsLTYuMzE2NDFjLTAuNzU3ODEsMCAtMS41MzkwNiwwIC0yLjMwMDc4LDBjLTAuNTcwMzEsMS4zNTkzOCAtMC45NjA5NCwyLjIzNDM4IC0xLjUwNzgxLDMuNTMxMjVjLTAuNTA3ODEsLTEuMzQ3NjYgLTAuODQ3NjYsLTIuMjIyNjYgLTEuMzU5MzcsLTMuNTMxMjVjLTAuNzU3ODEsMCAtMS41MzkwNiwwIC0yLjI5Njg3LDBjMC44Mzk4NCwyLjA1MDc4IDEuNjA5MzgsNC4xMDU0NyAyLjQ2NDg0LDYuMjg1MTZjLTAuODg2NzIsMi4wODk4NCAtMS43OTI5Nyw0LjE2Nzk3IC0yLjY3OTY5LDYuMTc1NzhjMC43MzQzOCwwLjA3MDMxIDEuNDk2MDksMC4xNzU3OCAyLjIzMDQ3LDAuMjU3ODFjMC41MjczNCwtMS4yODkwNiAxLjAwMzkxLC0yLjI4NTE2IDEuNTM1MTYsLTMuNjEzMjhjMC41MjM0NCwxLjQxNDA2IDEuMDAzOTEsMi41MDc4MSAxLjUzMTI1LDMuOTY0ODRjMC43MzA0NywwLjA5NzY2IDEuNjgzNTksMC4yMzQzOCAyLjQxNDA2LDAuMzM1OTRjLTAuODg2NzIsLTIuMzcxMDkgLTEuODU5MzcsLTQuODQzNzUgLTIuNzUzOTEsLTcuMDg5ODR6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
                </div>
                <div className=''>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KICAgIDxwYXRoIGQ9Ik0gMCAxNCBMIDAgMTUgTCAwIDM2IEwgOCAzNiBMIDkgMzYgTCAxNSAzNiBMIDE3IDM2IEwgMjUuODc1IDM2IEMgMjguMTUgMzYgMzAuMzMxIDM0LjkyNiAzMS41IDMzLjEyNSBDIDMzLjQ1OCAzNC45MyAzNi4xMjcgMzYgMzkgMzYgQyA0NS4wNjUgMzYgNTAgMzEuMDY1IDUwIDI1IEMgNTAgMTguOTM1IDQ1LjA2NSAxNCAzOSAxNCBDIDM2LjEyNyAxNCAzMy40NTggMTUuMDcgMzEuNSAxNi44NzUgQyAzMC4zMzEgMTUuMDc0IDI4LjE1IDE0IDI1Ljg3NSAxNCBMIDE3IDE0IEwgMTUgMTQgTCA5IDE0IEwgOCAxNCBMIDAgMTQgeiBNIDIgMTYgTCA3IDE2IEwgNyAyMyBMIDEwIDIzIEwgMTAgMTYgTCAxNSAxNiBMIDE1IDM0IEwgMTAgMzQgTCAxMCAyNyBMIDcgMjcgTCA3IDM0IEwgMiAzNCBMIDIgMTYgeiBNIDE3IDE2IEwgMjUuODc1IDE2IEMgMjguNDI5IDE2IDMwLjg3NSAxOC4wNzEgMzAuODc1IDIwLjYyNSBMIDMwLjg3NSAyMC44NzUgQyAzMi4zNzggMTguMDAxIDM1LjUzMiAxNiAzOSAxNiBDIDQzLjk3MSAxNiA0OCAyMC4wMjkgNDggMjUgQyA0OCAyOS45NzEgNDMuOTcxIDM0IDM5IDM0IEMgMzUuNTMyIDM0IDMyLjM3OCAzMS45OTkgMzAuODc1IDI5LjEyNSBMIDMwLjg3NSAyOS4zNzUgQyAzMC44NzUgMzEuOTI5IDI4LjQyOSAzNCAyNS44NzUgMzQgTCAxNyAzNCBMIDE3IDE2IHogTSAzOSAxOSBDIDM1LjY5ODEzNiAxOSAzMyAyMS42OTgxMzYgMzMgMjUgQyAzMyAyOC4zMDE4NjQgMzUuNjk4MTM2IDMxIDM5IDMxIEMgNDIuMzAxODY0IDMxIDQ1IDI4LjMwMTg2NCA0NSAyNSBDIDQ1IDIxLjY5ODEzNiA0Mi4zMDE4NjQgMTkgMzkgMTkgeiBNIDIyIDIwIEwgMjIgMjMgTCAyNC4yNSAyMyBDIDI1LjA3OCAyMyAyNS43NSAyMi4zMjggMjUuNzUgMjEuNSBDIDI1Ljc1IDIwLjY3MiAyNS4wNzggMjAgMjQuMjUgMjAgTCAyMiAyMCB6IE0gMzkgMjEgQyA0MS4yMjA5ODQgMjEgNDMgMjIuNzc5MDE2IDQzIDI1IEMgNDMgMjcuMjIwOTg0IDQxLjIyMDk4NCAyOSAzOSAyOSBDIDM2Ljc3OTAxNiAyOSAzNSAyNy4yMjA5ODQgMzUgMjUgQyAzNSAyMi43NzkwMTYgMzYuNzc5MDE2IDIxIDM5IDIxIHogTSAzOSAyMyBBIDIgMiAwIDAgMCAzNyAyNSBBIDIgMiAwIDAgMCAzOSAyNyBBIDIgMiAwIDAgMCA0MSAyNSBBIDIgMiAwIDAgMCAzOSAyMyB6IE0gMzAuMDkzNzUgMjMuNzUgQyAyOS43NTg3NSAyNC4xNiAyOS4xMjUgMjQuNzUgMjguMTI1IDI1IEMgMjkuMTI1IDI1LjI1IDI5LjcxMTc1IDI1LjY3MiAzMC4wOTM3NSAyNi4yNSBDIDI5Ljk1Nzc1IDI1Ljc0NSAyOS45NzY3NSAyNC4yNTcgMzAuMDkzNzUgMjMuNzUgeiBNIDIyIDI2Ljc1IEwgMjIgMjkuNzUgTCAyNC4yNSAyOS43NSBDIDI1LjA3OCAyOS43NSAyNS43NSAyOS4wNzggMjUuNzUgMjguMjUgQyAyNS43NSAyNy40MjIgMjUuMDc4IDI2Ljc1IDI0LjI1IDI2Ljc1IEwgMjIgMjYuNzUgeiI+PC9wYXRoPgo8L3N2Zz4="/>
                </div>   
                <div className=''>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KPHBhdGggZmlsbD0iIzIxOTZmMyIgZD0iTTQxLjI1LDIyLjc1Yy0xLDAtMS43NSwwLTIuNjI1LDBjLTAuMjUsMC0wLjYyNSwwLjg3NS0wLjI1LDAuODc1YzAuNDU5LDAsMC43Mi0wLjAwNSwxLjUsMAljMC4wOTUsMC4wMDEsMC41LDAsMC41LDAuNWMwLDAuMjg1LTAuMTI1LDAuNjI1LTAuNzUsMC42MjVjLTAuMzc1LDAtMC42MjUsMC0xLjc1LDBjLTAuMzc1LDAtMC42MjUsMS0wLjYyNSwxLjM3NQljMCwwLjI1LDAuMTI1LDAuMjUsMC4yNSwwLjI1YzAuMjU4LDAsMi4xMjctMC42NjYsMi41LTAuNjI1YzAuMjk3LDAuMDMzLDAuNSwwLjI3NCwwLjUsMC42MjVjMCwwLjYyNS0yLjA5NiwxLjYyMS0zLjM3NSwxLjYyMQljLTAuNSwwLTEuMzc1LTAuMzUzLTEuMzc1LTEuMzcxYzAtMC43NSwwLjUtMS43NSwwLjUtMnMtMC4xMjUtMC4yNS0wLjEyNS0wLjVzMC4xMjUtMC41LDAuNjI1LTAuNWMwLjEyNSwwLDAuMjUtMC4zNzUsMC4zNzUtMQljMC4wNDktMC4yNDctMC4yNS0wLjEyNS0wLjc1LTAuMzc1Yy0wLjQ1LTAuMjI1LTAuMzcxLTAuNjU3LTAuMTI1LTAuNzY5YzAuMjY4LTAuMTIxLDIuODc3LTAuMTc5LDQuMzExLTAuMjU3CWMwLjM1NS0wLjAxOSwwLjc1MS0wLjAxMywxLjA2NCwxLjAyNkM0MS43MDQsMjIuNTEzLDQxLjUsMjIuNzUsNDEuMjUsMjIuNzV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIxOTZmMyIgZD0iTTMzLjYyNSwyNy44NzVjLTAuODEsMC0xLjM3NS0xLjM3NS0xLjg3NS0yLjc1QzMxLjQyNSwyNC4yMywzMS4zNzUsMjQsMzEuMjUsMjRTMzEsMjQuNSwzMSwyNS4zNzUJQzMxLDI3Ljc1LDMwLjYyNSwyOCwzMC4yNSwyOGMtMC41LDAtMC42MjUtMC44OTYtMC42MjUtMS41YzAtMy4yNSwxLTQuNzUsMS4zNzUtNC43NWMwLjE4MywwLDAuNDI1LDAuMDg0LDAuNjI1LDAuMzc1CWMxLjM3NSwyLDEuNzUsMy44NzUsMiwzLjg3NWMwLjEyNSwwLDAuMjUtMC4zNzUsMC4yNS0wLjg3NWMwLTIuMjUtMC41LTMuMTI1LTAuNzUtNC4yNWMtMC4wNi0wLjI3MSwwLjE0NC0wLjQwOSwwLjM3NS0wLjI1CWMwLjU5OSwwLjQxMiwxLjc1LDEuNjI1LDEuNzUsNFMzNC4zODcsMjcuODc1LDMzLjYyNSwyNy44NzV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIxOTZmMyIgZD0iTTI5LDIyLjI1YzAsMC4zNzUtMC4yNSwwLjYyNS0wLjc1LDAuNjI1Yy0wLjc1LDAtMS4zNzUtMC4yNS0yLjUtMC4yNWMtMiwwLTIsMC4yNS0yLDAuNQljMCwwLjM3NiwyLDAuMjUsMy4yNSwwLjVzMi4xMjUsMC42MjUsMi4xMjUsMkMyOS4xMTEsMjYuNTIzLDI4LjYyNSwyOCwyNiwyOGMtMS44NzUsMC0zLjM3NS0wLjg3NS0zLjM3NS0yCWMwLTAuMzg5LDAuMTI1LTEuMjUsMS42MjUtMS4yNWMxLjEyNSwwLDMsMC41LDMsMC44NzVTMjYuNzc3LDI2LjI1LDI2LDI2LjI1Yy0xLDAtMS42MjUtMC43NS0yLjM3NS0wLjc1CWMtMC4yNSwwLTAuMzc1LDAuMTI1LTAuMzc1LDAuMzc1YzAsMC43NSwxLjg3NSwxLDIuNzUsMWMwLjgwMSwwLDItMC4yNSwyLTEuMTI1YzAtMC41LTAuMzc1LTEtMi41LTEuMjUJYy0wLjUxNy0wLjA2MS0yLjg3NSwwLTIuODc1LTEuMzc1YzAtMS4xMjUsMS4wMi0xLjg3NSwzLjM3NS0xLjg3NVMyOSwyMS43NSwyOSwyMi4yNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMjE5NmYzIiBkPSJNMjEuMjUsMjhjLTAuMjY0LDAtMC41MjQtMC4xMTUtMC42MzMtMC4yNjZjLTAuMTg5LTAuMjM1LTAuMjYxLTAuMzUtMC4yNDItMi4zNTkJYzAuMDQ3LTEuNDksMC4xMjUtMy44NzUsMC43NS0zLjg3NWMwLjUsMCwwLjg3NSwwLjYyNSwwLjg3NSw0LjI1QzIyLDI4LDIxLjg3NSwyOCwyMS4yNSwyOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMjE5NmYzIiBkPSJNMjQuMTI1LDE1Ljg3NWMwLDAtMC4xMjUtMC44NzEtMS41MzgtMC44NzFDMjAsMTUuMDA0LDE5LDE3LDE5LDE3LjYyNWMwLDEsMC4zNzUsMS4yNSwwLjUsMS41CXMwLDAuNSwwLDAuNzVzMC4xMjUsMC4zNzUsMC4zNzUsMC4zNzVzMC4yODEtMC4yMTksMC4zNzUtMC4zNzVzMC4yNS0wLjI1LDAuMjUtMC4yNVMyMC43NSwyMCwyMi4yNSwyMAljMS44MDIsMCwzLjc1LTEuNTc1LDMuNzUtMi43NUMyNiwxNS42MjUsMjQuMTMzLDE1Ljg4MSwyNC4xMjUsMTUuODc1eiBNMjAsMTguMzc1Yy0wLjEyNS0wLjI1LDAuMTI1LTIsMi4xMjUtMi4xMjUJQzIxLjUsMTYuNjI1LDIwLjc1LDE3LjEyNSwyMCwxOC4zNzV6IE0yMC45NTEsMTguODRjMC42NzQtMS40NjUsMi4xNzItMi4yNiwyLjg1LTIuMjZjMC41NzMsMCwwLjgyMywwLjI5NSwwLjgyMywwLjY3CUMyNC42MjUsMTgsMjIuODc1LDE5LjM3NSwyMC45NTEsMTguODR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIxOTZmMyIgZD0iTTQ2Ljc1LDIxLjc1Yy0xLjM3NSwwLTMuMTI1LDIuMjUtMy44NzUsNC4xMjVjLTAuNS0wLjc1LTAuMTI1LTEuNzUsMC4yNS0yLjM3NQljMC4yOTUtMC40OTIsMS4xMjUtMS4zNzUsMS4xMjUtMmMwLTAuMTI1LDAtMC4zNzUtMC4yNS0wLjM3NXMtMC40NzQsMC4xNDgtMC44MSwwLjVjLTEuMzE1LDEuMzc1LTIuMDY1LDIuNjk0LTIuMDY1LDMuNzUJYzAsMS41LDAuNjI1LDEuODc1LDEuMTI1LDIuMTI1Yy0wLjUsMS4yNS0xLDMuNjI1LTEsNS4yNWMwLDAuNSwwLjUsMS4yNSwxLjM3NSwxLjI1YzAuNDExLDAsMC41LTAuMTI1LDAuNS0wLjYyNQljMC0zLjEyNSwwLjc1LTUuMzc1LDAuNzUtNS4zNzVDNDUsMjgsNDgsMjYuOTkxLDQ4LDIzLjVDNDgsMjIuMTU1LDQ3LjM3NSwyMS43NSw0Ni43NSwyMS43NXogTTQ2LjA1MSwyNS42ODEJYy0wLjIzMiwwLjIxMy0wLjkyNiwwLjY5NC0xLjU1MSwwLjgxOWMwLjI1LTAuODc1LDEtMi4xMjUsMS43NS0zQzQ2LjcxLDIyLjk2Myw0Ni44ODEsMjMsNDcsMjNjMC4yMDQsMCwwLjI1NCwwLjI1LDAuMjU0LDAuMzc1CUM0Ny4yNTQsMjQuNSw0Ni40MTQsMjUuMzQ4LDQ2LjA1MSwyNS42ODF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIxOTZmMyIgZD0iTTQuMjUsMTRDMS4zNzUsMTQsMCwxNC42MDQsMCwxNS4zNzVjMCwwLjM3LDAuMjUsMSwxLjI1LDFjMCwwLDAuNSwwLDAuNS0wLjM3NQljMC0wLjI1LTAuMjc3LTAuMjUtMC41LTAuMjVDMSwxNS43NSwxLDE1LjYyNSwxLDE1LjYyNWMwLTAuMjUsMC41LTAuNSwzLjI1LTAuNWM2LjEyNSwwLDEzLjEyNSw1LjM5MSwxMy4xMjUsOQljMCwzLjI1LTMuNzc0LDMuNS01LjI1LDMuNWMtMS41LDAtMi43NS0wLjI1LTIuNzUtMC4yNXMwLTMuMTU3LDAtNC4zNzVjMywwLDQuNDY2LDAuNDI1LDQuNDY2LDEuMDI1UzEzLDI0LjM3NSwxMywyNC42MjUJczAuNTI4LDAuNDAzLDAuODc1LDAuMzc1QzE0LjIyMiwyNC45NzIsMTUsMjQuODUzLDE1LDIzLjg3NWMwLTEtMC43NS0yLjUtNS42MjUtMi41YzAsMCwwLTEuNSwwLTEuNzVTOS4yNSwxOCw4LjUsMTgJcy0wLjg3NSwxLjI4Ny0wLjg3NSwxLjYyNWMwLDAuODc1LTAuMDExLDEuNzUtMC4wMTEsMS43NUM1Ljg3NSwyMS41LDMsMjIuMTI1LDMsMjRjMCwxLjc1LDIuNjI1LDMuMTI1LDQuNjI1LDQuMTI1CWMwLDAuNjI1LDAsMC42MjUsMCwxUzcuODc1LDMwLDguNSwzMGMwLjc1LDAsMC44NzUtMC42MjUsMC44NzUtMS4zNzVjMCwwLDEuMjUsMC4zNzUsMi44NzUsMC4zNzVjNS42MjUsMCw3LjI1LTIuODc1LDcuMjUtNQlDMTkuNSwxOS4yNSwxMi42MjUsMTQsNC4yNSwxNHogTTcuNjI1LDI2Ljc1YzAsMC0zLjg3NS0xLjYyNS0zLjg3NS0yLjc1YzAtMSwzLTEsMy44NzUtMVYyNi43NXoiPjwvcGF0aD4KPC9zdmc+"/>
                </div>   
                <div className=''>
                   <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KPHBhdGggZD0iTSAwIDE3IEwgMCAzMyBMIDE2IDMzIEwgMTYgMTcgWiBNIDE3IDE3IEwgMTcgMzMgTCAzMyAzMyBMIDMzIDE3IFogTSAzNCAxNyBMIDM0IDMzLjAzMTI1IEwgNDkuOTM3NSAzMy4wMzEyNSBMIDQ5LjkzNzUgMTcgWiBNIDIgMTkgTCAxNCAxOSBMIDE0IDMxIEwgMiAzMSBaIE0gMTkgMTkgTCAzMSAxOSBMIDMxIDMxIEwgMTkgMzEgWiBNIDM2IDE5IEwgNDcuOTM3NSAxOSBMIDQ3LjkzNzUgMzEuMDMxMjUgTCAzNiAzMS4wMzEyNSBaIE0gNDIuNDA2MjUgMjAuMjUgQyA0MS4zOTA2MjUgMjAuMjg1MTU2IDQwLjg0Mzc1IDIwLjQ2ODc1IDQwLjg0Mzc1IDIwLjQ2ODc1IEMgMzcuMTg3NSAyMS42MDE1NjMgMzcuMzEyNSAyNS4wMzEyNSAzNy4zMTI1IDI1LjAzMTI1IEMgMzcuNDE3OTY5IDI4LjMzOTg0NCA0MC4xNTYyNSAyOS4zNDM3NSA0MC4xNTYyNSAyOS4zNDM3NSBDIDQzLjQxNzk2OSAzMC42NDA2MjUgNDYuMjE4NzUgMjguOTM3NSA0Ni4yMTg3NSAyOC45Mzc1IEwgNDYuMjE4NzUgMjcuMTU2MjUgQyA0NC4xMjEwOTQgMjguNTA3ODEzIDQyLjU5Mzc1IDI4LjMxMjUgNDIuNTkzNzUgMjguMzEyNSBDIDM4LjkwNjI1IDI4LjEzMjgxMyAzOS4wMzEyNSAyNS4wMzEyNSAzOS4wMzEyNSAyNS4wMzEyNSBDIDM5LjE4NzUgMjEuNjMyODEzIDQyLjYyNSAyMS42ODc1IDQyLjYyNSAyMS42ODc1IEMgNDQuNDcyNjU2IDIxLjcwNzAzMSA0Ni4xNTYyNSAyMi43NSA0Ni4xNTYyNSAyMi43NSBMIDQ2LjE1NjI1IDIxLjAzMTI1IEMgNDQuNjQwNjI1IDIwLjM5NDUzMSA0My41NjI1IDIwLjI4MTI1IDQzLjU2MjUgMjAuMjgxMjUgQyA0My4xMjUgMjAuMjM4MjgxIDQyLjc0NjA5NCAyMC4yMzgyODEgNDIuNDA2MjUgMjAuMjUgWiBNIDQuNjI1IDIwLjM0Mzc1IEwgNC42MjUgMjkuNjU2MjUgTCA4LjM3NSAyOS42NTYyNSBDIDguMzc1IDI5LjY1NjI1IDExLjUgMjkuNjcxODc1IDExLjUgMjcuMDMxMjUgQyAxMS41IDI3LjAzMTI1IDExLjU3ODEyNSAyNS4yNSA5LjQ2ODc1IDI0LjcxODc1IEMgOS40Njg3NSAyNC43MTg3NSAxMC42Njc5NjkgMjQuMTk5MjE5IDEwLjY1NjI1IDIyLjg0Mzc1IEMgMTAuNjU2MjUgMjIuODQzNzUgMTAuODIwMzEzIDIwLjYxMzI4MSA3Ljg3NSAyMC4zNDM3NSBaIE0gMjEuNjI1IDIwLjM0Mzc1IEwgMjEuNjI1IDI5LjY1NjI1IEwgMjUuMzc1IDI5LjY1NjI1IEMgMjUuMzc1IDI5LjY1NjI1IDI4LjUgMjkuNjcxODc1IDI4LjUgMjcuMDMxMjUgQyAyOC41IDI3LjAzMTI1IDI4LjU3ODEyNSAyNS4yNSAyNi40Njg3NSAyNC43MTg3NSBDIDI2LjQ2ODc1IDI0LjcxODc1IDI3LjY2Nzk2OSAyNC4xOTkyMTkgMjcuNjU2MjUgMjIuODQzNzUgQyAyNy42NTYyNSAyMi44NDM3NSAyNy44MjAzMTMgMjAuNjEzMjgxIDI0Ljg3NSAyMC4zNDM3NSBaIE0gNi4yODEyNSAyMS43ODEyNSBMIDcuNjI1IDIxLjc4MTI1IEMgOS4wMTE3MTkgMjEuODU1NDY5IDguOTM3NSAyMi45MDYyNSA4LjkzNzUgMjIuOTA2MjUgQyA4LjkzNzUgMjQuMTkxNDA2IDcuNDA2MjUgMjQuMTg3NSA3LjQwNjI1IDI0LjE4NzUgTCA2LjI4MTI1IDI0LjE4NzUgWiBNIDIzLjI4MTI1IDIxLjc4MTI1IEwgMjQuNjI1IDIxLjc4MTI1IEMgMjYuMDExNzE5IDIxLjg1NTQ2OSAyNS45Mzc1IDIyLjkwNjI1IDI1LjkzNzUgMjIuOTA2MjUgQyAyNS45Mzc1IDI0LjE5MTQwNiAyNC40MDYyNSAyNC4xODc1IDI0LjQwNjI1IDI0LjE4NzUgTCAyMy4yODEyNSAyNC4xODc1IFogTSA2LjI4MTI1IDI1LjY4NzUgTCA4LjAzMTI1IDI1LjY4NzUgQyA5LjgzNTkzOCAyNS42NzU3ODEgOS43ODEyNSAyNi45MDYyNSA5Ljc4MTI1IDI2LjkwNjI1IEMgOS43ODEyNSAyOC4zMTY0MDYgOC4wMzEyNSAyOC4yMTg3NSA4LjAzMTI1IDI4LjIxODc1IEwgNi4yODEyNSAyOC4yMTg3NSBaIE0gMjMuMjgxMjUgMjUuNjg3NSBMIDI1LjAzMTI1IDI1LjY4NzUgQyAyNi44MzU5MzggMjUuNjc1NzgxIDI2Ljc4MTI1IDI2LjkwNjI1IDI2Ljc4MTI1IDI2LjkwNjI1IEMgMjYuNzgxMjUgMjguMzE2NDA2IDI1LjAzMTI1IDI4LjIxODc1IDI1LjAzMTI1IDI4LjIxODc1IEwgMjMuMjgxMjUgMjguMjE4NzUgWiI+PC9wYXRoPgo8L3N2Zz4="/>
                </div>                
            </div>
        </section>
        {/* Partner Section */}

        {/* Card Section */}
        <section className="w-full container mx-auto pb-10 px-4 md:p-0">
            <h3 className="md:text-left font-bold text-xl mb-5">Popular Movie</h3>
            <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:flex md:flex-wrap md:gap-x-3 items-center'>
                    {renderData()}
                    {isLoading && <text> Sedang Loading.... </text>}                                   
                {/* <div className="md:w-60 w-full  rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-blue-500 absolute bottom-3 rounded-lg mx-auto px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className="md:w-60 w-full rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-white absolute bottom-3 rounded-lg mx-2 px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className="md:w-60 w-full rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-white absolute bottom-3 rounded-lg mx-2 px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <Link to={'/movie'}>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                        </Link>
                    </div>
                </div>
                <div className="md:w-60 w-full rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-white absolute bottom-3 rounded-lg mx-2 px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className="md:w-60 w-full rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-white absolute bottom-3 rounded-lg mx-2 px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className="md:w-60 w-full rounded-lg h-80 relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-black">
                    <div className='bg-white absolute bottom-3 rounded-lg mx-2 px-4'>
                        <h5 className="text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                            Spongebob Squarepants
                        </h5>
                        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
        {/* Card Section */}
    </div>
  )
}

export default Movies