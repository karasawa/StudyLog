import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useListTimeline(setTimelineList: any) {

    const listTimeline = async() => {
        await fetch(new URL(`http://localhost:8080/timelines`), {
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
                setTimelineList(data)
            })
    }

    return { listTimeline }
}
