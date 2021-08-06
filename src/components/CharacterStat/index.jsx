import {Content, FirstSquare,  SecondSquare, Value, Type, Flex} from "./styles"

const CharacterStat = ({bonus,statValue,statType,type2=false, blueSchema=false}) =>{

    return(
        <Content>
            <FirstSquare type2={type2} blueSchema={blueSchema}>
                <SecondSquare type2={type2} blueSchema={blueSchema}>
                    <Flex type2={type2}>
                        {type2 ? 
                            <>
                                <Value type2={type2}>{!!bonus ? bonus + statValue : statValue}</Value>
                                <Type type2={type2}>{statType}</Type>
                            </> 
                            :
                            <Value type2={type2}>{!!bonus ? bonus + statValue : statValue}</Value>
                        }
                    </Flex>
                </SecondSquare>
            </FirstSquare>
            {!type2 && <Type type2={type2}>{statType}</Type>}
        </Content>
    )
}

export default CharacterStat