<template>
  <main id="main">
    <div class="d1"></div>    
    <h1 class="main__title">Welcome to Anime Genesis</h1>
    <div class="main__option">
      <div class="main__desc main__desc-voice">
        <ion-icon name="create"></ion-icon>
      </div>
      <div class="main__desc main__desc-text">
        <ion-icon name="text"></ion-icon>
      </div>
    </div>
    <h2 class="main__subtitle">Please choose your describing method</h2>
    <div class="d1"></div>
    <Footer></Footer>
  </main>
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer
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
    // background-image: url("https://puu.sh/AlI6S/71f88c629d.jpg")
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

  .main__desc {
    margin: 2.5rem;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    color: white;
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
