import { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import './app.scss'
import { getProductsByPage, userAuth } from "./api/api"
import { Header } from './components'
import { Home, Cart, Register, Login } from './screens'
import { setUser } from "./redux/userReducer"
import { setProducts } from "./redux/productsReducer"
import { connect } from "react-redux"

function App({isAuth, setUser, setProducts}) {

  useEffect(() => {
    const fetchData = async () => {
      if(isAuth){

        const res = await getProductsByPage()

        setProducts(res.docs, {
          hasNextPage: res.hasNextPage,
          hasPrevPage: res.hasPrevPage,
          limit: res.limit,
          nextPage: res.nextPage,
          page: res.page,
          prevPage: res.prevPage,
          totalPages: res.totalPages
        })

      } else{

        if(localStorage.getItem('token')){
          const data = await userAuth(localStorage.getItem('token'))
          setUser({id: data.user.id, username: data.user.username})
        }

      }

    }

    fetchData()
  }, [isAuth])

  return (
    <div className="wrapper">

        {!isAuth && <Redirect to='register' /> }

        <Switch>
          <Route path='/cart' component={() => <div> <Header /> <Cart /> </div> } />
          <Route path='/register' component={() => <div className="form-wrapper"> <Register /> </div> } />
          <Route path='/login' component={() => <div className="form-wrapper"> <Login /> </div> } />
          <Route path='/' component={() => <div> <Header /> <Home /> </div> } />
        </Switch>
        
    </div>
  );
}

const mapStateToProps = store => ({
  isAuth: store.currentUser.isAuth
})

export default connect(mapStateToProps, {setUser, setProducts})(App)
