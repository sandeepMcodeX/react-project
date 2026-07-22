import React from 'react';
import TechIMG01 from '../assets/tech-01.png'

const cardInfo = [
    {
        icon:'',
        heading:'Backend Development',
        color:'#a2a8ff',
        content:".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA"
    }
]

const TechnologyCard = () => {
  return (
    <div className={`w-full  bg-red-100 rounded-lg p-6 border-b-7 shadow  border-red-200`} >
    <div className='flex gap-5 items-center'>
        <img src={TechIMG01} alt=""  className='w-12' />
        <h3 className='text-xl font-semibold ' >Backend Development</h3>
    </div>
      <p className='mt-5 text-[0.9em] leading-6'>
        .NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA 
      </p>
    </div>
  )
}

export default TechnologyCard