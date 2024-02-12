export default async function Page(){
    const data = await fetch('http://127.0.0.1:8000/test')
    const test = await data.json()
    console.log(test)
    return <div>SEARCH PAGE</div>
}