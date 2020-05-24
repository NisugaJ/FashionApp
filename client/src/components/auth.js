const isLogged = () => {
  if (typeof window !== "undefined") {
    console.log("app is running on the client")
  } else {
    console.log("app is running on the server")
  }
  return sessionStorage.getItem("user")
    ? true
    : false

  // return true
  // return false
}

const logOut = () => {
  console.log("Clearingggg")
  sessionStorage.removeItem("user")
  return isLogged()
}

const getLoggedInUserType = () => {
  //get user object from sessionStorage

  const user = JSON.parse(sessionStorage.getItem("user") || null)
  console.log("inside usertype", user);

  // const user = {
  //   type: 'ADMIN',
  //   // type: 'STORE_MANAGER',
  //   // type: 'CUSTOMER'
  // }
  // return user.type

  if (user) {
    if (user.userType !== null)
      return user.userType || null
  }
  else return null
}

const getAccessToken = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || null)
  if (user && user.accessToken) {
    return user.accessToken.toString()
  } else return null
}

export {
  isLogged,
  logOut,
  getLoggedInUserType,
  getAccessToken
}