import Image from 'next/image'
import cops from '../public/cops.PNG'

export default function Home() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>COPS</h1>
      <Image src = {cops}/>
      <h3>Unlock your potential as a programmer with the Club of Programmers at IIT BHU. Our club is dedicated to promoting an understanding of computer programming and providing students with opportunities to develop their skills. Through hands-on projects, coding competitions, and guest lectures, students can gain a comprehensive understanding of computer programming and sharpen their skills in this rapidly-evolving field.</h3>
    </div>
  );
}