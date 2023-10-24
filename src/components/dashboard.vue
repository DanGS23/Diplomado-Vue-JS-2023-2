<template>
      <section>
    <h1 class="text-center text-4xl py-5 font-semibold text-gray-9
    00">¡HELLO GALERY HOTEL!</h1>
    <div class="galery">
       <img src="../assets/img/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg" alt="carro"> 
       <img src="../assets/img/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg" alt="carro">
       <img src="../assets/img/exterior.jpg" alt="carro">
       <img src="../assets/img/Hotel-San-Fernando-Plaza-Medellin-8-Hotelescolombia.CO_.jpg" alt="carro">
       <img src="../assets/img/ice-39597-61804794_3XL-213017.jpg" alt="carro">
    </div>
</section>

</template>

<script>
    export default {
        
    }
</script>

<style>
    .galery {
    display: flex;
    min-width: 400px;
    height: 400px;
    margin: 40px auto 0 auto;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.614);
}
.galery img{
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: .5s ease;
}

.galery img:hover{
    cursor: pointer;
    width: 300px;
    opacity: 1;
}

</style>