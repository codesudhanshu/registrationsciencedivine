import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import PublicRegistration from '../Component/PublicRegistration'
import AlgohypeRegistration from '../Component/AlgohypeRegistration'
import NavigationBar from '../Component/NavigationBar'
const RouterFile = () => {

  return (
<div>
      <Router>
        <NavigationBar />
        <div className='main-container'>
        <Routes>          
            <Route path="/public/registration" element={<PublicRegistration />} />
            <Route path="/algohype/registration" element={<AlgohypeRegistration />} />
          </Routes>
    </div>
    </Router>
    </div>
  )
}

export default RouterFile
