
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
    [ // 10
        {transform: "rotate(-90deg)", width: "0px", height: "0px"},
        {transform: "rotate(180deg)", width: "50px", height: "100px"}
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
        nombre: "Golpe fantasma",
        damage: 10,
        tipo: 7,
        distancia: 6,
        count: 3,
        anim: "<div class='circle' style='background-color: rgba(20, 20, 20, 0.6); margin-top:90px'></div>",
        vis: visses[0],
        x: -2,
        block: {
            nombre: "Golpe fantasma",
            damage: 50,
            tipo: 7,
            distancia: 2,
            anim: "<div style='background-color: transparent; color: black' class='luna'></div><div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg); margin-top: -100px'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[9],
            distancia: 3,
            tele: 2,
            estado: {vel: 1.5},
            efecto: {vel: 0.75, timer: 1.5}

        },
        boom: {
            damage: 10,
            tipo: 7,
            distancia: 2,
            anim: "<div class='circle' style='background-color: rgba(20, 20, 20, 0.6); margin-top:90px'></div>",
            vis: visses[0],
            tiempo: 100,
            x: -2,
            block: {
                nombre: "Golpe fantasma",
                anim: "<div style='background-color: transparent; color: black' class='luna'></div><div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg); margin-top: -100px'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",
                estado: {visible: 0.9},
                vis: visses[1],
                class: 2,
                transis: visses[9],
                distancia: 3,
                damage: 40,
                tipo: 7,
                efecto: {vel: 0.75, timer: 1.5}

            }
        },
        mana: 10,
    },
    {//2
        nombre: "Desarme",
        damage: 0,
        distancia: 8,
        tipo: 17,
        tele: 1,
        inicio: {
            nombre: "Desarme",
            damage: 30,
            distancia: 5,
            tipo: 17,
            count: 3,
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[3],
        },
        bomba: {
            nombre: "Desarme",
            damage: 0,
            distancia: -7,
            tele: 1,
            tipo: 17,
            inicio: {
                nombre: "Desarme",
                damage: 30,
                distancia: -5,
                tipo: 17,
                count: 3,
                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
                vis: visses[1],
                class: 2,
                transis: visses[3],
                
            },
            x: -3,
            bomba: {
                nombre: "Desarme",
                distancia: 6,
                damage: 30,
                tipo: 17,
                distance: 3,
                robo: 40,
                trapX: 20,
                mana: 1,
                tipo: 17,
                anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",
                cion: (atacker, defender)=> {
                    if (defender.buffs.visible < 1) {
                        if(defender.spr)
                        defender.stat.salud -= (atacker.stat.atq * 10) / defender.stat.def
                        else
                        defender.salud -= (atacker.stat.atq * 10) / defender.stat.def
                    }
                },
            }
        }
    },
    {//3
        nombre: "Golpe bajo",
        damage: 40,
        tipo: 17,
        distancia: 7,
        tele: 2,
        count: 2,
        block: {
            nombre: "Golpe bajo",
            damage: 40,
            tipo: 17,
            distancia: 4,
            tele: 2,
            estado: {count: [0, 4], timer: 4, atq: 1.5},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",

        },
        mana: 5,
        anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",

    },
    {//4
        nombre: "Garra umbria",
        damage: 40,
        distancia: 7,
        robo: 50,
        x: 2,
        tipo: 17,
        //descripcion: "Ataca al rival infligiendo 40 puntos de daño fisico y absorbiendo el 50% del daño del ataque como ps. Ademas crea una sombra suya que empuja al rival hacia el y copia todos sus aumentos de caracteristicas",
        block: {
            nombre: "Garra umbria",
            distancia: -4,
            damage: 30,
            distance: 3,
            robo: 40,
            trapX: 20,
            mana: 1,
            tipo: 7,
            tele: 2,
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/banette.gif' style='transform: rotateY(180deg)'></div>",
           /*  cion: (at, df)=> {
                let keys = Object.keys(at.buffs)
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if(df.buffs[key] - 1 > -1)
                    at.buffs[key] += df.buffs[key] - 1
                }
            } */
        },
        count: 2,
        anim: "<div style='background-color: transparent; color: black' class='luna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
        tele: 1,
        mana: 1
    },
    { // 5
        nombre: "Sombra vil",
        damage: 0,
        tipo: 7,
        distancia: 2,
        count: 2,
        x: -2,
        bomba: {
            damage: 30,
            tipo: 7,
            distancia: 1,
            anim: "<div class='circle' style='background-color: rgba(20, 20, 20, 0.6); margin-top:90px'></div>",
            vis: visses[0],
            tiempo: 100,
            block: {
                nombre: "Sombra vil",
                anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/shuppet.gif' style='transform: rotateY(180deg)'></div>",
                vis: [{width: "0px"}, {width: "100px"}],
                trans: 1,
                damage: 30,
                distancia: 3,
                estado: {coun: [1, 4]},
                tipo: 7,
                efecto: {vel: 0.75, timer: 1.5}
            }
        },
        mana: 5,

    },
    {//6
        nombre: "Finta",
        damage: 20,
        distancia: 6,
        tipo: 15,
        count: 3,
        tail: "def",
        tele: 1,
        x: 3,
        block: {
            nombre: "Finta",
            damage: 40,
            distancia: -3,
            tipo: 9,
            efecto: {atq: 0.5, timer: 10},
            anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/shuppet.gif' style='transform: rotateY(180deg)'></div>",
            vis: [{width: "0px"}, {width: "100px"}],
            trans: 1,
        }
    },
    {//7 rattata
        nombre: "Ataque rapido",
        damage: 40,
        distancia: 6,
        tele: 1,
        count: 3,
        estado: {atq: 1.5, timer: 2},
        tail: "def"
    },
    {// 8 rattata
        nombre: "Latigo",
        damage: 0,
        distancia: 6,
        tele: 1,
        efecto: {def: 0.75, timer: 3},
        stund: 0.5,
        block: {
            damage: 0,
            distancia: 1,
            estado: {count: [0, 1]}
        },
        tail: "def"
    },
    {//9 raticate
        nombre: "Hipercolmillo",
        damage: 70,
        distancia: 5,
        anim: "<div class='colmillo'></div>",
        block: {
            tipo: 0,
            damage: 0,
            distancia: 1,
            estado: {atq: 2, timer: 6}
        },
        stund: 1.2,
        tipo: 0,
        count: 6,
        tele: 1
    },
    {// 10 raticate
        nombre: "Giro fuego",
        damage: 60,
        distancia: 6,
        anim: "<div style='color: orange; width: 250px; margin-left: -100px' class='medialuna'></div>",
        vis: visses[2],
        class: 2,
        transis: visses[4],
        tele: 1,
        efecto: {def: 0.75, timer: 1.5},
        tipo: 10,
        count: 3,
        block: {
            damage: 0,
            distancia: 1,
            estado: {count:[0, 2], atq: 0.95, res: 0.95, timer: 1.2}
        }
    },
    {// 11 chespin
        nombre: "Latigo cepa",
        damage: 40,
        distancia: 5,
        tele: 1,
        anim: "<div style='color: rgb(140, 250, 180); margin-top: 100px' class='medialuna'></div>",
        vis: visses[1], 
        class: 3,
        transis: visses[9],
        stund: 0.6,
        tipo: 12
    },
    {// 12 chespin
        nombre: "Gruñido",
        damage: 20,
        distancia: 7,
        anim: "<div style='color: white;' class='medialuna'></div>",
        vis: visses[0],
        class: 2,
        transis: visses[4],
        efecto: {atq: 0.75, timer: 1, vel: 0.75},
        tipo: 0,
        trans: 5
    },
    {//13 activas
        nombre: "Proteccion",
        distancia: 1, 
        damage: 0, 
        tail:  [
            {boxShadow: "0px 0px 0px 0px gray"},
            {boxShadow: "0px -100px 100px 10px  gray"},
        ],
        estado: {shield: 20, timer: 4},
        count: 30,
        tipo: 0
    },
    {// 14 - entrenador
        nombre: "¡Te tengo!",
        distancia: "5,10",
        count: 1,
        damage: "30,90",
        tipo: 0,
        descripcion: "Carga para lanzar una pokeball, mientras mas cargue mas lejos va la pokeball. Si derrota a un pokemon salvaje con esta obtendra puntos de especie",
        anim: "<div class='pokeball' style='color:red'> </div>",
        cion: (at=app.gamer, df)=> {
            if (df.stat.huevo && app.nivel().salvaje) {
                if (df.stat.salud <= 0) {
                    if (at.objetos.includes(10)) {
                        at.objetos[at.objetos.indexOf(10)] = 0
                        let cria = {
                            nombre: df.especie,
                            codigo: aleatorio(0, 100000),
                            nivel: df.nivel,
                            select: false,
                            activa: 0,
                            pasivas: [aleatorio(0, emblemas[df.especie].movs.length), aleatorio(1, 2)],
                            exp: 0
                        }
                        if (!at.personajes.includes(df.especie)) {
                            app.giveChara(df.especie)
                        }
                        if (at.pasiva[df.especie]) {
                            at.pasiva[df.especie].push(cria)
                        } else {
                            at.pasiva[df.especie] = [cria]
                        }

                    }
                    if(at.exp[df.stat.huevo])
                    at.exp[df.stat.huevo]++
                    else
                    at.exp[df.stat.huevo] = 1
                }
            }
        },
        vel: 70,
        carga: 0.5
    },
    {// 15 - entrenador
        nombre: "Pocion",
        descripcion: "Usa una pocion que aumenta los ps de su equipo. A su vez aumenta su velocidad de movimiento.",
        distancia: 2,
        damage: 0,
        tipo: 0,
        estado: {vel: 1.5, timer: 4},
        tail:  [
            {boxShadow: "0px 0px 0px 0px yellowgreen"},
            {boxShadow: "0px -100px 100px 10px rgb(0 255 0)"},
        ],
        fun: ()=> {
            let equipo = app.gamer.equipo
            for (let i = 0; i < equipo.length; i++) {
                const poke = equipo[i];
                const vida = app.gamer.vidas[i]
                if (vida+20 < personajes[poke].vida) {
                    app.gamer.vidas[i] += 20
                } else {
                    app.gamer.vidas[i] = personajes[poke].vida
                }
            }
        }
    },
    {// 16 - activas
        nombre: "Tinieblas",
        descripcion: "Golpea al enemigo infligiendole daño sin tomar en cuenta sus defensas.",
        damage: 30,
        distancia: 6,
        tipo: 7,
        really: 10,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px black'></div>",
        vis: visses[1],
        count: 20,
        raf: true
    },
    {// 17 - activas
        nombre: "Bola sombra",
        tipo: 7,
        damage: 30,
        distance: 6,
        trapX: 40,
        distancia: -4,
        x: -3,
        boom: {
            nombre: "Bola sombra",
            tipo: 10,
            damage: 80,
            distancia: -12,
            anim: "<div style='background-color: black; color: black; width: 100px' class='luna'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[4],
            raf: true,
            res: true,
            vel: 70
        },
        anim: "<div style='background-color: black; color: black; width: 100px' class='luna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
        count: 20,
        raf: true,
        res: true,
        vel: 70
    },
    {// 18 - activas
        nombre: "Finta",
        tipo: 17,
        damage: 0,
        distancia: 4,
        vel: 300,
        tele: 2,
        tail: "def",
        count: 10
    },
    {// 19 - activas
        nombre: "Aguzar",
        tipo: 0,
        damage: 0,
        distancia: 1,
        tail:  [
            {boxShadow: "0px 0px 0px 0px yellow"},
            {boxShadow: "0px -100px 100px 10px white"},
        ],
        estado: {crit: 9, vat: 2.5, atq: 1.5, timer: 4}
        

    },
     {// 20 quiladin
        nombre: "Brazo pincho",
        damage: 60,
        distancia: 5,
        tele: 1,
        tipo: 12,
        tail: "def",
        estado: {shield: 2, timer: 5},
        x: -3,
        bomba: {
            damage: 40,
            distancia: 5,
            anim: "<div class='golpeMano' style='color: yellowgreen'></div>",
            distance: 3,
            trapX: 30,
            stund: 1.5
        }
    },
    {// 21 quiladin
        nombre: "Rugido",
        damage: 20,
        distancia: 7,
        anim: "<div style='color: white;' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
        efecto: {atq: 0.75, timer: 1, vel: 0.75},
        tipo: 0,
        trans: 5,
        distance: 3,
        trapX: 30,
    },
       {// 22 chesnaught
        nombre: "Mazaso",
        damage: 60,
        distancia: 5,
        tele: 1,
        tipo: 12,
        tail: "def",
        estado: {shield: 2, timer: 5, poderes: [26, -1]},
        distance: 3,
        trapX: 30,
        x: -3,
        trans: 3
    },
    {// 23 chesnaught
        nombre: "Machada",
        damage: 50,
        distancia: 7,
        anim: "<div style='color: red;' class='golpeMano'></div>",
        class: 2,
        transis: visses[4],
        efecto: {atq: 0.75, timer: 1, vel: 0.75},
        tipo: 0,
        trans: 5,
        distance: 3,
        trapX: 30,
        stund: 1.5
    },
    {// 24 activas chesnaught
        nombre: "Barrera espinosa",
        damage: 10,
        distancia: 6,
        distance: 3,
        trapX: 30,
        count: 20,
        anim: "<div style='color: rgb(150, 255, 190);' class='medialuna'></div>",
        vis: visses[1],
        x: -3,
        bomba: {
            damage: 10,
            distancia: 2,
            distance: 3,
            trapX: 10,
            count: 20,
            anim: "<div style='color: rgb(150, 255, 190);' class='medialuna'></div>",
            vis: visses[1],
            tiempo: 40,
            trans: 2
        },
        inicio: {
            nombre: "Barrera espinosa",
            damage: 10,
            distancia: -6,
            distance: 3,
            trapX: 30,
            anim: "<div style='color: rgb(150, 255, 190);' class='medialuna'></div>",
            vis: visses[1],
            x: 3,
            bomba: {
                damage: 10,
                distancia: -2,
                distance: 3,
                trapX: 10,
                count: 20,
                anim: "<div style='color: rgb(150, 255, 190);' class='medialuna'></div>",
                vis: visses[1],
                tiempo: 40,
                trans: 2
            },
        }
        
    },
    {// 25 - activas
        nombre: "Golpe aereo",
        tipo: 2,
        damage: 0,
        distancia: 4,
        vel: 100,
        tele: 2,
        tail: "def",
        count: 10,
        estado: {vel: 1.5, timer: 5}
    },
    {// 26 - chesnaught
        nombre: "Mazo",
        damage: 60,
        distancia: 5,
        anim: "<div class='martillo' style='color: rgb(150, 255, 190)'></div>",
        stund: 2,
        tipo: 12,
        class: 2,
        transis: visses[9],
        count: 0.1,
        estado: {poderes: [-1, -1]},
        trans: 3
    },
    {// 27 - tepig
        nombre: "Placaje",
        damage: 40,
        distancia: 7,
        tele: 1,
        tail: "def",
        tipo: 0,
        efecto: {vel: 0.75, timer: 1.5}
    },
    {// 28 - tepig
        nombre: "Ascuas",
        damage: 10,
        tipo: 10,
        duplex: 8,
        distancia: 3,
        efecto: {vel: 0.9},
        anim: "<div style='background-color: transparent; color: orange; margin-top: 40px' class='medialuna'></div>",
        vis: visses[0],
        mana: 5,
        x: -2,
        trans: 2,
        count: 8,
        raf: true,
        res: true
    },
    {// 29 - pignite
        nombre: "Demolicion",
        damage: 70,
        distancia: 7,
        tele: 1,
        tail: "def",
        tipo: 1,
        efecto: {vel: 0.75, timer: 1.5},
        distance: 3,
        trapX: 30,
        block: {
            distancia: 1,
            estado: {atq: 1.5, count: [1, 1]},
            damage: 0
        }
    },
    {// 30 - pignite
        nombre: "Lanza llamas",
        damage: 20,
        tipo: 10,
        duplex: 6,
        distancia: 6,
        efecto: {vel: 0.8, atq: 0.75},
        anim: "<div style='background-color: rgba(255, 100, 100, 0.6); color: orange; margin-top: 40px' class='medialuna'></div>",
        vis: visses[0],
        mana: 5,
        x: -2,
        trans: 2,
        count: 8,
        raf: true,
        res: true,
        class: 1
    },
    {// 31 - emboar
        nombre: "Embite igneo",
        damage: 70,
        distancia: 10,
        tele: 1,
        tail: "def",
        tipo: 10,
        efecto: {vel: 0.75, timer: 1.5},
        trans: 4,
        x: -2,
        block: {
            distancia: 4,
            estado: {atq: 1.5, count: [1, 1]},
            damage: 30,
            trans: 2,
            distance: 2,
            trapX: 20,
            tipo: 10,
            anim: "<div class='circle' style='background: linear-gradient(rgba(255, 0, 0, 0.281), rgba(255, 166, 0, 0.315)); box-shadow: 0px 0px 50px 50px orange'> </div>",
            vis: visses[2],
            class: 1
        }
    },
    {// 32 - emboar
        nombre: "Onda certera",
        damage: 20,
        tipo: 1,
        distancia: 7,
        efecto: {vel: 0.8, atq: 0.75},
        anim: "<div style='background-color: rgba(255, 100, 100, 0.6); width: 100px; color: yellow; margin-top: 40px' class='medialuna'></div>",
        vis: visses[1],
        x: -2,
        trans: 2,
        count: 12,
        block: {
            distancia: 4,
            damage: 30,
            trans: 2,
            stund: 0.3,
            tipo: 10,
            anim: "<div class='circle' style='background: linear-gradient(rgba(255, 0, 0, 0.281), rgba(255, 166, 0, 0.315)); box-shadow: 0px 0px 50px 50px orange'> </div>",
            vis: visses[1],
            class: 1,
            estado: {count: [1, 12]},
            raf: true,
            res: true
        },
        raf: true,
        res: true
    },
    {// 33 emboar
        nombre: "Descanzo",
        damage: 0,
        tipo: 14,
        distancia: 2,
        estado: {regen: 1.5, caida: 0.75},
        stundSelf: true,
        tiempo: 3,
        tail: "def",
        fun: (at = app.gamer)=> {
            if (at.salud >= at.vida) {
                if (at.recerba && at.recerba < 4) {
                    at.recerba++
                } else if (!at.recerba) {
                    at.recerba = 2
                }
                marcas(at, "recerba", at.recerba+"", 4, "recerba", ["background", "white"])

            } else {
                at.salud += at.vida*0.2
            }
        }
    },
    {// 34 banette activas
        nombre: "Robo",
        damage: 1,
        tipo: 17,
        distancia: 8,
        efecto: {vel: 0.1, timer: 2},
        block: {
            damage: 0,
            tipo: 17,
            estado: {vel: 2, timer: 3},
            distancia: 1
        },
        anim: "<div style='background-color: transparent; color: black; width: 100px' class='luna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
        count: 20
    },
    {// 35 - activas
        nombre: "Hierba lazo",
        damage: 30,
        distancia: 8,
        distance: 5,
        trapX: 40,
        stund: 1.2,
        tipo: 12,
        raf: true,
        res: true,
        anim: "<div style='color: rgb(150, 250, 180);' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
    },
    {// 36 - activa emboar
        nombre: "Golpe calor",
        damage: 30,
        distancia: 6,
        count: 20,
        anim: "<div style='background-color:rgba(255, 10, 10, 0.4); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1,
        estado: {estado: 1, tiempo: 20},
        trans: 6,
        inicio: {
            tipo: 12,
            damage: 30,
            distancia: -6,
            count: 20,
            anim: "<div style='background-color:rgba(255, 10, 10, 0.4); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            vis: visses[0],
            class: 1,
            trans: 6,
            efecto: {vel: 0.1, timer: 2}
        },
        efecto: {vel: 0.1, timer: 2},
        tail: [
            {marginTop: "-100px"},
            {marginTop: "0px"}
        ]
        
    },
    {// 37 - activa raticate
        nombre: "Esfuerzo",
        damage: 1,
        really: 20,
        distancia: 7,
        anim: "<div style='background-color:rgba(255, 10, 10, 0.4); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 3,
        transis: [
            {backgroundColor: "rgba(255, 10, 10, 0.4)"},
            {backgroundColor: "rgba(255, 255, 10, 0.4)"},
        ],
        count: 20,
        tail: [
            {marginTop: "0px"},
            {marginTop: "-100px"},
            {marginTop: "100px"},
            {marginTop: "0px"}
        ]
    },
    {// 38 - totodile
        nombre: "Pistola de agua",
        damage: 20,
        distancia: 6,
        tipo: 11,
        anim: "<div class='luna' style='color: blue'></div>",
        vis: visses[1],
        raf: true,
        res: true,
        x: 3,
        block: {
            distancia: -4,
            anim: "<div class='colmillo' style='color: blue'></div>",
            tele: 2,
            damage: 30,
            tipo: 11

        },
        count: 4
    },
    {// 39 - totodile
        nombre: "Arañazo",
        damage: 40,
        distancia: 6,
        tele: 1,
        anim: "<div style='background-color: transparent; color: white' class='luna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[4],
        tipo: 0,
        x: -3,
        block: {
            distancia: 4,
            anim: "<div class='colmillo' style='color: white'></div>",
            damage: 30,
            tipo: 1,
        },
    },
    {// 40 - croconaw
        nombre: "Mordisco",
        damage: 60,
        distancia: 6,
        tele: 1,
        anim: "<div class='colmillo' style='color: black'></div>",
        x: 3,
        tipo: 17,
        block: {
            distancia: -4,
            anim: "<div class='colmillo' style='color: black'></div>",
            tele: 2,
            damage: 30,
            tipo: 17,
            stund: 1,
        },
    },
    {// 41 - croconaw
        nombre: "Hidropulso",
        damage: 60,
        distancia: 6,
        tipo: 11,
        anim: "<div class='colmillo' style='color: blue'></div>",
        raf: true,
        res: true,
        x: 3,
        block: {
            distancia: -4,
            anim: "<div class='colmillo' style='color: blue'></div>",
            tele: 2,
            damage: 40,
            tipo: 11,
            stund: 0.5
        },
        count: 4
    },
     {// 42 - feraligatr
        nombre: "Triturar",
        damage: 60,
        distancia: 4,
        tele: 1,
        anim: "<div class='colmillo' style='color: black'></div>",
        x: 3,
        tipo: 17,
        tele: 2,
        stund: 1,
        duplex: 3
    },
    {// 43 - feraligatr
        nombre: "Hidro bomba",
        damage: 80,
        distancia: 6,
        tipo: 11,
        anim: "<div class='circle' style='background-color: rgba(120, 160, 255, 0.8);'></div>",
        vis: visses[0],
        class: 1,
        raf: true,
        res: true,
        x: 3,
        block: {
            distancia: -4,
            anim: "<div class='colmillo' style='color: blue'></div>",
            tele: 2,
            damage: 50,
            tipo: 11,
            stund: 1,
            distance: 4,
            trapX: 30
        },
        count: 7
    },
    {// 44 - activas
        nombre: "Retribucion",
        damage: 1,
        really: 15,
        distancia: 8,
        tele: 1,
        tail: "def",
        estado: {atq: 1.5, vat: 1.5},
        count: 20
    },
    {// 45 activa - feraligatr
        nombre: "Acua cola",
        damage: 50,
        tipo: 11,
        anim: "<div style='color: rgb(100, 150, 255);' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[9],
        tamY: 100,
        distancia: 4,
        estado: {atq: 1.5, vat: 1.5},
        stund: 1.5,
        count: 15
    },
    { // 46 - shuppet salvaje
        nombre: "Sombra vil",
        damage: 0,
        tipo: 7,
        distancia: 2,
        count: 2,
        x: -2,
        bomba: {
            damage: 40,
            tipo: 7,
            distancia: 1,
            efecto: {vel: 0.75, timer: 1.5},
            tiempo: 100,
            block: {
                nombre: "Sombra vil",
                anim: "<div class='persona' style='filter: opacity(0.5) hue-rotate(-154deg)'><img src='img/shuppet.gif' style='transform: rotateY(180deg)'></div>",
                vis: [{width: "0px"}, {width: "100px"}],
                trans: 1,
                damage: 20,
                distancia: 3,
                estado: {coun: [1, 4]},
                tipo: 7
            }
        },
        mana: 5,

    },
    {// 47
        nombre: "Ladron",
        damage: 40,
        tipo: 17,
        distancia: 6,
        count: 20,
        anim: "<div class='golpeMano' style='color: rgb(40, 40, 40)'></div>",
        vis: visses[0],
        descripcion: "Lanza un golpe que si alcanza a un enemigo con objeto se lo pondra a si mismo solo si no tiene ninguno",
        cion: (at, df)=> {
            if (at.obj == 0 && df.stat.obj > 0) {
                at.obj = df.stat.obj
                df.stat.obj = 0
                app.obj1()
            }
        }
    },
    { // 48 - gastly
        nombre: "Lenguetazo",
        damage: 10,
        tipo: 7,
        distancia: 6,
        distance: 5,
        trapX: -30,
        count: 6,
        anim: "<div class='lengua' style='z-Index:0'></div>",
        stundSelf: true,
        class: 1,
    },
    { // 49 - gastly
        nombre: "Polucion",
        damage: 10,
        tipo: 3,
        distancia: 7,
        rapido: 2,
        efecto: {estado: 11, tiempo: 30},
        anim: "<div class='circle' style='background-color: rgba(200, 100, 200, 0.5); width: 100px'></div>",
        vis: visses[0],
        raf: true,
        res: true
    },
    {// 50 - haunter
        nombre: "Puño sombra",
        damage: 60,
        tipo: 7,
        distancia: 7,
        tele: 2,
        anim: "<div class='golpeMano' style='color: purple'></div>",
        efecto: {vel: 0.8, timer: 1.2, count: [1, 1]},
        count: 4
    },
    {// 51 - haunter
        nombre: "Carga toxica",
        damage: 50,
        tipo: 3,
        distancia: 7,
        anim: "<div class='toxico'></div>",
        efecto: {estado: 11, tiempo: 40},
        cion: (at, df)=> {
            if (df.estado > 0) {
                app.ataque(at, false, {
                    damage: 20,
                    tipo: 3,
                    raf: true,
                    res: true,
                    distancia: 9,
                    estado: {raf: 1.5, timer: 3}
                })
            }
        },
        raf: true,
        res: true,
        count: 6
    },
    {// 52 - Gengar
        nombre: "Infortunio",
        damage: 65,
        tipo: 7,
        distancia: 7,
        tele: 2,
        anim: "<div class='fatuo'></div><div class='fatuo'></div>",
        cion: (at, df)=> {
            if (df.estado > 0) {
                app.ataque(at, false, {
                    damage: 0,
                    tipo: 7,
                    raf: true,
                    res: true,
                    distancia: 9,
                    estado: {raf: 1.5, timer: 3.2}
                })
                at.count[0] += 5
            }
        },
        raf: true,
        res: true,
        count: 6
    },
    {// 53 - gengar
        nombre: "Bomba lodo",
        damage: 40,
        tipo: 3,
        distancia: 5,
        raf: true,
        res: true,
        count: 6,
        efecto: {estado: 11, tiempo: 50},
        anim: "<div class='circle' style='background-color: rgba(200, 100, 200, 0.9); width: 100px; margin-top: 50px'></div>",
        vis: visses[0],
        bomba: {
            nombre: "Bomba lodo",
            damage: 0,
            tipo: 3,
            distancia: 2,
            efecto: {estado: 11, tiempo: 50, vel: 0.75},
            tiempo: 30,
            anim: "<div class='circle' style='background-color: rgba(200, 100, 200, 0.9); width: 100px; margin-top: 100px'></div>",
            vis: visses[0],
        }
    },
    {// 54 activa - gengar
        nombre: "Puño sombra",
        damage: 40,
        tipo: 7,
        distancia: 7,
        anim: "<div class='golpeMano' style='color: purple'></div>",
        tele: 2,
        count: 20,
        trans: 3,
        efecto: {vel: 0.8, timer: 5}
    },
    {// 55 petilil
        nombre: "Absorber",
        damage: 40,
        tipo: 12,
        distancia: 7,
        robo: 50,
        anim: "<div class='petalo'></div>",
        class: 2,
        transis: visses[10],
        raf: true,
        res: true
    },
    {// 56 petilil
        nombre: "Encanto",
        tipo: 9,
        damage: 40,
        distancia: 8,
        anim: "<div class='corazon' style='--h: 20px; --w: 20px; --e: -10px; --s: -10px; --c: yellowgreen; margin-top: 30px'></div>",
        stund: 1.2,
        raf: true,
        res: true
    },
    {// 57 lilligant
        nombre: "Gigadrenado",
        damage: 60,
        tipo: 12,
        distancia: 8,
        robo: 50,
        anim: "<div class='tornado' style='--t: 1s'><div class='petalo'></div><div class='petalo'></div></div>",
        block: {
            nombre: "gigadrenado",
            damage: 20,
            distancia: 6,
            tipo: 12,
            robo: 100,
            anim: "<div class='petalo'></div>",
            class: 2,
            transis: visses[10],
        },
        count: 7,
        raf: true,
        res: true
    },
    {// 58 lilligant
        nombre: "Danza aleteo",
        damage: 50,
        tipo: 6,
        distancia: 8,
        estado: {raf: 1.3, vel: 1.1, timer: 4},
        anim: "<div class='petalo' style='--c:green; --b:yellowgreen;'></div>",
        class: 2,
        transis: visses[10],
        y: -3,
        stund: 1.2,
        block: {
            noX: true,
            moveY: 1,
            damage: 30,
            efecto: {vel: 0.75, res: 0.75, timer: 3},
            distancia: 4,
            anim: "<div class='petalo' style='--c:green; --b:yellowgreen;'></div>",
            class: 2,
            transis: visses[10],
            tipo: 6
        },
        inicio: {
            nombre: "",
            damage: 50,
            tipo: 6,
            distancia: -8,
            anim: "<div class='petalo' style='--c:green; --b:yellowgreen;'></div>",
            class: 2,
            transis: visses[10],
            y: -3,
            stund: 1.2,
            block: {
                noX: true,
                moveY: 1,
                damage: 30,
                efecto: {vel: 0.75, res: 0.75, timer: 3},
                distancia: 4,
                anim: "<div class='petalo' style='--c:green; --b:yellowgreen;'></div>",
                class: 2,
                transis: visses[10],
                tipo: 6,
                raf: true,
                res: true  
            },
            raf: true,
            res: true  
        },
        tail: [
            {marginLeft: "0px"},
            {marginLeft: "-50px"},
            {marginLeft: "50px"},
            {marginLeft: "0px"},
        ],
        count: 9,
        stundSelf: true,
        raf: true,
        res: true  
    },
    {// 59 - activa
        nombre: "Sintesis",
        damage: 0,
        distancia: 1,
        tiempo: 40,
        count: 30,
        anim: "<div class='campo' style='height: 100px; width: 300px; z-Index: 0'></div>",
        z: 0,
        fun: (at, x, y)=> {
            if (typeof(x) == "object") {
                return
            }
            let t = 0
            let s = setInterval(() => {
                if ((at.x <= x+300 && at.x >= x) && (at.y <= y && at.y >= y-100)) {
                    if(at.salud+10 < at.vida)
                        at.salud += 1
                    else if (at.salud < at.vida)
                        at.salud = at.vida
                }
                t+= 1
                if (t >= 40) {
                    window.clearInterval(s)
                }
            }, 100);
        }
    },
    {// 60
        nombre: "Dia soleado",
        damage: 70,
        distancia: 7,
        count: 25,
        anim: "<div class='medialuna' style='color: orange'></div>",
        vis: visses[0],
        distance: 5,
        trapX: 30,
        tipo: 10,
        raf: true,
        res: true,
        inicio: {
            nombre: "Dia soleado",
            damage: 40,
            distancia: -10,
            count: 25,
            anim: "<div class='medialuna' style='color: orange'></div>",
            vis: visses[0],
            distance: 5,
            trapX: 30,
            tipo: 10,

        },
        fun: (at)=> {
            if (!at.sol) {
                at.sol = true
                let s = setTimeout(() => {
                    at.sol = false
                    window.clearTimeout(s)
                }, 8000);
            }
        }
    },
     {// 61
        nombre: "Danza lluvia",
        damage: 0,
        tipo: 12,
        distancia: 2,
        count: 20,
        estado: {vat: 2, timer: 3, inmune: 0.9},
        tail:  [
            {boxShadow: "0px 0px 0px 0px blue"},
            {boxShadow: "0px -100px 100px 10px skyblue"},
        ],
        fun: (at)=> {
            if (!at.lluvia) {
                at.lluvia = true
                let s = setTimeout(() => {
                    at.lluvia = false
                    window.clearTimeout(s)
                }, 5000);
            }
        }
    },
    {// 62
        nombre: "Granizo",
        damage: 30,
        tipo: 15,
        distancia: 4,
        stund: 2,
        count: 20,
        anim: "<div style='background-color:#624308; width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1,
        inicio: {
            damage: 30,
            tipo: 15,
            distancia: -4,
            stund: 2,
            count: 20,
            anim: "<div style='background-color:#624308; width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            vis: visses[0],
            class: 1,
        },
        fun: (at)=> {
            if (!at.hielo) {
                at.hielo = true
                let s = setTimeout(() => {
                    at.hielo = false
                    window.clearTimeout(s)
                }, 5000);
            }
        }
    },
    { // 63
        nombre: "Torm. Arena",
        damage: 0,
        distancia: 5,
        count: 20,
        tipo: 5,
        anim: "<div class='flecha'></div>",
        x: -2,
        distance: 3,
        trapX: 30,
        boom: {
            damage: 1,
            distancia: 2,
            trans: 2,
            tipo: 5,
            vel: 10,
            anim: "<div style='background-color: #624308; width: 50px'></div>",
            vis: visses[2],
            distance: 3,
            trapX: 10,
            tiempo: 40,
            tamY: 100
        },
        inicio: {
            damage: 0,
            distancia: 5,
            count: 20,
            tipo: 5,
            anim: "<div class='flecha'></div>",
            x: -2,
            distance: 3,
            trapX: 30,
            boom: {
                damage: 1,
                distancia: 2,
                trans: 2,
                tipo: 5,
                vel: 10,
                anim: "<div style='background-color: #624308; width: 50px'></div>",
                vis: visses[2],
                distance: 3,
                trapX: 10,
                tiempo: 40,
                tamY: 100
            },
        },
        fun: (at)=> {
            if (!at.torm) {
                at.torm = true
                let s = setTimeout(() => {
                    at.torm = false
                    window.clearTimeout(s)
                }, 5000);
            }
        }
    },
    {// 64 
        nombre: "Sustituto",
        damage: 0,
        distancia: 1,
        tiempo: 50,
        estado: {inmune: 0.9, timer: 5, salto: 1.5, caida: 1.5, regen: 1.5},
        stundSelf: true,
        anim: "<div class='persona' style='margin-top: 50px'><img src='img/substitute.gif' style='width: 40px; height: 50px; transform: rotateY(180deg)'></div>",
        count: 30,
    },
    {// 65 - activa de lilligant
        nombre: "Danza petalo",
        damage: 40,
        distancia: 7,
        tele: 1,
        trans: 3,
        tail: "def",
        x: -3,
        bomba: {
            damage: 10,
            distancia: -7,
            efecto: {vel: 0.7, timer: 0.5},
            trans: 3,
            tiempo: 30,
            tamX: 300,
            anim: "<div style='background-color:rgba(200, 255, 200, 0.7); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            vis: visses[0],
            class: 1,
        }
    }
]   

/*
var Tipos = [
    "normal", //0
    "lucha", //1
    "volador", //2
    "veneno", //3
    "tierra", //4
    "roca", //5
    "bicho", //6
    "fantasma", //7
    "acero", //8
    "hada", //9
    "fuego", //10
    "agua", //11
    "planta", //12
    "electrico", //13
    "psiquico", //14
    "hielo", //15
    "dragon", //16
    "siniestro" //17

]
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
    mana: "<div style='background-color: rgba(220, 100, 250)' class='signo'>Mana</div>"
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
        desc: "Aumenta mucho el ataque fisico, pero disminuye tu velocidad.",
        tipo: 1,
        caract: {atq: 2.5, vel: 0.75},
        valor: 2000
    },
    { // 2
        nombre: "Velocidad X",
        descripcion: "Te aumenta la velocidad y elimina cualquier efecto de estado, Se consume al usarlo",
        hab: "Fuga",
        desc: "Al tener poca vida aumenta la velocidad y elimina cualquier efecto de estado.",
        tipo: 3,
        caract: {estado: 2, tiempo: 300},
        valor: 700
    },
    { // 3
        nombre: "Restos",
        descripcion: "Restos de comida que te permiten soportar mejor los golpes mientras mas vida tengas",
        hab: "Compensacion",
        desc: "Aguantas mejor los golpes mientras mas vida tengas",
        tipo: 6,
        caract: {shield: 30, def: 5},
        valor: 2000
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
        venta: 3000
    },
    { //5
        
        hab: "Cacheo",
        desc: "Puede ver enemigos ocultos y saber si tienen objetos. Si el portador esta en su ultima fase y golpea a un enemigo oculto sus habilidades seran silenciadas",
        tipo: 2,
        caract: {stap: 2, antiShield: 2, fun: (at, df)=> {
            if (!df) {
                for (let i = 0; i < app.mods.length; i++) {
                    const mod = app.mods[i];
                    if (mod.buffs) {
                        if (mod.buffs.visible < 1 || mod.stat.obj > 0) {
                            if (mod.buffs.visible < 1) {
                                mod.spr.style.visibility = "visible"
                            }
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
    { // 6
        nombre: "Pañuelo seda",
        descripcion: "Un pañuelo que inlige mas daño al tener la velocidad baja.",
        hab:"Agallas",
        desc: "Si se le baja el atq o cualquier estadistica aumenta el daño que inlige",
        tipo: 2,
        caract: {damage: 4, damagePlus:1.2, fun: (at)=> {
            if (at) {
                if (at.buffs.atq < 1) {
                    at.buffs.atq = 1.5
                }
                let c = 6 - at.buffs.atq - at.buffs.def - at.buffs.res - at.buffs.raf
                if (c < 1) {
                    c = 1
                }
                return c
            }
        }, },
        valor: 2000
    },
    {//7
        nombre: "Baya grana",
        descripcion: "Permite disminuir los puntos de mejora de movimientos comunes. Si se lleva equipada proporciona un pequeño escudo",
        tipo: 2,
        hab: "Espesura", // chhespin y quiladin
        desc: "Al tener poca vida obtiene un escudo y sus habilidades infligen daño adicional a los enemigos dependiendo de su escudo.",
        caract: {combi: {shield: 1}, fun: (at, df, pod)=> {
            if (df && pod.nombre) {
                if (df.spr) {
                    if (at.stat.salud < at.stat.vida/30) 
                    df.stat.salud -= at.buffs.shield + at.pasiva.shield
                } else {
                    if (at.salud < at.vida/30) 
                    df.salud -= at.buffs.shield 
                }
            }
        }, cion: (at, df)=> {
            if(!at || !df) {
                return
            }
            if (df.spr) {
                if (df.stat.salud < df.stat.vida/30) {
                    df.buffs.shield += 20
                    df.timer = 100
                     let s = setTimeout(()=> {
                        df.shield = false
                        window.clearTimeout(s)
                    }, 10000)
                }
            } else {
                if (df.salud < df.vida/30) {
                    df.buffs.shield += 20
                    df.timer = 100
                     let s = setTimeout(()=> {
                        df.shield = false
                        window.clearTimeout(s)
                    }, 10000)
                }
            }
        }}
    },
    {//8
        nombre: "Baya algama",
        descripcion: "Permite disminuir los puntos de mejora de movimientos pasivos. Si se lleva equipada disminuye levemente el atq del rival golpeado",
        tipo: 2, 
        caract: {combo: {atq: 0.9}}
    },
    {//9
        nombre: "Baya ispero",
        descripcion: "Permite disminuir los puntos de mejora de movimientos activos. Si se lleva equipada disminuye levemente la def del rival golpeado",
        tipo: 2, 
        caract: {combo: {def: 0.9}}
        
    },
    {//10
        nombre: "Pokeball",
        descripcion: "Mejoran los ataques de los entrenadores, les añaden efectos de captura.",
        tipo: 4,
        valor: 0,
        caract: {},
        valor: 200
    },
    {// 11
        hab: "Anti balas", // chesnaught
        desc: "Recibe un escudo al tener poca vida, tambien si le golpean con ataques de distancia. Cuando este escudo se activa inflige daño adicional a los enemigos.",
        tipo: 2,
        caract: {combi: {shield: 2}, fun: (at, df, pod)=> {
            if (df && pod.nombre) {
                if (df.spr) {
                    if (at.shield) 
                    df.stat.salud -= at.buffs.shield + at.pasiva.shield
                } else {
                    if (at.shield) 
                    df.salud -= at.buffs.shield 
                    
                }
            }
        }, cion: (at, df, pod)=> {
            let shield = false
            if(!at || !df) {
                app.gamer.shield = false
                return
            }
            if (df.spr) {
                if (df.stat.salud < df.stat.vida/30) {
                    shield = true
                }
            } else {
                if (df.salud < df.vida/30) {
                    shield = true
                }
            }
            if (pod.distancia >= 7) {
                shield = true
            }
            if (shield) {
                df.buffs.shield += 20
                df.shield = true
                df.timer = 100
                let s = setTimeout(()=> {
                    df.shield = false
                    window.clearTimeout(s)
                }, 10000)
            }
        }}
    },
    {// 12
        nombre: "Baya meluce",
        descripcion: "Esta baya permite disminuir los puntos de mejora de movimientos con activa, mejoras y pasiva. Si se lleva equipada disminuira el atq esp del pokemon a quien golpee el usuario",
        tipo: 2,
        caract: {combo: {raf: 0.9}}
    },
    {// 13 - tepig y pignite
        hab: "Mar de llamas",
        desc: "Al tener poca vida obtiene un aumento en la velocidad, velocidad de ataque y probabilidad de criticos",
        tipo: 6,
        caract: {sCrit: 4, cion: (at, df)=> {
            if (at && df) {
                if (df.salud < df.vida*0.3) {
                    app.ataque(df, false, {
                        damage: 0, 
                        distancia: 1,
                        tail:  [
                            {boxShadow: "0px 0px 0px 0px orange"},
                            {boxShadow: "0px -100px 100px 10px red"},
                        ],
                        estado: {vel: 1.5, vat: 1.5, crit: 1.5}
                    })
                }
            }
        }}

    },
    {// 14 - emboar
        hab: "Audaz",
        desc: "Tiene 4 reserbas de ps, al tener poca vida utilizara una de sus reserbas, pero pierde ps al usar sus habilidades. al ser golpeado gana cargas que le permiten restaurar sus reservas de ps",
        tipo: 6,
        caract: {sCrit: 6, cion: (at, df)=> {
            if (at && df) {
                if (df.salud < df.vida*0.3) {
                    if (df.recerba > 1 || !df.recerba) {
                       
                        df.recerba--
                        df.salud = df.vida
                        marcas(df, "recerba", (df.recerba)+"", 5, "recerba", ["background", "white"])
                    }
                    app.ataque(df, false, {
                        damage: 0, 
                        distancia: 1,
                        tail:  [
                            {boxShadow: "0px 0px 0px 0px orange"},
                            {boxShadow: "0px -100px 100px 10px red"},
                        ],
                        estado: {vel: 1.5, vat: 1.5, crit: 1.5}
                    })
                }
                if(!df.recerba){
                    df.recerba = 4
                    marcas(df, "recerba", (df.recerba)+"", 5, "recerba", ["background", "white"])

                }
            } else {
                del(app.gamer, "recerba", "recerba")
            }
        }, fun: (at, df, poder)=> {
            if (at && !df) {
                if (poder.nombre && !poder.recerba) {
                    at.salud -= at.vida*0.1
                    objetos[14].caract.cion(at, at)
                }
            }
        }}
    },
    {// 15 - totodile y croconaw
        hab: "Torrente",
        desc: "Al tener poca vida aumenta su defensa especial y obtiene un escudo.",
        nombre: "Resistencia X",
        descripcion: "Al ser usado aumenta su defensa especial y obtiene un escudo.",
        tipo: 3,
        caract: {estado: 4, tiempo: 15},
        valor: 700
    },
    {// 16 - feraligatr
        nombre: "Cinta fuerte",
        desc: "Aumenta el daño del usuario mientras mas ataque tenga",
        hab: "Potencia bruta",
        desc: "Aumenta el daño infligido al tener mas buffs de ataque",
        tipo: 2,
        caract: {dam: 2, stap: 1},
        valor: 2000
    },
    {// 17 - ursaring
        hab: "Agallas",
        desc: "Aumenta la potencia de su golpe cuando tiene un estado alterado",
        tipo: 2,
        caract: {damage: 2, damagePlus: 10, fun: (at, df)=> {
            if (at && df) {
                if (at.estado > 0) {
                    if (at.estado == 7) {
                        at.estado = 1
                    }
                    at.buffs.atq *= 2
                    at.buffs.vat *= 2
                    return 2
                }
            }
        }}
    },
    {// 18 
        nombre: "Pocion",
        descripcion: "Aumenta un poco de ps del usuario",
        tipo: 3,
        caract: {salud: 30},
        valor: 200
    },
    {// 19
        nombre: "Pildora habilidad",
        descripcion: "Sirve para cambiar la habilidad de un pokemon",
        tipo: 4,
        caract: {},
        valor: 3000
    },
    {// 20
        nombre: "Baya tamate",
        descripcion: "Sirve para disminuir puntos de mejora de habilidades de cambio, si se lleva equipada disminuye la velocidad del enemigo golpeado",
        tipo: 2,
        caract: {combo: {vel: 0.9}},
        
    },
    {// 21
        nombre: "MT 01 - Ladron",
        descripcion: "Se usa para aprender 'ladron'. Si un pokemon la lleva equipada, robara un poco de velocidad de ataque a los enemigos con sus habilidades",
        tipo: 2,
        caract: {combo: {vat: 0.9, timer: 2}, combi: {vat: 1.1, timer: 2}}

    },
    {// 22 - gengar
        nombre: "Globo helio",
        descripcion: "Un globo que aumenta la velocidad de movimiento y ataque al lanzar ataques",
        hab: "Levitacion",
        desc: "Cuando lanza habilidades obtiene velocidad de ataque y movimiento",
        tipo: 2,
        caract: {combi: {vel: 1.2, vat: 1.5, timer: 4}}
    },
    {// 23 - banette 2
        nombre: "Baya Zanama",
        descripcion: "Al lanzar habilidades gana un poco de regeneracion de mana",
        hab: "Insomnio",
        desc: "Lanzar habilidades aumenta la regeneracion de mana. Cuando se le incapacita entrara en estado inmortal y ganara buff de ataque y velocidad, este efecto tiene un enfriamiento de 10s",
        tipo: 2,
        caract: {combi: {mana: 1.2, timer: 3}, tion: (at, df)=> {
            if (at && df) {
                if (df.stund && !df.insomnio) {
                    
                    app.ataque(df, (df.spr != null), {
                        distancia: 2,
                        damage: 0,
                        estado: {estado: 12, tiempo: 5, atq: 1.5, vel: 1.5, timer: 5},
                        tail:  [
                            {boxShadow: "0px 0px 0px 0px gray"},
                            {boxShadow: "0px -100px 100px 10px black"},
                        ],
                    })
                    df.stund = false
                    df.insomnio = true
                    if (df.insomne) {
                        del(df, "insomne", "insomne")
                    }
                    let s = setTimeout(() => {
                        marcas(df, "insomne", "1", 2, "insomne")
                        df.insomnio = false
                        window.clearTimeout(s)
                    }, 10000);
                }
            }
        }}
    },
    {// 24 - petilil y lilligant de teselia
        nombre: "Metronomo",
        descripcion: "Aumenta la velocidad de ataque con cada golpe de habilidades y potencia el daño al tener mas velocidad de ataque",
        hab: "Ritmo propio",
        desc: "Cada golpe aumenta la vel de ataque. Cuando golpeas a un enemigo dejaras un soneto en el, cuando golpees a un enemigo con soneto disminuira tus tiempos de recarga.",
        tipo: 2,
        caract: {combi: {vat: 1.2, timer: 3}, stap: 1, fun: (at, df, pod)=> {
            if (at && df) {
                if (pod.nombre) {
                    if (df.soneto) {
                        at.buffs.salto *= 1.2
                        del(df, "soneto", "soneto")
                    } else {
                        marcas(df, "soneto", "1", 2, "soneto")
                    }
                }
            }
        }}
    }
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
        nombre: "Fantasma de ultratumba",
        damage: 40,
        distancia: 4,
        distance: 5,
        trapX: 30,
        inicio: {
            damage: 40,
            distancia: -4,
            distance: 5,
            trapX: 30,
        },
        estado: {poderes: [3, 4], timer: 10},
        tail:  [
            {boxShadow: "0px 0px 0px 0px gray"},
            {boxShadow: "0px -100px 100px 10px black"},
        ],

    },
    {//2 raticate
        nombre: "Frenesí de raton",
        damage: 90,
        tipo: 0,
        distancia: 4,
        estado: {vat: 1.5, vel: 1.5, crit: 4, timer: 6},
        stund: 1.5,
        x: -2,
        tele: 1,
        block: {
            duplex: 5,
            damage: 30,
            tipo: 0,
            distancia: 3,
            anim: "<div class='colmillo'></div>",
            efecto: {vel: 0.9},
            stundSelf: true,
            mana: 1
        },
        anim: "<div class='colmillo'></div>",

    },
   {// 3 chesnaught
        nombre: "Escudo de espinas",
        damage: 100,
        distancia: 6,
        distance: 3,
        trapX: 30,
        count: 20,
        anim: "<div style='color: rgb(100, 255, 150);' class='medialuna'></div>",
        vis: visses[2],
        tamY: 100,
        x: -3,
        bomba: {
            damage: 30,
            distancia: 2,
            distance: 3,
            trapX: 10,
            count: 20,
            anim: "<div style='color: rgb(100, 255, 150);' class='medialuna'></div>",
            vis: visses[2],
            tiempo: 80,
            trans: 2,
            tamY: 100,
            efecto: {vel: 0.1, timer: 1.2}

        }
   },
   {// 4 emboar
        nombre: "Golpe sofocante",
        damage: 120,
        tipo: 1,
        distancia: 7,
        efecto: {vel: 0.8, atq: 0.75},
        vis: visses[1],
        x: -2,
        tele: 1,
        tail: "def",
        block: {
            distancia: 4,
            estado: {estado: 6, tiempo: 8},
            damage: 60,
            trans: 2,
            distance: 2,
            trapX: 20,
            tipo: 10,
            anim: "<div class='circle' style='background: linear-gradient(rgba(255, 0, 0, 0.281), rgba(255, 166, 0, 0.315)); box-shadow: 0px 0px 50px 50px orange'> </div>",
            vis: visses[2],
            class: 1
        },
        recerba: true
   },
   {// 5 - feraligatr
        nombre: "Cola oceanica",
        damage: 100,
        tipo: 11,
        anim: "<div style='color: rgb(100, 150, 255);' class='medialuna'></div>",
        vis: visses[2],
        class: 2,
        transis: visses[9],
        tamY: 100,
        distancia: 4,
        estado: {atq: 2, vat: 2},
        x: -2,
        stund: 1.5,
        bomba: {
            distancia: 3,
            damage: 60,
            trans: 2,
            distance: 2,
            trapX: 20,
            tipo: 10,
            anim: "<div class='circle' style='background: linear-gradient(rgba(100, 150, 255, 0.281), rgba(0, 166, 255, 0.315)); box-shadow: 0px 0px 50px 50px blue'> </div>",
            vis: visses[1],
            class: 1
        }
   },
   {// 6 - gengar
        nombre: "Sobresalto",
        damage: 0,
        tipo: 7,
        distancia: 1,
        tail:  [
            {boxShadow: "0px 0px 0px 0px gray"},
            {boxShadow: "0px -100px 100px 10px purple"},
        ],
        estado: {visible: 0.9, raf: 1.5, salto: 100, poderes: [0, 0], estado: 2, timer: 5, tiempo: 5},
        fun:()=> {
            app.gamer.ulti = 7
            let s = setTimeout(() => {
                app.gamer.ulti = 6
                window.clearTimeout(s)
            }, 5000);
        }
   },
   {// 7 - gengar
        nombre: "Sobresalto",
        damage: 100,
        tipo: 7,
        distancia: 4,
        anim: "<div class='fatuo'></div><div class='fatuo'></div>",
        raf: true,
        res: true,
        estado: {count: [0, 100], poderes: [-1, -1]},
        inicio: {
            damage: 100,
            tipo: 7,
            distancia: -4,
            anim: "<div class='fatuo'></div><div class='fatuo'></div>",
            raf: true,
            res: true,
            estado: {count: [1, 100]},
        },
        fun:()=> {
            app.gamer.ulti = 6
            app.gamer.buffs.salto = 1
        }
   },
   {// 8 - lilligant
        nombre: "Danza majestuosa",
        damage: 40,
        tipo: 12,
        distancia: 5,
        tele: 1,
        x: -9,
        y: -2,
        xmove: 2,
        bomba: {
            nombre: "Danza majestuosa",
            distancia: 1,
            tipo: 12,
            damage: 60,
            tamX: 400,
            tamY: 300,
            tiempo: 40,
            anim: "<div class='campo' style='height: 300px; width: 600px; z-Index: 0'></div>",
            efecto: {vel: 0.9, timer: 1.2},
            raf: true,
            res: true,
            x: -6,
            y: -1,
            inicio: {
                nombre: "Danza majestuosa",
                distancia: 8,
                damage: 40,
                mana: 1,
                tipo: 12,
                anim: "<div class='tornado' style='--t: 1s; --w: 25px; --h: 50px '><div class='petalo'></div><div class='petalo'></div><div class='petalo'></div>",
                tamY: 300,
                raf: true,
                res: true,
                stundSelf: true,
                duplex: 4,
                tail: [
                    {marginLeft: "0px"},
                    {marginLeft: "-50px"},
                    {marginLeft: "50px"},
                    {marginLeft: "0px"},
                ],
                inicio: {
                    nombre: "Danza majestuosa",
                    distancia: -8,
                    damage: 40,
                    tipo: 12,
                    mana: 1,
                    anim: "<div class='tornado' style='--t: 1s; --w: 25px; --h: 50px '><div class='petalo'></div><div class='petalo'></div><div class='petalo'></div>",
                    y: 300,
                    raf: true,
                    res: true,
                }
            }
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
    "Audaz", //6
    "Quemado", // 7
    "Paralizado", //8
    "Dormido", //9
    "Congelado", //10
    "Envenenado", // 11
    "Inmortal", // 12
    "Intoxicado"
]
var desEstado = [
    "Esta normal, sin ninguna mejora",
    "Aumenta la cantidad de daño fisico, ademas aumenta la velocidad de atq",
    "Aumenta la velocidad de movimiento y de ataque, ademas disminuye el tiempo de espera para recargar vida",
    "Aumenta la cantidad de daño especial, ademas disminuye el tiemp de recarga de habilidades",
    "Aumenta la defensa especial, gana un escudo al obtener este estado y pierde cualquier efecto de control al momento de obtenerlo",
    "Aumenta la defensa fisica, se vuelve inmune al daño por un corto periodo de tiempo",
    "Aumenta el ataque fisico y especial ademas agrega un poco de escudo y velocidad de ataque",
    "Disminuye el ataque y ataque especial y va disminuyendo poco a poco la vida del portador",
    "Disminuye la velocidad de movimiento y ataque del portador",
    "Disminuye las defensas y la velocidad de movimiento del portador",
    "Disminuye los efectos de curacion y escudo del portador y va quitando vida poco a poco",
    "Quita vida progresivamente al portador.",
    "Aumenta mucho la recarga de vida, ademas aumenta tu velocidad.",
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
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px orange)"
        mod.stat.atq *= 2
        mod.stat.raf *= 2
        mod.buffs.vat *= 1.5
        mod.buffs.shield *= 1.5
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px red) hue-rotate(30deg)"
        mod.stat.atq *= 0.5
        mod.stat.raf *= 0.5
        let con = setInterval(() => {
            if (mod.estado == 7) {
                quitarVida(mod, "0.5")
            } else {
                window.clearInterval(con)
            }
        }, 100);
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px yellow) hue-rotate(30deg)"
        mod.stat.vel *= 0.5
        mod.buffs.vat *= 0.5
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px gray) hue-rotate(30deg)"
        mod.stat.def *= 0.75
        mod.stat.res *= 0.75
        mod.stat.vel *= 0.75
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px skyblue) hue-rotate(30deg)"
        mod.buffs.regen *= 0.5
        mod.buffs.shield *= 0.5
        mod.timer = mod.tiempo
        let con = setInterval(() => {
            if (mod.estado == 10) {
                quitarVida(mod, "0.5")
            } else {
                window.clearInterval(con)
            }
        }, 100);
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px purple) hue-rotate(30deg)"
        let con = setInterval(() => {
            if (mod.estado == 11) {
                quitarVida(mod, "1")
            } else {
                window.clearInterval(con)
                mod.veneno = 0
            }
        }, 100);
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 4px 6px black)"
        mod.stat.caida *= 0.2
        if(mod.spr)
        mod.stat.regen *= 3
        else
        mod.regen *= 3
        mod.stat.vel *= 1.5
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px purple) hue-rotate(30deg)"
        let con = setInterval(() => {
            if (mod.estado == 11) {
                let veneno = mod.veneno || 0.5
                mod.veneno = veneno*2
                quitarVida(mod, veneno+"")
            } else {
                window.clearInterval(con)
                mod.veneno = 0
            }
        }, 100);
        return mod
    },
]
function quitarVida(mod=app.gamer, cantidad = 1) {
    if (typeof(cantidad) == "string") {
        let vida = mod.stat.vida || mod.vida
        cantidad = (vida * parseFloat(cantidad))/100
    }
    if (mod.spr) {
        mod.stat.salud -= cantidad
    } else {
        mod.vida -= cantidad
    }
}
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