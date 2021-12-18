<template>
   <section>       
      <h2>Детали репозитория: {{ selectedCardData.name }}</h2>      
      <ul>
         <li>Имя репозитория: {{selectedCardData.name}}</li>
         <li>Url адрес: <a :href="selectedCardData.url" target="_blank">{{selectedCardData.url}}</a></li>
         <li>Forks: {{selectedCardData.forks}}</li>             
      </ul>          
   </section>  
</template>

<script>
export default {   
   props: {
      id: {
         type: String,
         required: true
      }
      },   
   data() {
      return {
         selectedCardData: [],
      }
   },
   computed: {
      repositories() {                    
         return this.$store.getters.response;
      },
   },
   methods: {      
      overCardData() {         
         let cardData = [];
         for(let item in this.repositories) {
            const obj = {
               id: this.repositories[item].id,
               name: this.repositories[item].name,
               forks: this.repositories[item].forks,
               url: this.repositories[item].url,
               desc: this.repositories[item].desc               
            }            
            cardData.push(obj);                     
         }
         return cardData;
      },
      searchRepositories() {                           
         this.selectedCardData = this.overCardData().find(arr => arr.id === +this.id);        
         console.log(this.selectedCardData);             
      }      
   }, 
   created() {
      this.searchRepositories();
   }
}
</script>

<style scoped>
   section {
      text-align: center;
   }
   ul {
      text-decoration: none;
   }
   li {
      list-style-type: none;
      font-size: 18px;
   }
</style>