import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useCreateStudy(content: string,
                                       date: string,
                                       time: string,
                                       memo: string) {
    const createStudy = async() => {
        if(content === "" || time === "")return
        await fetch(new URL(`http://localhost:8080/study`), {
            method: "POST",
            body: JSON.stringify({ content: content,
                                   date: date,
                                   time: time, 
                                   memo: memo}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => console.log(data))
    }

    return { createStudy }
}
