import {Footer} from 'flowbite-react'

const Foot = () => {
  return (
    <section className='my-4'>
        <Footer container className='bg-slate-400'>
        <Footer.Copyright href="#" by="Flowbite™" year={2024} />
        <Footer.LinkGroup className='text-white'>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
        </Footer>   
    </section>
  )
}

export default Foot