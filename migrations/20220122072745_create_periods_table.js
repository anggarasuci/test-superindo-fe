
exports.up = function(knex) {
    return knex.schema.createTable('periods', function(table) {
        table.increments();
        table.string('year');
        table.boolean('is_primary').defaultTo(false);
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('periods');
};
