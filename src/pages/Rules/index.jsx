import { Container, Content, SectionTitle } from "./styles";
import PageBorder from "../../components/PageBorder";

const Rules = () => {
  return (
    <Container>
      <PageBorder>
        <Content>
            <SectionTitle>Rules</SectionTitle>
        <h2>Ataques críticos:</h2> 
        <p>Ao rolar um crítico natural causa 150% do dano.</p>

        <h2>Cura crítica:</h2> 
        <p>Todo tipo de cura pode ser crítica, recuperando 50% a mais.</p>

        <h2>Flanqueamento:</h2> 
        <p>Quando uma criatura e pelo menos um de seus aliados estão adjacentes a um inimigo, ele é flanqueado, a criatura e seu aliado ganham vantagem em ataques corpo a corpo contra aquele inimigo.
        Se dois personagens estão flanqueando, ambos recebem +2 de vantagem, se três ou mais estiverem, todos recebem +5 de vantagem.
          Uma criatura não pode flanquear um inimigo que ela não pode ver. A criatura também não pode flanquear enquanto estiver incapacitada.
        </p>
          
        <h2>Ensanguentado:</h2> 
        <p>Um personagem está ensanguentado quando sua vida atual for metade ou menor que sua vida máxima.</p>

        <h2>Pontos de ação (PA):</h2> 
        <p>Os pontos de ação determinam quantas ações o jogador pode realizar por turno.</p>

        <h2>Armadura:</h2> 
        <p>Enquanto a criatura tiver pontos de armadura ela é imune a todos os efeitos debilitantes. Caso o ataque ignore a armadura, parcialmente ou completamente, a criatura está sujeita aos efeitos.</p>

        <h2>Backstab:</h2> 
        <p>Ataques de adagas pelas costas são automaticamente um crítico.</p>

        <h2>Ataque furtivo:</h2> 
        <p>Ao causar um ataque furtivamente, causa 150% do dano. Caso seja um crítico o dano é aumentado para 200%.</p>

        <h2>Iniciativa:</h2> 
        <p>No início de um combate, todos devem rolar 1d20, o resultado é então somado com a sua agilidade, quem obtiver o maior número inicia antes.</p>

        <h2>Surpreendido:</h2> 
        <p>Caso uma das partes não seja percebida até o início do combate, a outra é surpreendida, durante o primeiro turno todas as criaturas do grupo surpreendido jogam por último, independente da iniciativa.</p>

        <h2>Zona de perigo:</h2> 
        <p>Área de alcance de ataque da criatura.</p>

        <h2>Ataque de oportunidade:</h2> 
        <p>Caso duas criaturas estejam engajadas em combate corpo a corpo, ao se movimentar para fora da zona de perigo.</p>


        Efeitos Debilitantes:

        Sangramento e Envenenamento: Algumas armas e habilidades podem causar sangramento ou envenenamento. O dano se acumula, na hora de calcular os turnos restantes, vale a quantidade de turnos maior, seja a restante ou a do ataque.

        Atordoamento: A criatura fica impossibilitada de realizar qualquer ação por um turno. Ao final do turno ganha resistência de +4 a atordoamentos, pode acumular.

        Gélido: A criatura recebe desvantagem de -2 ao realizar ataques com armas. Ao acumular o efeito é trocado por atordoamento.

        Chocado: A criatura recebe -1 de AP. Ao acumular o efeito é trocado por atordoamento.

        Queimando: A criatura recebe dano igual a 2 multiplicado pelo nível da criatura, até um máximo de 20.

        Lentidão: Se movimentar custa o dobro de AP.

        Molhado: Ao causar gélido ou chocado a uma criatura molhada, ela é atordoada. A criatura é imune ao próximo efeito de queimando.

        Cegueira: Previne ataques de oportunidade e ganha -4 em testes de ataque e percepção.

        Ficando com 0 de vida.

        Quando você fica com 0 de vida, você ou morre instantaneamente ou cai inconsciente.

        Morte instantânea.
        Dano massivo pode matar instantaneamente. Quando o dano diminui a vida para 0 e ainda sobra dano, caso o dano restante seja igual ou maior a vida máxima do personagem, ele morre. 

        Caindo inconsciente.
        Quando o dano reduz a vida para 0, mas não consegue matar, o personagem cai inconsciente.

        Jogada de morte.  
        Toda vez que um personagem inicia um turno com 0 de vida, ele deve fazer um teste para determinar se ele sobrevive. 
        Role um d20. Se o resultado for 10 ou maior, é um sucesso. Um sucesso ou falha não tem consequência por si só. No seu terceiro sucesso você se torna estável, na sua terceira falha, você morre. Os sucessos e falhas não precisam ser consecutivos, o primeiro que atinge 3 ocorrências é o resultado.
        A quantidade de falhas requeridas para a morte do personagem pode ser aumentado através de habilidade ou itens, podendo chegar no máximo a 6.
        Rolando 1 e 20 em testes de morte.
        1 (falha crítica) conta como duas falhas e 20 (sucesso crítico) conta como dois sucessos.

        </Content>
      </PageBorder>
    </Container>
  );
};

export default Rules;
