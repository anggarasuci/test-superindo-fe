
exports.up = function(knex) {
    return knex.schema.createTable('dapil_district', function(table) {
        table.integer('dapil_id');
        table.integer('district_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dapil_district');
};
