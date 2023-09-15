
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('periods').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('periods').insert([
        {year: '2014', is_primary: false, created_by: 1, updated_by: 1},
        {year: '2019', is_primary: true, created_by: 1, updated_by: 1}
      ]);
    });
};
