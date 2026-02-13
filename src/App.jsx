
import Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import Contact from './pages/Contact'
import Error from './pages/Error'
import TeacherDetails from './pages/TeacherDetails'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Product from './pages/Product'
import BecomeTeacher from './pages/BecomeTeacher'
import Teacher from './pages/Teacher'
import Gallery from './pages/Gallery'
import About from './pages/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/teacherDetails" element={<TeacherDetails/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/becomeTeacher" element={<BecomeTeacher/>} />
          <Route path="/teacher" element={<Teacher/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about" element={<About/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
