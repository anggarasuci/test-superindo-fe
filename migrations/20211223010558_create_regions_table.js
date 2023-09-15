
exports.up = function(knex) {
    return knex.schema.createTable('regions', function(table) {
        table.increments();
        table.string('name');
        table.integer('region_group_id');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('regions');
};
