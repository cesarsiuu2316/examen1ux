import DCU from "../Images/DCU.png";
import DCU1 from "../Images/DCU1.png";
import DCU3 from "../Images/DCU3.png";
import DCU4 from "../Images/DCU4.png";
import DCU5 from "../Images/DCU5.png";
import DCU6 from "../Images/DCU6.png";
import DCU7 from "../Images/DCU7.png";
import DCU8 from "../Images/DCU8.png";
import DCU9 from "../Images/DCU9.png";
import DCU10 from "../Images/DCU10.png";
import DCU11 from "../Images/DCU11.png";
import DCU12 from "../Images/DCU12.png";
import atomic from "../Images/atomic.png";
import { useState, react } from "react";

const InfoJovenes = () => {
    const [textInput, setTextInput] = useState("");
    const [resultadoBusqueda, setResultadoBusqueda] = useState("");
    return (
        <div className="InformacionJovenes">
            <div className="DCU">
                <form class="d-flex" role="search" onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={(event) => {
                        setTextInput(event.target.value);
                    }}></input>
                    <button class="btn btn-outline-success" type="submit" onClick={() => {
                        setResultadoBusqueda(textInput);
                    }}>Buscar</button>
                </form>
                {resultadoBusqueda && <h6>No pudimos encontrar: {resultadoBusqueda}</h6>}
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
                <h6>
                    Experiencia de Usuario (UX): Proceso de aumentar la satisfacción y
                    lealtad del cliente mediante la mejora de la usabilidad y la facilidad
                    de uso de un producto.
                </h6>
                <ul class="list-group">
                    <li class="list-group-item">
                        1. Supuestos y requerimientos: Se realiza la primera arquitectura
                        del producto a partir de entrevistas con el sitio.
                        <img src={DCU1} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        2. Análisis Referencial o Benchmarking: Se investigan proyectos con
                        patrones similares que hayan funcionado para satisfacer las
                        necesidades del usuario target.
                        <img src={DCU3} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        3. Análisis de Usuarios: Estudiar las características de nuestro
                        usuario target para comprender mejor las necesidades. Entender como
                        la edad, imagen o intereses personales afectan sus necesidades.
                        <img src={DCU4} className="responsiveImg" alt="404"></img>
                    </li>
                </ul>
                <h6>
                    Interfaz de Usuario (UI): Lo que permite la interacción del usuario con nuestra aplicación o página web.
                </h6>
                <ul class="list-group">
                    <li class="list-group-item">
                        1. Arquitectura alfa: Se utilizan los análisis de personas y
                        necesidades para crear una nueva arquitectura en donde los usuarios
                        puedan encontrar lo que buscan fácilmente en los grupos adecuados
                        <img src={DCU5} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        2. Card sorting: Validar la nomenclatura y la estructura de la
                        información, de modo que esté agrupada adecuadamente y escrita de la
                        manera correcta según la opinión de los usuarios.
                        <img src={DCU6} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        3. Navigation path: Al terminar el card sorting, se rediseña la
                        arquitectura con los hallazgos encontrados y se mapea la navegación.
                        <img src={DCU7} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        4. Wireframes / storyboards: Diagramas sin detalles gráficos ni
                        color, que presentan los escenarios por primera vez, definiendo la
                        jerarquía.
                        <img src={DCU8} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        5. Paper Prototyping: Se construyen maquetas de la interfaz en papel
                        en donde se prueba la navegación, la arquitectura alfa, la
                        jerarquía, los patrones de diseño y la estructura de la información.
                        <img src={DCU9} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        6. Arquitectura Beta: Al finalizar con el paper prototyping se
                        rediseña la arquitectura con las mejoras encontradas en las etapas
                        anteriores.
                        <img src={DCU10} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        7. Look and Feel: En esta etapa, ya con lo anterior validado, se
                        define la tipografía, el moodboard, cromática y la iconografía.
                        <img src={DCU11} className="responsiveImg" alt="404"></img>
                    </li>
                    <li class="list-group-item">
                        8. Mockup: Una maqueta funcional de la aplicación en donde se prueba
                        el look and feel.
                        <img src={DCU12} className="responsiveImg" alt="404"></img>
                    </li>
                </ul>
            </div>
            <div className="AtomicDesign">
                <h1>¿Qué es el diseño atómico?</h1>
                <p>
                    Un diseño atómico es crucial para que nuestro código de nuestra
                    aplicación pueda tener buena visibilidad, escalabilidad y
                    flexibilidad. El diseño atómico, creado por Brad Frost y Dave Olsen,
                    es una metodología de diseño que implica cinco bloques de diseño
                    fundamentales, que al juntarse, vuelven el código más fácil de leer y
                    modular. También, permite facilitar las pruebas y mejorar la calidad
                    en general de nuestro programa.
                </p>
                <h3>Proceso del Diseño Atómico</h3>
                <img src={atomic} className="responsiveImg" alt="404"></img>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Atomos: Componentes más básicos, pueden ser botones, inputs, formas, etc.</li>
                    <li class="list-group-item">Moléculas: Combinación de átomos para construir algo funcional.</li>
                    <li class="list-group-item">Organismos: Combinación de moléculas para crear una sección del interfaz. (Ej: Barra de navegación)</li>
                    <li class="list-group-item">Plantillas: Grupos de organismos que forman una página.</li>
                    <li class="list-group-item">Páginas: Un sistema donde podemos ver muchas plantillas. Esta es nuestra aplicación como producto final.</li>
                </ol>
            </div>
            <div id="contacto">
                <h1>Foro de discusión</h1>
                <div class="container">
                    <form class="row g-5">
                        <div class="col-6">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre"></input>
                        </div>
                        <div class="col-12">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="Escribe tu email"></input>
                        </div>
                        <div class="col-12">
                            <label for="comentario" class="form-label">Comentario</label>
                            <input type="text" class="form-control" id="comentario" placeholder="Escribe tu comentario"></input>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InfoJovenes;
