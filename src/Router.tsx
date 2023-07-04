import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Folder } from './pages/Folder'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/folder'>
                    <Route path=':nameFolder/:id' element={<Folder />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}