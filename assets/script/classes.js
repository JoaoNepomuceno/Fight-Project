class Character {
    _life = 1;
    maxLife=1;
    attack=0;
    defense=0;

    constructor (name){
        this.name =name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character{

    constructor(name){
        super(name);
        this._life = 100;
        this.attack = 10;
        this.defense = 10;
        this.maxLife = this._life;
    }

}

class Sorcerer extends Character{

    constructor(name){
        super(name);
        this._life = 80;
        this.attack = 17;
        this.defense = 4;
        this.maxLife = this._life;
    }
}

class littleMonster extends Character{
    constructor(name){
        super(name);
        this._life = 60;
        this.attack= 15;
        this.defense = 2;
        this.maxLife = this._life;
    }
}

class bigMonster extends Character{
    constructor(name){
        super(name);
        this._life=120;
        this.attack= 110;
        this.defense = 4;
        this.maxLife=this._life;
    }
}

class Stage{
    constructor (fighterName1, fighterName2, fighterEl1, fighterEl2, logObject){
        this.fighterName1 = fighterName1;
        this.fighterName2 = fighterName2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;
        this.logObject = logObject;
        }

    start(){
        this.update();
        this.fighterEl1.querySelector('button').addEventListener('click', () => this.doAttack(this.fighterName1, this.fighterName2));
        this.fighterEl2.querySelector('button').addEventListener('click', () => this.doAttack(this.fighterName2, this.fighterName1));

    }

    update(){
        //fighter 1
        this.fighterEl1.querySelector('.name').innerHTML = this.fighterName1.name+' HP: '+this.fighterName1.life.toFixed(1);
        const life1 = (this.fighterName1._life/this.fighterName1.maxLife)*100;
        this.fighterEl1.querySelector(".bar").style.width = `${life1}%`

        //fighter 2
        this.fighterEl2.querySelector('.name').innerHTML = this.fighterName2.name+ ' HP: '+this.fighterName2.life.toFixed(1);
        const life2 = (this.fighterName2._life/this.fighterName2.maxLife)*100;
        this.fighterEl2.querySelector(".bar").style.width = `${life2}%`
    }

    doAttack(attacking, attacked){
       if (attacking._life <=0 || attacked.life<=0){
        this.logObject.addMessage('Batendo em cachorro morto');
        return ;
       }

       const attackFactor = (Math.random() * 2).toFixed(2);
       const defenseFactor = (Math.random() * 2).toFixed(2);

       const atualAttack = attackFactor * attacking.attack;
       const atualDefense = defenseFactor * attacked.defense;

       if(atualAttack > atualDefense ){
        attacked.life -= atualAttack;
        this.logObject.addMessage(`${attacking.name} causou ${atualAttack} em ${attacked.name}`)
       }else{
        this.logObject.addMessage(`${attacked.name} conseguiu defender`)
       }

       this.update();
    }

}


class Log{
    list = [];

    constructor (elList){
        this.elList = elList;
    }

    addMessage (message){
        this.list.push(message);
        this.render();
    }

    render(){
        this.elList.innerHTML = '';

        for(let i in this.list){
            this.elList.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}