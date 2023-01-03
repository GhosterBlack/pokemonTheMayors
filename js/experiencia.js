const emblemas = {
    chara: {
        movs: [],
        stats: {
            def: 0.01,
            res: 0.01,
            shield: 0.01,
            caida: 0.01
        },
        huevo: "humano",
        experiencia: 1
    },
    chespin: {
        movs: [
            getEmblema("maldicion"),
            getEmblema("drenadoras"),
            getEmblema("corpulencia"),
            getEmblema("divide dolor"),
            getEmblema("danza espada"),
            getEmblema("rizo defensa"),
            getEmblema("super diente"),
            getEmblema("proteccion"),
            getEmblema("golpe aereo"),
            getEmblema("gigadrenado"),
            getEmblema("puño drenaje"),
        ],
        stats: {
            def: 0.1,
            res: 0.1,
            shield: 0.1,
            regen: 0.05,
            caida: 0.05,
            atq: 0.05
        },
        huevo: "campo",
        experiencia: 1
    },
    quilladin: {
        movs: [
            getEmblema("maldicion"),
            getEmblema("drenadoras"),
            getEmblema("corpulencia"),
            getEmblema("divide dolor"),
            getEmblema("danza espada"),
            getEmblema("rizo defensa"),
            getEmblema("super diente"),
            getEmblema("proteccion"),
            getEmblema("golpe aereo"),
            getEmblema("gigadrenado"),
            getEmblema("puño drenaje"),
        ],
        stats: {
            def: 0.13,
            res: 0.11,
            shield: 0.11,
            regen: 0.08,
            caida: 0.08,
            atq: 0.08
        },
        huevo: "campo",
        experiencia: 1
    },
    chesnaught: {
        movs: [
            getEmblema("maldicion"),
            getEmblema("drenadoras"),
            getEmblema("corpulencia"),
            getEmblema("divide dolor"),
            getEmblema("danza espada"),
            getEmblema("rizo defensa"),
            getEmblema("super diente"),
            getEmblema("proteccion"),
            getEmblema("golpe aereo"),
            getEmblema("gigadrenado"),
            getEmblema("puño drenaje"),
            getEmblema("barrera espinosa")
        ],
        stats: {
            def: 0.2,
            res: 0.15,
            shield: 0.15,
            regen: 0.1,
            caida: 0.1,
            atq: 0.1
        },
        huevo: "campo",
        experiencia: 1
    },
    rattata: {
        movs: [
            getEmblema("foco energia"),
            getEmblema("avivar"),
            getEmblema("chirrido"),
            getEmblema("super diente"),
            getEmblema("doble equipo"),
            getEmblema("aguante"),
            getEmblema("proteccion"),
            getEmblema("aguzar"),
            getEmblema("finta"),
            getEmblema("imagen"),
            getEmblema("ladron"),
        ],
        stats: {
            atq: 0.1,
            vel: 0.05,
            vat: 0.1,
            crit: 0.2,
            def: 0.05,
            res: 0.05
        },
        huevo: "campo",
        experiencia: 1
    },
    shuppet: {
        movs: [
            getEmblema("chirrido"),
            getEmblema("paz mental"),
            getEmblema("maldicion"),
            getEmblema("imagen"),
            getEmblema("rencor"),
            getEmblema("mismo destino"),
            getEmblema("tinieblas"),
            getEmblema("finta"),
            getEmblema("bola sombra"),
            getEmblema("fuego fatuo"),
            getEmblema("ladron"),
            getEmblema("sustituto"),


        ],
        stats: {
            atq: 0.1,
            res: 0.09,
            def: 0.11,
            shield: 0.1,
            regen: 0.05,
            crit: 0.1
        },
        huevo: "amorfo",
        experiencia: 1
    },
    raticate: {
        movs: [
            getEmblema("foco energia"),
            getEmblema("avivar"),
            getEmblema("chirrido"),
            getEmblema("super diente"),
            getEmblema("doble equipo"),
            getEmblema("aguante"),
            getEmblema("proteccion"),
            getEmblema("aguzar"),
            getEmblema("finta"),
            getEmblema("imagen"),
            getEmblema("danza espada"),
            getEmblema("ladron"),
            getEmblema("esfuerzo"),


        ],
        stats: {
            atq: 0.15,
            vel: 0.1,
            vat: 0.15,
            crit: 0.25,
            def: 0.1,
            res: 0.1
        },
        huevo: "campo",
        experiencia: 1
    },
    banette: {
        movs: [
            getEmblema("chirrido"),
            getEmblema("paz mental"),
            getEmblema("maldicion"),
            getEmblema("imagen"),
            getEmblema("rencor"),
            getEmblema("mismo destino"),
            getEmblema("tinieblas"),
            getEmblema("finta"),
            getEmblema("bola sombra"),
            getEmblema("fuego fatuo"),
            getEmblema("ladron"),
            getEmblema("sustituto"),
            getEmblema("robo"),
            getEmblema("rabia banette")

        ],
        stats: {
            atq: 0.15,
            res: 0.11,
            def: 0.15,
            shield: 0.12,
            regen: 0.09,
            crit: 0.15
            
        },
        huevo: "amorfo",
        experiencia: 1
    },
    tepig: {
        movs: [
            getEmblema("rizo defensa"),
            getEmblema("avivar"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("refuerzo"),
            getEmblema("hierba lazo"),
            getEmblema("doble equipo"),
            getEmblema("rugido"),
            getEmblema("proteccion"),
            getEmblema("imagen")

        ],
        stats: {
            atq: 0.05,
            raf: 0.05,
            res: 0.05,
            def: 0.05,
            crit: 0.05,
            vat: 0.01
        },
        huevo: "campo",
        experiencia: 1
    },
    pignite: {
        movs: [
            getEmblema("rizo defensa"),
            getEmblema("avivar"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("refuerzo"),
            getEmblema("hierba lazo"),
            getEmblema("doble equipo"),
            getEmblema("rugido"),
            getEmblema("proteccion"),
            getEmblema("imagen")

        ],
        stats: {
            atq: 0.08,
            raf: 0.08,
            res: 0.08,
            def: 0.08,
            crit: 0.08,
            vat: 0.03
        },
        huevo: "campo",
        experiencia: 1
    },
    emboar: {
        movs: [
            getEmblema("rizo defensa"),
            getEmblema("avivar"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("refuerzo"),
            getEmblema("hierba lazo"),
            getEmblema("doble equipo"),
            getEmblema("rugido"),
            getEmblema("proteccion"),
            getEmblema("imagen"),
            getEmblema("golpe calor"),


        ],
        stats: {
            atq: 0.18,
            raf: 0.15,
            res: 0.1,
            def: 0.1,
            crit: 0.08,
            vat: 0.015
        },
        huevo: "campo",
        experiencia: 1
    },
    totodile: {
        movs: [
            getEmblema("agilidad"),
            getEmblema("chirrido"),
            getEmblema("avivar"),
            getEmblema("danza dragon"),
            getEmblema("danza espada"),
            getEmblema("doble equipo"),
            getEmblema("aguante"),
            getEmblema("proteccion"),
            getEmblema("rugido"),
            getEmblema("retribucion"),
            getEmblema("imagen")
        ],
        stats: {
            atq: 0.08,
            res: 0.08,
            def: 0.08,
            shield: 0.08,
            vat: 0.01,
            regen: 0.05
        },
        huevo: "monstruo",
        experiencia: 1
    },
    croconaw: {
        movs: [
            getEmblema("agilidad"),
            getEmblema("chirrido"),
            getEmblema("avivar"),
            getEmblema("danza dragon"),
            getEmblema("danza espada"),
            getEmblema("doble equipo"),
            getEmblema("aguante"),
            getEmblema("proteccion"),
            getEmblema("rugido"),
            getEmblema("retribucion"),
            getEmblema("imagen")
        ],
        stats: {
            atq: 0.1,
            res: 0.1,
            def: 0.1,
            shield: 0.1,
            vat: 0.015,
            regen: 0.1
        },
        huevo: "monstruo",
        experiencia: 1
    },
    feraligatr: {
        movs: [
            getEmblema("agilidad"),
            getEmblema("chirrido"),
            getEmblema("avivar"),
            getEmblema("danza dragon"),
            getEmblema("danza espada"),
            getEmblema("doble equipo"),
            getEmblema("aguante"),
            getEmblema("proteccion"),
            getEmblema("rugido"),
            getEmblema("retribucion"),
            getEmblema("imagen"),
            getEmblema("acua cola"),
            {nombre: "Fuerza bruta", atq: 0.1, def: 0.1, crit: 0.2, max: 8, item: 19, baya: 20, cambio: ["hab", 16],
             uso: "Aumento de caracteristica", d: "Aumenta un poco el ataque, defensa y probabilidad de criticos, esta habilida proporciona la posibilidad de cambiar la habilidad pasiva por 'Potencia bruta' que aumenta el daño al tener mas buffs de ataque"
            }
        ],
        stats: {
            atq: 0.15,
            res: 0.15,
            def: 0.15,
            shield: 0.15,
            vat: 0.02,
            regen: 0.11
        },
        huevo: "monstruo",
        experiencia: 1
    },
    gastly: {
        movs: [
            getEmblema("maquinacion"),
            getEmblema("paz mental"),
            getEmblema("recuperacion"),
            getEmblema("doble equipo"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("mismo destino"),
            getEmblema("ladron"),
            getEmblema("gigadrenado"),
            getEmblema("hipnosis"),
            getEmblema("tinieblas"),
            getEmblema("bola sombra")
        ],
        huevo: "amorfo",
        experiencia: 1,
        stats: {
            raf: 0.05,
            def: 0.01,
            res: 0.01,
            vat: 0.01,
            
        }
    },
    haunter: {
        movs: [
            getEmblema("maquinacion"),
            getEmblema("paz mental"),
            getEmblema("recuperacion"),
            getEmblema("doble equipo"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("mismo destino"),
            getEmblema("ladron"),
            getEmblema("gigadrenado"),
            getEmblema("hipnosis"),
            getEmblema("tinieblas"),
            getEmblema("bola sombra"),
            getEmblema("come sueños")
        ],
        huevo: "amorfo",
        experiencia: 1,
        stats: {
            raf: 0.08,
            def: 0.08,
            res: 0.08,
            vat: 0.1,
            vel: 0.02
        }
    },
    gengar: {
        movs: [
            getEmblema("maquinacion"),
            getEmblema("paz mental"),
            getEmblema("recuperacion"),
            getEmblema("doble equipo"),
            getEmblema("maldicion"),
            getEmblema("fuego fatuo"),
            getEmblema("mismo destino"),
            getEmblema("ladron"),
            getEmblema("gigadrenado"),
            getEmblema("hipnosis"),
            getEmblema("tinieblas"),
            getEmblema("bola sombra"),
            getEmblema("come sueños"),
            {nombre: "puño sombra", vat: 0.1, crit: 0.1, max: 5, min: 7, baya: 12, pasiva: [2, {stap: 12}], activa: 54,
             uso: "Aumento de caracteristica", d: "Aumenta la velocidad de ataque y probabilidad de criticos. Al nivel 7 golpeara mas fuerte al tener mas reduccion de enfriamiento. Puede activar puño sombra, lanzando un golpe que ralentiza y transporta al usuario."},
        ],
        huevo: "amorfo",
        experiencia: 1,
        stats: {
            raf: 0.11,
            def: 0.1,
            res: 0.1,
            vat: 0.11,
            vel: 0.02
        }
    },
    petilil: {
        movs: [
            getEmblema("drenadoras"),
            getEmblema("gigadrenado"),
            getEmblema("refuerzo"),
            getEmblema("proteccion"),
            getEmblema("sintesis"),
            getEmblema("desarrollo"),
            getEmblema("dia soleado"),
            getEmblema("hierba lazo"),
            getEmblema("aguante"),
            getEmblema("sustituto")

        ],
        stats: {
            raf: 0.05,
            def: 0.01,
            res: 0.01,
            salto: 0.05,
            vel: 0.01
        },
        huevo: "planta",
        experiencia: 1
    },
    lilligant: {
        movs: [
            getEmblema("drenadoras"),
            getEmblema("gigadrenado"),
            getEmblema("refuerzo"),
            getEmblema("proteccion"),
            getEmblema("sintesis"),
            getEmblema("desarrollo"),
            getEmblema("dia soleado"),
            getEmblema("hierba lazo"),
            getEmblema("aguante"),
            getEmblema("sustituto"),
            getEmblema("danza petalo")

        ],
        stats: {
            raf: 0.12,
            def: 0.08,
            res: 0.08,
            salto: 0.1,
            vel: 0.05
        },
        huevo: "planta",
        experiencia: 1
    },
};
function getEmblema  (nombre){
    let emblemas = {
        ["foco energia"]: { atq: 0.1, crit: 0.5, max: 14, baya: 7, uso: "Aumento de caracteristica", d: "aumenta la prob. Critico en 5 puntos y el ataque en 1 punto"},
        ["avivar"]: {atq: 0.1, raf: 0.1, max: 18, baya: 7, uso: "Aumento de caracteristica", d: "aumenta el atq especial y el ataque en 1 punto"},
        ["danza dragon"]: {atq: 0.1, baya: 7, vel: 0.1, max: 8, uso: "Aumento de caracteristica", d: "aumenta la velocidad de movimiento y el ataque en 1 punto"},
        ["danza espada"]: {atq: 0.25, baya: 7, max: 8, uso: "Aumento de caracteristica", d: "aumenta el ataque en 2.5 puntos"},
        ["afila garras"]: {vel: 0.05, baya: 7, vat: 0.1, max: 10, uso: "Aumento de caracteristica", d: "aumenta la velocidad de movimiento y la vel. ataque en 1 punto"},
        ["chirrido"]: {vat: 0.25, baya: 7, max: 10, uso: "Aumento de caracteristica", d: "aumenta la velocidad de ataque en 2.5 puntos"},
        ["recuperacion"]: {caida: -0.2,baya: 7, max: 8, uso: "Aumento de caracteristica", d: "aumenta la velocidad de recuperacion de ps en 2 puntos"},
        ["maquinacion"]: {raf: 0.25,baya: 7, max: 8, uso: "Aumento de caracteristica", d: "aumenta el ataque especial en 2.5 puntos"},
        ["agilidad"]: {vel: 0.1,baya: 7, max: 8, uso: "Aumento de caracteristica", d: "aumenta la velocidad de movimiento en 1 punto"},
        ["defensa ferrea"]: {def: 0.25,baya: 7, max: 12, uso: "Aumento de caracteristica", d: "aumenta la defensa fisica en 2.5 puntos"},
        ["amnesia"]: {res: 0.25,baya: 7, max: 12, uso: "Aumento de caracteristica", d: "aumenta la defensa especial en 2.5 puntos"},
        ["masa cosmica"]: {def: 0.15, baya: 7, res: 0.15, max: 14, uso: "Aumento de caracteristica", d: "aumenta la def y def. especial en 1 punto"},
        ["paz mental"]: {raf: 0.1, res: 0.15,baya: 7, max: 12, uso: "Aumento de caracteristica", d: "aumenta la def. especial y atq. especial en 1 punto"},
        ["corpulencia"]: {atq: 0.1,baya: 7, def: 0.15, max: 12, uso: "Aumento de caracteristica", d: "aumenta la defensa y el ataque en 1 punto"},
        rugido: {def: 0.1, res: 0.1, max: 10, baya: 7, uso: "Aumento de caracteristica", d: "Aumenta la defensa y defensa especial en un punto"},
        rencor:{atq: 0.12, max: 3, baya: 8, pasiva: [2, {damage: 11, damagePlus: 0.3}], uso: "Aumento de caracteristica", d: "Aumenta el ataque en 1.2 puntos, mientras menos mana tenga el usuario mas fuerte golpeara"},
            
        proteccion: {shield: 0.1, activa: 13,baya: 9, max: 5, min: 10, uso: "Salvar", d: "agrega un escudo del 10% (10*nivel de mejora). agrega la habilidad 'proteccion' al usuario se requiere nivel 10 para activar esta habilidad"},
        ["doble equipo"]: {vel: 0.05, vat: 0.15, max: 4, min: 10, baya: 8, pasiva: [2, {fun: (at, df)=> {
            if (df) {
                if (at.salud >= at.vida) {
                    at.buffs.inmune = 0.9
                    at.timer = 30
                }
            }
        }}], uso: "Empezar", d: "Aumenta en un punto la velocidad de movimiento y vel ataque. Si se golpea a un rival teniendo los ps completos se gana inmunidad a los golpes por 3 segundos, se requiere nivel 10 para este efecto"},
        
        ["super diente"]: {atq: 0.25, vat: 0.25, max: 3, baya: 8, min: 5, pasiva: [2, {antiShield: 2, shieldPlus: 10}],
             uso: "Finalizar", d: "aumenta el atq y velocidad de ataque en 2.5 puntos, ademas inflige daño verdadero igual a la cantidad de buffs de ataque que tenga, el usuario necesita el nivel 5 para realizar este efecto"},
        
             ["maldicion"]: {atq: 0.1, def: 0.1, baya: 8, pasiva: [2, {damage: 4, cion: (at)=> {
            if(at)
            at.buffs.vel *= 0.9
        }}], max: 4, min: 10, uso: "Aumento de caracteristica", d: "aumenta la defensa y el ataque en 1 punto. Cuando un enemigo golpea al usuario disminuye la velocidad del enemigo en 1 punto. Para activar esta habilidad se requiere el nivel 10"},
        
        drenadoras: {shield: 0.1, max: 10, min: 10, pasiva: [2, {robo: 10}], baya: 8, 
         uso: "Soportar", d: "Aumenta los ps del usuario en un punto, al nivel 10 drena vida con cada golpe"},
        
        ["divide dolor"]: {caida: -0.1, salto: 0.1, baya: 8, vat: 0.1, max: 5, pasiva: [6, {sVat: 5,  cion: (at, df)=> {
            if (at) {
                marcas(at, "dolor", 1, 2)
                marcas(df, "dolor", 1, 4)
                let d = setTimeout(() => {
                    del(at, "dolor")
                    window.clearTimeout(d)
                }, 3000);
                if (df.dolor > 3) {
                    at.stund = true
                    let s = setTimeout(() => {
                        at.stund = false;
                        window.clearTimeout(s)
                    }, 500);
                    if(df.salud < df.vida)
                    df.salud += at.stat.salud*0.1
                    at.stat.salud -= df.salud*0.1
                    del(df, "dolor")
                    del(at, "dolor")
                }
                if (at.dolor > 1) {
                    df.salud += at.stat.salud*0.1
                    at.stat.salud -= df.salud*0.1
                    del(at, "dolor")
                }
            } else {
                del(df, "dolor")
            }
        }}], min: 15, uso: "Contraatacar", d: "aumenta la velocidad de ataque, disminuye el tiempo de recarga para las habilidades y para la recuperacion de ps en 1 punto \n\
        cada vez que el usuario sea golpeado ganara una marca de dolor, al ganar 3 marcas el enemigo que lo golpee sera incapacitado y perdera la decima parte de \n\
        la vida del usuario, ademas el usuario ganara la decima parte de la vida del enemigo, este ultimo efecto tambie ocurrira si el mismo enemigo golpea mas de dos veces al usuario. Se requiere nivel 15 para activar esta habilidad"
        },
        ["as oculto"]: {atq: 0.1, max: 5, min: 5, baya: 8, pasiva: [2, {damage: 11 , damagePlus: 0.3}], 
     uso: "Finalizar", d: "Aumenta el ataque en 1.2 puntos, mientras menos mana tenga el usuario mas fuerte golpeara, se requiere el nivel 5 para activar esta habilidad"},
        
        ["aguante"]: {shield: 0.1, regen: 0.1, max: 5, min: 15, pasiva: [6, {cion: (at, df)=> {
            let prom = (100 * df.salud) / df.vida
            if (prom < 30 && at && !df.inmune) {
                df.buffs.inmune = 0.9
                df.timer = 20
                df.inmune = true
                let s = setTimeout(() => {
                    df.buff.shield += 20
                    df.timer = 40
                    window.clearTimeout(s)
                }, 4000);
                at.buffs.crit *= 0.9
            }
            if (prom > 80) {
                df.inmune = false
            }
        }}], baya: 8,
         uso: "Salvar", d: "Aumenta los ps y la regeneracion de ps en un punto, en nivel 10 si se tiene menos del 30% de ps el usuario se volvera inmune por 2 segundos y obtendra un escudo por 4 segundos"
        },

        tinieblas: {salto: 0.05, max: 5, min: 10, activa: 16, baya: 9,
         uso: "Finalizar", d: "Disminuye el tiempo de recarga de las habilidades en un punto. Al estar en nivel 10 agrega la habilidad Tinieblas"},
        
        ["bola sombra"]: {raf: 0.1, vel: 0.05, max: 5, min: 10, activa: 17, baya: 9,
         uso: "Atacar y defender", d: "Aumenta el ataque especial y velocidad. Al tener nivel 10 se puede activar bola sombra como habilidad activa."},
        
        finta: {vat: 0.1, salto: 0.1, max: 5, min: 10, activa: 18, baya: 9,
         uso: "Persecucion", d: "Aumenta la velocidad de ataque y reduce los tiempos de carga. Al llegar al nivel 10, desbloquea Finta como habilidad activa"},
        
        ["golpe aereo"]: {vat: 0.1, salto: 0.1, max: 5, min: 10, activa: 25, baya: 9,
             uso: "Reposicionamiento", d: "Aumenta la velocidad de ataque y reduce los tiempos de carga. Al llegar al nivel 10, desbloquea Golpe aereo como habilidad activa"},
            
        aguzar: {crit: 0.1, vat: 0.05, max: 20, min: 5, activa: 19, baya: 9,
         uso: "Destruir", d: "Aumenta la velocidad de ataque y probabilidad de critico. Al llegar al nivel 5, desbloquea Aguzar como habilidad activa"},
        
        ["rizo defensa"]: {def: 0.15, max: 17, baya: 7, uso: "Aumento de caracteristica", d: "Aumenta la defensa fisica en 1,5 puntos"},
        ["barrera espinosa"]: {shield: 0.1, res: 0.15, max: 5, min: 10, activa: 24, baya: 12, pasiva: [
            6, {sDef: 10, cion: (at, df)=> {
                if (at && df) {
                    at.stat.salud -= df.nivel/10
                }
            }}
        ], uso: "Proteger", d: "Aumenta los ps y la defensa especial en un punto. Al tener nivel 10 obtiene 'barrera espinosa' como habilidad activa y disminuye los ps de los oponentes que lo golpean"},
        
        ["fuego fatuo"]: {raf: 0.1, vel: 0.05, max: 10, baya: 8, min: 10, pasiva: [2, {combo: {estado: 7, tiempo: 30}, anim: "<div class='fatuo'></div>"}], 
         uso: "Desgaste", d: "Aumenta el ataque especial y velocidad del pokemon, al estar en nivel 10 sus ataques infligen quemadura a sus enemigos golpeados"},
        
        robo: {atq: 0.2, def: 0.2, max: 5, min:10, baya: 12, pasiva: [6, {atq: 30, cion: (at, df, poder)=> {
            if (at, df) {
                if (poder.estado) {
                    let estado = Object.assign({}, poder.estado)
                    if (estado.estado > 6 && estado.estado < 12) {
                        estado.estado = 0
                    }
                    app.ataque(df, false, {
                        damage: 0,
                        distancia: 2,
                        estado: poder.estado
                    })
                }
            }
        }}], activa: 34, 
     uso: "Asegurar", d: "Aumenta mucho el ataque y la defensa, cuando se llega a nivel 10 se desbloquea 'Robo' como activa y obtiene \n\
        la sig pasiva: Cuando se le ataca con un poder que mejora al usuario del poder, el portador de esta pasiva tambien obtiene dichas mejoras."},

        refuerzo: {atq: 0.1, raf: 0.1, max: 5, min: 5, baya: 8, pasiva: [1, {regen: 1.5, fun: (at=app.gamer, df, pod)=> {
            if (!df && at) {
                if (pod.nombre && at.refuerzo >= 3) {
                    at.refuerzo = 0
                    app.ataque(at, false, {
                        damage: (at.equipo.length*2)*10,
                        distancia: pod.distancia,
                        tipo: pod.tipo,
                        anim: "<div class='flecha' style='color: white'></div>"
                    })
                } else if(pod.nombre) {
                    at.refuerzo = (at.refuerzo || 0) + 1
                }
            }
        }}], uso: "Atacar", d: "Aumenta el atq y atq esp. Al nivel 5 cada 3 habilidades lanza una habilidad extra que aumenta su potencia mientras mas compañeros de equipo tenga"},

        ["hierba lazo"]: {raf: 0.1, res: 0.1, max: 8, min: 5, baya: 9, activa: 35, uso: "", d: "Aumenta el atq especial y def especial. al nivel 5 desbloquea hierba lazo como habilidad activa."},

        ["golpe calor"]: {atq: 0.1, res: 0.1, def: 0.1, raf: 0.1, max: 5, min: 12, pasiva: [2, {damage: 4, damagePlus: 5}], activa: 36, baya: 12,
         uso: "Aumento de caracteristica", d: "Aumenta las defensas y los ataques en un punto. Al tener nivel diez golpeara mas fuerte al tener menos velocidad de desplazamiento y obtendra la activa de 'Golpe calor'"},
        
        esfuerzo: {atq: 0.5, max: 2, min: 10, pasiva: [2, {damage: 10}], baya: 12, activa: 37,
         uso: "Aumento de caracteristica", d: "Aumenta mucho el ataque pero solo se puede mejorar 2 veces. Al nivel 10 golpeara mas fuerte al tener poca vida y obtiene la activa de 'esfuerzo'."},
        
        ["mismo destino"]: {salto: 0.05, max: 5, min: 15, baya: 8, pasiva: [6, {cion: (at, df, poder)=> {
            if (at && df) {
                if (df.salud < df.vida*0.3) {
                    if (!df.destino) {
                        df.destino = true  
                        df.estado = 12
                        df.tiempo = 80
                        app.ataque(df, false, poder)
                        let s = setTimeout(() => {
                            df.destino = false
                            window.clearTimeout(s)
                        }, 20000);
                    }
                }
            }
        }}], uso: "Aumento de caracteristica", d: "Disminuye el tiempo de recarga de ataque del portador, ademas al nivel 15 al tener poca vida entra en estado inmortal por 5 segundos y devuelve el ultimo ataque que lo golpeo. Esta habilidad surte efecto cada 20 segundos"},
        
        ["retribucion"]: {atq: 0.1, max: 7, min: 5, baya: 9, activa: 44, 
         uso: "Aumento de caracteristica", d:"Aumenta un poco el ataque. Al nivel 5 se puede activar 'Retribucion' como habilidad activa"},
        
        imagen: {atq: 0.05, vat: 0.02, max: 7, min: 10, baya: 9, pasiva: [2, {damage: 2, fun: (at, df, pd)=> {
            if (at && !df) {
                if (at.estado > 0) {
                    if (at.estado == 7) {
                        at.estado = 1
                    }
                    at.buffs.atq *= 2
                    at.buffs.vat *= 2
                    return 2
                }
            }
        }}],
         uso: "Aumento de caracteristica", d: "Aumenta un poco el ataque y la velocidad de ataque, al nivel 10 aumenta la potencia de golpe al tener cualquier estado alterado"},

        ["acua cola"]: {atq: 0.1, vat: 0.1, max: 7, min: 10, baya: 12, activa: 45, pasiva: [2, {dam: 1, fun: (at, df, pd)=> {
            if (at && df) {
                if (df.stund == true) {
                    app.ataque(at, false, pd)
                }
            }
        }}], uso: "Aumento de caracteristica", d:"Aumenta el ataque y la velocidad de ataque. Al nivel 10 cuando golpea a un enemigo incapacitado golpeara dos veces y desbloqueara 'Acua cola' como activa"},
        
        ladron: {atq: 0.1, vat: 0.1, max: 7, min: 1, baya: 9, activa: 47, obj: 21,
     uso: "Aumento de caracteristica", d: "Aumenta el ataque y la velocidad de ataque. Se requiere la mt01 para aprender este movimiento. Aprender este movimiento agrega la activa 'ladron' lo que permite robar objetos de los enemigos"},
        
        gigadrenado: {robo: 0.15, raf: 0.1, max: 12, baya: 7, uso: "Aumento de caracteristica", d: "Otorga robo de vida en cada mejora y aumenta en 1 punto el ataque especial."},

        hipnosis: {raf: 0.1, vat: 0.1, max: 7, baya: 8, pasiva: [2, {combo: {estado: 9, tiempo: 20}, anim: "<div class='ondas'></div>"}], 
     uso: "Aumento de caracteristica", d: "Aumenta el ataque especial y velocidad de ataque del pokemon, al estar en nivel 10 sus ataques infligen adormecimiento a los enemigos golpeados"},

        ["come sueños"]: {raf: 0.1, robo: 0.2, max: 5, baya: 8, pasiva:[2, {robo: 25, stap: 12}], min: 5,
     uso: "Aumento de caracteristica", d: "Aumenta el ataque especial y el robo de vida. Al nivel 5 obtiene un 25% extra de robo de vida con habilidades y aumenta su potencia al tener mayor reduccion de enfriamiento"},
    
        ["puño drenaje"]: {atq: 0.1, robo: 0.15, max: 12, baya: 7, uso: "Aumento de caracteristica", d: "Otorga robo de vida en cada mejora y aumenta en 1 punto el ataque fisico."},

        chupavidas: {atq: 0.1, robo: 0.2, max: 5, baya: 8, pasiva:[2, {robo: 25, stap: 1}], min: 5,
     uso: "Aumento de caracteristica", d: "Aumenta el ataque fisico y el robo de vida. Al nivel 5 obtiene un 25% extra de robo de vida con habilidades y aumenta su potencia al tener mayor vel. ataque"},
        
        ["rabia banette"]: {mana: 0.1, robo: 0.1, max: 10, nombre: "rabia", baya: 20, item: 19, cambio: ["hab", 23], pasiva: [2, {combo: {regen: 0.75, timer: 3}}],
     uso: "Aumento de caracteristica", d: "Aumenta la regeneracion de mana y agrega robo de vida, en nivel 10 cada habilidad disminuira los efectos curativos del enemigo por 3 segundos. Gracias a este movimiento banette puede cambiar su habilidad por Insomnio.", min: 10},
        
        sintesis: {mana: 0.1, regen: 0.1, max: 10, min: 5, baya: 9, activa: 59, uso: "Mejor aguante",
        d: "Aumenta la regen de mana y los efectos curativos. Al nivel 5 obtendra la habilidad sintesis como activa y podra usar un campo de curacion."},
        
        desarrollo: {raf: 0.1, atq: 0.1, max: 8, min: 5, baya: 8, pasiva: [2, {antiShield: 1, shieldPlus: 10}], 
        d: "Aumenta el ataque especial y fisico y agrega daño verdadero mientras mas buff de velocidad de ataque se tenga."},

        ["dia soleado"]: {vat: 0.1, max: 5, min: 5, baya: 12, activa: 60, uso: "proteger y atacar", pasiva: [6, {vat: 2, fun: (at, df, pod)=> {
            if (at && df) {
                if (at.sol) {
                    let poder = {
                        damage: 30,
                        distancia: pod.distancia,
                        tipo: 10,
                        raf: true,
                        res: true,
                        anim: "<div style='color: orange;' class='medialuna'></div>",
                        vis: visses[1],
                        class: 2,
                        transis: visses[4],
                    }
                    if (at.stat.raf < at.stat.atq) {
                        poder.raf = false
                    }
                    if (df.stat.def < df.stat.res) {
                        poder.res = false
                    }
                    app.ataque(at, false, poder)
                }
            }
        }}], d: "Aumenta la vel. ataque. En nivel 5 obtiene la activa dia soleado que le permite crear un campo de sol mientras dura ese campo al atacar enemigos disparara un segundo ataque de tipo fuego que golpeara al enemigo donde mas le duele."},
        
        ["danza lluvia"]: {shield: 0.1, max: 5, min: 5, baya: 12, activa: 61, uso: "Proteccion contra golpes", pasiva: [2, {stap: 10, fun:(at, df, pod)=> {
            if (at && df) {
                if (at.lluvia) {
                    let poder = {
                        damage: 30,
                        distancia: pod.distancia,
                        tipo: 11,
                        raf: true,
                        res: true,
                        anim: "<div style='color: blue;' class='medialuna'></div>",
                        vis: visses[1],
                        class: 2,
                        transis: visses[4],
                        efecto: {vel: 0.8, timer: 1}
                    }
                    app.ataque(at, false, poder)
                }
            }
        }}], d: "Aumenta los ps del usuario, al tener el nivel 5 obtiene la activa danza lluvia, posterior a lanzar esta habilidad cada ataque del usuario lanzara un disparo de agua que ralentiza a los enemigos"},
        
        ["granizo"]: {
            regen: 0.1, max: 5, min: 5, baya: 12, activa: 62, uso: "Control de masas", pasiva: [2, {robo: 10, fun: (at, df, pod)=> {
                if (at && df) {
                    if (pod.hielo) {
                        let s = setInterval(() => {
                            let poder = {
                                damage: 10,
                                distancia: 4,
                                tipo: 15,
                                vel: poder.vel || 50,
                                inicio: {
                                    damage: 10,
                                    distancia: -4,
                                    tipo: 15,
                                    vel: poder.vel || 50,
                                }
                            }
                            app.ataque(df, false, poder)
                            if (!at.hielo) {
                                window.clearInterval(s)
                            }
                        }, 100);
                    }
                }
            }}], d: "Aumenta los efectos de curacion. Al nivel cinco podra usar 'granizo' como activa, al activarla infligira daño continuo a sus enemigos."
        },
        ["torm. arena"]: {
            crit: 0.1, max: 5, min: 5, baya: 12, activa: 63, uso: "Control de masas", pasiva: [2, {stap: 7, cion: (at, df, pod)=> {
                if (at && df) {
                    if (at.torm) {
                        let poder = {
                            damage: pod.damage*0.3,
                            distancia: pod.distancia,
                            tipo: 15,
                            tail:  [
                                {boxShadow: "0px 0px 0px 0px #624308"},
                                {boxShadow: "0px -100px 100px 10px white"},
                            ],
                            vel: poder.vel || 50,
                            really: 1
                        }
                        app.ataque(df, false, poder)
                    }
                }
            }}], d: "Aumenta la probabilidad de critico. Al nivel cinco podra usar 'torm. arena' como activa, al activarla cada vez que reciba daño lanzara una golpe con el 30% de ese daño ademas siempre infligira al menos 1 punto de daño."
        },
        sustituto: {res: 0.1, def: 0.1, regen: 0.1, max: 9, min: 10, baya: 9, activa: 64, uso:"Proteccion de daño",
        d: "Aumenta la defensa fisica y especial y los efectos curativos. En nivel 10 puede cambiarse por un sustituto que recibira el daño por el durante un tiempo pero no podra moverse mientras dure."},

        ["danza petalo"]: {raf: 0.1, salto: 0.1, max: 5, min: 10, baya: 12, activa: 65, uso: "Transporte rapido", pasiva: [2, {stap: 1, fun: (at, df, pod,)=> {
            if (at && df) {
                let poder = {
                    damage: 10,
                    raf: true,
                    res: true,
                    distancia: pod.distancia,
                    efecto: {vel: 0.9, timer: 1},
                    anim: "<div class='petalo' style='width: 25px; height: 50px;'></div>",
                    block: {
                        damage: 20,
                        raf: true,
                        res: true,
                        distancia: 5,
                        anim: "<div class='petalo' style='width: 25px; height: 50px;'></div>",
                        stund: 0.5
                    }
                }
                app.ataque(at, fale, poder)
            }
        }}], d:"Aumenta el ataque especial y disminuye el tiempo de recarga, al nivel 10 obtiene la activa de danza petalo y cada vez que golpea a un enemigo lanza un petalo que puede rebotar"}
    }


    let emblema = emblemas[nombre];
    if(!emblema.nombre)
    emblema.nombre = nombre
    return emblema
}
function marcas(pro, nombre, valor, max, forma = "arco", final=["backgroundColor", "white"]) {
    let a = pro.spr || app.jugador
    if (typeof(valor) == "string") {
        pro[nombre] = parseFloat(valor)
    }  
    if (typeof(valor) == "number") {
        if (pro[nombre]) {
            pro[nombre] += valor
        } else {
            pro[nombre] = valor
        }
    }
    if (pro[nombre] == 1) {
        a.appendChild(document.createElement("br"))
    }
    if (pro[nombre] < max) {
        let pronombre = pro[nombre]
        del(pro, nombre, forma)
        pro[nombre] = pronombre
        for (let p = 0; p < pronombre; p++) {
            var b = document.createElement("div")
            b.classList.add(forma)
            a.appendChild(b)
        }
    } else {
        var b = a.querySelectorAll("."+forma)
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            element.style[final[0]] = final[1]
        }
    }
}
function del(pro, nombre, forma="arco") {
    pro[nombre] = 0
    let a = pro.spr || app.jugador
    var b = a.querySelectorAll("."+forma)
    var br = a.querySelector("br")
    if(br)
    br.remove()
    for (let i = 0; i < b.length; i++) {
        const element = b[i];
        if(element)
        element.remove()
    }
}