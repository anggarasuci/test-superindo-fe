
exports.up = function(knex) {
    return knex.schema.createTable('candidates', function(table) {
        table.increments();
        table.integer('counter_no');
        table.string('name');
        table.integer('party_id');
        table.integer('region_group_id');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('candidates');
};
