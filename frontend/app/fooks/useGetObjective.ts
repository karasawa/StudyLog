import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useGetObjective(setObjective: any) {
    const getObjective = async() => {
        await fetch(new URL(`http://localhost:8080/objective`), {
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
                if(data !== null){
                    setObjective({
                        objective: data.objective,
                        deadline: data.deadline
                    })
                }
            })
    }

    return { getObjective }
}
