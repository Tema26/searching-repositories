import helpers from "../helpers/helpers.js";

export default {
   async  requestReprisitories(context) { 
      let nameRepres = context.getters.nameRepres;
      let urlGitApi = helpers.readyUrlApi(nameRepres);   

      const response = await fetch(urlGitApi)
      const arrDataGitApi = await response.json(); 
      
      console.log(arrDataGitApi)

      if(!response.ok) {
         console.log(arrDataGitApi);
         
         const error = new Error(arrDataGitApi.message || 'Не найден, попробуйте снова.')         
         throw error;         
      }

      let readyDataGitApi = helpers.filteredDataApi(arrDataGitApi);     

      context.commit('requestResponse', readyDataGitApi);         
   },   
}