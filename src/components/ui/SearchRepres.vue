<template>
   <div>
      <section class="search">
         <h2>Поиск репозиториев</h2>
         <label for>
            <input @keyup.enter="requests" type="text" placeholder="Введите никнейм" v-model.trim="search">            
         </label>         
         <button @click.enter="requests" class="btn-search">Поиск</button>
         <p v-if="warning" class="warning">Необходимо ввести никнейм искомого пользователя!</p>
         <p v-else-if="error.show" class="warning">{{error.message}}</p>
      </section>
      <section class="resutl" v-if="show">
         <cards-repres></cards-repres>
      </section>
   </div>
   
</template>

<script>
   import CardsRepres from './CardsRepres.vue';
export default {
   components: {
      CardsRepres
   },
   data() {
      return {
         search: '',
         show: false,
         warning: false,            
         error: {
            message: '',
            show: false,
         },                  
      }
   },
   methods: {          
      async requests() {
         this.$store.commit('renewalState', {
            search: this.search
         })
         
         try {
            if(this.search === '') {
               this.warning = true;
               this.show = false; 
               setTimeout(() => {
                  this.warning = false;
               }, 3000); 
               return
            }

            await this.$store.dispatch('requestReprisitories');
            this.$store.commit('updatePage', this.page = 1)
            this.$router.push(`${this.$route.path}?page=${this.$store.getters.returnPage}`)                       
            this.show = true;            
            this.warning = false;            
         } catch (error) { 
            this.show = false;             
            this.error.show = true;            
            this.error.message = 'Такой никнейм не существует!'; 
            setTimeout(() => {
                  this.error.show = false;
               }, 3000);           
         } finally {
            this.search = '';            
         }   
      },                
   },    
}
</script>

<style scoped>
   .search {
      text-align: center;
      margin-top: 30px;
   }
   .result {
      text-align: center;
      margin-top: 30px;      
   }
   input {
      margin: 0 10px 0 0;
      cursor: pointer;
   }
   .warning {
      color: #E32636;
      font-size: 18px;
      font-weight: 700;
   }
   .btn-search {
      margin-left: 10px;
      border: 1px solid #A3DBFF;
      background-color: #fff;
      font-weight: 700;      
      padding: 3px 5px;            
      border-radius: 10px;
      height: 25px;
      cursor: pointer;
   }     
</style>