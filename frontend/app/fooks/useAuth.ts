import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useAuth(email:string, password:string) {
  const signup = async () => {
    await fetch(new URL(`http://localhost:8080/signup`), {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((data) => console.log(data))
  }
  const login = async () => {
    await fetch(new URL(`http://localhost:8080/login`), {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((data) => {
        cookie.set("access_token", data.access_token)
        cookie.set("refresh_token", data.refresh_token)
      })
  }

  return { signup, login }
}