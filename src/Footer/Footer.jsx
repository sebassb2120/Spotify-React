import "./Footer.css"

export function Footer(){
    return(
        <>
        <footer>
            <img src="https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/LOGOFOTER.jpg?alt=media&token=f5f02020-1500-4377-8be4-50b8fdbb6968" alt="identificador" className="logo"/>

            <div className="social-icons-container">
                <a href="https://es-la.facebook.com/" className="social-icon"></a>
                <a href="https://www.instagram.com/" className="social-icon"></a>
                <a href="https://www.linkedin.com/feed/" className="social-icon"></a>
                <a href="https://twitter.com/" className="social-icon"></a>
            </div>
            <ul className="footer-menu-container">
                <li className="menu-items">Legal</li>
                <li className="menu-items">Cookies</li>
                <li className="menu-items">Privacity</li>
                <li className="menu-items">Shipping</li>
                <li className="menu-items">Refounds</li>
            </ul>
            <spam className="copyright">2023, Sebastian Saldarriaga Bustamante. pagina web#2</spam>
        </footer>
        </>
    )
}