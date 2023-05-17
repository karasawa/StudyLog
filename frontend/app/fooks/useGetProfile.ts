import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useGetProfile(setProfile: any) {
    const getProfile = async() => {
        await fetch(new URL(`http://localhost:8080/profile`), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => {
                console.log(data)
                setProfile(data)
            })
    }
  return { getProfile }
}
