<template>
  <div>
    <div class="text-center" style="color: white; padding: 20px 0px">
      <h2>Jogo Da Velha</h2>
    </div>
    <div class="text-center">
      <div class="flex game-block">
        <div v-for="(g, index) in game" :key="index">
          <div
            class="game-option"
            v-for="(g2, index2) in game[index]"
            :key="index2"
            style="cursor: pointer"
            @click="play(index, index2)"
          >
            <template v-if="g2.isTrue">
              <p style="font-size: 50px">{{ g2.value }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-if="!won.isTrue">
      <h2 style="color: white">Vez do Player {{ player }}</h2>
    </div>
    <div class="text-center" v-else>
      <h2 style="color:white">Player {{won.playerWinner}} Ganhou</h2>
    </div>
    <div class="text-center">
        <h2 style="color:yellow; cursor:pointer;" @click="reset">Resetar</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        won:{isTrue:false,playerWinner:""},
      player: "X",
      game: [
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
      ],
    };
  },
  methods: {
    reset() {
      this.game = [
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
        [
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
          { isTrue: false, value: "" },
        ],
      ];
      this.player = "X";
      this.won.isTrue= false;
      this.won.playerWinner = "";
    },
    play(index, index2) {
      if (this.game[index][index2].value == "" && !this.win()) {
        this.game[index][index2].isTrue = true;
        this.game[index][index2].value = this.player;
        if (this.player == "X") {
          this.player = "O";
        } else {
          this.player = "X";
        }
        this.win();
      }
    },
    win(){
        if([this.game[0][0].value,this.game[0][1].value,this.game[0][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][0].value,this.game[0][1].value,this.game[0][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[1][0].value,this.game[1][1].value,this.game[1][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[2][0].value,this.game[2][1].value,this.game[2][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][0].value,this.game[1][0].value,this.game[2][0].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][1].value,this.game[1][1].value,this.game[2][1].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][2].value,this.game[1][2].value,this.game[2][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][0].value,this.game[1][1].value,this.game[2][2].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][2].value,this.game[1][1].value,this.game[2][0].value].every((e)=>{return e == "X"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'X';
            return true;
        } else if([this.game[0][0].value,this.game[0][1].value,this.game[0][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][0].value,this.game[0][1].value,this.game[0][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[1][0].value,this.game[1][1].value,this.game[1][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[2][0].value,this.game[2][1].value,this.game[2][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][0].value,this.game[1][0].value,this.game[2][0].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][1].value,this.game[1][1].value,this.game[2][1].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][2].value,this.game[1][2].value,this.game[2][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][0].value,this.game[1][1].value,this.game[2][2].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        } else if([this.game[0][2].value,this.game[1][1].value,this.game[2][0].value].every((e)=>{return e == "O"})){
            this.won.isTrue = true;
            this.won.playerWinner = 'O';
            return true;
        }
        return false;
    }
  },
};
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-button {
  margin: 10px;
}
.game-option {
  margin: 10px 5px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 20px;
}
.game-block {
  width: 350px;
  height: 350px;
  margin: 20px auto;
  padding: 20px 0px;
  background-color: rgba(0, 0, 0, 0.199);
  border: 2px solid black;
  border-radius: 20px;
}
.game-option p {
  color: black;
}
</style>