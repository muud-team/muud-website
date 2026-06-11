export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "primer-mes-clases-mas-violento",
    title: "El primer mes de clases más violento del que tengamos registro. Y recién empezamos.",
    date: "2026-04-06",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQG3tgUZZwSfAw/article-cover_image-shrink_720_1280/B4DZ1lHIceHIAI-/0/1775517865760?e=2147483647&v=beta&t=LPr2R9szgRK93sGAAMZqF13DXsh4yZoLF4a-6eVVuKA",
    summary: "Chile arrancó el año escolar con un asesinato, un alumno armado por semana y una bomba silenciosa que nadie quiere ver. La respuesta del Estado: un pórtico y una charla.",
    tags: ["Violencia escolar", "Salud mental", "Políticas públicas"],
    content: `Chile arrancó el año escolar con un asesinato, un alumno armado por semana y una bomba silenciosa que nadie quiere ver. La respuesta del Estado: un pórtico y una charla.

Llevamos un mes de clases. Solo uno. Y ya tenemos el primer asesinato documentado en un colegio chileno, más de 5 intentos de ingreso con armas de fuego en establecimientos de distintas regiones, una bomba molotov en un liceo emblemático de Santiago y un niño de 13 años apuñalado en el estómago al salir a su furgón.

Bienvenidos al año escolar 2026.

Si esto fuera la apertura de una novela distópica, el editor la devolvería por inverosímil. Pero es marzo y primera semana de abril en Chile.

Para quienes llevan el conteo, aquí está la cronología del mes:

**Marzo – Abril 2026 · Resumen del primer mes escolar**

27 mar — Alumno de 18 años asesina a la inspectora María Victoria Reyes. Hiere a cuatro personas. Primer caso de TSV documentado en Chile. Cuatro meses de planificación escrita.

29 mar — Estudiante de 17 años interceptado al intentar ingresar al colegio con una escopeta cargada en la mochila.

30 mar — Menor detenido con dos armas de fuego y droga al interior del establecimiento.

30–31 mar — El Colegio de Profesores convoca a manifestaciones nacionales bajo el lema "Que educar no nos cueste la vida". Miles de docentes marchan en todo el país de negro.

1 abr — Tres encapuchados lanzan una bomba molotov a la inspectoría del Liceo Lastarria. Resulta completamente destruida. Una funcionaria herida. Simultáneamente, desórdenes y detenidos en el Instituto Nacional.

1 abr — Menor de 12 años publica video en redes sociales amenazando de muerte y secuestro a compañero, exhibiendo un aparente arma de fuego. En otro colegio de la región, alumno detenido con cuchillo y manopla; otro, con dos bengalas.

1 abr — Niño de 13 años apuñalado en el abdomen al salir a su furgón. Hemorragia interna. Riesgo vital.

1 abr — Se publica en el Diario Oficial la Ley de Convivencia Escolar Nº 21.908. Medida estrella: detectores de metales. Reglamento: plazo de 12 meses.

2 abr — Ola de amenazas de tiroteo en redes sociales y mensajes en baños de colegios. Tres liceos de Antofagasta suspenden clases. Colegio Salesianos de Linares suspende jornada. Liceos de Ralco alertados. Carabineros desplegado en múltiples regiones.

2 abr — El Defensor de la Niñez se reúne con el Senado y declara: "El Estado ha llegado tarde." Advierte posible efecto imitación tras Calama.

3–5 abr — Liceos de distintas regiones reportan nuevas amenazas anónimas. Carabineros mantiene rondas preventivas en establecimientos. El debate público migra de la ley al reglamento, sin definir fecha de implementación real.

Un mes. Más de 10 hechos. Y la respuesta institucional, tan exacta como irónica, llegó el 1 de abril.

Empecemos por Calama, porque Calama merece más que un titular.

La Fiscalía Regional de Antofagasta fue precisa: Hernán Cristóbal Meneses Leal no explotó. Planificó. Cuatro meses. Lista de objetivos. Un cuaderno con fechas, nombres y métodos. Gas pimienta, cuchillos, artefactos explosivos. Lo llamó su "día de ira". La Fiscalía lo categorizó como el primer caso de Targeted School Violence (TSV) en la historia de Chile, un fenómeno que en Estados Unidos y Europa lleva décadas siendo estudiado y que tiene una característica que debería hacernos incómodos: casi siempre deja señales previas. Señales que alguien tiene que estar en condiciones de ver.

"En Calama, nadie las vio. El cuaderno existía. El plan existía. La señal estaba ahí. El sistema, no".

Y mientras tanto, el gobierno recorta más de $500.000 millones del presupuesto de educación. Precisamente el ítem que financia lo que podría haber intervenido antes del cuaderno.

Dicho esto, seré justo: no hay nada de malo en instalar un detector de metales en un colegio con amenaza verificada. El problema es presentarlo como política de convivencia.

La investigadora Alejandra Mohor del CESC lo dijo sin rodeos: los detectores de metales no han mostrado resultados en la reducción de delitos. El ex-ministro Nicolás Cataldo fue más lejos: la evidencia internacional muestra que donde se han implementado de manera aislada, la tenencia de armas no bajó, al revés. El Colegio de Profesores convocó a marchas. La propia ministra Arzola reconoció que la ley "no basta".

Pero el pórtico es fotogénico. Transmite acción. Y en política educativa chilena, la apariencia de acción suele bastar para cerrar el ciclo noticioso.

"Un detector de metales detecta lo que ya está en la mochila. No detecta lo que lleva meses gestándose en la cabeza".

Y aquí viene la parte que más me incomoda del debate: seguimos respondiendo con las mismas herramientas de siempre.

Charlas de valores. El mismo PowerPoint de convivencia que se repite cada año. Orientadores con 400 estudiantes a cargo y 20 minutos libres por semana. Duplas psicosociales que existen en el papel y llegan al colegio un día por semana. Protocolos de detección temprana que son formularios de ocho páginas que nadie completa porque nadie tiene tiempo de completarlos.

Llevamos décadas invirtiendo en intervención socioemocional sin medir si funciona. Sin datos. Sin seguimiento. Sin evidencia. No es un problema de intención. Es un problema de método. Chile sigue interviniendo emocionalmente a ciegas, con el mismo arsenal del siglo pasado, frente a adolescentes que viven en el siglo veintiuno.

Pero hay una segunda bomba en este mismo colegio. Una que no suena en el detector de metales. Y que casi nadie menciona esta semana.

El 58% de los jóvenes chilenos entre 12 y 32 años ha apostado alguna vez. El 36% lo ha hecho en línea. La edad promedio de inicio entre escolares es de 15 años. El 92% de los adolescentes ha visto publicidad de casas de apuestas. La mitad sigue a influencers que las promueven, lo que duplica la probabilidad de apostar. Y el 54% de los padres sabe que su hijo apuesta online. Y lo tiene normalizado.

Mientras el gobierno debate si instalar pórticos en las puertas, los adolescentes tienen el casino en el bolsillo. Sin pórtico. Sin protocolo. Sin que nadie lo detecte hasta que las deudas, el aislamiento y la desesperación ya son visibles.

La psicóloga Stefanie Fischer lo explicó con precisión: la dopamina que se libera al apostar es comparable a la de una droga. Y el cerebro adolescente — cuya corteza prefrontal, la parte que regula el comportamiento planificado, no termina de desarrollarse hasta los 25 años — no tiene los frenos que tiene un adulto. Las plataformas lo saben. Están diseñadas por expertos en comportamiento para maximizar exactamente eso.

"La adicción a las apuestas produce aislamiento, deudas, abandono del círculo social, ansiedad, depresión. El perfil emocional exacto del adolescente que nadie vio venir. El perfil que terminó escribiendo en un cuaderno".

No digo que haya una relación directa entre las apuestas y Calama. Digo algo peor: que Chile tiene miles de adolescentes con ese perfil emocional ahora mismo, en este momento, en recreos de colegios de todas las regiones, y el sistema educativo no tiene ni la capacidad ni las herramientas para verlos.

Existe tecnología que hace exactamente lo que el sistema no puede hacer con una charla y un orientador desbordado: detección temprana, continua y basada en datos del bienestar socioemocional de cada estudiante. No es una encuesta anual. No una intervención reactiva después del incidente. Monitoreo sistemático que identifica señales de alerta antes de que aparezcan en un cuaderno, en una deuda de apuestas o en una mochila con armas.

No es ciencia ficción. Es lo que plataformas de bienestar socioemocional con inteligencia artificial ya están haciendo en colegios de Chile y otros países. Con evidencia. Con certificación internacional. Con métricas que permiten saber si la intervención funcionó, no solo si se realizó.

¿Cuántas señales emitió Hernán Meneses Leal en los cuatro meses que estuvo planificando? No lo sabremos. No teníamos el sistema. No teníamos los datos. El presupuesto fue a otra cosa.

¿Cuántas señales están emitiendo hoy adolescentes chilenos atrapados en apuestas online, con deudas que sus padres no ven, con un casino en el celular que el pórtico no va a detectar jamás? Tampoco lo sabemos. Por las mismas razones.

El 78% de los chilenos cree que Calama no es un caso aislado sino la señal de un problema generalizado. Tienen razón. Y el 56% identifica la salud mental como la causa principal, no la delincuencia.

Es decir, la ciudadanía ya hizo el diagnóstico correcto. Solo falta que la política pública lo lea.

Llevamos un mes de clases. El detector de metales detecta lo que ya está en la mochila.

Hay dos bombas que no detecta: la que se gestó durante meses en silencio, y la que está ahora mismo en el bolsillo de miles de adolescentes, disponible las 24 horas, diseñada para no soltarlos.

La diferencia entre un Estado que previene y uno que reacciona no es de presupuesto. Es de voluntad. Y esa voluntad, hasta ahora, Chile no la ha mostrado.`,
  },
  {
    slug: "chile-regulando-celular-atraso",
    title: "Chile no está regulando el celular. Está regulando su propio atraso mientras el mundo avanza con inteligencia artificial",
    date: "2026-02-20",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFNOyIvLZF3Sg/article-cover_image-shrink_720_1280/B4DZx4tgVSJwAM-/0/1771551721503?e=2147483647&v=beta&t=b4xDMmWzMNK7capprcouqjoQ2l6n6IZtRxDyci9cDmM",
    summary: "Mientras el mundo se reorganiza en torno a la IA y las economías desarrolladas rediseñan sus sistemas educativos, Chile ha optado por prohibir el celular en las salas de clases.",
    tags: ["Tecnología", "Educación", "Políticas públicas"],
    content: `Chile acaba de tomar una decisión histórica, pero no por su visión de vanguardia, sino por su absoluta incapacidad de comprender el presente. Mientras el mundo se reorganiza en torno a la Inteligencia Artificial y las economías desarrolladas rediseñan sus sistemas para que los estudiantes aprendan a colaborar con algoritmos, Chile ha optado por el camino opuesto: prohibir el celular en las salas de clases. No se trata de integrar, ni de formar criterio, sino simplemente de vetar.

Esta medida trasciende lo educativo; es una manifestación de miedo. Prohibir una herramienta no es un acto pedagógico, es un acto de rendición. Es el equivalente a apagar el tablero de instrumentos de un avión porque el piloto no sabe interpretarlos: el avión no deja de volar, simplemente deja de ser controlado. Se argumenta que el celular distrae, y es cierto; pero también distraen las ventanas, el aburrimiento y un sistema diseñado hace un siglo para producir obediencia en lugar de pensamiento crítico.

Aunque la ley intente matizar la prohibición permitiendo el uso con "fines pedagógicos", la realidad en el aula será otra. La ambigüedad se traducirá en un veto total por temor, burocracia y simple supervivencia administrativa. Ningún director asumirá el riesgo y ningún docente querrá exponerse a una sanción por una interpretación subjetiva de la norma. Ante la duda, la orden será: "guárdelo".

Es aquí donde el chiste se cuenta solo y la contradicción se vuelve grotesca:

La digitalización obligatoria: Durante años, el sistema forzó a los docentes a digitalizarlo todo: asistencia, planificaciones, evidencias y evaluaciones en plataformas en la nube.

La precariedad material: En muchas escuelas, el computador de la sala no funciona, no tiene internet o simplemente no existe. El teléfono del profesor era, en la práctica, el único terminal operativo para cumplir con las exigencias del propio Ministerio.

El absurdo administrativo: Ahora, el mismo sistema que exige gestión digital prohíbe el único dispositivo que permitía realizarla en tiempo real.

¿Dónde queda el docente que pasaba asistencia en el libro digital desde su móvil porque es el único equipo que conecta? ¿Dónde queda la escuela donde el único acceso inmediato a contenido actualizado era el dispositivo del profesor? Hemos llegado al paroxismo de la incoherencia estatal: le exigimos al docente que nade y, al mismo tiempo, decidimos vaciar la piscina.

Es aquí donde aparecen los expertos citando estudios sobre la dopamina y el daño de las pantallas en el cerebro infantil. Tienen razón: la sobreexposición es nociva. Sin embargo, hay una pregunta incómoda que pocos se atreven a responder: ¿quién entrega el celular? No es el colegio, sino los padres. Las familias ponen en manos de un niño un dispositivo diseñado para adultos y luego delegan en la escuela la responsabilidad de controlar sus efectos.

El celular no es el enemigo de la educación; es la herramienta de acceso al conocimiento más poderosa de la historia. En este dispositivo reside más información de la que cualquier biblioteca puede ofrecer hace veinte años. Prohibirlo no elimina su existencia, sólo anula la posibilidad de aprender a usarlo correctamente.

La contradicción roza el absurdo cuando la prohibición se extiende a los docentes. Cabe preguntarse cómo un profesor de la periferia — lejos de los recursos del sector oriente — logrará cautivar a estudiantes cuya única referencia de éxito es la gratificación instantánea de las redes sociales. Para muchos docentes, el teléfono es su última trinchera: es la herramienta para lanzar un Kahoot, mostrar un video que conecte la ciencia con la realidad o romper la inercia de la desconexión.

Mientras países como Estonia, Singapur o el Reino Unido integran la IA en el proceso educativo, Chile se atrapa en una lógica que confunde control con educación. Es la diferencia entre enseñar a nadar y prohibir el agua. El mundo al que estos jóvenes se enfrentarán no tendrá menos tecnología, sino exponencialmente más.

Lo verdaderamente inquietante es la señal que enviamos: cuando algo nos supera, la solución no es entenderlo, sino eliminarlo. Durante años se invirtió en infraestructura y se exigió a los profesores certificarse en competencias digitales del siglo XXI. Hoy, ese discurso se convierte en un chiste de mal gusto.

Es probable que hoy muchos aplaudan. Celebrarán el orden, el silencio y la ausencia de pantallas visibles. Las salas estarán más calladas, pero habremos creado un forado invisible: el casco del barco se está oxidando bajo el agua mientras celebramos que la cubierta está seca.

En una década, cuando estos jóvenes enfrenten un mercado laboral donde la IA sea el estándar mínimo, recordaremos este momento. Mientras otros países forman creadores, nosotros estaremos formando ciudadanos obedientes a prohibiciones, tranquilos en un pasado que el resto del mundo ya dejó atrás. Porque el futuro no se construye prohibiendo herramientas, se construye aprendiendo a dominarlas. Y hoy, Chile decidió hacer exactamente lo contrario.`,
  },
  {
    slug: "slep-estafa-publica",
    title: "SLEP = Sigue La Estafa Pública: ¿Quién pidió este Frankenstein educativo?",
    date: "2025-07-20",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFyrUh27cvAZQ/article-cover_image-shrink_600_2000/B4EZgqPl0hGUAQ-/0/1753055387430?e=2147483647&v=beta&t=trTWvTh2Njylz1tv95hlXgQvYEBB69MoSE3CVfnMt_A",
    summary: "La reforma educacional de 2014 que creó los Servicios Locales de Educación Pública (SLEP) reemplazó el control municipal con una burocracia igual de disfuncional.",
    tags: ["Educación pública", "SLEP", "Políticas públicas"],
    content: `¿Te acuerdas cuando nos vendieron la pomada de que íbamos a "rescatar la educación pública"? Era 2014 y desde La Moneda, la entonces presidenta Michelle Bachelet anunciaba con bombos y platillos el fin de la municipalización, esa herencia de la dictadura que había transformado a los alcaldes en sostenedores educativos, con más poder para firmar convenios que para garantizar calidad. La promesa era clara: quitarle la educación a los municipios y crear un nuevo sistema "profesionalizado, moderno y descentralizado" llamado Servicios Locales de Educación Pública.

El discurso era seductor: "fin al lucro", "educación como derecho", "mejor gestión para los más pobres". Lo aplaudieron todos: expertos, rectores, el Colegio de Profesores, fundaciones, políticos de todos los colores. Era el proyecto estrella de la reforma educacional.

¿Y qué hicimos? Le sacamos la educación a los municipios… para entregársela a una estructura burocrática diez veces más opaca, lenta e ineficiente, con nombre largo y cero capacidad real de gestión: el SLEP. Un sistema que debutó con problemas de diseño, sin carrera directiva sólida, sin claridad de funciones, sin presupuesto adecuado, sin monitoreo, y que ahora sabemos — gracias a Contraloría, no al Mineduc — que también despilfarra millones como si fueran fichas del casino.

Es decir, cambiamos al alcalde operador por un funcionario que no responde ni a la comunidad ni a resultados. Y lo hicimos sabiendo que podía fallar. Porque hubo advertencias. Hubo informes técnicos. Hubo experiencias piloto que salieron mal. Pero el reloj político apuraba, y había que dejar el legado.

O como se le conoce ahora: SLEP = Sigue La Estafa Pública.

En la Región Metropolitana, la Contraloría detectó el uso irregular de más de $1.200 millones en los SLEP. No estamos hablando de un "error administrativo", sino de desórdenes financieros graves: pagos sin respaldo, contratos inflados, rendiciones inexistentes. Y, por supuesto, ni un solo peso devuelto ni responsables identificados.

Profesores que han trabajado meses sin contrato formal, sin correo institucional, sin saber a quién reportar ni a quién reclamar. Cargos críticos sin nombrar, escuelas sin director por más de un año, y un nivel de descoordinación tan grotesco que en algunos liceos no pueden comprar ni una resma de papel porque nadie sabe quién firma el cheque.

¿Quién fiscaliza todo esto? Nadie. Porque el Ministerio mira para el techo, la Agencia de la Calidad se dedica a hacer pruebas SIMCE inútiles, la Superintendencia no tiene dientes, y los sostenedores fantasma de los SLEP se dedican a administrar burocracia sin rendir cuentas.

Hace años que se viene gritando que esto iba a fracasar. Hay columnas, estudios del CEP, cartas al director, protestas del Colegio de Profesores, auditorías internas, papers académicos y hasta seminarios donde se decía — con datos en la mano — que los SLEP eran un Frankenstein institucional: mal diseñados, peor implementados y con cero gobernanza real.

Y lo más irónico es que, a pesar de todas las alertas, nadie se atreve a parar la máquina. Los ministros pasan como si fueran animadores de late show: sonríen, lanzan una frase inspiradora, inauguran un colegio, y se van.

Y acá no se salva nadie. Ni el segundo gobierno de Bachelet que armó este despropósito apurado por dejar legado, ni Piñera II que miró al techo con cara de póker, ni Boric y su gabinete "transformador" que en vez de detener la hemorragia prefirió aplicar más anestesia ideológica. Todos han usado la calculadora política y ninguno ha tenido el coraje de apretar el botón rojo.

Esto no se arregla con un cambio de logo, ni con una "mesa técnica", ni con una nueva unidad de acompañamiento territorial. Esto necesita cirugía mayor. Revisión total del diseño institucional, carrera directiva responsable, gobernanza con representación real de las comunidades educativas y mecanismos de fiscalización autónomos. Y por sobre todo, que el Estado asuma la responsabilidad de garantizar la educación pública sin delegarla en elefantes burocráticos sin cabeza.`,
  },
  {
    slug: "vacaciones-invierno-sistema-colapsado",
    title: "Vacaciones de invierno, regreso a clases… ¿y el sistema colapsado sigue igual o peor?",
    date: "2025-07-15",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFSiNH9riqcPw/article-cover_image-shrink_423_752/B56ZgLxRNCHQAY-/0/1752544122940?e=2147483647&v=beta&t=dV0roeV8Zxxx_PsLUMQtCdhS-vUfB0DouIX2FowaIJ4",
    summary: "Regresamos a clases y el escenario no solo seguía igual de tóxico, sino más violento, más saturado, más desesperanzado. Los conflictos no tomaron vacaciones.",
    tags: ["Violencia escolar", "Salud mental", "Docentes"],
    content: `Volvimos. Con esa fe casi religiosa de que el receso invernal iba a hacer magia: que las mantas, el chocolate caliente y dos semanas de pausa serían suficientes para recomponer lo irrecomponible. Pero no. Ni la nieve, ni el Netflix lograron anestesiar lo que ya era evidente antes de salir: el sistema escolar chileno está gritando auxilio… o ya se quebró del todo, y nosotros seguimos mirando para el lado, como si nada.

Regresamos a clases y el escenario no solo seguía igual de tóxico, sino más violento, más saturado, más desesperanzado. Los conflictos no tomaron vacaciones; se multiplicaron. Los síntomas de crisis mental, tanto en estudiantes como en docentes, ya no son señales de alerta: son alarmas a todo volumen que nadie quiere escuchar.

Sí, volvimos a clases con estudiantes apuñalados en los pasillos, balaceras en patios escolares, amenazas a docentes y autoridades celebrando que… ahora sí que sí, ¡habrá detectores de metales!

La Comisión de Seguridad de la Cámara ya aprobó el proyecto que permite instalar estos arcos de aeropuerto en los colegios. Porque claro, si hay violencia estructural, la solución lógica es instalar fierros. Como si el problema fuera que no detectamos las armas, y no que los estudiantes las están llevando por miedo, presión o desesperación.

Durante las vacaciones, muchos docentes no descansaron. Porque hay que planificar, rellenar papeles para la Agencia, cargar plataformas y preparar actividades "socioemocionales" sin tener una formación real sobre el tema.

El Colegio de Profesores lo ha dicho con claridad: estamos frente a una sobrecarga estructural, salarios estancados, falta de apoyo psicosocial, y una cultura laboral que romantiza el sacrificio, como si ser mártir fuera parte del contrato.

Un estudio de Educación 2020 ya advertía que más del 62% de los docentes declaraba estar en niveles severos de agotamiento emocional. Y este año no ha mejorado. Al contrario: el ausentismo docente ha aumentado en un 18% en comparación al mismo periodo de 2024.

Mientras se aprueban proyectos para instalar fierros en las entradas de los colegios, la salud mental de nuestros estudiantes sigue en caída libre. El 46% de los jóvenes presenta síntomas de ansiedad grave, el 31% señales de depresión, y un 8% ha manifestado ideación suicida en el último trimestre.

Seguimos sin profesionales permanentes en cada colegio, con protocolos que son la copia del protocolo anterior, que a su vez se inspiró en un manual de buenas intenciones del 2014.

Fingir que todo marcha bien solo porque volvimos de vacaciones es tan absurdo como tapar una fuga de gas con cinta adhesiva y esperar que nadie encienda un fósforo.

Si no enfrentamos de raíz la crisis de violencia, el colapso emocional de estudiantes y docentes, y la desconexión brutal entre la escuela y su territorio, la próxima crisis no se solucionará ni con más arcos metálicos, ni con más paros, ni con más titulares.

Hay que invertir en salud mental. Hay que formar equipos con sentido. Hay que cuidar a quienes educan. Y hay que dejar de creer que la solución pasa por simulacros de autoridad o frases de campaña.`,
  },
  {
    slug: "cronica-indiferencia-anunciada",
    title: "Crónica de una Indiferencia Anunciada: Violencia Escolar y Autoridades Ausentes",
    date: "2025-06-13",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQG9eDsIGwMySg/article-cover_image-shrink_720_1280/B4EZdqDsabHsAI-/0/1749831043784?e=2147483647&v=beta&t=F3wiM99zKctMRTZiQkkA6aH__V3Zf-ggaejQnpLYEzo",
    summary: "Más de 1.500 denuncias por violencia escolar en solo tres meses: una cifra escalofriante que el Ministerio de Educación insiste en disfrazar con eufemismos burocráticos.",
    tags: ["Violencia escolar", "Convivencia", "Políticas públicas"],
    content: `Mayo y lo que va de junio de 2025 en Chile han sido exactamente la pesadilla predecible que las autoridades parecían estar esperando para reaccionar — o eso pensábamos con ingenuidad. Más de 1.500 denuncias por violencia escolar en solo tres meses; una cifra escalofriante que el Ministerio de Educación insiste en disfrazar con un eufemismo burocrático llamado "protocolo reforzado", como si las palabras mágicamente borraran años de negligencia.

22 de mayo: una alumna de 14 años apuntó con una pistola de balines a su profesora en el Colegio Politécnico San José de Curicó exigiendo mejores notas.

4 de junio: un menor de 17 apuñaló a un compañero en Estación Central.

Misma semana: tres encapuchados irrumpieron en un colegio de San Pedro de la Paz y dispararon, dejando tres alumnos heridos. Afortunadamente, sin víctimas mortales… todavía.

Ninguno de estos incidentes son "hechos aislados". Son simplemente la culminación de años permitiendo la erosión total de la disciplina escolar bajo el cómodo disfraz de "más derechos, menos disciplina". Hemos dejado los colegios sin estructura ni autoridad, un terreno fértil para el caos adolescente.

La solución del gobierno es tan creativa como inefectiva: instalar detectores de metales y transformar colegios en cárceles mediáticas con controles penitenciarios. "Mano dura", repiten como robots, olvidando que violencia contenida no es violencia eliminada.

Y aquí una pregunta incómoda: ¿Por qué existen más fondos para comprar scanners y pórticos de metal que para contratar psicólogos? Menos del 40% de los liceos públicos cuentan con estos profesionales esenciales.

La excusa eterna: los derechos humanos malentendidos que prohibieron enseñar límites claros. Regalamos derechos ilimitados a estudiantes y les robamos autoridad a los profesores. Matamos la disciplina con exámenes voluntarios, horarios flexibles, y sanciones nulas. Ahora nos sorprende que los alumnos actúen como gladiadores en el circo en lugar de estudiantes en un aula.

Si seguimos creyendo que este teatro policial de detectores, discursos de "mano dura" y "protocolos" absurdos solucionará algo, solo aumentaremos las víctimas. A menos que reconstruyamos de inmediato comunidad, autoridad y disciplina sin miedo ni complejos, mayo y junio de 2025 serán solo el prólogo de un desastre aún mayor.`,
  },
  {
    slug: "normalizamos-nino-8-anos",
    title: "¿En qué momento normalizamos que un niño de 8 años decida cuándo entra al colegio?",
    date: "2025-05-28",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFp17VAfHTRAg/article-cover_image-shrink_720_1280/B4EZcZNj5FG4AI-/0/1748474675660?e=2147483647&v=beta&t=KXUEOVfRsxbBuuYa0YHWxUB8UXp1XLwxxEXTGKPolEs",
    summary: "La disciplina murió hace rato, sepultada entre leyes bienintencionadas que, bajo la bandera de los derechos esenciales, olvidaron el pilar estructural del respeto y los deberes.",
    tags: ["Disciplina", "Convivencia", "Leyes educativas"],
    content: `La escena es simple, cotidiana. Estoy sentado en la entrada de un colegio, esperando a una sostenedora, cuando presencio una escena que no necesita nombres ni ubicaciones para incomodar. Un niño, acompañado de su madre, llega con cinco minutos de retraso. Nada fuera de lo común. Se sientan. Comparten una sopaipilla con queso como desayuno improvisado. El niño no entra. Lo curioso es que no es que no pueda… es que no quiere.

Durante 68 minutos exactos, este estudiante protagoniza una tragicomedia con dos intentos de fuga, un par de amenazas con tijeras hacia su madre, varios insultos, y una docente que — con paciencia digna de premio Nobel de la Paz — le suplica cinco veces si quiere "entrar ahora sí a la sala". El gran desenlace ocurre cuando finalmente accede a ingresar gracias a un soborno: bebida y galletas.

Y ahí está la clave: el sistema no actúa. Está quebrado. Destruido. Abandonado.

Las escuelas ya no educan. A duras penas contienen. Porque la disciplina murió hace rato, sepultada entre leyes bienintencionadas y normativas que, bajo la bandera de los "derechos esenciales", olvidaron el pilar estructural del respeto y los deberes.

Desde la vuelta a la democracia, cada década fue dejando su marca en la legislación educativa. Promesas grandilocuentes, palabras hermosas, titulares de prensa… pero en la práctica, cada ley fue una puñalada más a la columna vertebral del sistema educativo.

La Ley N° 19.070 (Estatuto Docente, 1991): Nació para "dignificar la carrera docente". Lo que hizo fue transformar al profesor en un funcionario atrapado en una maraña administrativa y gremial. Le quitó el rol de autoridad pedagógica en el aula.

La Ley N° 20.370 (Ley General de Educación, 2009): En la práctica, calidad significó llenar planillas y crear organismos que fiscalizan desde una oficina. La LGE eliminó cualquier noción clara de disciplina o responsabilidad estudiantil.

La Ley N° 21.430 (Ley de Garantías de la Niñez, 2022): La joya de la corona. Garantiza todos los derechos imaginables para niños, niñas y adolescentes. Excepto el deber de comportarse.

Resultado: Un sistema que se llena la boca hablando de derechos, pero que en la práctica ha despojado a las escuelas de cualquier herramienta real para formar. Niños que no saludan, que no respetan, que escupen y golpean, y todo se justifica con un "hay que comprenderlos".

No se trata de volver a la letra con sangre, ni al castigo como enseñanza. Eso también nos dejó generaciones rotas. Pero ¿cuándo vamos a hablar con seriedad del equilibrio? ¿Del respeto mutuo? ¿De la autoridad sin violencia? ¿De enseñar que los derechos sólo tienen sentido cuando se entienden junto a los deberes?

La escuela sigue siendo el espejo más honesto — y más brutal — de la sociedad que construimos. Lo que vi ese día no es una anécdota. Es un síntoma. Un síntoma claro de que confundimos libertad con desidia, empatía con rendición, y protección con parálisis institucional.`,
  },
  {
    slug: "narco-va-ganando",
    title: "Todavía creemos que puede cambiar… pero el narco va ganando",
    date: "2025-05-05",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQE7m3kyCtHnGA/article-cover_image-shrink_720_1280/B4EZahVMHgHkAM-/0/1746463409300?e=2147483647&v=beta&t=gVrIYo77xOoi38IHM7wgicI9mESy2BFd8xGhPEtAtII",
    summary: "El narcotráfico se ha infiltrado en colegios de todos los estratos sociales chilenos. Las organizaciones criminales operan abiertamente mientras las instituciones del Estado permanecen ineficaces.",
    tags: ["Narcotráfico", "Violencia escolar", "Seguridad"],
    content: `En Chile ya no sorprende que el narco tenga llaves del colegio. Las noticias recientes lo confirman: en Lo Espejo, un narcotraficante regaló kits escolares y fue ovacionado en una reunión de apoderados; en La Pintana, se denunció que bandas ofrecen "protección" a escuelas a cambio de silencio y libre tránsito de sus operadores. En Valparaíso, docentes han renunciado por amenazas directas tras sancionar a estudiantes ligados a clanes familiares del narco. Ya no es caricatura ni leyenda urbana. Es rutina.

Y no, esto no es exclusivo de las comunas populares. En el sector oriente también hay narcozorrones: jóvenes de colegio particular pagado que lavan dinero con fiestas electrónicas, que trafican en clubes privados, y que distribuyen drogas en universidades como si fuera delivery gourmet. El narco no discrimina: hoy está presente en todos los estratos sociales, en todas las comunas del país.

El narco ya no se esconde: viste de apoderado responsable, ofrece "donaciones" a la sala de profesores, organiza bingos, cuida el portón y se convierte en el "buena onda" del barrio. Mientras tanto, sus hijos trafican en los recreos, controlan pasillos y desatan violencia cuando se sienten expuestos.

La escuela pública, que alguna vez fue un bastión de transformación social, hoy es zona de disputa. No entre ideas, sino entre la omisión cobarde del Estado y la ley del más fuerte. Y lo más grave: muchos lo saben, muchos lo aceptan.

En medio de este paisaje emerge una carta publicada por estudiantes del Instituto Nacional y del Liceo de Aplicación: "A veces, cuando todo parece derrumbarse, las palabras no alcanzan. Por eso escribimos. Porque tenemos miedo. Porque nos duele. Porque todavía creemos que puede cambiar."

Es un texto cargado de dolor legítimo, pero también de memoria selectiva. Porque no basta con escribir. Lo que falta no son palabras, sino asumir las consecuencias de años de romantizar el caos y de convertir la violencia en identidad estudiantil.

Pero no nos equivoquemos: esto no es solo culpa de los estudiantes. Ellos son el síntoma, no la causa. Lo que estamos viendo es la factura de años de divisiones políticas mezquinas, de gobiernos incapaces de llegar a un consenso mínimo por la educación pública.

Desde entonces, vinieron una tras otra: leyes que prometían inclusión, calidad, participación, pero que en la práctica vacían de autoridad a las escuelas. En ese vacío, donde el Estado retrocedió por miedo o conveniencia, el narco entró con fuerza: con dinero, con violencia, con droga y con promesas concretas. Porque mientras los gobiernos discutían en comisiones eternas, el narco ofrecía resultados inmediatos.

Pero aún quedan docentes que resisten como último bastión contra el narco, las normas absurdas del Ministerio, sus propios colegas apáticos. Ahí están quienes no migraron a Europa por un sueldo digno, que no bajaron los brazos, aunque eso implique tener que cubrir cursos porque ni siquiera hay reemplazos.

Mi pregunta es simple: ¿Cuándo nos vamos a poner de acuerdo? Porque si no hacemos el cambio ahora, será demasiado tarde. No solo perderemos la educación pública. Vamos a perder generaciones enteras.`,
  },
  {
    slug: "escuela-congreso-no-ve",
    title: "La escuela que el Congreso no ve… y la ley de convivencia que no resuelve nada",
    date: "2025-04-14",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFu4OyExyX3Xg/article-cover_image-shrink_720_1280/B4EZY2GQLGGYAI-/0/1744664331637?e=2147483647&v=beta&t=AVkuLfd2lAndIqTjMcMcZEZmFpQfbgNJADggR0kvq0w",
    summary: "La Ley de Convivencia Escolar que se tramita en el Congreso es un catálogo de buenas intenciones desconectado de la rutina escolar real, sin un peso adicional de presupuesto.",
    tags: ["Convivencia escolar", "Leyes", "Políticas públicas"],
    content: `Hay algo casi tragicómico en el ciclo eterno de la educación chilena: cada elección presidencial se convierte en un festival de promesas recicladas, donde los expertos de siempre — sí, los mismos de siempre — vuelven a decir lo mismo de siempre. "Transformar la educación", "priorizar la sala de clases", "modernizar el sistema". Palabras que suenan bonitas en seminarios, pero que, al ras de suelo, no cambian nada.

Mientras tanto, los colegios se incendian — literal y figuradamente — y la violencia en las aulas crece como hiedra en un edificio abandonado. ¿Y la solución? Una ley. Otra ley. La Ley de Convivencia Escolar que hoy se tramita es un catálogo de buenas intenciones, lleno de frases como "promover el buen trato" y "erradicar la violencia", pero absolutamente desconectado de la rutina escolar real.

¿Quién puede implementar esta utopía normativa en escuelas rurales de La Araucanía o Aysén, donde ni siquiera hay un psicólogo contratado? Este año, una profesora de Quellón fue golpeada por un apoderado frente a sus alumnos; en Talcahuano, un estudiante de octavo básico apuñaló a su compañero en el patio; y en Punta Arenas, el equipo directivo de una escuela básica renunció completo por amenazas reiteradas.

No es coincidencia que la ASEDUCH ya advirtiera que esta ley puede agravar la crisis educativa si no se corrige su enfoque. Porque imponer nuevas obligaciones a sostenedores y directivos sin recursos ni acompañamiento es tan útil como exigir una reunión del Consejo Escolar… el mismo día del acto de Fiestas Patrias.

El proyecto destaca como un logro el primer Reporte Nacional de Convivencia Escolar, pero olvida decir que fue publicado recién en 2024, cuando llevamos más de 15 años con leyes al respecto.

Peor aún: se instrumentalizan tragedias humanas para legitimar la urgencia de esta ley, como si el mismo sistema que las dejó ocurrir ahora pudiera salvar a otros con una nueva firma en el Diario Oficial.

¿Dónde están los fondos comprometidos para salud mental escolar? ¿Dónde está el sistema de derivación eficaz con redes de salud? ¿Dónde está la capacitación intensiva para los docentes en gestión socioemocional? El Informe Financiero del proyecto dice: "La aplicación de las disposiciones del proyecto de ley no irroga gasto fiscal." Cero. Nada.

Pero sería injusto no reconocer que hay colegios que han roto este círculo vicioso. Comunidades educativas que, contra todo pronóstico, han construido entornos de bienestar real, con equipos comprometidos, innovación en salud mental, y una convivencia escolar que no se basa en el castigo, sino en la contención. El problema es que esos mismos colegios hoy están asfixiados por fiscalizaciones, reportes interminables y una Superintendencia que parece más interesada en el formulario que en el fondo.

Ojalá, de una vez por todas, también sea el año de escuchar a quienes están en la sala, en vez de seguir citando a quienes llevan 35 años escribiendo desde el escritorio.`,
  },
  {
    slug: "inclusion-a-la-deriva",
    title: "Inclusión a la deriva: el experimento fallido que pagan alumnos y docentes",
    date: "2025-03-18",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFQt_j7J5fyQA/article-cover_image-shrink_720_1280/B4EZWrO22hGYAI-/0/1742334557014?e=2147483647&v=beta&t=iAfGSIfAQERAT7tTm_hOV5iNb9YpJmCMxsxTomzzz0Q",
    summary: "La Ley de Inclusión Escolar ha creado aulas caóticas y docentes sobrecargados sin la preparación adecuada. La inclusión real requiere formación, recursos y acompañamiento.",
    tags: ["Inclusión", "Educación", "Reforma"],
    content: `Navegar sin rumbo siempre termina en naufragio. La inclusión escolar, sin planificación ni apoyo real, es un barco a la deriva donde quienes más sufren son alumnos y docentes.

Eso es precisamente lo que ha sucedido con la Ley de Inclusión Escolar (Ley N° 20.845), promulgada el 29 de mayo de 2015. Pretendía ser la solución definitiva a décadas de segregación educativa en Chile, pero, tras casi una década, la realidad exhibe un sistema tambaleante y saturado, donde la inclusión es más una declaración de intenciones que una práctica efectiva.

La implementación simplista de esta ley ha ignorado sistemáticamente las diferencias contextuales entre colegios, provocando serias consecuencias en comunidades educativas que simplemente no estaban preparadas para una transición tan abrupta y poco planificada.

La eliminación de la selección académica prometía reducir brechas y mezclar realidades diversas en una misma aula, pero en la práctica terminó impactando negativamente a liceos emblemáticos que tradicionalmente han funcionado como motores efectivos de movilidad social. Estos establecimientos, reconocidos históricamente por su excelencia académica, hoy enfrentan una caída significativa en sus resultados.

La realidad expuesta por el SIMCE 2024 revela un panorama preocupante. Se observa un incremento alarmante en reportes de violencia escolar y conflictos internos en las comunidades educativas. La supuesta inclusión, sin recursos específicos ni una formación docente robusta en convivencia escolar y manejo de conflictos, ha transformado muchas escuelas en ambientes de aprendizaje hostiles.

En la práctica, la inclusión se reduce muchas veces a una mera declaración en protocolos y documentos administrativos. La mayoría de los profesores llegan al aula sin la más mínima preparación práctica para atender, por ejemplo, a niños dentro del espectro autista. Y no podemos culparlos: no es responsabilidad de los docentes la deficiente formación que reciben, sino de un sistema que insiste en exigir sin antes preparar.

Los profesores requieren urgentemente formación específica en inclusión educativa real, con énfasis en salud mental, habilidades socioemocionales y estrategias concretas para apoyar a estudiantes con necesidades educativas especiales. No basta con capacitaciones genéricas o protocolos administrativos vacíos; se necesitan estrategias claras, apoyos especializados y un acompañamiento constante.

La Ley de Inclusión debe reformularse urgentemente, esta vez desde estudios serios y no desde prejuicios ideológicos. Es imprescindible reconocer que la desconexión entre los gobiernos de turno y la realidad cotidiana de las escuelas ha generado consecuencias desastrosas.

La inclusión real no es una declaración política ni un acto ideológico. Es una política pública basada en evidencia, recursos adecuados y acompañamiento continuo. Casi una década después, llegó el momento de asumir la responsabilidad política por errores cometidos y corregir el rumbo de manera decidida y sostenible.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
}
