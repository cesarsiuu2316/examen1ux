import Footer from "./Footer";
import Carrusel from './Carrusel';
import Cartas from "./Cartas"

const Inicio = () => {
    return (
        <div>
            <Carrusel />
            <div class="p-2 bg-light border">
                <Cartas />
            </div>
            <div class="p-2 bg-light border">
                <Footer />
            </div>
        </div>
    );
}

export default Inicio;