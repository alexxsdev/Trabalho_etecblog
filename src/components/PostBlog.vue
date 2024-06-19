<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="image-container">
        <img :src="imagem" alt="Card image">
      </div>
      <p class="card-text">{{ text.length > 200 ? text.substring(0, 200) + '...' : text }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    imagem: { type: String, required: true }
  }
}
</script>

<style scoped>
.card {
  width: 900px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border: 5px solid black; 
  margin-bottom: 25px;
  border-radius: 15px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 10px; 
}

.card-text {
  font-size: 20px;
  text-align: justify;
  line-height: 1.6; 
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px; 
}

.image-container img {
  max-width: 100%;
  max-height: 350px; 
  object-fit: contain; 
}
</style>

