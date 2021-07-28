import Imperial from "../assets/characterImage/Imperial.png";
import Will from "../assets/characterImage/will.png";
import Eleonore from "../assets/characterImage/eleonore.png";
import Sarkin from "../assets/characterImage/Sarkin.png";
import Tiefling from "../assets/characterImage/tiefling.png";
import Asrimer from "../assets/characterImage/Asrimer.png";

const raceStatus = [
  {
    id: "1",
    race: "Imperial",
    region: "Dawngrey",
    image: Imperial,
    benefits: ["2 pontos extras por nível", "50 moedas de ouro extras."],
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
    image: Eleonore,
    benefits: [
      "+4 Força.",
      "+1 de vantagem em testes de Intimidação.",
      "Dragon Skin: Habilidade Inata passiva. A pele dos Drakin pode dissipar magias, incluindo de personagens aliados. Essa habilidade não funciona contra magias refinadas, como encantamentos e maldições.",
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
      "+4 de resistência contra maldições.",
      "Dark Eyes: Por conta de seus olhos negros os Tieflings conseguem ver no escuro.",
      "Light Feet: Tieflings estão acostumados a se esconder, por conta disso recebem +2 em testes de furtividade.",
      "Spiritual Presence: Duas vezes por descanso longo, pode ver espíritos e se comunicar com eles.",
    ],
    proficiences:{},
    bonus:{faith:3},
    resistences:{"Maldição":4},
    description: "Tieflings possuem pele de cor vermelha, roxa ou violeta, e chifres, por conta disso são creditados como seres demoníacos. Apesar de poder entrar em cidades humanas, deve tomar cuidado se estiver sozinho. Ao contrário da crendice popular, os tieflings são, em sua maioria, pacífico. Os Tieflings tem uma conexão natural com a morte, alguns podem até sentir espíritos. Habitam normalmente em regiões isoladas com pouca luz solar. Não é estranho a população crescer em tempos de guerra.",
  },
  {
    id: "6",
    race: "Asrimer",
    region: "Mir'ad",
    image: Asrimer,
    benefits: [
      "+2 Fé",
      "Proficiência 1 em sobrevivência",
      "Animal Companion: Uma vez por descanso longo, pode invocar um animal companheiro",
      "Animal Speech: Asrimae conseguem se comunicar com animais",
    ],
    proficiences:{"Sobrevivência":1},
    bonus:{faith:2},
    resistences:{},
    description: "Habitante da região de Mir’ad. Seu povo tem uma conexão muito forte com a natureza.",
  },
];

export default raceStatus;