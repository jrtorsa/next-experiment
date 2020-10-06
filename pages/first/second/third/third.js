import Link from 'next/link'

export default function Third(){
    return(
        <>
            <h1>Third</h1>

            <Link href='/'><a>App</a></Link>
            <br />
            <Link href='/first/first/'><a>First</a></Link>
            <br />
            <Link href='/first/second/second/'><a>Second</a></Link>
        </>
    )
}