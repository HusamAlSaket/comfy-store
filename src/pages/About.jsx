import React from 'react'

const About=()=> {
  return (
    <>
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
    <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
      We Love
    </h1>
    <div className="stats bg-primary shadow">
      <div className="stat">
        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
          comfy
        </div>
      </div>
    </div>
    </div>
  <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
  At Comfy, we believe your home should be a sanctuary of comfort and style. Since 2020, we've curated the finest collection of furniture and home accessories designed to transform living spaces into cozy retreats. From plush sofas that invite conversation to ergonomic work chairs that support your hustle, every item in our catalog is selected with your comfort in mind. We partner with sustainable manufacturers who share our passion for quality craftsmanship and eco-friendly practices. Whether you're furnishing your first apartment or refreshing your family home, Comfy delivers the perfect blend of functionality, durability, and aesthetic appeal—because everyone deserves a space that feels just right.
</p>
    
    </>
  )
}

export default About