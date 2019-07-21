function Fighter (obj) {
    this.obj = obj;
    this.win = 0;
    this.loss = 0;
    this.fullHp = obj.hp;
    this.hp = obj.hp;
}

Fighter.prototype.getName = function() {
    return this.obj.name;
}

Fighter.prototype.getDamage = function() {
    return this.obj.damage;
}

Fighter.prototype.getAgility = function() {
    return this.obj.agility;
}

Fighter.prototype.getHealth = function() {
    return this.obj.hp;
}

const hundred = 100;

Fighter.prototype.attack = function(enemy) {
    let chance = Math.round(Math.random() * hundred);
    if (chance >= enemy.getAgility()) {
        let strike = this.getDamage();
        enemy.dealDamage(strike);
        console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemy.getName()}`);
    } else {
        console.log(`${this.getName()} attack missed`);
    }
}

Fighter.prototype.dealDamage = function(strike) {
    this.hp -= strike;
    if (this.hp < 0) {
        this.hp = 0;
    } 
}

Fighter.prototype.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.loss}`);
}

Fighter.prototype.heal = function(points) {
    this.hp += points;
    if (this.hp > this.fullHp) {
        this.hp = this.fullHp;
    }
    return this.hp;
}

Fighter.prototype.addWin = function() {
    this.win++;
}

Fighter.prototype.addLoss = function() {
    this.loss++;
}


function battle (fighter1, fighter2) {
    if (fighter1.hp <= 0) {
        console.log(`${fighter1.getName()} is dead and cant fight`);
    } else if (fighter2.hp <= 0) {
        console.log(`${fighter2.getName()} is dead and cant fight`);
    } else {
        while (fighter1.hp > 0 && fighter2.hp > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1.hp === 0) {
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
}

const petro = new Fighter({name: 'Petro', damage: 20, hp: 100, agility: 25});
const ivan = new Fighter({name: 'Ivan', damage: 10, hp: 100, agility: 40});