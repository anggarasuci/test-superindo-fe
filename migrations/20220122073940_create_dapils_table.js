
exports.up = function(knex) {
    return knex.schema.createTable('dapils', function(table) {
        table.increments();
        table.string('code');
        table.string('name');
        table.integer('province_id');
        table.integer('period_id');
        table.integer('total_kursi');
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
    return knex.schema.dropTable('dapils');
};
