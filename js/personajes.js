var personajes = {
    shuppet: {
        vida: 70,
        clan: "fantasma",
        rol: "habil",
        edad: "Titere",
        sistema: 1,
        canal: {
            mana: 100, charge: 5, mejora: "atq",  mana2: 30, poten: 4, nombre: "Rencores pasados", count: 20
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
            h: 120,
            iv: true
        },
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
        method: 1,
        evol: "banette",
        param: 18,
       
    },
    banette: {
        vida: 110,
        clan: "fantasma",
        rol: "habil",
        edad: "Marioneta",
        sistema: 1,
        canal: {
            mana: 100, charge: 5, mejora: "atq",  mana2: 30, poten: 4, nombre: "Rencores pasados", count: 20
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 2.8,
            color: "rgb(40, 40, 40)",
            raf: 1,
            res: 1.6,
        },
        poderes: [1, 2],
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
        ultiComb: 8,
        ulti: 1,
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
        mineral: t([5, 4], [11, 12, 1, 15, 4, 8], [0, 2, 5, 3, 6, 10], [13])
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
            vel: 2,
            obj: 0,
            color: "white",
            hab: 1,
            h: 70,
            iv: true,
        },
        tipos("normal"),
        2,
        [1, 1]
    ],
    bagstone: [
        {
            vida: 10000,
            def: 1,
            res: 1,
            obj: 1,
            objProb: 10,
            iv: true
        },{},2,[0,0]
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
    tanque: "No suelen golpear muy fuerte por si solos pero aguantan bien el daño. Si una batalla se alarga mucho confia en cambiar a uno de ellos para no perder la partida.",
    asistente: "No golpean fuerte ni son buenos aguantando daño, pero sus habilidades surten efecto aun si estan fuera de combate, cambiar a un asistente no crea tiempo de recarga al cambio.",
    habil: "Basan su eficacia en sus habilidades, suele tener habilidades de movimiento que les permiten escapar en caso de nececitarlo o alcanzar a algun enemigo. No tienen mucha distancia \n\
     en sus ataques basicos por lo que dependen de sus habilidades",
    tirador: "Sus ataques basicos y a veces sus habilidades golpean a distancia considerable, suelen causar mucho daño pero tener muy poca resistencia, es muy bueno para pasar niveles, pero \n\
    se cuidadoso al usarlo contra jefes.",
    especial: "Suelen usar el daño rafaga para sus ataques, tienen distancia en muchas ocaciones y aguantan bien, pero solo por uno de los dos lados. Al tener buena defensa fisica tendran baja defensa rafaga \n\
    o biceversa, usalos en niveles donde los enemigos usen un solo tipo de daño.",
    fisico: "Golpean a los rivales usando daño fisico, tienen buena distancia con sus habilidades y aguanta bien. Usalos contra jefes para derrotarlos mas rapidamente."
}