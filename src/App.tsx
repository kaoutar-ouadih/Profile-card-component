import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-[hsl(185,75%,39%)] relative'>
      <img src="/assets/bg-pattern-top.svg" alt="bg top pattern" className='absolute -top-[40%] -left-[40%]' />
      <img src="/assets/bg-pattern-bottom.svg" alt="bg bottom pattern" className='absolute -bottom-[40%] -right-[40%]' />
      <div className='flex flex-col items-center shadow-md rounded-2xl overflow-hidden bg-white z-10'>
        <img src="/assets/bg-pattern-card.svg" alt="background image" />
        <img src="/assets/image-victor.jpg" alt="profile image"  className='rounded-full relative -top-12 w-fit bg-green-400'/>
        <span className='font-bold -mt-9'>Victor Crest   <span className='text-gray-400 ml-2'>26</span></span>
        <span className='text-gray-400'>London</span>
        <hr className="border-gray-200 border-1.5 my-4 w-full"/>
        <div className='flex gap-12 p-4'>
          <div className='flex flex-col items-center'>
            <span className='font-bold'>80K</span>
            <span className='text-gray-400 text-sm'>Followers</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold'>803K</span>
            <span className='text-gray-400 text-sm'>Likes</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold'>1.4K</span>
            <span className='text-gray-400 text-sm'>Photos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
