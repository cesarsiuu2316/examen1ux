import Carousel from 'react-bootstrap/Carousel';
const Carrusel = () => {
    return (
        
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{opacity: 0.5}}
                    src="https://josefacchin.com/wp-content/uploads/2020/04/experiencia-de-usuario-ux.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"70px"}}>BIENVENIDOS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{opacity: 0.5}}
                    src="https://negocios-inteligentes.mx/wp-content/uploads/2022/10/ux.jpeg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"100px"}}>¿Que es el UX?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{opacity: 0.5}}
                    src="https://aveiroperoni.com/wp-content/uploads/2015/05/User-Centered-Design.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"100px"}}>¿Que es el DCU?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}
 
export default Carrusel;