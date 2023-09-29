import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ActionAreaCard from './components/Card'
import CollegeDetailsPage from './components/CollegeDetails'


import './App.css';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='/home' element={<ActionAreaCard />} />
                    <Route path='/item_detail' element={<CollegeDetailsPage />} />
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App