
exports.up = function(knex) {
    return knex.schema.createTable('parties', function(table) {
        table.increments();
        table.integer('counter_no');
        table.string('name');
        table.string('motto');
        table.string('logo');
        table.string('color');
        table.string('text_color');
        table.integer('created_by');
        table.integer('updated_by');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('parties');
};
