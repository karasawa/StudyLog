import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useCreateStudyContents(content: string) {
    const createStudyContents = async() => {
        if(content === "")return
        await fetch(new URL(`http://localhost:8080/contents`), {
            method: "POST",
            body: JSON.stringify({ content: content}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => console.log(data))
    }

    return { createStudyContents }
}
