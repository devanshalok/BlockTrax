import React, { useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [errorCode, setErrorCode] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const [claims, setClaims] = useState()

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user)
        if (user != null) {
          onSnapshot(doc(db, 'users', user.uid), (doc) => {
            user.getIdToken(true).then(() => {
              user.getIdTokenResult().then((result) => {
                setClaims(result.claims)
                setLoading(false)
              })
            })
          })

          user.getIdTokenResult().then((result) => {
            setClaims(result.claims)
            setLoading(false)
          })
        } else {
          setLoading(false)
        }
      },
      (error) => {
        setErrorCode(error.code)
        setErrorMessage(error.message)
      }
    )

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    claims
  }

  return (
    <AuthContext.Provider value={value}>
      {errorMessage && <p>{`${errorCode} : ${errorMessage}`}</p>}
      {!loading && children}
    </AuthContext.Provider>
  )
}
