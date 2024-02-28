import Link from 'next/link'

export default function NotFound(){
    return(
        <div>
            <h2>Error!</h2>
            <Link href="/">Retornar para Home</Link>
        </div>
    )
}