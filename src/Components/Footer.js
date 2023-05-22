
const Footer = () => {
    return (
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} UNITEC. &middot; </p>
        </footer>
    );
}
 
export default Footer;