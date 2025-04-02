const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

for (const el of character.special) {
    destructCharacter(el);  
}


export function destructCharacter (specialEl) {
    let {id, name, icon, description = 'Описание недоступно'} = specialEl;
    let arrResult = [id, name, description, icon];
    console.log('Результат: ', arrResult);
    return arrResult;
}
