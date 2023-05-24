import Card from 'react-bootstrap/Card';

const Ejemplo = () => {
    return (
        <div>
            <h1>EJEMPLOS</h1>
            <Card>
                <Card.Img variant="top" src="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/203997572_4295957220492430_527965061797796099_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CBXgjs_3nWMAX-kjbbR&_nc_ht=scontent.ftgu1-2.fna&oh=00_AfB3cTtOCreAn-X15JGsdfGW-9jHEAUretTfJjH8rgh0Dw&oe=6494E6CE" />
                <Card.Body>
                    <Card.Title>Analogia DCU - Bottella</Card.Title>
                    <Card.Text>
                    El DCU se centra en la mejora de la experiencia del usuario. En esta comparacion vemos como la botella
                    diseñada para el usuario aparte de ser estetica como la botella de vidrio, es facil de usar ya que es facil 
                    de apretar y su tapa hergonomica permite controlar el flujo de salsa de tomate.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.aragon.es/documents/20127/93512415/human-centered-design+%281%29.png/d5f6ce3d-0510-e7ac-c75d-a63d0dce6262?t=1681283264542" />
                <Card.Body>
                    <Card.Title>Analogia DCU - Telefono</Card.Title>
                    <Card.Text>
                    El modelo 500 del telefono de AT&T fue una mejora basada en el diseño para el usuario. 
                    Entre las mejoras se incluye que las patillas que sujetan el auricular sobresalen un poco, para que en caso de que el 
                    aparato se caiga y quede bocabajo la llamada no se cuelgue. Los números y letras se sacan del área de desgaste, 
                    provocado por los dedos al marcar. El cable que une el auricular se hace extensible para evitar que se enrede. Estas
                    mejores fueron implementadas por el resto de telefonos alambricos debido a su mejora en sus usuarios
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Ejemplo;
