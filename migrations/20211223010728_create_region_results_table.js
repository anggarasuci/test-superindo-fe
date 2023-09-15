
exports.up = function(knex) {
    return knex.schema.createTable('region_results', function(table) {
        table.increments();
        table.integer('region_id');
        table.integer('total_user');
        table.integer('total_suffrage_user');
        table.integer('total_valid');
        table.integer('total_invalid');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('region_results');
};
