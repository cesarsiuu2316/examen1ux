import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cartas = () =>{
    return (
        <div>
            <Card>
            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/021/075/739/non_2x/user-centered-design-icon-design-free-vector.jpg" />
            <Card.Body>
                <Card.Title>¡Descubre mas del DCU y UX!</Card.Title>
                <Card.Text>
                El UX se trata de cómo nos sentimos y cómo interactuamos con productos y servicios digitales,
                como aplicaciones o sitios web. Mientras que el  diseño centrado en el usuario implica poner
                a las personas en el centro del proceso de diseño. Se trata de comprender sus necesidades,
                deseos y comportamientos para crear productos que se ajusten a ellos.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/63caed8a66718558950b812c/23dab030-5c9f-4fa8-a588-0728e73a1f28/ux-indonesia-pqzRfBhd9r0-unsplash.jpg" />
            <Card.Body>
                <Card.Title>Para estudiantes</Card.Title>
                <Card.Text>
                El diseño centrado en el usuario se enfocan en hacer que la interacción con productos digitales 
                sea agradable y fácil de usar. Esto implica comprender a los usuarios y diseñar 
                productos que se ajusten a sus necesidades. Los jóvenes pueden beneficiarse de 
                estos conceptos al utilizar aplicaciones, sitios web y otras herramientas digitales 
                que UNITEC ofrece.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/user-experience-teamwork-mobile-ux-ui-designers-working-co-space-workroom-163859903.jpg" />
            <Card.Body>
                <Card.Title>Para padres</Card.Title>
                <Card.Text>
                El UX y el diseño centrado en el usuario buscan mejorar la experiencia de uso de los productos 
                y servicios digitales. Al diseñar pensando en los usuarios, se crea una experiencia más intuitiva
                y agradable, lo que facilita su uso y maximiza los beneficios que pueden obtener de ellos.
                Esto significa que los padres de familia pueden disfrutar de productos digitales más fáciles
                de usar y que se adapten mejor a sus necesidades y preferencias.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
      );
}

export default Cartas;