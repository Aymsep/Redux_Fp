import React from 'react'
import Header from './containers/Header'
import {BrowserRouter , Routes,Route} from  'react-router-dom'
import Listing from './containers/ProductListing'
import Details from './containers/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Listing/>} />
                <Route path='/product/:id' element={<Details/>} />
            </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App