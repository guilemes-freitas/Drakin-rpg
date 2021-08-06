import {Content, FirstSquare,  SecondSquare, Value, Type, Flex} from "./styles"

const ExtraStat = ({statValue,statType, blueSchema=false}) =>{

    return(
        <Content>
            <FirstSquare  blueSchema={blueSchema}>
                <SecondSquare  blueSchema={blueSchema}>
                    <Flex >
                        <Value >{statValue}</Value>
                        <Type >{statType}</Type>
                    </Flex>
                </SecondSquare>
            </FirstSquare>
        </Content>
    )
}

export default ExtraStat