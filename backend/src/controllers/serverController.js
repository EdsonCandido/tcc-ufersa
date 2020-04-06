const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const servers = await connection('servers').select('*');

        return response.json(servers);
    },
    async create(request, response){
        let {registration, name, birth, disconnexion, admission,assistance,post,category,schooling, location, regime, situation, salary, titration_remuneration, union_affiliate, additional_union_affiliate} = request.body;

        await connection('servers').insert({
            registration, name, birth, disconnexion, admission,assistance,post,category,schooling, location, regime, situation, salary, titration_remuneration, union_affiliate, additional_union_affiliate
        });

        response.status(201).send();
    },
    async update(request, response){
        let {name, birth, disconnexion, admission,assistance,post,category,schooling, location, regime, situation, salary, titration_remuneration, union_affiliate, additional_union_affiliate} = request.body;
        const {registration} = request.params;
        const server = await connection('servers').where('registration', registration).select('*').first();

        if(!server){
            response.status(400).json({error: 'Not Server found with this Registration'});
        }

        await connection('servers')
            .where('registration', '=', registration)
            .update({
                'name': name, 'birth': birth,
                'disconnexion': disconnexion, 'admission': admission,
                'assistance': assistance ,'post': post, 'category': category ,'schooling': schooling,
                'location': location, 'regime': regime, 'situation': situation, 'salary': salary,
                'titration_remuneration' :titration_remuneration, 'union_affiliate': titration_remuneration,
                'additional_union_affiliate': additional_union_affiliate
            });
        
        response.status(204).send();
    }
}