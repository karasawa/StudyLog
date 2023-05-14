import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useGetRecentReport(setContentsList: any) {
    const getRecentReport = async() => {
        await fetch(new URL(`http://localhost:8080/studies`), {
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
                setContentsList(data)
            })
    }

    return { getRecentReport }
}
