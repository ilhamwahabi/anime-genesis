<template>
  <main id="main">
    <div class="d1"></div>    
    <h1 class="main__title">Welcome to Anime Genesis</h1>
    <div v-if="!selected" class="main__option">
      <div @click="onSelectOption" class="main__desc main__desc-text">
        <ion-icon name="create"></ion-icon>
      </div>
      <div @click="onSelectOption" class="main__desc main__desc-voice">
        <ion-icon name="text"></ion-icon>
      </div>
    </div>
    <h2 v-if="!selected" class="main__subtitle">Please choose your describing method</h2>
    <v-container v-if="selected">
      <v-layout row>
        <v-flex xs4 offset-xs4>
          <v-text-field
            name="input-1"
            label="Kalimat pencarian"
            textarea
            rows="3"
            v-model="input"
          ></v-text-field>
          <v-btn depressed large color="primary">Pencarian</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="d1"></div>
    <Footer></Footer>
  </main>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data(){
    return {
      selected: false,
      input: ""
    }
  },
  components: {
    Footer
  },
  methods: {
    onSelectOption(){
      this.selected = true;
    }
  }
}
</script>

<style lang="scss" scoped>

  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    // background-image: linear-gradient(rgba(230, 230, 230, 0.808)), url("https://puu.sh/Am9zJ/598837bf32.png");
    background-color: #F5F5F5;    
  }

  .main__title {
    font-size: 3rem;
  }

  .main__option {
    display: flex;
    flex-direction: row;
    font-size: 5rem;
  }

  .main__textarea {
    border-radius: 20%;
  }

  ion-icon {
    font-size: 5rem;   
    color: white !important;     
  }

  .main__desc {
    margin: 2.5rem;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;

    &:hover {
      // box-shadow: .5rem .5rem #9E9E9E; 
      transform: translateY(-0.5rem);     
    }
  
    &-voice {
      background-color: #F44336;
    }

    &-voice:hover {
      background-color: #D32F2F;
    }

    &-text {
      background-color: #2196F3;    
    }

    &-text:hover {
      background-color: #1976D2;    
    }
  }

  .d1 {
    flex: 1;
  }

</style>
