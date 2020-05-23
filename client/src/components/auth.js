const isLogged = () => {
  if (typeof window !== "undefined") {
    console.log("app is running on the client")
  } else {
    console.log("app is running on the server")
  }
  // return sessionStorage.getItem("user")
  //   ? true
  //   : false

  return true
  // return false
}

const logOut = () => {
  console.log("Clearingggg")
  sessionStorage.removeItem("user")
  return isLogged()
}

const getLoggedInUserType = () => {
  //get user object from sessionStorage

  // const user = JSON.parse(sessionStorage.getItem("user"))
  // console.log("inside usertype", user);

  const user = {
    //type: 'ADMIN',
     type: 'STORE_MANAGER',
    // type: 'CUSTOMER'
  }
  // if (user.userType === null)
  //   return user.userType || null
  return user.type
}

export {
  isLogged,
  logOut,
  getLoggedInUserType
}