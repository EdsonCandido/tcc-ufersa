const connection = require('../database/connection');

module.exports = {
    async createForFile(request, response){
        try {
            if(!request.files){
                response.status(406).send();
            }
            let arquivoHorario =  request.files.horario;
            arquivoHorario.mv('./temp/'+Date.now()+'_'+arquivoHorario.name);
            response.status(204).send();
        } catch (error) {
            
        }
    }
}