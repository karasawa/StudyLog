import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useCreateTimeline(message: string) {
    const createTimeline = async() => {
        if(message === "")return
        await fetch(new URL(`http://localhost:8080/timeline`), {
            method: "POST",
            body: JSON.stringify({ message: message}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => console.log(data))
    }

    return { createTimeline }
}
