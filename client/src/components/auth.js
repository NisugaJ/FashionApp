const isLogged = () => {
  if (typeof window !== "undefined") {
    console.log("app is running on the client")
  } else {
    console.log("app is running on the server")
  }
  // return sessionStorage.getItem("user") &&
  //   sessionStorage.getItem("access_token")
  //   ? true
  //   : false

  return true
  // return false
}

const logOut = () => {
  console.log("Clearingggg")
  sessionStorage.clear()
  // sessionStorage.setItem("user", "")
  // sessionStorage.setItem("access_token", "")
  return isLogged()
}

const getLoggedInUserType = () => {
  //get user object from sessionStorage
  const user = {
    type: 'ADMIN',
    // type: 'STORE_MANAGER',
    // type: 'CUSTOMER'
  }

  return user.type
}

export { isLogged, logOut, getLoggedInUserType }
