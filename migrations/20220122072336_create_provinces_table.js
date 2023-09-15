
exports.up = function(knex) {
    return knex.schema.createTable('provinces', function(table) {
        table.increments();
        table.string('code');
        table.string('name');
        table.integer('island_id');
        table.integer('dominant_party_id');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('provinces');
};
