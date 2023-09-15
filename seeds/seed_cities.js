
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {
          code: '3601',
          name: 'KAB. PANDEGLANG',
          province_id: 16,
          dapil_id: 9,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3602',
          name: 'KAB. LEBAK',
          province_id: 16,
          dapil_id: 8,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3603',
          name: 'KAB. TANGERANG',
          province_id: 16,
          dapil_id: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3604',
          name: 'KAB. SERANG',
          province_id: 16,
          dapil_id: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3671',
          name: 'KOTA TANGERANG',
          province_id: 16,
          dapil_id: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3672',
          name: 'KOTA CILEGON',
          province_id: 16,
          dapil_id: 10,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3673',
          name: 'KOTA SERANG',
          province_id: 16,
          dapil_id: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '3674',
          name: 'KOTA TANGERANG SELATAN',
          province_id: 16,
          dapil_id: 7,
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};
