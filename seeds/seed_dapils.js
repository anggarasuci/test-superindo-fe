
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dapils').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dapils').insert([
        {
          code: '36-001',
          name: 'BANTEN 1',
          province_id: 16,
          period_id: 2,
          total_kursi: 5,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-002',
          name: 'BANTEN 2',
          province_id: 16,
          period_id: 2,
          total_kursi: 12,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-003',
          name: 'BANTEN 3',
          province_id: 16,
          period_id: 2,
          total_kursi: 10,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-004',
          name: 'BANTEN 4',
          province_id: 16,
          period_id: 2,
          total_kursi: 11,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-005',
          name: 'BANTEN 5',
          province_id: 16,
          period_id: 2,
          total_kursi: 8,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-006',
          name: 'BANTEN 6',
          province_id: 16,
          period_id: 2,
          total_kursi: 6,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-007',
          name: 'BANTEN 7',
          province_id: 16,
          period_id: 2,
          total_kursi: 11,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-008',
          name: 'BANTEN 8',
          province_id: 16,
          period_id: 2,
          total_kursi: 9,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-009',
          name: 'BANTEN 9',
          province_id: 16,
          period_id: 2,
          total_kursi: 10,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          code: '36-010',
          name: 'BANTEN 10',
          province_id: 16,
          period_id: 2,
          total_kursi: 3,
          total_dpt: 0,
          total_valid: 0,
          total_invalid: 0,
          total_suffrage: 0,
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};
