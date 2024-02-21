import Link from "next/link";

export default function Menu(){
    return(
        <header>
            <h1>Menu</h1>
            <nav>
                <ul>
                   <Link href="/">
                    <li>Home</li>
                   </Link>
                   
                   <Link href="/registro">
                    <li>Registrar</li>
                   </Link>
                    
                </ul>
            </nav>
        </header>
    );

}