const mongoose = require('mongoose');
import config from './config'


(async () => {
    try{
        const mogooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        }

        const db = await mongoose.connect(`mongodb://${config.MOGO_HOST}/${config.MOGO_DATABASE}`, mogooseOptions);
        console.log('database is connected')

    }catch (error){
        console.error(error);
    
    }
    
    
})()