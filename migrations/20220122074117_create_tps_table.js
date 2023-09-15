
exports.up = function(knex) {
    return knex.schema.createTable('tps', function(table) {
        table.increments();
        table.string('code');
        table.string('name');
        table.integer('dapil_id');
        table.integer('period_id');
        table.integer('village_id');
        table.integer('total_dpt');
        table.integer('total_valid');
        table.integer('total_invalid');
        table.integer('total_suffrage');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tps');
};
