 import React from 'react'
 import {Routes,Route, Redirect, Navigate} from 'react-router-dom'
 import {MainPage} from './pages/MainPage'
// import {CreatePage} from './pages/CreatePage'
// import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import { ComedyPage } from './pages/Comedy'
import { BoevikiPage } from './pages/Boeviki'
import { DrammaPage } from './pages/Dramma'
import { FairyTailsPage } from './pages/FairyTails'
import { FantasyPage } from './pages/Fantasy'
import { FearsPage } from './pages/Fears'
import { MelodramsPage } from './pages/Melodrams'
import { MusiclesPage } from './pages/Musicles'
import { RomantikPage } from './pages/Romantik'
import { SciencePage } from './pages/Science'
import { SportPage } from './pages/Sport'
import { TrillersPage } from './pages/Trillers'
import { AnimePage } from './pages/AnimeFilm'
import { HistoricalPage } from './pages/HistoryChronicles'
import { About } from './pages/About'

 export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/comedy" element={<ComedyPage/>}/>
        <Route path="/boeviki" element={<BoevikiPage/>}/>
        <Route path="/drama" element={<DrammaPage/>}/>
        <Route path="/fairytales" element={<FairyTailsPage/>}/>
        <Route path="/fantasy" element={<FantasyPage/>}/>
        <Route path="/fears" element={<FearsPage/>}/>
        <Route path="/melodrama" element={<MelodramsPage/>}/>
        <Route path="/musicl" element={<MusiclesPage/>}/>
        <Route path="/romantik" element={<RomantikPage/>}/>
        <Route path="/science" element={<SciencePage/>}/>
        <Route path="/sport" element={<SportPage/>}/>
        <Route path="/trillers" element={<TrillersPage/>}/>
        <Route path="/animefilm" element={<AnimePage/>}/>
        <Route path="/historychronicles" element={<HistoricalPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Navigate to="/main"/>}/>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/main" element={<Navigate to="/"/>}/>
      <Route path="/comedy" element={<Navigate to="/"/>}/>
      <Route path="/boeviki" element={<Navigate to="/"/>}/>
      <Route path="/drama" element={<Navigate to="/"/>}/>
      <Route path="/fairytales" element={<Navigate to="/"/>}/>
      <Route path="/fantasy" element={<Navigate to="/"/>}/>
      <Route path="/fears" element={<Navigate to="/"/>}/>
      <Route path="/melodrama" element={<Navigate to="/"/>}/>
      <Route path="/musicl" element={<Navigate to="/"/>}/>
      <Route path="/romantik" element={<Navigate to="/"/>}/>
      <Route path="/science" element={<Navigate to="/"/>}/>
      <Route path="/sport" element={<Navigate to="/"/>}/>
      <Route path="/trillers" element={<Navigate to="/"/>}/>
      <Route path="/animefilm" element={<Navigate to="/"/>}/>
      <Route path="/historychronicles" element={<Navigate to="/"/>}/>
      <Route path="/about" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
