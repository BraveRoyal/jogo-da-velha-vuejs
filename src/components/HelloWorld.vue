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
          >
            <template v-if="g2.isTrue">
              <p style="font-size: 50px">{{ g2.value }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="text-end link-button">
        <router-link to="/singleplayer"
          ><b-button>Um Jogador</b-button></router-link
        >
      </div>
      <div class="text-start link-button">
        <router-link to="/multiplayer"
          ><b-button>Dois Jogadores</b-button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      time: 1,
      game: [
        [
          { isTrue: false, value: "X" },
          { isTrue: false, value: "O" },
          { isTrue: false, value: "X" },
        ],
        [
          { isTrue: false, value: "O" },
          { isTrue: false, value: "O" },
          { isTrue: false, value: "X" },
        ],
        [
          { isTrue: false, value: "O" },
          { isTrue: false, value: "O" },
          { isTrue: false, value: "X" },
        ],
      ],
    };
  },
  created() {
    this.gameSimulator();
  },
  methods: {
    gameSimulator() {
      if (!this.t) {
        this.t = setInterval(() => {
          this._data.game.push([]);
          this._data.game.pop();
          switch (this._data.time) {
            case 1:
              this._data.time = 2;
              this._data.game[0][0].isTrue = true;
              break;
            case 2:
              this._data.time = 3;
              this._data.game[2][0].isTrue = true;
              break;
            case 3:
              this._data.time = 4;
              this._data.game[2][2].isTrue = true;
              break;
            case 4:
              this._data.time = 5;
              this._data.game[1][1].isTrue = true;
              break;
            case 5:
              this._data.time = 6;
              this._data.game[0][2].isTrue = true;
              break;
            case 6:
              this._data.time = 7;
              this._data.game[0][1].isTrue = true;
              break;
            case 7:
              this._data.time = 8;
              this._data.game[1][2].isTrue = true;
              break;
            case 8:
              this._data.time = 1;
              this._data.game.forEach((element, index) => {
                this._data.game[index].forEach((element) => {
                  element.isTrue = false;
                });
              });
              break;
            default:
              break;
          }
        }, 3000);
      } else {
        clearInterval(this.t);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
