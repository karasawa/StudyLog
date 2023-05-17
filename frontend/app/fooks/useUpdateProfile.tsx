import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useUpdateProfile(username: string) {
    const updateProfile = async() => {
        if(username === "")return
        await fetch(new URL(`http://localhost:8080/profile`), {
            method: "PUT",
            body: JSON.stringify({ username: username}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => console.log(data))
    }

    return { updateProfile }
}
