const semiblack = "rgba(40, 40, 40, 0.3)"

var niveles = [
    {
        ciudad: true,
        tipo: 0,
        color: "white",
        piso: "red",
        largo: 1000,
        x: 500,
        y: 550,
        music: "littleroot",
        pisos: [
            [1000, 400, 400, 0],
            [100, 100, 700, 500, semiblack, "puerta", 3, 500, 500]


        ],
        npcs: [
           
            
        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad]
           
            [50, 50, 800, 430, ".compu", true, 5, true, 1],
            [100, 100, 780, 430, "#transparent", true, 0, false, 1],
            

        ]
    },
    {
        tipo: 2,
        nivel: [1, 2],
        color: "green",
        piso: "rgb(180, 255, 200)",
        largo: 6000,
        salvaje: true,
        letrero: "Ruta Umbral",
        music: "ftdcPiano",
        salvajes: ["petilil", "rattata", "rattata", "petilil", "rattata"],
        prob: 2,
        x: 300,
        puzzle: true,
        pisos: [
            [6000, 600, 200, 0],
            [500, 100, 200, 400, "green", "accion", 10],
            [500, 100, 650, 400, "green", "accion", 10],
            [500, 100, 650, 1400, "green", "accion", 10],
            [200, 100, 500, 0, semiblack, "puerta", 3, 1900, 500],
            [500, 200, 200, 2000, "green", "accion", 10],
            [100, 400, 400, 2400, "green", "accion", 10],
            [500, 250, 350, 2700, "green", "accion", 10],
            [500, 100, 450, 3900, "green", "accion", 10],

        ],
        npcs: [
            [5, "chica", 1500, 400, 30, false, 16, 3, 1],
            [5, "chica", 3000, 300, 30, false, 16, 4, 2],
            [5, "chica", 3500, 500, 30, false, 16, 5, 3],
            [5, "chica", 4500, 600, 30, false, 16, 6, 4],
            [5, "chica", 4200, 300, 30, false, 16, 7, 5],
            [5, "chica", 5000, 200, 30, false, 16, 8, 6],
            
        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad, puerta]
            [100, 500, 2500, 300, "#brown", true, 0, false, 0, 0],
        ]
    },
    {//2
        color: "brown",
        piso: "rgb(150, 100, 100)",
        largo: 1000,
        x: 300,
        y: 0,
        pisos: [
            [1000, 400, 400, 0],


        ],
        npcs: [
            [4, "hyper", 900, 500, 100, true, 0]


        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad, puerta]
                        

        ]
    },
    {//3   
        color: "skyblue",
        piso: "#70c8a0",
        largo: 2100,
        x: 100,
        y: 500,
        ciudad: true,
        music: "littlerootRemix",
        letrero: "Pueblo Silvis",
        pisos: [
            [2100, 600, 200, 0],
            [50, 100, 400, 200, "transparent", "casa", "none"],
            [50, 100, 400, 600, semiblack, "casa", "0"],
            [50, 100, 400, 1000, semiblack, "tienda", 4],
            [50, 100, 400, 1400, semiblack, "lab", 5],
            [100, 100, 500, 2000, semiblack, "wrap", 1]

        ],
        npcs: [
            [1, "chica", 500, 600, 30, false, 16]

        ],
        carteles: [
            [1900, 100, 50, 500, "#rgb(200, 200, 190)", false, 0, false, 0],
            [300, 150, 70, 200, "#transparent", true, 1, true, 0],
            [300, 150, 470, 200, "#transparent", true, 1, true, 0],
            [300, 150, 870, 200, "#transparent", true, 2, true, 0],
            [400, 150, 1170, 200, "#transparent", true, 3, true, 0],
            [40, 100, 70, 600, ".cartelPueblo", true, 15, true, 1]

        ]
    },
    {// 4 tienda
        color: "white",
        piso: "rgb(150, 180, 255)",
        ciudad: true,
        largo: 1000,
        x: 500,
        y: 600,
        objts: [10, 15, 2, 18],
        pisos: [
            [1000, 600, 200, 0],
            [100, 100, 700, 500, semiblack, "puerta", 3, 1000, 500]
        ],
        npcs: [
            [0, "tendero", 800, 500, 0, false, 11, 3]
        ],
        carteles: [
            [150, 400, 0, 200, "#gray", true, 12, true, 0, 10],
            [150, 400, 300, 200, "#gray", true, 12, true, 0, 18],


        ]
    },
    {// 5 laboratorio pokemon
        color: "white",
        piso: "rgb(250, 250, 185)",
        ciudad: true,
        largo: 1000,
        x: 500,
        y: 600,
        pisos: [
            [1000, 600, 200, 0],
            [100, 100, 700, 500, semiblack, "puerta", 3, 1400, 500]
        ],
        npcs: [
            [1, "profesora", 70, 600, 10, false, 4],
            [1, "profesora", 800, 600, 20, false, 4],
            [0, "dana", 400, 250, 0, false, 7],


        ],
        carteles: [
            [400, 150, 0, 400, "#gray", true, 6, true, 0],
            [400, 150, 600, 400, "#gray", true, 6, true, 0],
            [150, 70, 700, 250, ".mesa", true, 8, true, 1],

        ]
    }
]

var lock = false
var wraps = [
    "wrap",
    "casa",
    "tienda",
    "lab"
]
var puertas = [
    "puerta"
]
var afterMessage = ()=> {}
function flag(num, value) {
    let names = {
        inicial: 1,
        primeraBatalla: 2
    }
    if (typeof(num) == "string") {
        num = names[num]
    }
    if (value) {
        app.gamer.flags[num] = value
    }
    return app.gamer.flags[num]
}
// acct.length = 7
// elemento 5 es para la seleccion de personaje
var acciones = [
    function () { //0
        lock = false
    },
    function () { // 1
        lock = true
        app.mensaje(["Es solo una casa"], false)
    },
    function () { // 2
        lock = true
        app.mensaje(["Esta es la tienda pokemon"], false)
        
    },
    function () { // 3
        lock = true
        app.mensaje(["Este es el laboratorio pokemon"])
    },
    function () { // 4
        lock = true
        if (flag("inicial") == 2) {
            app.mensaje(["¿No has ido aun al bosque?",
                "Entonces deberias ir primero a la tienda pokemon, ¡No te vayas sin provisiones!"])
            return
        }
        if (flag("inicial") == 1) {
            app.mensaje(["Vaya, ya tienes tu primer pokemon. ¿Quieres probarlo en una batalla?"])
            afterMessage = ()=> {
                app.levelLoad({
                    batalla: true,
                    enemys: 1,
                    salida: 5,
                    nivel: [2, 2],
                    piso: "wheat",
                    npcs: [
                       [2, "rattata", 1400, 500, 100, true, 0],
                    ],
                    exit: ()=> {
                        flag("inicial", 2)
                        lock = true
                        app.mensaje(["Vaya, estas mas que listo, me has ganado"])
                    }
                })
                afterMessage = ()=> {}
            }
            return
        }
        app.mensaje([
            "Hola jovencito. Bienvenido al laboratorio pokemon.",
            "La profesora Dana te esta esperando"
        ])
    },
    function () { // 5
        lock = true
        var scroll = document.createElement("div")
        scroll.classList.add("scroll")
        document.body.appendChild(scroll)
        var tabla = document.createElement("table")
        var fila = document.createElement("tr")
        tabla.appendChild(fila)
        var input = document.createElement("input")
        input.type = "button"
        input.value = "X"
        
        input.onclick = ()=> {
            
            tabla.remove()
            lock = false
        }
        fila.append(input)
        var nombres = Object.keys(personajes)
        var celdas = 5
        for (let i = 0; i < nombres.length; i++) {
            if (celdas > 4) {
                fila = document.createElement("tr")
                tabla.appendChild(fila)
                celdas = 0
            }
            const nombre = nombres[i];
            let propiedades = personajes[nombre]
            let td = document.createElement("td")
            let nodo = document.createElement("div")
            td.append(nodo)
            nodo.classList.add("perfil")
            let img2 = document.createElement("img")
            img2.src = galeria[propiedades.sprs].normal
            nodo.appendChild(img2)
            fila.appendChild(td)
            celdas++
            nodo.onclick =()=> {
                if (app.gamer.personajes.includes(nombre) == false) {
                    return
                }
                tabla.style.display = "none"
                var t = document.createElement("table")
                var f = document.createElement("tr")
                t.appendChild(f)
                var inp = document.createElement("input")
                inp.type = "button"
                inp.value = "X"
                
                inp.onclick = ()=> {
                    t.remove()
                    tabla.style.display = ""
                    lock = false
                }
                f.append(inp)
                f = document.createElement("tr")
                t.appendChild(f)
                var celda = document.createElement("td")
                // celda 1. Poderes y explicacion de estos
                let pan = document.createElement("div")
                pan.classList.add("pan2")
                let spanel = document.createElement("div")
                spanel.classList.add("pan2")
                celda.appendChild(pan)
                celda.appendChild(spanel)
                var hText = document.createElement("div")
                pan.appendChild(hText)
                hText.innerHTML = "Rol: "+propiedades.rol+"<br>"+clases[propiedades.rol]
                let habilidades = [
                    poderes[propiedades.poderes[0]],
                    poderes[propiedades.poderes[1]],
                    propiedades.basico || Basico,
                    ultis[propiedades.ulti],
                    poderes[propiedades.poderes[2]],
                ]
                let teclas = [
                    "A - Habilidad", "S - Habilidad", "Z - Basico", "C - Definitiva", "D - Habilidad"
                ]
                if(propiedades.canal){
                    if (propiedades.canal.efectos) {
                        for (let i = 0; i < propiedades.canal.efectos.length; i++) {
                            const efecto = poderes[propiedades.canal.efectos[i]];
                            let datos = "F - "
                            switch (propiedades.canal.tanques[i]) {
                                case 1:
                                    datos += "Al recibir daño "
                                    break;
                                case 2:
                                    datos += "Al infligir daño "
                                    break;
                                case 3:
                                    datos += "Al aumentar algun stat "
                                    break
                                case 4:
                                    datos += "Al disminuir algun stat "
                                    break
                                case 5: 
                                    datos += "Al usar "+poderes[propiedades.poderes[2]].nombre+" "
                                    break
                                case 6: 
                                    datos += "Al usar "+poderes[propiedades.poderes[0]].nombre+" "
                                    break
                                case 7: 
                                    datos += "Al usar "+poderes[propiedades.poderes[1]].nombre+" "
                                    break
                                default:
                                    datos += "Extra "
                                    break;
                            }
                            datos += propiedades.canal.carga[i]+" veces"
                            teclas.push(datos)
                            habilidades.push(efecto)
                        }
                    }
                    if (propiedades.canal.mana) {
                        var mejora = propiedades.canal.mejora || "regen"
                        var poder = {
                            damage: propiedades.canal.damage || 0,
                            distancia: propiedades.canal.dis || 5,
                            estado: {[mejora]: (propiedades.canal.poten || 2), timer: 10},
                            mana: propiedades.canal.mana2 || 20,
                            tele: propiedades.canal.tele || 0,
                            nombre: propiedades.canal.nombre || "Efecto de mana",
                            especial: propiedades.canal.especial 
                        }
                        teclas.push("F - Mana")
                        habilidades.push(poder)
                    }
                }
                for (let k = 0; k < habilidades.length; k++) {
                    const habi = habilidades[k];
                    if (habi) {
                        let nod = document.createElement("div")
                        spanel.appendChild(nod)
                        nod.classList.add("poderVer")
                        nod.innerHTML = teclas[k]+"<br>"+(habi.nombre || "basico")
                        nod.onclick = ()=> {
                            acc(habi)
                        }

                        function acc (hab = habi, a) {
                            var poderesReview = []
                            if (!a) {
                                pan.innerHTML = ""
                            } else {
                                pan.innerHTML += "<br><br>"
                            }
                            let comentario = "Inflige "+hab.damage+" puntos de daño "
                            
                            let clase = "Golpe "
                            
                            
                            if (!hab.raf) {
                                clase += "/ Daño Fisico"
                            } else {
                                clase += "/ Daño Especial"
                            }
                            if (hab.rapido && hab.damage > 0) {
                                clase += "/ Consecutivo"
                                comentario = "Dispara "+hab.rapido+" ataques infliguiendo "+hab.damage+" puntos de daño "
                            }
                            if (hab.res) {
                                comentario += "especial al enemigo "
                            } else {
                                comentario += "fisico al enemigo "
                            }
                            if (hab.damage < 1) {
                                clase = "Beneficio "
                                comentario = "No inflige daño"
                            }
                            if (hab.stund > 0) {
                                clase += "/ control"
                                comentario += " Evita que el enemigo se mueva o ataque por "+hab.stund+" segundos"
                            }
                            if (hab.stundSelf == true) {
                                comentario += " Mientras dura la habilidad el usuario no podra moverse"
                            }
                            if (hab.distance > 0) {
                                if(!hab.stund)
                                clase += "/ control"
                                comentario += " Empuja al rival que alcance"
                                
                            }
                            if(propiedades.canal) {
                                if (hab.mana && propiedades.canal.mana) {
                                    comentario += " Consume "+hab.mana+" de mana"
                                } else if (propiedades.canal.mana && k != 2) {
                                    comentario += " Consume "+(((hab.damage+(hab.distancia*10))/2)*0.2)+" de mana"

                                }

                            }
                            if (hab.distancia > 6 && !hab.tele && hab.damage > 0) {
                                clase += "/ Distancia "
                            }
                            if (hab.tele == 1) {
                                clase += "/ Impulso "
                            }
                            if (hab.tele == 2) {
                                clase += "/ Parpadeo "
                            }
                            if (hab.tele == 3) {
                                clase += "/ Teletransporte "
                                comentario += " y adquiere una habilidad extra al precionar F, se puede teletransportar al lugar en que el ataque finalizo"
                            }
                            if (hab.tele == 4) {
                                clase += "/ impulso inverso "
                            }
                            if (hab.distancia < 0) {
                                clase += "/ Hacia atras "
                            }
                            if (hab.robo) {
                                clase += "/ Robo de vida "
                                comentario += " Un "+hab.robo+"% del daño causado es obtenido como vida al usuario"
                            }
                            if (hab.estado) {
                                clase += "/ Mejora"
                                agg()
                                if (hab.estado.poderes) {
                                    let a = []
                                    for (let ab = 0; ab < propiedades.poderes.length; ab++) {
                                        const element = poderes[propiedades.poderes[ab]].nombre;
                                        a.push(element)
                                        
                                    }
                                    clase += "/ Cambio de poder"
                                    for (let ab = 0; ab < hab.estado.poderes.length; ab++) {
                                        const podIndex = hab.estado.poderes[ab];
                                        if (podIndex > -1) {
                                            const pod = poderes[podIndex]
                                            comentario += " Cambia "+a[ab]+" por "+pod.nombre
                                            poderesReview.push(pod)

                                        }
                                        
                                    }
                                }
                            }
                            if (hab.efecto) {
                                clase += "/ Desventaja"
                                agg("enemigo", "efecto", "combo")

                            }
                            
                            if (hab.trans) {
                                clase += "/ Daño explosivo"
                            }
                            if (hab.especial) {
                                clase += "/ efecto unico"
                                comentario +=" "
                                var s = {
                                    salud: "salud", // string o Int
                                    hab: "Habilidad pasiva", // String o int
                                    poderes: "Habilidad", // array
                                    canal: "Efecto de mana", // objeto
                                    stat: "Estadisticas", // objeto
                                    estado: "Estado", // String, array
                                    buffs: "Potensiaciones de caracteristica", //  objeto
                                    basico: "Habilidad basica", // objeto
                                    ulti: "Habilidad definitiva", // String
                                    ultiComb: "Recarga de la definitiva", // String o int
                                    count: "Recarga de la habilidad", // array
                                    mana: "mana", // String o int
                                    vel:"Velocidad de Movimiento", 
                                    atq: "Ataque fisico", 
                                    def: "Defensa fisica", 
                                    raf: "Ataque especial", 
                                    res: "Defensa especial", 
                                    salto: "Tiempo de enfriamiento de habilidades", 
                                    caida: "Tiempo de enfriamiento de recuperacion de vida", 
                                    shield: "Escudo", 
                                    vat: "Velocidad de Ataque", 
                                    crit: "Probabilidad de critico", 
                                    visible: "Invisibilidad", 
                                    regen: "Regeneracion de Salud",
                                    inmune: "Inmunidad a golpes",

                                }
                                var especial = hab.especial
                                for (let i = 0; i < especial.length; i+=2) {
                                    const element = especial[i];
                                    const increment = especial[i+1]
                                    if (!s[element]) {
                                        continue
                                    }
                                    let ser = increment+ "los puntos de "
                                    if (element == "hab") {
                                        ser = objetos[increment].hab+"("+objetos[increment].desc+") la "
                                    }
                                    if (element == "estado") {
                                        ser = nombreEstado[increment] + " el "
                                    }
                                    if (element == "ulti") {
                                        ser = ultis[increment].nombre + " la "
                                    }

                                    if (typeof(increment) == "string") {
                                        comentario += " Cambia a "+ser+s[element]
                                    }
                                    if (typeof(increment) == "number") {
                                        let nom = " Aumenta "
                                        if (increment < 1) {
                                            nom = " Disminuye "
                                        }
                                        comentario += nom+"los puntos de "+s[element]+" en "+increment
                                    }
                                    if (typeof(increment) == "object") {
                                        if (Array.isArray(increment) == true) {
                                            for (let j = 0; j < increment.length; j++) {
                                                let e = increment[j]; 
                                                let m = parseFloat(e) || e
                                                if (element == "poderes" && m >= 0) {
                                                    ser = " Cambia a "+ poderes[e].nombre+" la "+(j+1)+"° "+s[element]
                                                    poderesReview.push(poderes[e])
                                                }
                                                if (element == "count" && m >= 0) {
                                                    if (typeof(e) == "string") {
                                                        ser = " Cambia el tiempo de "+s[element]+" "+(j+1)+" a "+e+"s "
                                                    } else {
                                                        let aumenta = " Aumenta"
                                                        let count = (e-1)*100
                                                        if (e < 1) {
                                                            aumenta = " Disminuye"
                                                            count = e*100
                                                        }
                                                        ser = aumenta+" el tiempo de "+s[element]+" "+(j+1)+" en "+(count)+"%"

                                                    }
                                                }
                                                comentario += ser
                                            }
                                        } else {
                                            if (element == "stat" || element == "buffs") {
                                                let incremen = Object.keys(increment)
                                                comentario += " Se modifican las "+s[element]+" de la siguiente forma:"
                                                for (let i = 0; i < incremen.length; i++) {
                                                    const e = incremen[i];
                                                    stat = increment[e];
                                                    comentario += "<br> - "+s[e]+": "+stat
                                                }
                                                comentario += "<br>"
                                            } else {
                                                poderesReview.push(increment)
                                            }
                                        }
                                    }
                                    
                                }
                                
                            }
                            let tipo = Tipos[hab.tipo] || " - "
                            if (!a)
                            pan.innerHTML += teclas[k]+"<br> "+clase+" / <div class='tipos "+tipo+"'>"+tipo+"</div> <br>"
                            else 
                            pan.innerHTML += a+"<br> "+clase+" / <div class='tipos "+tipo+"'>"+tipo+"</div> <br>"

                            if(hab.nombre && k != 3)
                            pan.innerHTML += "<br> Tiempo de recarga: "+(hab.count || 5)+"s"+"<br>"
                            if(hab.descripcion)
                            comentario = hab.descripcion
                            pan.innerHTML += comentario
                            if (poderesReview.length > 0) {
                                for (let i = 0; i < poderesReview.length; i++) {
                                    const review = poderesReview[i];
                                    acc(review, "Cambio de poder ("+review.nombre+")")
                                }
                            }
                            function agg(usuario = "usuario", nombre = "estado", combi="combi") {
                                comentario += " "
                                let timer = hab[nombre].timer || 5
                                let tiempo = hab[nombre].tiempo || 10
                                let s = {
                                    vel:"la Velocidad de Movimiento", 
                                    atq: "el Ataque fisico", 
                                    def: "la Defensa fisica", 
                                    raf: "el Ataque especial", 
                                    res: "la Defensa especial", 
                                    salto: "el Tiempo de carga", 
                                    caida: "el Limite de regeneracion", 
                                    shield: "el Escudo", 
                                    vat: "la Velocidad de Ataque", 
                                    crit: "la Probabilidad de critico", 
                                    visible: "Invisibilidad", 
                                    regen: "la Regeneracion de Salud",
                                    inmune: "Inmunidad a golpes",
                                }
                                var key = Object.keys(hab[nombre])
                                let boo = false
                                if (hab[combi] && k != 3) {
                                    comentario += "Al acertar "+hab[combi]+" golpes "
                                }
                                for (let j = 0; j < key.length; j++) {
                                    let k = key[j]
                                    let sk = s[k]
                                    
                                    let estado = hab[nombre][key[j]];
                                    if (sk && (k == "visible" || k == "inmune")) {
                                        if (j > 0) {
                                            comentario += " "
                                        }
                                        boo = true
                                        comentario += "Agrega " +sk +" al "+usuario+". "
                                    } else if (sk) {
                                        if (j > 0) {
                                            comentario += " "
                                        }
                                        boo = true
                                        let pal = "Aumenta"
                                        if (estado < 1) {
                                            estado = 10 - (estado*10)
                                            pal = "Disminuye"
                                        }
                                        comentario += pal+" en "+estado+" "+sk+" del "+usuario

                                    }
                                }
                                if (boo)
                                comentario += " por "+timer+"s"
                                if (hab[nombre].estado) {
                                    comentario += " El "+usuario+" entra en estado "+nombreEstado[hab[nombre].estado]+" por "+tiempo+"s"
                                }

                            }
                            if (hab.inicio) {
                                acc(hab.inicio, "Efecto adicional")
                            }
                            if (hab.duplex) {
                                acc(hab.duplex, "Efecto adicional")
                            }
                            if (hab.bomba) {
                                if(hab.boom)
                                acc(hab.bomba, "Efecto posterior a golpear a un enemigo")
                                else if (hab.block)
                                acc(hab.bomba, "Efecto posterior si no golpea a un enemigo")
                                else
                                acc(hab.bomba, "Efecto posterior")
                            }
                            if (typeof(hab.block) == "object") {
                                acc(hab.block, "Efecto posterior a golpear a un enemigo")
                            }
                            if (typeof(hab.boom) == "object") {
                                acc(hab.boom, "Efecto posterior si no golpea a un enemigo")
                            }
                            
                        }
                    }
                }


                f.appendChild(celda)
                var celda = document.createElement("td")
                // celda 2. Imagen del personaje, habilidad y clan. Click aqui para seleccionar
                let p = document.createElement("p")
                p.innerHTML = "<i class='mayus'>"+nombre+"</i><br>"
                if (propiedades.grupo) {
                    clan = propiedades.grupo
                }
                if(propiedades.clan)
                p.innerHTML += "Tipo: <span class='mayus "+propiedades.clan+"'>"+propiedades.clan+"</span> <br> "
                p.innerHTML += "Habilidad pasiva: "+objetos[propiedades.hab].hab+" ("+objetos[propiedades.hab].desc+")"
                p.classList.add("pDatos")
                var div = document.createElement("div")
                div.classList.add("selected")
                var img = document.createElement("img")
                img.src = galeria[propiedades.sprs].normal
                img.style.height = "150px"
                div.appendChild(img)
                celda.append(p, div)
                f.appendChild(celda)
                div.onclick = ()=> {
                    if (app.gamer.equipo.includes(nombre)) {
                        app.gamer.equipo[app.gamer.equipo.indexOf(nombre)] = app.gamer.nombre
                    }
                    app.actualizar(nombre)
                    inp.click()
                    input.click()
                }
                var celda = document.createElement("td")
                // celda 3. Estadisticas e historia
                var text = document.createElement("div")
                text.classList.add("pan2")
                celda.appendChild(text)
                text.innerHTML = "Categoria: "+propiedades.edad+" <br> Rol: "+propiedades.rol+" <br>"
                if (historias[nombre]) {
                    let historia = historias[nombre]
                    for (let i = 0; i < historia.length; i++) {
                        const linea = historia[i];
                        let p = document.createElement("p")
                        p.textContent = linea
                        text.append(p)
                    }
                }
                var key = Object.keys(propiedades.stat)
                let array = {
                    vel: "Desplazamiento",
                    salto: "Velocidad de ataque",
                    def: "Defensa fisica",
                    atq: "Ataque fisico",
                    raf: "Ataque especial",
                    res: "Defensa especial"
                }
                for (let j = 0; j < key.length; j++) {
                    const k = key[j];
                    let stat = propiedades.stat[k]
                    let name = array[k]
                    if (name) {
                        let nodo = document.createElement("div")
                        nodo.innerHTML = name+"<br>"
                        let total = document.createElement("div")
                        total.classList.add("estad")
                        let progre = document.createElement("div")
                        progre.style.width = ((100 * stat)/maxStats[k])+"%"
                        progre.style.backgroundColor = propiedades.stat.color
                        nodo.appendChild(total)
                        total.appendChild(progre)
                        celda.appendChild(nodo)
                    }
                }
                let usar = document.createElement("div");
                usar.classList.add("botonMenu");
                usar.innerHTML = "Usar",
                usar.onclick = div.onclick
                let agregar = document.createElement("div");
                agregar.classList.add("botonMenu");
                if(!app.gamer.equipo.includes(nombre))
                agregar.innerHTML = "Agregar al equipo"
                else
                agregar.innerHTML = "Sacar del equipo"
                let modificar = document.createElement("div");
                modificar.classList.add("botonMenu");
                modificar.innerHTML = "Modificar";
                let booM = false
                let ts = text.innerHTML 
                let pasivas = app.pasiva[nombre] || [{
                    nombre: nombre,
                    codigo: aleatorio(0, 100000),
                    nivel: 1,
                    select: true,
                    activa: 0,
                    pasivas: [],
                    exp: 0,
                    cambio: [],
                    obj: 0
                }]
                let config = emblemas[nombre]
                let index = 0;
                let select = (()=> {
                    for (let i = 0; i < pasivas.length; i++) {
                        const pas = pasivas[i];
                        if (pas.select) {
                            index = i
                            return pas
                        }
                    }
                })()
                modificar.onclick = ()=> {
                    if (!booM) {
                        booM = true
                        if (!select.cambio) {
                            select.cambio = []
                        }
                        let cantidadHuevo = document.createElement("div")
                        let array = [];
                        var arreglo = {}
                        cargarActiva()
                        var load = false
                        var boton1 = document.createElement("input")
                        let boton2 = document.createElement("input")

                        function cargarActiva() {
                            text.innerHTML = ""
                            modDiv();
                            load = true
                            text.append(cantidadHuevo)
                            array = []
                            let cargaNivel = document.createElement("div")
                            cargaNivel.classList.add("vid")
                            cargaNivel.innerText = "Click para aumentar nivel"
                            let barraNivel = document.createElement("div")
                            barraNivel.classList.add("sal")
                            barraNivel.style.width = act();
                            cargaNivel.style.width = "100%"
                            cargaNivel.appendChild(barraNivel)
                            text.appendChild(cargaNivel)
                            let selectNode = document.createElement("select")
                            for (let p = 0; p < pasivas.length; p++) {
                                const pas = pasivas[p];
                                let nodo = document.createElement("option")
                                nodo.value = p
                                nodo.innerHTML = pas.nombre
                                selectNode.append(nodo)
                                if (pas.select) {
                                    selectNode.selectedIndex = p
                                }
                            }
                            selectNode.onchange = ()=> {
                                select.select = false
                                cargarPasiva(pasivas[selectNode.options[selectNode.selectedIndex].value])
                                cargarActiva()
                                pasivas[selectNode.options[selectNode.selectedIndex].value].select = true
                            }
                            text.appendChild(selectNode)
                            cargaNivel.onclick = ()=> {
                                if (app.gamer.exp.experiencia > 0) {
                                    app.gamer.exp.experiencia--
                                    select.exp++
                                    if (select.exp > (config.experiencia*select.nivel)*select.nivel ) {
                                        select.nivel++
                                        if(app.gamer.exp[config.huevo])
                                        app.gamer.exp[config.huevo]++
                                        else
                                        app.gamer.exp[config.huevo] = 1
                                    }
                                    barraNivel.style.width = act();
                                    modDiv()

                                }
                            }
                            function act() {
                                let anterior = (config.experiencia * (select.nivel-1))*(select.nivel-1)
                                let siguiente = (config.experiencia*select.nivel)*select.nivel
                                let exp = select.exp - anterior
                                let niv = siguiente - anterior
                                let prom = (100 * exp) / niv
                                return prom +"%"
                            }
                            for (let em = 0; em < config.movs.length; em++) {
                                const mov = config.movs[em];
                                const nodo = document.createElement("div")
                                nodo.classList.add("poderVer")
                                nodo.innerText = mov.nombre
                                nodo.onclick = ()=> {
                                    text.innerHTML = mov.uso+"/<br><br>"+mov.d+"<br><br> Se requiere una "+objetos[mov.baya].nombre+" para disminuir puntos de aumento<br><br>"
                                    let boton = document.createElement("input")
                                    boton.value = "<<<"
                                    boton.type = "button";
                                    boton.onclick = cargarActiva
                                    text.appendChild(boton)
                                    boton1.value = "-"
                                    boton1.type = "button";
                                    boton1.onclick = ()=> {
                                        if (load == true && arreglo[em] > 0) {
                                            if (app.gamer.objetos.includes(mov.baya)) {
                                                app.gamer.objetos[app.gamer.objetos.indexOf(mov.baya)] = 0
                                                arreglo[em]--
                                                if (app.gamer.exp[config.huevo])
                                                app.gamer.exp[config.huevo]++
                                                else
                                                app.gamer.exp[config.huevo] = 1
                                                cargarPasiva()

                                            } else {
                                                alert("no tienes bayas")
                                            }
                                        } 
                                    }
                                    text.appendChild(boton1)
                                    boton2.value = "+"
                                    boton2.type = "button";
                                    boton2.onclick = ()=> {
                                        if (load == true && (app.gamer.exp[config.huevo] > 0)) {
                                            if(arreglo[em] ) {
                                                if(arreglo[em] <= config.movs[em].max)
                                                arreglo[em]++
                                            }
                                            else if (select.pasivas.length < 8){
                                                arreglo[em] = 1
                                                if (mov.obj) {
                                                    if (!app.gamer.objetos.includes(mov.obj)) {
                                                        alert("Hace falta un "+objetos[mov.obj].nombre+" Para enseñar este movimiento")
                                                        return
                                                    } else {
                                                        app.gamer.objetos[app.gamer.objetos.indexOf(mov.obj)] = 0
                                                    }
                                                }
                                            }
                                            if (select.pasivas.length < 8)
                                            app.gamer.exp[config.huevo]--
                                            cargarPasiva()
                                        }
                                    }
                                    text.appendChild(boton2)
                                    if (mov.activa) {
                                        let boton = document.createElement("input")
                                        boton.value = "Activa"
                                        boton.type = "button";
                                        if (select.activa == em) {
                                            boton.style.backgroundColor = "blue"
                                            
                                        }
                                        boton.onclick = ()=> {
                                            select.activa = em
                                            boton.style.backgroundColor = "blue"
                                            app.guardarPasiva(pasivas, nombre)

                                        }
                                        text.appendChild(boton)
                                    }
                                    if (mov.cambio) {
                                        let boton = document.createElement("input")
                                        boton.value = "Seleccionar configuracion"
                                        boton.type = "button";
                                        if (select.cambio.includes("!"+mov.nombre)) {
                                            boton.style.backgroundColor = "blue"
                                        }
                                        boton.onclick = ()=> {
                                            if (select.cambio.includes("!"+mov.nombre)) {
                                                let x = select.cambio.indexOf("!"+mov.nombre)
                                                select.cambio.splice(x, mov.cambio.length)
                                                boton.style.backgroundColor = ""


                                            } else {
                                                if (mov.item) {
                                                    let item = mov.item
                                                    select.cambio.push("!"+mov.nombre)
                                                    if (app.gamer.objetos.includes(item) || item == -1) {
                                                        for (let x = 0; x < mov.cambio.length; x++) {
                                                            const cambio = mov.cambio[x];
                                                            select.cambio.push(cambio)
                                                        }
                                                        if(item > 0)
                                                        app.gamer.objetos[app.gamer.objetos.indexOf(item)] = 0
                                                        boton.style.backgroundColor = "blue"
                                                    }
                                                } 
    
                                            }
                                        }
                                        text.appendChild(document.createElement("br"))

                                        text.appendChild(boton)

                                    }
                                    text.append(array[em].parentNode)
                                }
                                let cargaBarra = document.createElement("div")
                                cargaBarra.classList.add("vid")
                                let barra = document.createElement("div")
                                barra.classList.add("sal")
                                barra.style.width = "0%"
                                cargaBarra.appendChild(barra)
                                array.push(barra)
                                nodo.appendChild(cargaBarra)
                                text.append(nodo)
                            }
                            let guardado = document.createElement("input")
                            guardado.type = "button"
                            guardado.value = "Liberar"
                            if (config.huevo == "humano") {
                                guardado.style.display = "none"
                            }
                            guardado.onclick = ()=> {
                                if (pasivas.length > 1) {
                                    pasivas.splice(index, 1)
                                } else {
                                    app.gamer.personajes.splice(app.gamer.personajes.indexOf(nombre))
                                    pasivas = [{
                                        nombre: nombre,
                                        codigo: aleatorio(0, 100000),
                                        nivel: 1,
                                        select: true,
                                        activa: 0,
                                        pasivas: [],
                                        exp: 0
                                    }]
                                }
                                modificar.click()
                                app.guardarPasiva(pasivas, nombre)

                            }
                            text.append(guardado)
                            cargarPasiva()
                        }
                        function cargarPasiva(selected = select) {
                            let keys = Object.keys(arreglo)
                            if (keys.length > 0) {
                                for (let index = 0; index < keys.length; index++) {
                                    const element = keys[index];
                                    selected.pasivas[index*2] = element
                                    selected.pasivas[((index*2)+1)] = arreglo[element]
                                }
                            }
                            let instead = []
                            for (let p = 0; p < selected.pasivas.length; p+=2) {
                                const sel = selected.pasivas[p];
                                let val = selected.pasivas[p+1]
                                if (arreglo[sel]) {
                                   val = arreglo[sel] 
                                }
                                array[sel].style.width = ((100 * val) / config.movs[sel].max)+"%"
                                arreglo[sel] = val 
                                if (val > 0) {
                                    instead.push(sel, val)
                                } 
                            }  
                            selected.pasivas = instead
                            load = true
                            select = selected
                            modDiv()
                            app.guardarPasiva(pasivas, nombre)
                            
                        }
                        function modDiv() {
                            cantidadHuevo.innerHTML = "Cantidad de puntos "+config.huevo+": "+(app.gamer.exp[config.huevo] || 0)+"\n\
                        <br> Cantidad de puntos de experiencia: "+(app.gamer.exp.experiencia || 0)+"\n\
                        <br> Nivel: "+select.nivel+"\n\
                        <br> Nombre: "
                            let input = document.createElement("input")
                            input.value = select.nombre
                            input.classList.add("nomPoke")
                            input.onchange = ()=> {
                                select.nombre = input.value
                            }
                            cantidadHuevo.append(input)
                            app.guardarPasiva(pasivas, nombre)
                        }
                    } else {
                        text.innerHTML = ts;
                        booM = false
                    }
                }
                agregar.onclick = ()=> {
                    if (app.gamer.equipo.length < 4 && !app.gamer.equipo.includes(nombre) && app.gamer.nombre != nombre) {
                        app.gamer.equipo.push(nombre)
                        app.gamer.vidas.push(propiedades.vida)
                        app.gamer.objeto.push(select.obj || 0)
                        inp.click()
                        lock = true
                    } else if (app.gamer.equipo.includes(nombre)) {
                        app.gamer.equipo.splice(app.gamer.equipo.indexOf(nombre), 1)
                        app.gamer.vidas.splice(app.gamer.equipo.indexOf(nombre), 1)
                        app.gamer.objeto.splice(app.gamer.equipo.indexOf(nombre), 1)
                        inp.click()
                        lock = true
                    }
                }
                celda.appendChild(usar)
                celda.appendChild(agregar)
                celda.appendChild(modificar)
                f.appendChild(celda)
                scroll.append(t)
            }
            if (app.gamer.personajes.includes(nombre) == false) {
                nodo.classList.add("bloqueado")
            }
        }

        scroll.appendChild(tabla)

    },
    function () { // 6
        lock = true
        app.mensaje([
            "Jugador: Es un libro de historia, dice:",
           "La region Halo se encuentra ubicada al sur de Teselia, a pesar de eso la variedad pokemon de nuestras tierras llega a ser aun mayor",
           "Cada dia se descubren especies que no se sabia que existian aquí. Es sin duda algo impresionante"
        ])
    },
    function () { // 7
        lock = true
        if (app.gamer.flags[1]) {
            app.mensaje(["Espero que tengas un maravilloso viaje"])
            return
        }
        if (app.gamer.flags[0]) {
            app.mensaje(["Dale, escoge, no tengas pena"])
            return
        }
        app.mensaje([
            "¡Por fin llegas @nick!",
            "Vamos, te prometi que te daria un pokemon. Escoge entre algunos de esos que ves alli en la mesa."
        ])
        app.gamer.flags[0] = true
    },
    function () { // 8
        lock = true
        if (app.gamer.flags[1]) {
            app.mensaje(["Son las pokeballs de la profesora Dana"])
            return
        }
        if (app.gamer.flags[0] ) {
            var scroll = document.createElement("div")
            scroll.classList.add("scroll")
            document.body.appendChild(scroll)
            var tabla = document.createElement("table")
            var fila = document.createElement("tr")
            tabla.appendChild(fila)
            scroll.appendChild(tabla)
            let iniciales = ["chespin", "tepig", "totodile"]
            for (let i = 0; i < iniciales.length; i++) {
                const nombre = iniciales[i];
                let propiedades = personajes[nombre]
                let td = document.createElement("td")
                let nodo = document.createElement("div")
                td.append(nodo)
                nodo.classList.add("perfil")
                let img2 = document.createElement("img")
                img2.src = galeria[propiedades.sprs].normal
                nodo.appendChild(img2)
                fila.appendChild(td)
                td.onclick = ()=> {
                    tabla.style.display = "none"
                    var t = document.createElement("table")
                    var f = document.createElement("tr")
                    t.appendChild(f)
                    var inp = document.createElement("input")
                    inp.type = "button"
                    inp.value = "X"
                    
                    inp.onclick = ()=> {
                        t.remove()
                        tabla.style.display = ""
                    }
                    f.append(inp)
                    f = document.createElement("tr")
                    t.appendChild(f)
                    var celda = document.createElement("td")
                    var div = document.createElement("div")
                    div.classList.add("selected")
                    var img = document.createElement("img")
                    img.src = galeria[propiedades.sprs].normal
                    img.style.height = "150px"
                    div.appendChild(img)
                    celda.append(div)
                    f.appendChild(celda)
                    celda = document.createElement("td")
                    var text = document.createElement("div")
                    text.classList.add("pan2")
                    celda.appendChild(text)
                    text.innerHTML = "Categoria: "+propiedades.edad+" <br> Rol: "+propiedades.rol+" <br>"
                    if (historias[nombre]) {
                        let historia = historias[nombre]
                        for (let i = 0; i < historia.length; i++) {
                            const linea = historia[i];
                            let p = document.createElement("p")
                            p.textContent = linea
                            text.append(p)
                        }
                    }
                    var key = Object.keys(propiedades.stat)
                    let array = {
                        vel: "Desplazamiento",
                        salto: "Velocidad de ataque",
                        def: "Defensa fisica",
                        atq: "Ataque fisico",
                        raf: "Ataque especial",
                        res: "Defensa especial"
                    }
                    for (let j = 0; j < key.length; j++) {
                        const k = key[j];
                        let stat = propiedades.stat[k]
                        let name = array[k]
                        if (name) {
                            let nodo = document.createElement("div")
                            nodo.innerHTML = name+"<br>"
                            let total = document.createElement("div")
                            total.classList.add("estad")
                            let progre = document.createElement("div")
                            progre.style.width = ((100 * stat)/maxStats[k])+"%"
                            progre.style.backgroundColor = propiedades.stat.color
                            nodo.appendChild(total)
                            total.appendChild(progre)
                            celda.appendChild(nodo)
                        }
                    }
                    let usar = document.createElement("div");
                    usar.classList.add("botonMenu");
                    usar.innerHTML = "Seleccionar",
                    usar.onclick = ()=> {
                        app.giveChara(nombre)
                        app.gamer.equipo.push(nombre)
                        app.gamer.vidas.push(propiedades.vida)
                        inp.click()
                        tabla.remove()
                        lock = false
                        app.gamer.flags[1] = true
                    }
                    celda.appendChild(usar)
                    f.appendChild(celda)
                    scroll.append(t)
                }

            }
            return
        }
        app.mensaje(["Son unas pokeballs sobre la mesa"])
    },
    function () { // 9
        let random = aleatorio(0, 101)
        let nivel = app.nivel()
        if (random < nivel.prob) {
            let pokes = {
                batalla: true,
                salvaje: true,
                enemys: 5,
                salida: nivel,
                nivel: [nivel.nivel[0], nivel.nivel[1]],
                piso: "wheat",
                npcs: [
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                ],
            }
            console.log(pokes,)
            app.levelLoad(pokes)
        }
    },
    function () { // 10
        let random = aleatorio(0, 101)
        let nivel = app.nivel()
        if (random < nivel.prob) {
            let pokes = {
                batalla: true,
                salvaje: true,
                enemys: 2,
                salida: nivel,
                nivel: [nivel.nivel[0], nivel.nivel[1]],
                piso: "wheat",
                npcs: [
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                    [-1, nivel.salvajes[aleatorio(0, nivel.salvajes.length-1)], 1400, 500, 100, true, 0],
                ],
            }
            app.levelLoad(pokes)
        }
    },
    function (param) {// 11
        console.log(param)
        if (param == 3) {
            lock = true
            app.mensaje(["¿Bueno entonces, que quieres hacer?"], true, ["Comprar", 11, 1, "Vender", 11, 2, "Nada", 0, 0])
        }
        if (param == 1) {
            if (app.gamer.carrito.length > 0) {
                let costoTotal = 0;
                for (let i = 0; i < app.gamer.carrito.length; i++) {
                    const obj = objetos[app.gamer.carrito[i]];
                    if (obj.tipo > 0) {
                        costoTotal += obj.valor || 10
                    }
                }
                if (costoTotal > app.gamer.dinero) {
                    afterMessage = ()=> {
                        app.mensaje(["Todo esto cuesta: "+costoTotal+"$, no tienes suficiente dinero"])
                        afterMessage = ()=> {}
                    }
                } else {
                    for (let i = 0; i < app.gamer.carrito.length; i++) {
                        const obj = app.gamer.carrito[i];
                        if (obj > 0) {
                            app.gamer.objetos.push(obj)
                        }
                    }
                    app.gamer.dinero -= costoTotal
                    afterMessage = ()=> {
                        app.mensaje(["Ya esta hecho, que tenga un buen dia"])
                        afterMessage = ()=> {}
                    }

                }
                
            }
        } 
        if (param == 2) {
            afterMessage = ()=> {
                app.mensaje(["Selecciona lo que quieres vender"], false)
                afterMessage = ()=> {
                    app.keyW((i)=> {
                        let obj = objetos[app.gamer.objetos[i]]
                        if (obj.tipo > 0) {
                            app.gamer.dinero += obj.venta || 10
                            app.gamer.objetos[i] = 0
                            app.keyW()
                        }
                    })
                    afterMessage = ()=> {}
                }
            }
        }
    },
    function (param = 0) {// 12
        lock = true
        let obj = objetos[param]
        app.mensaje(["Quieres agregar al carrito un "+obj.nombre, 
        "costo: "+(obj.valor || 10)+"$ <br> Capital: "+app.gamer.dinero+"$"], 
        true, ["si", 13, param, "no", 0, 0, "dejar todo", 14, param])
    },
    function (param) {// 13
        if (app.gamer.carrito) {
            app.gamer.carrito.push(param)
        } else {
            app.gamer.carrito = [param]
        }
        afterMessage = ()=> {
            app.mensaje(["Has agregado un "+objetos[param].nombre+" al carrito."])
            afterMessage = ()=> {}
        }
    },
    function (param) {// 14
        if (app.gamer.carrito) {
            for (let i = 0; i < app.gamer.carrito.length; i++) {
                const obj = app.gamer.carrito[i];
                if (obj == param) {
                    app.gamer.carrito[i] = 0
                }
            }
        }
    },
    function (param=0) {//15
        let letreros = [
            "Bienvenido a Pueblo Silvis",
            ""
        ]
        lock = true,
        app.mensaje([letreros[param]])
    },
    function () {// 16
        lock = true
        if(flag(1)) {
            app.mensaje(["Hola, @nick. ¿Como estas?"])
            return
        }
        app.mensaje(["Hola, @nick. Hace un lindo dia ¿no? Creo que la profesora Dana te estaba buscando hoy",
        "Que bonito tejado amarillo le pusieron al laboratorio ¿no?"])
    }
]
function miniCreator(x, y) {
    var mini = document.createElement("div")
    mini.classList.add("mini")
    document.getElementById("pantalla").appendChild(mini);
    var info = document.createElement("div")
    info.classList.add("info")
    mini.appendChild(info)
    mini.style.left = x+"px"
    mini.style.top =  y+"px"
    return info

}

function gamerVisible() {
    if (app.gamer.buffs.visible < 1 || app.gamer.visible == false) {
        return false
    }
    return true
}
var movs = [
    function () {//0
        return [false]
    },
    function (mod) {//1
        var r = [false, false]
        if (!mod.movBoo) {
            if (mod.ofMove%(mod.pasos*2) < mod.pasos) {
                mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                if(gamerVisible())
                r = [false, true]
            }
            if (mod.ofMove%(mod.pasos*2) >= mod.pasos ) {
                mod.x += (mod.stat.vel*mod.buffs.vel)*10
                if(gamerVisible())
                r = [true, false]
            }
            
        }
        return r
    },
    function (mod) {//2
        var r = [false, false]
        let gamer = app.gamer

        if (mod.count[1] >= poderes[mod.poderes[1]].count) {
            r = [false, true]
            
        } 
        if (!mod.movBoo) {
            var movimiento = (mod.stat.vel*mod.buffs.vel)*10
            if (gamerVisible()) {
                if ((gamer.x+100) < mod.x+(mod.pasos)*10 && (gamer.x+100) > mod.x-(mod.pasos)*10) {
                    if (gamer.x - mod.x < 0) {
                        mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                    } else  {
                        mod.x += (mod.stat.vel*mod.buffs.vel)*10
                    }
                    if (gamer.y < mod.y ) {
                        mod.y -= movimiento
                    }
                    if (gamer.y > mod.y) {
                        mod.y += movimiento
                    }
                    if(r[1] == false)
                    r = [true, false]
                }
                
            } else {
                r = movs[0](mod)
            }
        }
        return r
    },
    function (mod) {//3
        var r = [false, false]
        if (!mod.movBoo && gamerVisible()) {
            let gamer = app.gamer
            
            if (gamer.x < mod.x+(mod.pasos)*10 && gamer.x > mod.x-(mod.pasos)*10) {
                if (gamer.x - mod.x < 0) {
                    mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                } else  {
                    mod.x += (mod.stat.vel*mod.buffs.vel)*10
                }
               
            }
            if (mod.count[1] >= poderes[mod.poderes[1]].count && ((gamer.x - mod.x > 50) || (mod.x - gamer.x > 50)) ) {
                r = [false, true]
            } else if ((gamer.x - mod.x > 200) || (mod.x - gamer.x > 200)) {
                r = [true, false]
            }
        } else if(!mod.movBoo) {
            r = movs[1](mod)
        }
        return r 
    },
    function (mod) {//4
       let r = [false, false]
       if (!mod.movBoo) {
            r[0] = true
            let gamer = app.gamer

            let movimiento = (mod.stat.vel*mod.buffs.vel)*10
            if (mod.ofMove%(mod.pasos*2) < mod.pasos) {
                mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                
            }
            if (mod.ofMove%(mod.pasos*2) >= mod.pasos ) {
                mod.x += (mod.stat.vel*mod.buffs.vel)*10
              
            }
            if (gamer.y < mod.y ) {
                mod.y -= movimiento
            }
            if (gamer.y > mod.y) {
                mod.y += movimiento
            }
            if ((gamer.x+100) < mod.x+(mod.pasos)*10 && (gamer.x+100) > mod.x-(mod.pasos)*10) {
                r = [false, true]
            }
        }
        
        return r
    },
    function (mod) { // 5
        let gamer = app.gamer
        if (!mod.movBoo) { 
            movs[1](mod)
            if (!flag(mod.param) && flag(1)) {
                if ((gamer.x+100) < mod.x+(mod.pasos)*10 && (gamer.x+100) > mod.x-(mod.pasos)*10 && mod.y > gamer.y-50 && mod.y < gamer.y+50) {
                    lock = true
                    app.mensaje(["Ey. Tengamos una batalla"])
                    afterMessage = ()=> {
                        let batalla = batallas[mod.batalla]
                        console.log(batalla, mod.batalla)
                        batalla.salida = app.nivel()
                        app.levelLoad(batalla)
                        
                        afterMessage = ()=> {}
                    }   
                }
            }
        }
        return [false, false]
    },
    function (mod) { // 6
        let r = [false, false]
        if (!mod.movBoo && gamerVisible()) {
            let gamer = app.gamer
            let movimiento = (mod.stat.vel*mod.buffs.vel)*10
            if (gamer.x+500 < mod.x+(mod.pasos)*10 && gamer.x+500 > mod.x-(mod.pasos)*10) {
                if (gamer.x - mod.x < 0) {
                    mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                } else  {
                    mod.x += (mod.stat.vel*mod.buffs.vel)*10
                }
                if (gamer.y < mod.y ) {
                    mod.y -= movimiento
                }
                if (gamer.y > mod.y) {
                    mod.y += movimiento
                }
            }
            if (((gamer.x - mod.x > 200) || (mod.x - gamer.x > 200)) ) {
                if (mod.stat.salud < mod.stat.vida*0.5) {
                    r = [true, false]
                    
                } else
                r = [false, true]
            } else {
                if (gamer.x - mod.x < 0) {
                    mod.x += (mod.stat.vel*mod.buffs.vel)*20
                } else  {
                    mod.x -= (mod.stat.vel*mod.buffs.vel)*20
                }
            }
        } else if(!mod.movBoo) {
            r = movs[1](mod)
        }
        return r 
    }
]
let batallas = [
    0,
    { // 1
        batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [4, 5],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(3, 1)
        },
        npcs: [
            [2, "rattata", 1400, 500, 100, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ],
       
      
    },
    {//2
         batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [4, 5],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(4, 1)
        },
        npcs: [
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ],
    },
    {// 3
        batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [4, 5],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(5, 1)
        },
        npcs: [
            [2, "rattata", 1300, 500, 100, true, 0],
            [6, "petilil", 1500, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ]
    },
     {// 4
        batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [5, 5],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(6, 1)
        },
        npcs: [
            [2, "rattata", 1300, 500, 100, true, 0],
            [6, "petilil", 1500, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ]
    },
     {// 5
        batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [5, 6],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(7, 1)
        },
        npcs: [
            [2, "rattata", 1300, 500, 100, true, 0],
            [6, "petilil", 1500, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ]
    },
     {// 6
        batalla: true,
        salvaje: false,
        enemys: 2,
        salida: 0,
        nivel: [6, 7],
        piso: "violet",
        color: "pink",
        largo: 4000,
        exit: ()=> {
            flag(8, 1)
        },
        npcs: [
            [2, "rattata", 1300, 500, 100, true, 0],
            [6, "petilil", 1500, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
            [2, "rattata", 1200, 500, 100, true, 0],
            [6, "petilil", 1400, 500, 400, true, 0],
        ],
        pisos: [
            "piso"
        ]
    },
]
