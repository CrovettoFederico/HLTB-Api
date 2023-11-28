const { app } = require('@azure/functions');
const { HowLongToBeatService } = require('howlongtobeat');

app.http('HLTBSearch', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        let Search = request.query.get('search') 
        if(Search != "" && Search != null){               
            let hltbService = new HowLongToBeatService();        
            let result = null;
            await hltbService.search(Search).then(res =>{ 
                result = res;
            });

            return { body: JSON.stringify(result) };
        }else{
            return { body: "You must pass a Parameter to this endpoint. HLTBSearch?search=QuerySearch" };
        }
        
    }
});
