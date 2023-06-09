import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function useListStudyContents(setRecentReportList: any) {

    const listStudyContents = async() => {
        await fetch(new URL(`http://localhost:8080/contents`), {
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
                setRecentReportList(data)
            })
    }

    return { listStudyContents }
}
