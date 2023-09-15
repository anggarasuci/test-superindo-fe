
exports.up = function(knex) {
    return knex.schema.createTable('caleg', function(table) {
        table.increments();
        table.string('name');
        table.integer('party_id');
        table.integer('dapil_id');
        table.integer('period_id');
        table.boolean('is_choosen').defaultTo(false);
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caleg');
};
