import Counter from './redux/counter/Counter'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import Page404 from './pages/errorPage/Page404'
import Header from './components/header/Header'
import EmployeeAbout from './pages/employee/EmployeeAbout'
import CompanyAbout from './pages/company/CompanyAbout'  
import Product1 from './pages/products/Product1'
import Product2 from './pages/products/Product2'
import Product3 from './pages/products/Product3'
import Product2Child1 from './pages/products/Product2Child1'
import Product2Child2 from './pages/products/Product2Child2'
import Product2Child2_1 from './pages/products/Product2Child2_1'

function App() {

  
  return (
    <div>
     <Counter />    
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
