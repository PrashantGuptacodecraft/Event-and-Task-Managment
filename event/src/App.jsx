
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Task from './components/Task'

function App() {
  

  return (
  
   <div className='app-container'>
    
   <Sidebar></Sidebar>
    <div className='content'>
      <Header></Header>
      <Task></Task>
       <Footer></Footer>
    </div>

  
   </div>
   
   
  )
}

export default App
