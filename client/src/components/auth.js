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

const getUserData = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || null)
  console.log(user);

  if (user) {
    var uData = user.user
    let userData = {
      first_name: uData.first_name,
      last_name: uData.last_name,
      username: uData.username,
      email: uData.email,
      reg_date: new Date(uData.reg_date).toLocaleString()
    }
    return userData
  }
}

const getUserId = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || null)
  console.log(user);

  if (user) {
    var uData = user.user
    return uData._id
  }
  return null
}

const getUserFirstName = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || null)
  console.log(user);

  if (user) {
    var uData = user.user
    return uData.first_name
  }
  return null
}

export {
  isLogged,
  logOut,
  getLoggedInUserType,
  getAccessToken,
  getUserData,
  getUserId,
  getUserFirstName
}