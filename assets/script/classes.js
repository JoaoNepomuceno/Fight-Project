class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {

    constructor(name) {
        super(name);
        this._life = 100;
        this.attack = 10;
        this.defense = 10;
        this.maxLife = this._life;
    }

}

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this._life = 80;
        this.attack = 17;
        this.defense = 4;
        this.maxLife = this._life;
    }
}

class littleMonster extends Character {
    constructor(name) {
        super(name);
        this._life = 60;
        this.attack = 25;
        this.defense = 2;
        this.maxLife = this._life;
    }
}

class bigMonster extends Character {
    constructor(name) {
        super(name);
        this._life = 120;
        this.attack = 110;
        this.defense = 4;
        this.maxLife = this._life;
    }
}

class stage {
    constructor(fighterName1, fighterName2, fighterEl1, fighterEl2) {
        this.fighterName1 = fighterName1;
        this.fighterName2 = fighterName2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;
    }

    start() {
        this.update();
            
        this.fighterEl1.querySelector('.attack').addEventListener('click', () => {
            this.doAttack(this.fighterName1, this.fighterName2);
        });

        this.fighterEl2.querySelector('.attack').addEventListener('click', () => {
            this.doAttack(this.fighterName2, this.fighterName1);
        });
    }

    update() {
        //fighter 1
        this.fighterEl1.querySelector('.name').innerHTML = this.fighterName1.name + ' HP: ' + this.fighterName1._life.toFixed(2);
        const life1 = ((this.fighterName1._life / this.fighterName1.maxLife) * 100);
        this.fighterEl1.querySelector(".bar").style.width = `${life1}%`
        //fighter 2
        this.fighterEl2.querySelector('.name').innerHTML = this.fighterName2.name + ' HP: ' + this.fighterName2._life.toFixed(2);
        const life2 = ((this.fighterName2._life / this.fighterName2.maxLife) * 100);
        this.fighterEl2.querySelector(".bar").style.width = `${life2}%`;
    }

    doAttack(attacking, attacked) {
        if (attacked._life <= 0) {
            console.log('Batendo em cachorro morto!');
            return;
        } else if (attacking._life <= 0) {
            console.log('Você não pode atacar, você está morto!');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const attack = attacking.attack * attackFactor;
        const defense = attacked.defense * defenseFactor;

        if (attack > defense) {
            attacked.life -= attack;
            console.log(`${attacking.name} atacou ${attacked.name} e causou ${attack.toFixed(2)} de dano!`);
        } else (
            console.log(`${attacked.name} conseguiu se defender do ataque de ${attacking.name}!`)
        )

        this.update();
    }
}