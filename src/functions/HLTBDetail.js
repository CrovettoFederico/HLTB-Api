const { app } = require('@azure/functions');
const { HowLongToBeatService } = require('howlongtobeat');

app.http('HLTBDetail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {        
        let Detail = request.query.get('detail')        
        if(Detail!="" && Detail!= null){
            let hltbService = new HowLongToBeatService();
            let result = null;
            await hltbService.detail(Detail).then(res =>{ 
                result = res;
            });

            return { body: JSON.stringify(result) };
        }else{
            return { body: "You must pass a Parameter to this endpoint. HLTBDetail?detail=GameID" };
        }
    }
});
