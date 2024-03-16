 //   import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
     
    
     
    </>
  )
}

export default App
