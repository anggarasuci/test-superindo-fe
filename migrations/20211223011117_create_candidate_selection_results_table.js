
exports.up = function(knex) {
    return knex.schema.createTable('candidate_selection_results', function(table) {
        table.increments();
        table.integer('candidate_id');
        table.integer('region_id');
        table.integer('total_valid');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('candidate_selection_results');
};
