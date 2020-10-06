import Link from 'next/link'

export default function Second(){
    return(
        <>
            <h1>Second</h1>

            <Link href='/'><a>App</a></Link>
            <br />
            <Link href='/first/first/'><a>First</a></Link>
            <br />
            <Link href='/first/second/second'><a>Second</a></Link>
            <br />
            <Link href='/first/second/third/third'><a>Third</a></Link>
        </>
    )
}