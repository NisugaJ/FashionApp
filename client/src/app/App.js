import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'
import apis from '../api'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import OverlayLoadingSpinner from '../components/OverlayLoadingSpinner'
import styled from 'styled-components'


function App() {

  const [users, setUsers] = useState({ data: [] })

  const Container = styled.div.attrs({
    className: 'container',
  })``


  //Async function to load data
  async function loadUsers() {
    const response = await apis.getAllUsers();
    console.log(response.data.data);

    setTimeout(() => {
      setUsers({ data: response.data.data })
    }, 5000);

  }

  //execetues when this component is mountted to Virtual DOM
  useEffect(() => {
    loadUsers();
  }, [])


  if (
    //when something is loading render this LoadingAnimation
    users.data.length === 0)
    return (
      <Router>
        <Container >
          <OverlayLoadingSpinner message={"Loading"} />
        </Container>
      </Router>
    )

  //Rendering the Original Component After Loading Data
  return (
    <Router>
      <NavBar />
      <Container style={{ padding: 10 }}>
        {users.data.map(user => (
          <div className="card" style={{ margin: 5 }}>
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.email}</p>
              <a href="/" class="btn btn-primary">{user._id}</a>
            </div>
          </div>
        ))
        }

        {
          /**
            Dynamic Page Components should render here
          */



          /**
            Footer
          */
        }
      </Container>
    </Router>
  )
}

export default App
