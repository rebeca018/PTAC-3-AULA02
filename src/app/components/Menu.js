import Link from "next/link";
import styles from "./menu.module.css"

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
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