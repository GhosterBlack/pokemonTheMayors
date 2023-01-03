const clasicMove = [[//0
{transform: "rotate(0deg)"},
{transform: "rotate(360deg)"},
{transform: "rotate(0deg)"},
{transform: "rotate(360deg)"},
{transform: "rotate(0deg)"},
{transform: "rotate(360deg)"}
], {
    duration: 100,
    iterations: 1,
}
]

var galeria = [
    { // 0
        normal: "img/banette.gif",
        mover: ["img/banette.gif", "img/banette.gif"],
        basico: "img/banette.gif",
        especial:"img/banette.gif",
        salto: "img/chara/salto.png",
        caida: "img/banette.gif",
        ulti: "img/banette.gif",
        perder: "img/banette.gif"
    },
    { // 1
        normal: "img/placeholder.png",
        mover: [
            "img/placeholder.png",
            "img/placeholder.png",
        ],
        basico: "img/placeholder.png",
        especial:"img/placeholder.png",
        salto: "img/placeholder.png",
        perder: "img/placeholder.png",
        caida: "img/placeholder.png",
        ulti: "img/placeholder.png"
    },
    chara("rattata"),//2
    chara("shuppet"),//3,
    chara("raticate"), // 4 
    chara("chara1", "png"), //5
    chara("chespin"), // 6
    chara("quilladin"), // 7
    chara("chesnaught"), // 8
    chara("tepig"), // 9
    chara("pignite"), // 10
    chara("emboar"), // 11
    chara("totodile"), //12
    chara("croconaw"), //13
    chara("feraligatr"), //14
    chara("profesora", "png"), //15
    chara("Sylvan", "png"), //16
    chara("montañero", "png"), //17
    chara("chica", "png"), //18
    chara("cazabichos", "gif"), //19
    chara("gastly"), // 20
    chara("haunter"), //21
    chara("gengar"), //22
    chara("petilil"), //23
    chara("lilligant"), //24
    
]
function chara(name, format="gif") {
    return {//4
        normal: "img/"+name+"."+format,
        basico: "img/"+name+"."+format,
        especial: "img/"+name+"."+format,
        salto: "img/"+name+"."+format,
        perder: "img/"+name+"."+format,
        caida: "img/"+name+"."+format,
        ulti: "img/"+name+"."+format,
        mover: [
            "img/"+name+"."+format,
            "img/"+name+"."+format
        ]
    }
}
var simbols = {
    area: "img/buffs/area.png",
    buff: "img/buffs/buff.png",
    dash: "img/buffs/dash.png",
    pain: "img/buffs/pain.png",
    shot: "img/buffs/shot.png",
    string: "img/buffs/string.png"
}
function oficial(theme) {
    return theme+" - GameFreak/Pokemon Company/Nintendo"
}
const songs = {
    littleroot: {
        credito: oficial("Littleroot Town Theme"),
        url: "music/littleroot.mp3"
    },
    littlerootRemix: {
        credito: "Hyper Potions - Littleroot Town Theme - GameChops",
        url: "music/littleroot remix.mp3"
    },
    ftdcPiano: {
        credito: "For The Damaged Coda - Blonde redhead (Erik C 'Piano Man')",
        url: "music/For The Damaged Coda piano.mp3"
    }
}