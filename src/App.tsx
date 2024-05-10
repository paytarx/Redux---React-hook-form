import Counter from './Counter'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'  
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import Product2Child1 from './pages/Product2Child1'
import Product2Child2 from './pages/Product2Child2'
import Product2Child2_1 from './pages/Product2Child2_1'

function App() {

  
  return (
    <div>
     {/* <Counter />   */}
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/About' element={<About/>}> 
        <Route path='employee' element={<EmployeeAbout />} ></Route>
        <Route path='company' element={<CompanyAbout />}></Route>
      </Route>

      <Route path='/Products' element={<Products/>}>  
        <Route path='product1' element={<Product1/>} ></Route>
        <Route path='product2' element={<Product2 />}>
          <Route path='product2Child1' element={<Product2Child1 />}></Route>
          <Route path='product2Child2' element={<Product2Child2 />}>
            <Route path='product2Child2_1' element={<Product2Child2_1 />}></Route>
          </Route>
        </Route>
        <Route path='product3' element={<Product3 />}></Route>
      </Route>

      <Route path='/Contact' element={<Contact/>} />
      <Route path='*' element={<Page404/>} />
      
     </Routes>

    </div> 
  )
}

export default App
