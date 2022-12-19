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
    { //2
        normal: "img/rattata.webp",
        mover: [
            "img/rattata.webp",
            "img/rattata.webp",
        ],
        basico: "img/rattata.webp",
        especial:"img/rattata.webp",
        salto: "img/rattata.webp",
        perder: "img/rattata.webp",
        caida: "img/rattata.webp",
        ulti: "img/rattata.webp"
    },
    {//3
        normal: "img/shuppet.webp",
        basico: "img/shuppet.webp",
        especial: "img/shuppet.webp",
        salto: "img/shuppet.webp",
        perder: "img/shuppet.webp",
        caida: "img/shuppet.webp",
        ulti: "img/shuppet.webp",
        mover: [
            "img/shuppet.webp",
            "img/shuppet.webp"
        ]
    },
    {//4
        normal: "img/raticate.webp",
        basico: "img/raticate.webp",
        especial: "img/raticate.webp",
        salto: "img/raticate.webp",
        perder: "img/raticate.webp",
        caida: "img/raticate.webp",
        ulti: "img/raticate.webp",
        mover: [
            "img/raticate.webp",
            "img/raticate.webp"
        ]
    },
    chara("chara1"), //5
    chara("chespin"), // 6
    chara("quilladin"), // 7
    chara("chesnaught"), // 8
    chara("tepig"), // 9
    chara("pignite", "webp"), // 10
    chara("emboar", "webp"), // 11
    chara("totodile", "webp"), //12
    chara("croconaw", "webp"), //13
    chara("feraligatr"), //14
    chara("profesora"), //15
    chara("Sylvan"), //16
    chara("montañero"), //17
    
]
function chara(name, format="png") {
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