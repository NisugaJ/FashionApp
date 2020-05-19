import React, { useState, useEffect } from 'react'
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import "./LandingStyles.scss";

import apis from '../api/api_index'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import OverlayLoadingSpinner from './components/OverlayLoadingSpinner'
// import styled from 'styled-components'


function LandingPage() {

  const [users, setUsers] = useState({ data: [] })

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

  return (
    <React.Fragment>
      <NavBar />
      <Footer />
    </React.Fragment>
  );

}

export default LandingPage
