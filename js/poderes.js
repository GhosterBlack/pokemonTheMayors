
var visses= [
    [
        {height: "0px"},
        { height: "50px"}
    ],
    [
        {height: "0px"},
        {height: "100px"}
    ],
    [
        {height: "0px", marginTop: "0px"},
        {height: "250px", marginTop: "-125px"}
    ],
    [ // 3
        {transform: "rotate(0deg)", color: "black"},
        {transform: "rotate(90deg)", color: "white"}
    ],
    [ // 4
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"}
    ],
    [ // 5
        {transform: "rotate(-90deg)", color: "black"},
        {transform: "rotate(180deg)", color: "white"}
    ],
    [ // 6
        {marginTop: "100px"},
        {marginTop: "-100px"}
    ],
    [// 7
        {height: "250px"},
        {height: "200px"}
    ],
    [ // 8
        {transform: "rotate(-90deg)", color: "red"},
        {transform: "rotate(180deg)", color: "yellow"}
    ],
    [ // 9
        {transform: "rotate(-90deg)"},
        {transform: "rotate(180deg)"}
    ],
]
var Basico = {
    damage: 30,
    distancia: 3,
    tipo: 0,
    
}
var poderes = [
    { //0
        damage: 0,
        distancia: 0,
        mana: 0
    },
    { // 1
        nombre: "Golpe bajo",
        damage: 40,
        tipo: 17,
        distancia: 6,
        tele: 2,
        count: 3,
        block: {
            damage: 40,
            tipo: 17,
            distancia: 4,
            tele: 2,
            estado: {count: [0, 4]},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif'></div>",

        },
        mana: 10,
        anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif'></div>",
    },
    {//2
        nombre: "Garra umbria",
        damage: 1,
        distancia: 6,
        count: 5,
        mana: 10,
        anim: "<div class='garra'></div>",
        class: 1,
        x: 3,
        tipo: 7,
        bomba: {
            damage: 35,
            tipo: 7,
            distancia: -4,
            trans: 4,
            anim: "<div style='background-color: transparent; color: black' class='luna'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[9],
            cion: (atacker, defender)=> {
                if (defender.buffs.visible < 1) {
                    if(defender.spr)
                    defender.stat.salud -= (atacker.stat.atq * 10) / defender.stat.def
                    else
                    defender.salud -= (atacker.stat.atq * 10) / defender.stat.def
                }
            },
        },
        
    },
    {//3
        nombre: "Golpe fantasma",
        damage: 90,
        tipo: 7,
        distancia: 7,
        tele: 2,
        count: 2,
        block: {
            damage: 40,
            tipo: 17,
            distancia: 4,
            tele: 2,
            estado: {count: [0, 4], visible: 0.9, timer: 4, atq: 1.5},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif'></div>",

        },
        mana: 5,
        anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif'></div>",

    },
    {//4
        nombre: "Robo",
        damage: 40,
        distancia: 7,
        robo: 50,
        x: 2,
        tipo: 17,
        block: {
            distancia: -4,
            damage: 30,
            distance: 3,
            robo: 40,
            trapX: 20,
            estado: {count: [1, 2]},
            mana: 1,
            tipo: 7,
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif'></div>",
            cion: (at, df)=> {
                let keys = Object.keys(at.buffs)
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if(df.buffs[key] - 1 > -1)
                    at.buffs[key] += df.buffs[key] - 1
                }
            }
        },
        count: 2,
        anim: "<div style='background-color: transparent;' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[5],
        mana: 1
    },
    { // 5
        nombre: "Sombra vil",
        damage: 40,
        tipo: 7,
        distancia: 5,
        count: 2,
        x: 4,
        bomba: {
            damage: 0,
            tipo: 17,
            distancia: -3,
            estado: {count: [0, 4]},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/shuppet.webp' style='transform: rotateY(180deg)'></div>",
            tele: 2
        },
        mana: 5,
        anim: "<div class='garra'></div>",
        class: 1,

    },
    {//6
        nombre: "Desarme",
        damage: 20,
        distancia: 4,
        tipo: 15,
        efecto: {obj: 0},
        count: 3,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[3],
        x: 3,
        block: {
            damage: 40,
            distancia: -3,
            tipo: 9,
            efecto: {atq: 0.5, timer: 10},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/shuppet.webp' style='transform: rotateY(180deg)'></div>",
            vis: [{width: "0px"}, {width: "100px"}],
            trans: 1,
        }
    }
]

/*
    0) No hace nada
    1) Aumenta una caracteristica
    2) Interviene en el sistema de combate como atacante
    3) Se usa una vez y modifica algo del usuario
    4) Se usa para el intercambio de otros objetos
    5) Proporciona una funcion que se ejecuta con cada pantallazo
    6) Interviene en el sistema de combate como defensor
*/
// obj.length: 6
var signos = {
    vel: "<div style='background-color: rgba(120, 250, 200)' class='signo'>Vel</div>",
    atq: "<div style='background-color: rgba(255, 120, 100)' class='signo'>Atq</div>",
    shield: "<div style='background-color: rgba(120, 220, 255)' class='signo'>Escudo</div>",
    vat: "<div style='background-color: rgba(120, 200, 255)' class='signo'>V. atq</div>",
    salto: "<div style='background-color: rgba(220, 250, 220)' class='signo'>Recarga</div>",
    caida: "<div style='background-color: rgba(190, 250, 210)' class='signo'>Mana</div>",
    visible: "<div style='background-color: rgba(120, 200, 200)' class='signo'>Ojo</div>",
    def: "<div style='background-color: rgba(120, 250, 150)' class='signo'>Def</div>",
    crit: "<div style='background-color: rgba(255, 0, 0)' class='signo'>P. Crit</div>",
    inmune: "<div style='background-color: rgba(250, 250, 250)' class='signo'>Inm</div>",
    regen: "<div style='background-color: rgba(120, 250, 120)' class='signo'>Regen</div>",
    res: "<div style='background-color: rgba(120, 150, 200)' class='signo'>Def. Raf</div>",
    raf: "<div style='background-color: rgba(220, 100, 250)' class='signo'>Raf</div>",
}

var objetos = [
    { // 0
        nombre: "Nada",
        descripcion: "No tiene nada",
        hab: "Ninguna",
        desc: "No hace nada.",
        tipo: 0,
        caract: {}
    },
    
    { // 1
        nombre: "Banda elegida",
        descripcion: "Te aumenta mucho el ataque fisico, pero disminuye tu velocidad.",
        hab: "Potencia",
        desc: "Aumenta el mucho el ataque fisico, pero disminuye tu velocidad.",
        tipo: 1,
        caract: {atq: 2.5, vel: 0.75},
    },
    { // 2
        nombre: "Velocidad X",
        descripcion: "Te aumenta la velocidad y elimina cualquier efecto de estado, Se consume al usarlo",
        hab: "Impulso",
        desc: "Al tener poca vida aumenta la velocidad y elimina cualquier efecto de estado.",
        tipo: 3,
        caract: {estado: 2, tiempo: 300},
    },
    { // 3
        nombre: "Chaleco asalto",
        descripcion: "Un chaleco que te permite aguantar mejor los golpes mientras mas vida tengas",
        hab: "Compensacion",
        desc: "Aguantas mejor los golpes mientras mas vida tengas",
        tipo: 6,
        caract: {shield: 30, def: 5}
    },
    { // 4
        nombre: "Pepita de oro",
        descripcion: "Puedes cambiarla por alguna cosa.",
        hab: "Recogida",
        desc: "Es probable encontrar objetos al caminar.",
        tipo: 4,
        caract: (gamer)=> {
            if (aleatorio(0, 100) <= 1) {
                var obj = aleatorio(1, objetos.length-1)
                if (objetos[obj].costo <= 1 || !objetos[obj].costo) {
                    gamer.objetos.push(obj)
                    return gamer
                }
            }
        },
        valor: 1
    },
    { //5
        nombre: "Cinta fuerte",
        desc: "Aumenta el daño del usuario mientras mas ataque tenga",
        hab: "Cacheo",
        desc: "Puede ver enemigos ocultos y saber si tienen objetos. Si el portador esta en su ultima fase y golpea a un enemigo oculto sus habilidades seran silenciadas",
        tipo: 2,
        caract: {stap: 2, antiShield: 2, fun: (at, df)=> {
            if (!df) {
                for (let i = 0; i < app.mods.length; i++) {
                    const mod = app.mods[i];
                    if (mod.buffs) {
                        if (mod.buffs.visible < 1 || mod.stat.obj > 0) {
                            let m = "drop-shadow(2px 4px 10px rgba(0, 0, 0, 1))"
                            mod.spr.animate([
                                {filter: "drop-shadow(2px 4px 6px rgba(40, 40, 40, 0))"},
                                {filter: m},
                                {filter: "drop-shadow(2px 4px 6px rgba(40, 40, 40, 0))"}
                            ], {
                                duration: 3000,
                                iteration: 1
                            })
                        }
                    }
                }
                
            } else {
                if(!at.method)
                if (df.buffs.visible < 1) {
                    df.buffs.poderes = [0, 0],
                    df.timer = 50
                }

            }
        }}
    },
]

// ala     

var ultis = [
    {// 0
        nombre: "Ninguna",
        descripcion: "El pokemon no tiene habilidad definitiva",
        distancia: 0,
        damage: 0,
        mana: 0
    },
    { // 1
        nombre: "Destino fatal",
        damage: 90,
        tipo: 7,
        distancia: 6,
        count: 3,
        anim: "<div class='circle' style='background-color: rgba(200, 200, 200, 0.6); margin-top:90px'></div>",
        vis: visses[0],
        efecto: {def: 0.5, timer: 10},
        block: {
            damage: 0,
            tipo: 7,
            distancia: 1,
            estado: {inmune: 0.9, timer: 5, poderes: [3, 4]},

        }
    }
]
var nombreEstado = [
    "Normal", // 0
    "Fuerte", // 1
    "Veloz", //2
    "Potente", //3
    "Resistente", //4
    "Defensivo", //5
]
var desEstado = [
    "Esta normal, sin ninguna mejora",
    "Aumenta la cantidad de daño fisico, ademas aumenta la velocidad de atq",
    "Aumenta la velocidad de movimiento y de ataque, ademas disminuye el tiempo de espera para recargar vida",
    "Aumenta la cantidad de daño especial, ademas disminuye el tiemp de recarga de habilidades",
    "Aumenta la defensa especial, gana un escudo al obtener este estado y pierde cualquier efecto de control al momento de obtenerlo",
    "Aumenta la defensa fisica, se vuelve inmune al daño por un corto periodo de tiempo",

]
var estados = [
    function (mod) {
        if (!mod) {
            mod = app.gamer
        }
        mod.regen = 1
        var spr = mod.spr
        if (!spr && !mod.cria) {
            spr = app.jugador
            mod.stat = Object.assign(app.gamer.stat, personajes[app.gamer.nombre].stat)
            mod.poderes = [personajes[app.gamer.nombre].poderes[0], 
            personajes[app.gamer.nombre].poderes[1], personajes[app.gamer.nombre].poderes[2]]
        } else {
            mod.stat = Object.assign(mod.stat, entidades[mod.especie][0])
            mod.poderes = [entidades[mod.especie][3][0], entidades[mod.especie][3][1],
            entidades[mod.especie][3][2],]
        }
        spr.style.filter = "none"
        return mod
        /* var stat = Object.keys(gamer.stat)
        for (let i = 0; i < stat.length; i++) {
            const element = stat[i];
            gamer.stat[element] = 1
        } */
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px red)"
        mod.stat.atq *= 2
        mod.buffs.vat *= 2
        mod.timer = mod.tiempo
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px skyblue)"
        mod.stat.vel *= 2
        mod.stat.caida *= 1.5
        mod.buffs.vat *= 2
        mod.timer = mod.tiempo
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px purple)"
        mod.stat.raf *= 2
        mod.stat.caida *= 2
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px rgb(100, 190, 255))"
        mod.stat.raf *= 2
        mod.stund = false
        mod.buffs.shield *= 2
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px rgb(100, 255, 190))"
        mod.stat.def *= 2
        mod.buffs.inmune *= 0.9
        return mod
    },

]
function retMast(mod) {
    if (!mod) {
        mod = app.gamer
    }
    var spr = mod.spr
        if (!spr) {
            spr = app.jugador
        }
    return [mod, spr]
}   