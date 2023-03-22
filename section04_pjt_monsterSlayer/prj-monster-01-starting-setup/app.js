function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLogs: []
        }
    },

    computed: {
        monsterBarStyles () {
            if (this.monsterHealth < 0){
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        } ,
        playerBarStyles() {
            if (this.playerHealth < 0){
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
        
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw'
            } else if ( value<= 0) {
                // 플레이어 패배
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw'
            } else if ( value<= 0) {
                // 승리
                this.winner = 'player'
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5 , 12 )

            this.monsterHealth -= attackValue
            this.pushBattleLog('player', 'attack' , attackValue)
            this.attackPlayer()
            
        },

        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.pushBattleLog('monster', 'attack' , attackValue)
        },

        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10 , 25 )

            this.monsterHealth -= attackValue
            this.pushBattleLog('player', 'specialattack' , attackValue)
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(8 , 20)
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.pushBattleLog('player', 'heal' , healValue)
            this.attackPlayer()
        },

        startGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner =  null
            this.battleLogs = []
        },

        surrnder() {
            this.winner = 'monster'
        },

        pushBattleLog(who, what, value) {
            let message =  who + ' ' + what + ' ' + value
       
            this.battleLogs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#game')