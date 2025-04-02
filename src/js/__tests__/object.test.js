import {destructCharacter} from '../object';

test('check object', () => {
    const resTest = [
      8,
      'Двойной выстрел',
      'Двойной выстрел наносит двойной урон',
      'http://...', 
      ];
      const resTest2 = [
        9,
        'Нокаутирующий удар',
        'Описание недоступно',
        'http://...', 
        ];
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
    const result = destructCharacter(character.special[0]);
    const result2 = destructCharacter(character.special[1]);
    expect(result).toEqual(resTest);
    expect(result2).toEqual(resTest2);
});

