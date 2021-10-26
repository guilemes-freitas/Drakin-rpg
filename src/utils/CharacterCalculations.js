// Calculo para danos que ignoram armadura.
export const handlePenetrationCalc = (damage,character) =>{
    if (damage >= character.currentHP){
        damage = damage - character.currentHP
        if(damage > (character.maxHP/2)){
            console.log('morte instantanea!')
        }
        character.currentHP = 0
    }else{
        character.currentHP -= damage
    }
    return character
}

// Calculo para danos normais, priorizando retirar na seguinte ordem: armadura extra > armadura > vida
export const handleDamageCalc = (damage,character) =>{
    if (damage >= character.extraArmor.points){
        damage -= character.extraArmor.points
        character.extraArmor.points = 0
        character.extraArmor.turns = 0

    } else if (damage < character.extraArmor.points) {
        character.extraArmor.points -= damage
        damage = 0
        return character
    }
    if (damage > character.currentArmor){
        damage -= character.currentArmor
        character.currentArmor = 0
        if (damage >= character.currentHP){
            damage = damage - character.currentHP
            if(damage > (character.maxHP/2)){
                console.log('morte instantanea!')
            }
            character.currentHP = 0
        }else{
            character.currentHP -= damage
        }
    } else if (damage <= character.currentArmor){
        character.currentArmor -= damage 
    }
    return character
}

// Calculo para cura
export const handleCureCalc = (cure, character) =>{
    if (cure+character.currentHP > character.maxHP){
        character.currentHP = character.maxHP
    } else {
        character.currentHP += cure 
    }
    return character
}

// Calculo para recuperar armadura
export const handleRecoverArmorCalc = (armor, character) =>{
    if (armor+character.currentArmor > character.maxArmor){
        character.currentArmor = character.maxArmor
    } else {
        character.currentArmor += armor 
    }
    return character
}

// Calculo para atualizar armadura total
export const handleMaxArmorCalc = (armor, character) =>{
    character.maxArmor = armor
    character.currentArmor = armor
    return character
}

// Calculo para adicionar armadura extra temporária
export const handleExtraArmorCalc = (armor, turns, character) =>{
    if(turns < character.extraArmor.turns){
        turns = character.extraArmor.turns
    }
    armor += character.extraArmor.points

    character.extraArmor = {points:armor,
                            turns:turns}
    return character
}

// Função para passar o turno e atualizar efeitos temporários, como sangramento e armadura extra.
export const handleNextTurn = (character) =>{
    const damageEffects = ['bleed','blight','burning']
    damageEffects.map((effect) => {
        if(character.effects[effect].turns > 0){
            character.effects[effect].turns -= 1
            handlePenetrationCalc(character.effects[effect].points,character)
        }
        if(character.effects[effect].turns === 0){
            character.effects[effect] = {points: 0, turns:0}
        }
        return character
    })

    if(character.extraArmor.turns > 0){
        character.extraArmor.turns -= 1
    }
    if(character.extraArmor.turns === 0){
        character.extraArmor.points = 0
    }
    return character
}

// Função para adicionar um efeito temporário em turnos, como sangramento e envenenamento.
export const handleEffectCalc = (type,quantity,turn,character) => {
    if (character.effects[type].turns < turn){
        character.effects[type].turns = turn
    }
    character.effects[type].points += quantity
    return character
}