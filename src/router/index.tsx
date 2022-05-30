import {FunctionComponent} from 'react'
import {Routes, Route} from 'react-router-dom'
import User from '../modules/Users'

const Router: FunctionComponent = props => ( 

    <>
        <Routes>
            <Route path='/' element={ <User /> } />
        </Routes>
    </>

 )

 export default Router