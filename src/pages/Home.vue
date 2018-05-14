<template>
  <main id="main">
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
  </main>
</template>

<script>
  
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
  }

  .main__desc-voice {
    background-color: #F44336;
  }

  .main__desc-text {
    background-color: #2196F3;    
  }


</style>
