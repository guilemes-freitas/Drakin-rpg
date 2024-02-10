import Imperial from "../assets/characterImage/Imperial.png";
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
    bonus:{points:1},
    resistences:{},
    description: "Habitante da maior cidade do continente Swordenfell, Dawngrey.",
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
    race: "Jeo'donghe",
    region: "Continente Élfico",
    image: Asrimer,
    benefits: [
      "+2 vigor",
      "+2 força",
      "Visão noturna",
      "Regeneração: Se curam em 1 por turno durante o combate e só precisam de um descanso rápido para se curar completamente"
    ],
    proficiences:{},
    bonus:{vigor:2,strength:2},
    resistences:{},
    description: "Os Jeo'donghe são naturalmente resistentes, suas garras ajudam durante a escavação a procura de minerais",
  },
];

export default raceStatus;