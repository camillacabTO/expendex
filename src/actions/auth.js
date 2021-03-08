import { firebase, googleProvider } from '../firebase/firebase'

export const login = (uid, displayName, email) => ({
  type: 'LOGIN',
  uid,
  displayName,
  email
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const loginFirebase = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider)
  }
}

export const logoutFirebase = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
