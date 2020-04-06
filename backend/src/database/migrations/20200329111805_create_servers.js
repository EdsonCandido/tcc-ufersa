
exports.up = function(knex) {
    return knex.schema.createTable('servers', function(table){
        table.increments();
        table.string('registration');
        table.string('name');
        table.date('birth');
        table.date('disconnexion');
        table.date('admission');
        table.boolean('assistance');
        table.string('post');
        table.string('category');
        table.string('schooling');
        table.string('location');
        table.string('regime');
        table.string('situation');
        table.float('salary');
        table.float('titration_remuneration');
        table.boolean('union_affiliate');
        table.boolean('additional_union_affiliate');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('servers');
};
