
exports.up = function(knex) {
    return knex.schema.createTable('rws', function(table) {
        table.increments();
        table.string('code');
        table.string('name');
        table.integer('village_id');
        table.integer('tps_id');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rws');
};
