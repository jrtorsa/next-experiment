import Link from 'next/link'

export default function Generic({data}){
    return (
        <div>
        <Link href='/data/[id]' as={`/data/${data.id}`}>
            <a>{data.name}</a>
        </Link>
        
    </div>
    )
}