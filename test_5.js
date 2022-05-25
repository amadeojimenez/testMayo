
//----------------------------------------------- 5

//I would like to know the price of "camisetas" in Febrary or later in dollars. 
//getPrice should tell... but it is not working

//Prerequisites:
//npm install sqlite3 
//npm install knex


const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './test5.db'
    },
    useNullAsDefault: true
});

class Itemator {
    constructor(tableName){
        this.table = tableName
    };

    //get what prices from database
    async seleccionaItems(what){
        const priceInEuros = await knex(this.table).select('*').where({item_name:what});
        return priceInEuros;            
    }


    
    async getPrice(what, month, currency, language ) {

        const items = await knex(this.table).select('item_name').where('month','>',month);

        //check if "what" exists in the db
        let ok= false; 
        for (let i =0; i>items.length; i++) {
            ok = items[i] == what;
        }
        if(!ok){return}

        
        priceInEuros = this.seleccionaItems();

        //can you avoid using "var"?
        if(currency == 'euros'){
            var price = priceInEuros;
        }
        if(currency == 'dollars'){
            var price = priceInEuros*0.87
        }
        
        //can you make this part cleaner?
        if(language =='español'){            
            console.log('El price de los ' + what +  ' es:' + price);
        }else if(language =='deutsch'){            
            console.log('Der Preis von ' + what + ' ist:' + price);
        }else if(language =='francais'){            
            console.log('Le prix de ' + what + ' est:' + price);
        }else{
            console.log('The price of the ' + what + ' is:' + price );
        }
        //can you print at the end the currency as well?        
        
    };
};

