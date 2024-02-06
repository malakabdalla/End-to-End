const db = require ("../Database/connect")
class City {
    constructor({city_id, country_name, name, population}) {
      this.city_id = city_id 
      this.country_name = country_name
      this.name = name
    }

    static async getAll(){
        const response = await db.query("SELECT name FROM city")
        if(response.rows.length === 0){
            throw new Error("No cities in Database")
        }
        return response.rows.map(c => new City(c))
    }
    static async getOneByCityName(ct) {
      const response = await db.query("SELECT * FROM city WHERE LOWER(name) = LOWER($1);", [ct])
      if (response.rows.length != 1){
        throw new Error("can not get city")
      }
      return new City(response.rows[0])
    }

    static async create(data){
      const {country_name, name, population} = data
      const ec = await  db.query("SELECT name FROM city WHERE LOWER(name) = LOWER($1);", [name])
      if(ec.rows.length > 0){
        throw new Error("City already is in the DB")
      }
      let response = await db.query("INSERT INTO city (country_name, name, population) VALUES($1, $2, $3) RETURNING *;", [country_name, name, population])
      return new City (response.rows[0])
    }
    
    async destroy (){
      let response = await db.query("DELETE FROM city WHERE name = $1 RETURNING *;", [this.name])
      return new City(response.rows[0])
    }

    async update(data){ 
      const {country_name, name, population} = data;
      const exists = await db.query("SELECT * FROM city WHERE LOWER(name) = LOWER($1);", [this.name])
      if(exists.rows.length === 0) {
          throw new Error("City does not exist")
      }
      let response = await db.query("UPDATE city SET country_name = $1, name = $2, population =$3 WHERE name = $4;", [country_name,name, population, this.name])
      return new City(response.rows[0])
  }
  }
  module.exports =  City