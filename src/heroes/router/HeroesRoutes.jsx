import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages'
import { NavBar } from '../../ui/NavBar'

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/dc' element={<DCPage />} />
                <Route path='/marvel' element={<MarvelPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/hero/:id' element={<HeroPage />} />

                <Route path='/' element={<Navigate to='/dc' replace />} />
            </Routes>
        </>
    )
}
