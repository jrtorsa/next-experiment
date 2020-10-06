

function Data({data}) {
    console.log(data)
    return(
        <div>
            <div>
                <p>My name is: {data.name}</p>
            </div>
            <div>
                <p>My username is: {data.username} </p>
            </div>
            And...
            <div>
                <p>My webpage is: {data.website}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const { id } = context.query
    console.log(id)
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    const response = await fetch(url)
    const personalData = await response.json()
    return {
        props:{
           data: personalData
        }
    }
}

export default Data