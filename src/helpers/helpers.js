export default {   
   readyUrlApi(nickname) {     
      let urlApi = `https://api.github.com/users/${nickname}/repos`;      
      return urlApi;
   },

   filteredDataApi(array) {
      const readyDataGitApi = [];

      for(let item in array) {
         const sortedDataApi = {
            id: array[item].id,
            name: array[item].name,
            url: array[item].html_url,
            desc: array[item].description,
            stars: array[item].stargazers_count,
            forks: array[item].forks_count
         }
         readyDataGitApi.push(sortedDataApi)
      }
      return readyDataGitApi;
   }  
}