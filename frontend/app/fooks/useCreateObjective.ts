import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useCreateObjective(objective: string,
                                           deadline: string,
                                           flag: boolean) {
    const createObjective = async() => {
        if(objective === "" || deadline === "" || flag)return
        await fetch(new URL(`http://localhost:8080/objective`), {
            method: "POST",
            body: JSON.stringify({ objective: objective,
                                   deadline: deadline}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            .then((data) => console.log(data))
    }

    return { createObjective }
}
