
exports.up = function(knex) {
    return knex.schema.createTable('roles', function(table) {
        table.increments();
        table.string('name');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('roles');
};
