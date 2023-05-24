import DCU from '../Images/DCU.png'
import DCU1 from '../Images/DCU1.png'
import DCU3 from '../Images/DCU3.png'
import DCU4 from '../Images/DCU4.png'
import DCU5 from '../Images/DCU5.png'
import DCU6 from '../Images/DCU6.png'
import DCU7 from '../Images/DCU7.png'
import DCU8 from '../Images/DCU8.png'
import DCU9 from '../Images/DCU9.png'
import DCU10 from '../Images/DCU10.png'
import DCU11 from '../Images/DCU11.png'
import DCU12 from '../Images/DCU12.png'



const Info = () => {
    return (
        <div className="Informacion">
            <div className="DCU">
                <h1>¿Diseño Centrado en el Usuario (DCU), qué es?</h1>
                <p>
                    El diseño centrado en el usuario (DCU) es una metodología de diseño
                    que se basa en la información sobre el usuario target. Toma en cuenta
                    la experiencia del usuario en todo el proceso del diseño. La finalidad
                    principal es poder mejorar al máximo la experiencia del usuario en
                    nuestro sitio web, volviéndola más atractiva y fácil de utilizar.
                </p>
                <img src={DCU} className="responsiveImg" alt="404"></img>

                <h2>Proceso del Diseño Centrado en el Usuario (DCU)</h2>
                <h4>Experiencia de Usuario (UX): Proceso de aumentar la satisfacción y lealtad del cliente mediante la mejora de la usabilidad y la facilidad de uso de un producto.</h4>
                <ul class="list-group">
                    <li class="list-group-item">1. Supuestos y requerimientos: Se realiza la primera arquitectura del producto a partir de entrevistas con el sitio.
                        <img src={DCU1} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">2. Análisis Referencial o Benchmarking: Se investigan proyectos con patrones similares que hayan funcionado para satisfacer las necesidades del usuario target.
                        <img src={DCU3} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">3. Análisis de Usuarios: Estudiar las características de nuestro usuario target para comprender mejor las necesidades. Entender como la edad, imagen o intereses personales afectan sus necesidades.
                        <img src={DCU4} className="responsiveImg" alt="404"></img>
                    </li>
                </ul>
                <h4>Experiencia de Usuario (UX): Proceso de aumentar la satisfacción y lealtad del cliente mediante la mejora de la usabilidad y la facilidad de uso de un producto.</h4>
                <ul class="list-group">
                    <li class="list-group-item">1. Arquitectura alfa: Se utilizan los análisis de personas y necesidades para crear una nueva arquitectura en donde los usuarios puedan encontrar lo que buscan fácilmente en los grupos adecuados
                        <img src={DCU5} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">2. Card sorting: Validar la nomenclatura y la estructura de la información, de modo que esté agrupada adecuadamente y escrita de la manera correcta según la opinión de los usuarios.
                        <img src={DCU6} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">3. Navigation path: Al terminar el card sorting, se rediseña la arquitectura con los hallazgos encontrados y se mapea la navegación.
                        <img src={DCU7} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">4. Wireframes / storyboards: Diagramas sin detalles gráficos ni color, que presentan los escenarios por primera vez, definiendo la jerarquía.
                        <img src={DCU8} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">5. Paper Prototyping: Se construyen maquetas de la interfaz en papel en donde se prueba la navegación, la arquitectura alfa, la jerarquía, los patrones de diseño y la estructura de la información.
                        <img src={DCU9} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">6. Arquitectura Beta: Al finalizar con el paper prototyping se rediseña la arquitectura con las mejoras encontradas en las etapas anteriores.
                        <img src={DCU10} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">7. Look and Feel: En esta etapa, ya con lo anterior validado, se define la tipografía, el moodboard, cromática y la iconografía.
                        <img src={DCU11} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">8. Mockup: Una maqueta funcional de la aplicación en donde se prueba el look and feel.
                        <img src={DCU12} className="responsiveImg" alt="404"></img>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Info;
