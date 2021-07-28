import {Content, FirstSquare,  SecondSquare, Value, Type} from "./styles"

const CharacterStat = ({bonus,statValue,statType}) =>{

    return(
        <Content>
            <FirstSquare>
                <SecondSquare>
                    <Value>
                        {!!bonus ? bonus + statValue : statValue}</Value>
                </SecondSquare>
            </FirstSquare>
            <Type>{statType}</Type>
        </Content>
    )
}

export default CharacterStat