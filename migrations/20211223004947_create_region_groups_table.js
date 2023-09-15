
exports.up = function(knex) {
    return knex.schema.createTable('region_groups', function(table) {
        table.increments();
        table.string('name');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('region_groups');
};
