






module.exports = (sequelize, type) => {
    return sequelize.define('burgers', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        burger_name: type.STRING,
        devoured: type.BOOLEAN
        
    }, {
        timestamps: false
    }

    
    )
   
    
}


