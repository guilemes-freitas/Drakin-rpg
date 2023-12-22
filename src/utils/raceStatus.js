import Imperial from "../assets/characterImage/Imperial.png";
import Will from "../assets/characterImage/will.png";
import Drakin from "../assets/characterImage/Drakin.png";
import Sarkin from "../assets/characterImage/Sarkin.png";
import Tiefling from "../assets/characterImage/Tiefling.png";
import Asrimer from "../assets/characterImage/Asrimer.png";

const raceStatus = [
  {
    id: "1",
    race: "Humano",
    region: "",
    image: Imperial,
    benefits: ["Dois pontos extras durante a criação de personagem",
      "Adaptável: Uma vez por descanso longo pode rolar um resultado de D20 novamente, o resultado com maior valor prevalece."],
    proficiences:{},
    bonus:{gold:50,points:2},
    resistences:{},
    description: "Habitante da maior cidade do continente Swordenfell, Dawngrey.",
  },
  {
    id: "2",
    race: "Ouismer",
    region: "Ouismouth",
    image: Will,
    benefits: ["+2 carisma", "+3 destreza", "+5 em testes de barganha."],
    proficiences:{},
    bonus:{charisma:2,dexterity:4},
    resistences:{},
    description: "Habitante da região de Ouismouth. Os Ouismer são em sua grande maioria humanos camponeses. A região é conhecida por suas flores em abundância e campos verdejantes.",
  },
  {
    id: "3",
    race: "Drakin",
    region: "Drakimar",
    image: Drakin,
    benefits: [
      "+4 Força.",
      "+1 de vantagem em testes de Intimidação.",
      "Escama de dragão: A pele dos Drakin dissipa magias, incluindo de personagens aliados.",
      ""
    ],
    proficiences:{},
    bonus:{strength:4},
    resistences:{"Intimidação":1},
    description: "Nascido dos dragões. Os Drakin são uma raça guerreira, muito mais fortes, orgulhosos e impetuosos que os humanos, vivem em regiões com alta ocorrência de dragões. Sua maior população está em Drakimar, no sul do continente Swordenfell, e ao norte do continente élfico. As características principais dos Drakins são seus cabelos prateados e seus olhos de dragão.",
  },
  {
    id: "4",
    race: "Sarkin",
    region: "",
    image: Sarkin,
    benefits: [
      "Proficiência 1 com magia de sangue.",
      "+3 de vantagem em testes de Intimidação.",
      "+2 vantagem contra testes de intimidação.",
      "Bloodthirst: Ao matar um inimigo, recupera 1 de PA.",
    ],
    disadvantages: ["Não são bem vindos em cidades."],
    proficiences:{"Magia de sangue":1},
    bonus:{},
    resistences:{"Intimidação":2},
    description: "Durante uma lua sangrenta, existe a possibilidade de um humano nascer com poderes sobrenaturais, estes humanos nascidos da lua são chamados de Sarkin, seus olhos e cabelos possuem uma coloração escarlate e tem uma forte conexão com magia de sangue desde sua infância. O sangue dos sarkin é especial e extremamente valorizado por aqueles que buscam rituais de magia negra, por conta disso, não é raro o ataque de magos a locais que possuem uma criança Sarkin. Os humanos comuns veem os Sarkin como um mal algoro e muitas vezes a criança é morta ou entregue a igreja."
  },
  {
    id: "5",
    race: "Tiefling",
    region: "",
    image: Tiefling,
    benefits: [
      "+3 Fé.",
      "+4 resistência á maldições.",
      "Dark Eyes: Visão noturna.",
      "Além-tumulo: Consegue ver e se comunicar com espiritos",
    ],
    proficiences:{},
    bonus:{faith:3},
    resistences:{"Maldição":4},
    description: "Tieflings possuem a pele de cor azulada ou amarelada. Seu nariz, mãos, pés e pálpebras podem adquirir uma cor escura como a noite. Por conta dessas características que se asemelham a de um cadáver e sua cultura para com os mortos, são creditados como mal algoro e que atraem a morte, o que não necessáriamente é verdade.",
  },
  {
    id: "7",
    race: "Elfo",
    region: "Continente Élfico",
    image: Asrimer,
    benefits: [
      "+2 Inteligência",
      "+3 destreza",
      "+3 em testes de percepção.",
      "Mana reading: Consegue sentir as emoções de uma criatura",
    ],
    proficiences:{},
    bonus:{intelligence:2,dexterity:3},
    resistences:{},
    description: "É dito que os elfos já existiam muito antes do primeiro humano surgir, visto que, todos os registros históricos foram perdidos, não se sabe muito sobre a veracidade desse fato.",
  },
];

export default raceStatus;