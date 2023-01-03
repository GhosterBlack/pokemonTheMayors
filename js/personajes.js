var personajes = {
    chara: {
        vida: 90,
        clan: "normal",
        rol: "entrenador",
        edad: "Joven",
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 1.5,
            color: "rgb(140, 250, 180)",
            raf: 1,
            res: 2,
        },
        h: 100,
        poderes: [14, 15],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            anim: "<div style='background-color: transparent; color: white; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
        },
        hab: 0,
        sprs: 5,
        ultiComb: 0,
        ulti: 0,
    },
    chespin: {
        vida: 70,
        clan: "planta",
        rol: "defensivo",
        edad: "Erizo",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "def",  mana2: 30, poten: 4, nombre: "Pinchos fuertes", count: 20
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 1.5,
            color: "rgb(140, 250, 180)",
            raf: 1,
            res: 1.8,
        },
        h: 70,
        poderes: [11, 12],
        basico: {
            damage: 35,
            distancia: 3,
            tipo: 0,
            anim: "<div style='background-color: transparent; color: white; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[5]
        },
        hab: 7,
        sprs: 6,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "quilladin",
        param: 8,
    },
    quilladin: {
        vida: 70,
        clan: "planta",
        rol: "defensivo",
        edad: "Erizo",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "def",  mana2: 30, poten: 4, nombre: "Pinchos fuertes", count: 20
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 2.8,
            atq: 1.7,
            color: "rgb(140, 250, 180)",
            raf: 1,
            res: 2,
        },
        poderes: [20, 21],
        basico: {
            damage: 35,
            distancia: 3,
            tipo: 0,
            anim: "<div style='background-color: transparent; color: white; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[5]
        },
        hab: 7,
        sprs: 7,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "chesnaught",
        param: 12,
    },
    chesnaught: {
        vida: 70,
        clan: "arbol",
        rol: "defensivo",
        edad: "Corazaespín",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "def",  mana2: 30, poten: 4, nombre: "Pinchos fuertes", count: 20
        },
        stat: {
            vel: 1,
            salto: 1.2,
            caida: 1,
            def: 3.5,
            atq: 2,
            color: "rgb(140, 250, 180)",
            raf: 1,
            res: 3,
        },
        h: 120,
        poderes: [22, 23],
        basico: {
            damage: 35,
            distancia: 3,
            tipo: 0,
            anim: "<div style='background-color: transparent; color: white; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[5]
        },
        hab: 11,
        sprs: 8,
        ultiComb: 8,
        ulti: 3,
    },
    tepig: {
        vida: 70,
        clan: "fuego",
        rol: "agil",
        edad: "Cerdo fuego",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "atq",  mana2: 30, poten: 4, nombre: "Grasa en llamas", count: 20
        },
        stat: {
            vel: 1.2,
            salto: 1,
            caida: 1,
            def: 1.5,
            atq: 1.5,
            color: "orange",
            raf: 1.3,
            res: 1.5,
        },
        h: 70,
        poderes: [27, 28],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 10,
            combo: 3,
            efecto: {atq: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: orange; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
        },
        hab: 13,
        sprs: 9,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "pignite",
        param: 8,
    },
    pignite: {
        vida: 100,
        clan: "llamas",
        rol: "agil",
        edad: "Cerdo fuego",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "atq",  mana2: 30, poten: 4, nombre: "Grasa en llamas", count: 20
        },
        stat: {
            vel: 1.4,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 2.3,
            color: "orange",
            raf: 2,
            res: 2,
        },
        poderes: [29, 30],
        h: 100,
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 10,
            combo: 3,
            efecto: {atq: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: orange; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
        },
        hab: 13,
        sprs: 10,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "emboar",
        param: 13,
    },
    emboar: {
        vida: 100,
        clan: "llamas",
        rol: "agil",
        edad: "Cerdo fuego",
        sistema: 2,
        canal: {tanques: [1, 1, 1], carga: [10, 20, 25], efectos: [33, 33, 33], color:"255, 0, 0, "},
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 1,
            def: 2.5,
            atq: 3.4,
            color: "orange",
            raf: 3,
            res: 2.5,
        },
        poderes: [31, 32],
        h: 120,

        basico: {
            damage: 30,
            distancia: 3,
            tipo: 10,
            combo: 3,
            efecto: {atq: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: orange; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
        },
        hab: 14,
        sprs: 11,
        ultiTime: 30,
        ulti: 4,
    },
    totodile: {
        vida: 100,
        clan: "agua",
        rol: "equilibrado",
        edad: "Fauces",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "regen",  mana2: 30, poten: 4, nombre: "Regen acua", count: 20
        },
        stat: {
            vel: 1,
            salto: 1.3,
            caida: 1,
            def: 1.5,
            atq: 1.8,
            color: "blue",
            raf: 1,
            res: 1.5,
        },
        h: 70,
        poderes: [38, 39],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combi: 3,
            estado: {atq: 1.2, timer: 3},
            anim: "<div style='background-color: transparent; color: navy; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 15,
        sprs: 12,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "croconaw",
        param: 8,
    },
    croconaw: {
        vida: 100,
        clan: "agua",
        rol: "equilibrado",
        edad: "Fauces",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "regen",  mana2: 30, poten: 4, nombre: "Regen acua", count: 20
        },
        stat: {
            vel: 1.1,
            salto: 1.3,
            caida: 1,
            def: 2.4,
            atq: 2.6,
            color: "blue",
            raf: 1,
            res: 2.4,
        },
        poderes: [41, 40],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combi: 3,
            estado: {atq: 1.2, timer: 3},
            anim: "<div style='background-color: transparent; color: navy; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 15,
        sprs: 13,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "feraligatr",
        param: 12,
    },
    feraligatr: {
        vida: 120,
        clan: "agua",
        rol: "equilibrado",
        edad: "Fauces",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "regen",  mana2: 30, poten: 4, nombre: "Regen acua", count: 20
        },
        stat: {
            vel: 1.2,
            salto: 1.5,
            caida: 1,
            def: 2.8,
            atq: 3.8,
            color: "blue",
            raf: 1,
            res: 2.8,
        },
        poderes: [43, 42],
        h: 120,

        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combi: 3,
            estado: {atq: 1.2, timer: 3},
            anim: "<div style='background-color: transparent; color: navy; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 15,
        sprs: 14,
        ultiTime: 30,
        ulti: 5,
    },
    shuppet: {
        vida: 70,
        clan: "fantasma",
        rol: "agil",
        edad: "Titere",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "vat",  mana2: 30, poten: 4, nombre: "Rencores pasados", count: 20
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 1.5,
            atq: 1.8,
            color: "rgb(40, 40, 40)",
            raf: 1,
            res: 1,
        },
        h: 70,
        poderes: [5, 6],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {def: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: black; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 5,
        sprs: 3,
        ultiComb: 0,
        ulti: 0,
        method: 3,
        evol: "banette",
        param: 10,
       
    },
    banette: {
        vida: 110,
        clan: "fantasma",
        rol: "agil",
        edad: "Marioneta",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "vat",  mana2: 30, poten: 4, nombre: "Rencores pasados", count: 20, especial: [
                "buffs", {vel: 1.5, atq: 1.5},
                "timer", 80
            ]
        },
        stat: {
            vel: 1.2,
            salto: 1.5,
            caida: 1,
            def: 2.5,
            atq: 3.4,
            color: "rgb(40, 40, 40)",
            raf: 2,
            res: 2,
        },
        poderes: [1, 2],
        h: 80,
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {def: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: black; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 5,
        sprs: 0,
        ultiTime: 5,
        ulti: 1,
    },
    rattata: {
        vida: 80,
        clan: "normal",
        rol: "equilibrado",
        edad: "Raton",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "crit",  mana2: 30, poten: 4, nombre: "Impulsividad", count: 20
        },
        stat: {
            vel: 1.2,
            salto: 1,
            caida: 1,
            def: 1.5,
            atq: 1.8,
            color: "white",
            raf: 1,
            res: 1,
        },
        h: 70,
        poderes: [7, 8],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {vel: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; color: white; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 2,
        sprs: 2,
        ultiComb: 0,
        ulti: 0,
        method: 3,
        evol: "raticate",
        param: 8,
    },
    raticate: {
        vida: 100,
        clan: "normal",
        rol: "equilibrado",
        edad: "Raton",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "crit",  mana2: 30, poten: 4, nombre: "Impulsividad", count: 20
        },
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 1,
            def: 2.5,
            atq: 2.5,
            color: "white",
            raf: 1,
            res: 2,
        },
        h: 100,
        poderes: [9, 10],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {vel: 0.75, timer: 3},
            anim: "<div style='background-color: transparent; height: 25px' class='colmillo'></div>",
        },
        hab: 6,
        sprs: 4,
        ultiTime: 20,
        ulti: 2,
    },
    gastly: {
        vida: 80,
        clan: "espectro",
        rol: "agil",
        edad: "Gas",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "raf",  mana2: 30, poten: 4, nombre: "Travesuras", count: 20
        },
        stat: {
            vel: 1.4,
            salto: 1,
            caida: 1,
            def: 1,
            atq: 1,
            color: "purple",
            raf: 1.8,
            res: 1,
        },
        poderes: [48, 49],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {res: 0.9, timer: 3},
            anim: "<div style='background-color: transparent; color: pink; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 22,
        sprs: 20,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "haunter",
        param: 8,
    },
    haunter: {
        vida: 80,
        clan: "espectro",
        rol: "agil",
        edad: "Gas",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "raf",  mana2: 30, poten: 4, nombre: "Travesuras", count: 20
        },
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 1,
            def: 1.2,
            atq: 1,
            color: "purple",
            raf: 2.5,
            res: 1.3,
        },
        h: 100,
        poderes: [50, 51],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {res: 0.9, timer: 3},
            anim: "<div style='background-color: transparent; color: pink; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 22,
        sprs: 21,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "gengar",
        param: 14,
    },
    gengar: {
        vida: 80,
        clan: "espectro",
        rol: "agil",
        edad: "sombra",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "raf",  mana2: 30, poten: 4, nombre: "Travesuras", count: 20
        },
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 1,
            color: "purple",
            raf: 3.1,
            res: 2.1,
        },
        h: 120,
        poderes: [52, 53],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combo: 3,
            efecto: {res: 0.9, timer: 3},
            anim: "<div style='background-color: transparent; color: pink; margin-top: 40px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 22,
        sprs: 22,
        ultiTime: 10,
        ulti: 6,
    },
    petilil: {
        vida: 80,
        clan: "planta",
        rol: "ofensivo",
        edad: "Bulbo",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "raf",  mana2: 30, poten: 4, nombre: "Ramaje", count: 20
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 1.2,
            atq: 1,
            color: "yellowgreen",
            raf: 1.7,
            res: 1.2,
        },
        h: 70,
        poderes: [55, 56],
        basico: {
            damage: 30,
            distancia: 6,
            tipo: 0,
            combi: 3,
            estado: {salto: 1.2, timer: 3},
            anim: "<div class='petalo'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 24,
        sprs: 23,
        ultiComb: 0,
        ulti: 0,
        method: 1,
        evol: "lilligant",
        param: 14,
    },
    lilligant: {
        vida: 120,
        clan: "planta",
        rol: "ofensivo",
        edad: "Bulbo",
        sistema: 1,
        canal: {
            mana: 100, charge: 2, mejora: "raf",  mana2: 30, poten: 4, nombre: "Ramaje", count: 20
        },
        stat: {
            vel: 1.2,
            salto: 1.5,
            caida: 1,
            def: 1.5,
            atq: 1,
            color: "yellowgreen",
            raf: 2.5,
            res: 1.5,
        },
        h: 100,
        poderes: [57, 58],
        basico: {
            damage: 30,
            distancia: 6,
            tipo: 0,
            combi: 3,
            estado: {salto: 1.2, timer: 3},
            anim: "<div class='petalo'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[9]
        },
        hab: 24,
        sprs: 24,
        ultiTime: 25,
        ulti: 8,
    }
}
function tipos(tipo) {
    var tips = {
        normal: t([0], [1], [], [7]),
        lucha: t([1], [2, 9, 14], [6, 5, 17], []),
        volador: t([2], [5, 13, 15], [1, 12, 6], [4]),
        veneno: t([3], [14, 4], [3, 9, 12, 6, 1], []),
        tierra: t([4], [11, 12, 15], [5, 3, 10], [13]),
        roca: t([5], [1, 12, 11, 8], [0, 2, 3, 10], []),
        bicho: t([6], [5, 2, 10], [1, 12, 4], []),
        fantasma: t([7], [7, 17], [3, 6], [0, 1]),
        mineral: t([5, 4], [11, 12, 1, 15, 4, 8], [0, 2, 5, 3, 6, 10], [13]),
        planta: t([12], [2, 3, 6, 10, 15], [4, 11, 12, 13], []),
        arbol: t([1, 12], [2, 3, 10, 14, 15, 9], [4, 5, 11, 12, 13, 17]),
        fuego: t([10], [4, 5, 11], [6, 8, 10, 12, 15, 9], []),
        llamas: t([10, 1], [2, 4, 11, 14], [8, 10, 12, 15, 17], [6]),
        agua: t([11], [12, 13], [8, 10, 11, 15]),
        espectro: t([7, 3], [4, 14, 17, 7], [12, 9, 6, 3], [0, 1])
    }
    return tips[tipo]
    function t(tipo=[0], debil=[], resis=[], inmune=[]) {
        return {tipo:tipo, debil:debil, resis:resis, inmune:inmune}
    }
}
/* 
 Tipos:
 
*/
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
var entidades = {
    // stats, tipos, sprite, poderes, evols
    rattata: [
        {
            vel: 1.2,
            def: 1.1,
            atq: 1.2,
            obj: 7,
            color: "white",
            hab: 2,
            h: 70,
            objProb: 7,
            huevo: "campo",
            tipo: 2
            
        },
        tipos("normal"),
        2,
        [7, 8]
    ],
    bagstone: [
        {
            vida: 10000,
            def: 1,
            res: 1,
            iv: true
        },{},2,[0,0]
    ],
    shuppet: [
        {
            vida: 70,
            def: 1.1,
            atq: 1.2,
            color: "black",
            hab: 0,
            h: 70,
            huevo: "amorfo",
            tipo: 4
        },
        tipos("fantasma"),
        3,
        [46, 6]
    ],
    petilil: [
        {
            def: 1.2,
            color: "yellowgreen",
            raf: 1.7,
            res: 1.2,
            hab: 24,
            tipo: 6,
            h: 70,
            huevo: "planta",
            basico: {
                damage: 30,
                distancia: 6,
                tipo: 0,
                combi: 3,
                estado: {salto: 1.2, timer: 3},
                anim: "<div class='petalo' style='--c: red'></div>",
                vis: visses[0],
                class: 2,
                transis: visses[9]
            }
        },
        tipos("planta"),
        23,
        [55, 56]
    ],
    dana: [
        {
            color: "white",
            hab: 0,
            h: 120
        },
        {},
        15,
        [0, 0]
    ],
    profesora: [
        {
            color: "white",
            hab: 0,
            h: 150
        },
        {}, 16, [0,0]
    ],
    tendero: [
        {
            color: "white",
            hab: 0,
            h: 120
        },
        {},
        17,
        [0, 0]
    ],
    cazabichos: [
        {
            color: "yellowgreen",
            hab: 0,
            h: 120
        },{},19,[0, 0]
    ],
    chica: [
        {
            color: "pink",
            hab: 0,
            h: 120
        },
        {},18,[0, 0]
    ],
}
function bp(nombre) {
    for (let i = 0; i < poderes.length; i++) {
        const poder = poderes[i];
        if (poder.nombre == nombre) {
            return i
        }
    }
}
var maxStats = {
    vel: 3,
    salto: 3,
    caida: 1,
    def: 4,
    atq: 4,
    raf: 4,
    res: 4
}
var historias = {
   
}
const clases = {
   defensivo: "Tienen un gran aguante y/o recuperacion de daño, lo que les permite ser buenos cambios en momentos donde sea requerido soportar daño",
   ofensivo: "No tienen mucho aguante, pero compensan dicha falencia con ataques a distancia muy potentes",
   agil: "Son rapidos y brutales, sus habilidades le permiten escapar facilmente de las situaciones de riesgo o perserguir a sus enemigos",
   auxiliar: "Tienen habilidades que le permiten ayudar a su equipo, a veces sin estar en el campo.",
   equilibrado: "Son expertos en el ataque cuerpo a cuerpo, aguantan bien y atacan bien.",
   entrenador: "Permiten sacarle provecho a los pokemon de su equipo o a los pokemon salvajes."
}