<template>      
   <section>
      <slot></slot>
   </section>
</template>

<style scoped>
   section {
      max-width: 650px;      
      margin: 30px auto;
      border: 1px solid #A3DBFF;      
      padding: 50px;
      background: #A3DBFF;
      box-shadow: 0px 5px 10px 2px rgba(212, 212, 206, 0.56);
      border-radius: 10px;
   }
</style>