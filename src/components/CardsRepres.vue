<template>   
   <div class="result"> 
      <h2>Cписок найденных репризиториев</h2>    
      <ul>      
         <card-item class="item" v-for="item in repositories" 
         :key="item.id"
         :id="item.id"
         :name="item.name"
         :url="item.url"
         :desc="item.desc"
         :stars="item.stars"
         :forks="item.forks"                    
         ></card-item> 
         <div class="list-btn">
            <button class="btn-prev btn" @click="pagePrev" v-show="isShowBtnPagePrev">Назад</button>            
            <p class="main-page">{{ page }}</p>           
            <button class="btn-next btn" @click="pageNext" v-show="isShowBtnPageNext">Вперед</button> 
         </div>                                   
      </ul>      
   </div>   
</template>

<script>
import CardItem from './CardItem.vue';

export default {   
   components: {
      CardItem
   },   
   emits: ['update-page'],       
   computed: {
      page() {
         return this.$store.getters.returnPage;
      },
      repositories: function() {          
         return this.$store.getters.response.slice(this.filterStart, this.filterEnd);
      }, 
      filterStart() {
         const start = (this.page - 1) * 4;
         return start; 
      },  
      filterEnd() {
          const end = this.page * 4;  
         return end;
      },
      isShowBtnPagePrev: function() {
         if(this.page === 1) {                       
            return false;
         } else {
            return true;
         }  
      },
      isShowBtnPageNext: function() {
         if(this.repositories.length === 4) {
            return true;
         } else {
            return false;
         }
      }         
   },
   methods: {            
      pageNext() {        
         // this.page++ 
         this.$store.commit('updatePage', this.page + 1)
         this.$router.push(`${this.$route.path}?page=${this.page}`)        
      },
      pagePrev() {                   
         // this.page--
         this.$store.commit('updatePage', this.page - 1)
         this.$router.push(`${this.$route.path}?page=${this.page}`)         
      },       
   }               
}
</script>

<style scoped>   
   ul { 
      position: relative;
      text-decoration: none;     
      display: flex;
      flex-direction: row; 
      flex-wrap: wrap;     
      border-radius: 10px;     
      padding: 0; 
      color: #000;  
      border-radius: 10px;   
   } 
   ul:first-child {
      margin: 0;
   }  
   .item {
      margin: 0 0 0 10px;
   }
   .item:first-child {
      margin: 0px;
   }
   .item:nth-child(odd) {
      margin: 0px;
   }
   .item:nth-child(n+3) {
      margin-top: 10px;
   }
   .list-btn {  
      width: 100%;
      height: 30px;         
      position: relative;     
   }
   .main-page { 
      position: absolute;
      top: 50%;
      left: 48.5%;      
      font-weight: 700;  
      font-size: 18px;  
      cursor: pointer; 
   }
   .btn {     
      border: 1px solid #A3DBFF;
      background-color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 5px;            
      border-radius: 10px;
      height: 25px;
      cursor: pointer;
   }
   .btn-next {
      position: absolute;
      top: 102%;
      left: 52%;
   } 
   .btn-prev {
      position: absolute;
      top: 102%;
      left: 37%;
   }        
</style>