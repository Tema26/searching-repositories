<template>    
   <li>     
      <p class="name">Имя репозитория: <span>{{ name }}</span></p>
      <p class="desc">Описание: <span>{{ desc }}</span></p>
      <p class="url">Url: <br> <a :href="url" target="_blank">{{ url }}</a></p>
      <p class="stars">Звездочки: <span>{{ stars }}</span></p>
      <p class="forks">Форки: <span>{{ forks }}</span></p>
      <router-link :to="urlCard" class="button">Подробнее</router-link>
   </li>        
</template>

<script>
export default {
   props: {
      name: {
         type: String,
      },
      desc: {
         type: String,
      },
      url: {
         type: String,
      },
      stars: {
         type: Number,
         default: 0,
      },
      forks: {
         type: Number,
         default: 0,
      },
      id: {
         type: Number,
      },     
   },
   data() {
      return {
         idCard: '',         
      }
   },
   computed: {
      urlCard() {
         return '/info/' + this.idCard;
      },
   },
   created() {
      const listId = [this.id];   
      
      this.idCard = listId.find(arr => arr.id === this.$route.params.id)      
   },   
}
</script>

<style scoped>
   li {      
      display: flex;      
      flex-direction: column;
      width: 47%;
      background-color: #fff;  
      padding: 15px 5px 15px 5px; 
      border-radius: 10px;   
   }
   p {
      font-weight: 700;          
   }
   a {
      cursor: pointer;
      text-decoration: none;
      font-weight: 700;
      color: #333;
   } 
   .forks {
      height: 100%;
   }
   .button {
      border: 1px solid #A3DBFF;
      background: #A3DBFF;
      border-radius: 10px;
      padding: 3px 0;
   }   
   .desc, .url {
      word-wrap: break-word;
   }  
</style>