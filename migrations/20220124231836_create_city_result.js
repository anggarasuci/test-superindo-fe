
exports.up = function(knex) {
    return knex.schema.createTable('city_result', function(table) {
        table.increments();
        table.integer('city_id');
        table.integer('caleg_id');
        table.integer('period_id');
        table.integer('total');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('city_result');
};
