const db = require ("../Database/connect")
class Country {
    constructor({country_id, name, capital, population, languages, fun_fact, map_image_url}) {
      this.country_id = country_id
      this.name = name
      this.capital = capital
      this.population = population
      this.languages = languages
      this.fun_fact = fun_fact
      this.map_image_url = map_image_url
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM country")
        if(response.rows.length === 0){
            throw new Error("No countries in Database")
        }
        return response.rows.map(c)
    }
  }
  
  module.exports = Country;