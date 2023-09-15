
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('city_result').del()
    .then(function () {
      // Inserts seed entries
      return knex('city_result').insert([
        {
          city_id: 1,
          caleg_id: 1,
          period_id: 2,
          total: 23442,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 2,
          period_id: 2,
          total: 3233,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 3,
          period_id: 2,
          total: 1469,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 4,
          period_id: 2,
          total: 1235,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 5,
          period_id: 2,
          total: 584,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 6,
          period_id: 2,
          total: 315,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 7,
          period_id: 2,
          total: 21466,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 8,
          period_id: 2,
          total: 12466,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 9,
          period_id: 2,
          total: 5720,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 10,
          period_id: 2,
          total: 10031,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 11,
          period_id: 2,
          total: 1183,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 12,
          period_id: 2,
          total: 566,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 13,
          period_id: 2,
          total: 9703,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 14,
          period_id: 2,
          total: 15890,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 15,
          period_id: 2,
          total: 3677,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 16,
          period_id: 2,
          total: 5570,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 17,
          period_id: 2,
          total: 864,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 18,
          period_id: 2,
          total: 599,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 19,
          period_id: 2,
          total: 32071,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 20,
          period_id: 2,
          total: 6260,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 21,
          period_id: 2,
          total: 4006,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 22,
          period_id: 2,
          total: 2349,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 23,
          period_id: 2,
          total: 2798,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 24,
          period_id: 2,
          total: 958,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 25,
          period_id: 2,
          total: 46105,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 26,
          period_id: 2,
          total: 2757,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 27,
          period_id: 2,
          total: 936,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 28,
          period_id: 2,
          total: 554,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 29,
          period_id: 2,
          total: 5817,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 30,
          period_id: 2,
          total: 717,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 31,
          period_id: 2,
          total: 2597,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 32,
          period_id: 2,
          total: 1536,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 33,
          period_id: 2,
          total: 727,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 34,
          period_id: 2,
          total: 763,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 35,
          period_id: 2,
          total: 799,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 36,
          period_id: 2,
          total: 359,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 37,
          period_id: 2,
          total: 53187,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 38,
          period_id: 2,
          total: 16556,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 39,
          period_id: 2,
          total: 1781,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 40,
          period_id: 2,
          total: 1002,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 41,
          period_id: 2,
          total: 745,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 42,
          period_id: 2,
          total: 2582,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 43,
          period_id: 2,
          total: 15920,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 44,
          period_id: 2,
          total: 13519,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 45,
          period_id: 2,
          total: 779,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 46,
          period_id: 2,
          total: 228,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 47,
          period_id: 2,
          total: 486,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 48,
          period_id: 2,
          total: 6068,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 49,
          period_id: 2,
          total: 18708,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 50,
          period_id: 2,
          total: 1180,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 51,
          period_id: 2,
          total: 5124,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 52,
          period_id: 2,
          total: 889,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 53,
          period_id: 2,
          total: 1080,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 54,
          period_id: 2,
          total: 690,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 55,
          period_id: 2,
          total: 389,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 56,
          period_id: 2,
          total: 831,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 57,
          period_id: 2,
          total: 88,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 58,
          period_id: 2,
          total: 131,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 59,
          period_id: 2,
          total: 352,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 60,
          period_id: 2,
          total: 15435,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 61,
          period_id: 2,
          total: 1929,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 62,
          period_id: 2,
          total: 1307,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 63,
          period_id: 2,
          total: 932,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 64,
          period_id: 2,
          total: 901,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 65,
          period_id: 2,
          total: 562,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 66,
          period_id: 2,
          total: 1715,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 67,
          period_id: 2,
          total: 847,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 68,
          period_id: 2,
          total: 217,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 69,
          period_id: 2,
          total: 475,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 70,
          period_id: 2,
          total: 243,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 71,
          period_id: 2,
          total: 481,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 72,
          period_id: 2,
          total: 7193,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 73,
          period_id: 2,
          total: 49215,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 74,
          period_id: 2,
          total: 5323,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 75,
          period_id: 2,
          total: 2531,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 76,
          period_id: 2,
          total: 1241,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 77,
          period_id: 2,
          total: 1052,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 78,
          period_id: 2,
          total: 2241,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 79,
          period_id: 2,
          total: 785,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 80,
          period_id: 2,
          total: 210,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 81,
          period_id: 2,
          total: 137,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 82,
          period_id: 2,
          total: 185,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 83,
          period_id: 2,
          total: 319,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 1,
          caleg_id: 84,
          period_id: 2,
          total: 190,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 1,
          period_id: 2,
          total: 9114,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 2,
          period_id: 2,
          total: 7390,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 3,
          period_id: 2,
          total: 2020,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 4,
          period_id: 2,
          total: 924,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 5,
          period_id: 2,
          total: 479,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 6,
          period_id: 2,
          total: 447,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 7,
          period_id: 2,
          total: 35326,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 8,
          period_id: 2,
          total: 35326,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 9,
          period_id: 2,
          total: 11405,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 10,
          period_id: 2,
          total: 6137,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 11,
          period_id: 2,
          total: 1343,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 12,
          period_id: 2,
          total: 900,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 13,
          period_id: 2,
          total: 30478,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 14,
          period_id: 2,
          total: 14151,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 15,
          period_id: 2,
          total: 4125,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 16,
          period_id: 2,
          total: 3837,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 17,
          period_id: 2,
          total: 1106,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 18,
          period_id: 2,
          total: 1515,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 19,
          period_id: 2,
          total: 40570,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 20,
          period_id: 2,
          total: 4627,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 21,
          period_id: 2,
          total: 3395,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 22,
          period_id: 2,
          total: 2178,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 23,
          period_id: 2,
          total: 1227,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 24,
          period_id: 2,
          total: 900,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 25,
          period_id: 2,
          total: 4829,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 26,
          period_id: 2,
          total: 2563,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 27,
          period_id: 2,
          total: 676,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 28,
          period_id: 2,
          total: 611,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 29,
          period_id: 2,
          total: 11267,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 30,
          period_id: 2,
          total: 2346,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 31,
          period_id: 2,
          total: 2157,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 32,
          period_id: 2,
          total: 2027,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 33,
          period_id: 2,
          total: 940,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 34,
          period_id: 2,
          total: 570,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 35,
          period_id: 2,
          total: 553,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 36,
          period_id: 2,
          total: 384,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 37,
          period_id: 2,
          total: 13963,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 38,
          period_id: 2,
          total: 7826,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 39,
          period_id: 2,
          total: 1324,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 40,
          period_id: 2,
          total: 1324,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 41,
          period_id: 2,
          total: 912,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 42,
          period_id: 2,
          total: 14123,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 43,
          period_id: 2,
          total: 7078,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 44,
          period_id: 2,
          total: 13134,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 45,
          period_id: 2,
          total: 603,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 46,
          period_id: 2,
          total: 308,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 47,
          period_id: 2,
          total: 844,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 48,
          period_id: 2,
          total: 8582,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 49,
          period_id: 2,
          total: 31285,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 50,
          period_id: 2,
          total: 1749,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 51,
          period_id: 2,
          total: 7075,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 52,
          period_id: 2,
          total: 590,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 53,
          period_id: 2,
          total: 999,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 54,
          period_id: 2,
          total: 701,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 55,
          period_id: 2,
          total: 494,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 56,
          period_id: 2,
          total: 478,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 57,
          period_id: 2,
          total: 133,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 58,
          period_id: 2,
          total: 171,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 59,
          period_id: 2,
          total: 156,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 60,
          period_id: 2,
          total: 8776,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 61,
          period_id: 2,
          total: 1477,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 62,
          period_id: 2,
          total: 875,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 63,
          period_id: 2,
          total: 310,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 64,
          period_id: 2,
          total: 318,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 65,
          period_id: 2,
          total: 270,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 66,
          period_id: 2,
          total: 1493,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 67,
          period_id: 2,
          total: 417,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 68,
          period_id: 2,
          total: 140,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 69,
          period_id: 2,
          total: 138,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 70,
          period_id: 2,
          total: 127,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 71,
          period_id: 2,
          total: 689,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 72,
          period_id: 2,
          total: 46253,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 73,
          period_id: 2,
          total: 6908,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 74,
          period_id: 2,
          total: 6908,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 75,
          period_id: 2,
          total: 3471,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 76,
          period_id: 2,
          total: 2018,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 77,
          period_id: 2,
          total: 4028,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 78,
          period_id: 2,
          total: 982,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 79,
          period_id: 2,
          total: 472,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 80,
          period_id: 2,
          total: 135,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 81,
          period_id: 2,
          total: 102,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 82,
          period_id: 2,
          total: 251,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 83,
          period_id: 2,
          total: 206,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 2,
          caleg_id: 84,
          period_id: 2,
          total: 137,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 85,
          period_id: 2,
          total: 24640,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 86,
          period_id: 2,
          total: 14385,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 87,
          period_id: 2,
          total: 2442,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 88,
          period_id: 2,
          total: 1399,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 89,
          period_id: 2,
          total: 762,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 90,
          period_id: 2,
          total: 340,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 91,
          period_id: 2,
          total: 59906,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 92,
          period_id: 2,
          total: 9870,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 93,
          period_id: 2,
          total: 7258,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 94,
          period_id: 2,
          total: 3791,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 95,
          period_id: 2,
          total: 1476,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 96,
          period_id: 2,
          total: 2922,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 97,
          period_id: 2,
          total: 15487,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 98,
          period_id: 2,
          total: 11594,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 99,
          period_id: 2,
          total: 5124,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 100,
          period_id: 2,
          total: 4154,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 101,
          period_id: 2,
          total: 4371,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 102,
          period_id: 2,
          total: 3168,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 103,
          period_id: 2,
          total: 40464,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 104,
          period_id: 2,
          total: 7109,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 105,
          period_id: 2,
          total: 4207,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 106,
          period_id: 2,
          total: 4328,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 107,
          period_id: 2,
          total: 4031,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 108,
          period_id: 2,
          total: 1646,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 109,
          period_id: 2,
          total: 5051,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 110,
          period_id: 2,
          total: 14303,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 111,
          period_id: 2,
          total: 1335,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 112,
          period_id: 2,
          total: 5430,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 113,
          period_id: 2,
          total: 8597,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 114,
          period_id: 2,
          total: 5270,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 115,
          period_id: 2,
          total: 1198,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 116,
          period_id: 2,
          total: 736,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 117,
          period_id: 2,
          total: 22929,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 118,
          period_id: 2,
          total: 5531,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 119,
          period_id: 2,
          total: 1157,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 120,
          period_id: 2,
          total: 1077,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 121,
          period_id: 2,
          total: 534,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 122,
          period_id: 2,
          total: 719,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 123,
          period_id: 2,
          total: 35245,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 124,
          period_id: 2,
          total: 16629,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 125,
          period_id: 2,
          total: 2297,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 126,
          period_id: 2,
          total: 2520,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 127,
          period_id: 2,
          total: 4341,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 128,
          period_id: 2,
          total: 1590,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 129,
          period_id: 2,
          total: 3622,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 130,
          period_id: 2,
          total: 1754,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 131,
          period_id: 2,
          total: 695,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 132,
          period_id: 2,
          total: 1041,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 133,
          period_id: 2,
          total: 714,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 134,
          period_id: 2,
          total: 457,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 135,
          period_id: 2,
          total: 5414,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 136,
          period_id: 2,
          total: 19546,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 137,
          period_id: 2,
          total: 6065,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 138,
          period_id: 2,
          total: 1292,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 139,
          period_id: 2,
          total: 670,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 140,
          period_id: 2,
          total: 6203,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 141,
          period_id: 2,
          total: 1143,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 142,
          period_id: 2,
          total: 634,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 143,
          period_id: 2,
          total: 682,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 144,
          period_id: 2,
          total: 436,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 145,
          period_id: 2,
          total: 246,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 146,
          period_id: 2,
          total: 173,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 147,
          period_id: 2,
          total: 41824,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 148,
          period_id: 2,
          total: 6079,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 149,
          period_id: 2,
          total: 3327,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 150,
          period_id: 2,
          total: 2223,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 151,
          period_id: 2,
          total: 1386,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 152,
          period_id: 2,
          total: 404,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 153,
          period_id: 2,
          total: 8715,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 154,
          period_id: 2,
          total: 12069,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 155,
          period_id: 2,
          total: 380,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 156,
          period_id: 2,
          total: 2108,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 157,
          period_id: 2,
          total: 707,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 158,
          period_id: 2,
          total: 154,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 159,
          period_id: 2,
          total: 14832,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 160,
          period_id: 2,
          total: 28303,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 161,
          period_id: 2,
          total: 8446,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 162,
          period_id: 2,
          total: 3546,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 163,
          period_id: 2,
          total: 2615,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 164,
          period_id: 2,
          total: 453,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 165,
          period_id: 2,
          total: 2054,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 166,
          period_id: 2,
          total: 1452,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 167,
          period_id: 2,
          total: 639,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 168,
          period_id: 2,
          total: 728,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 169,
          period_id: 2,
          total: 288,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 170,
          period_id: 2,
          total: 147,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 171,
          period_id: 2,
          total: 230,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 4,
          caleg_id: 172,
          period_id: 2,
          total: 122,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 85,
          period_id: 2,
          total: 4529,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 86,
          period_id: 2,
          total: 1032,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 87,
          period_id: 2,
          total: 2000,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 88,
          period_id: 2,
          total: 1633,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 89,
          period_id: 2,
          total: 105,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 90,
          period_id: 2,
          total: 96,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 91,
          period_id: 2,
          total: 15817,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 92,
          period_id: 2,
          total: 2512,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 93,
          period_id: 2,
          total: 3244,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 94,
          period_id: 2,
          total: 1419,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 95,
          period_id: 2,
          total: 436,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 96,
          period_id: 2,
          total: 908,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 97,
          period_id: 2,
          total: 2294,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 98,
          period_id: 2,
          total: 9282,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 99,
          period_id: 2,
          total: 1526,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 100,
          period_id: 2,
          total: 579,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 101,
          period_id: 2,
          total: 2177,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 102,
          period_id: 2,
          total: 1816,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 103,
          period_id: 2,
          total: 7998,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 104,
          period_id: 2,
          total: 2579,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 105,
          period_id: 2,
          total: 1358,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 106,
          period_id: 2,
          total: 1272,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 107,
          period_id: 2,
          total: 10462,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 108,
          period_id: 2,
          total: 631,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 109,
          period_id: 2,
          total: 1788,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 110,
          period_id: 2,
          total: 1036,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 111,
          period_id: 2,
          total: 648,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 112,
          period_id: 2,
          total: 260,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 113,
          period_id: 2,
          total: 1051,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 114,
          period_id: 2,
          total: 217,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 115,
          period_id: 2,
          total: 196,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 116,
          period_id: 2,
          total: 371,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 118,
          period_id: 2,
          total: 2581,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 119,
          period_id: 2,
          total: 1494,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 120,
          period_id: 2,
          total: 597,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 121,
          period_id: 2,
          total: 621,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 122,
          period_id: 2,
          total: 279,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 123,
          period_id: 2,
          total: 657,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 124,
          period_id: 2,
          total: 14865,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 125,
          period_id: 2,
          total: 4040,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 126,
          period_id: 2,
          total: 769,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 127,
          period_id: 2,
          total: 478,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 128,
          period_id: 2,
          total: 588,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 129,
          period_id: 2,
          total: 728,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 130,
          period_id: 2,
          total: 837,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 131,
          period_id: 2,
          total: 350,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 132,
          period_id: 2,
          total: 144,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 133,
          period_id: 2,
          total: 175,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 134,
          period_id: 2,
          total: 156,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 135,
          period_id: 2,
          total: 77,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 136,
          period_id: 2,
          total: 1772,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 137,
          period_id: 2,
          total: 4912,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 138,
          period_id: 2,
          total: 716,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 139,
          period_id: 2,
          total: 185,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 140,
          period_id: 2,
          total: 146,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 141,
          period_id: 2,
          total: 513,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 142,
          period_id: 2,
          total: 674,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 143,
          period_id: 2,
          total: 235,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 144,
          period_id: 2,
          total: 449,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 145,
          period_id: 2,
          total: 243,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 146,
          period_id: 2,
          total: 172,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 147,
          period_id: 2,
          total: 113,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 148,
          period_id: 2,
          total: 4697,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 149,
          period_id: 2,
          total: 2137,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 150,
          period_id: 2,
          total: 4895,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 151,
          period_id: 2,
          total: 2236,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 152,
          period_id: 2,
          total: 482,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 153,
          period_id: 2,
          total: 215,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 154,
          period_id: 2,
          total: 554,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 155,
          period_id: 2,
          total: 2321,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 156,
          period_id: 2,
          total: 46,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 157,
          period_id: 2,
          total: 59,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 158,
          period_id: 2,
          total: 242,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 158,
          period_id: 2,
          total: 16,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 159,
          period_id: 2,
          total: 4859,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 160,
          period_id: 2,
          total: 6141,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 161,
          period_id: 2,
          total: 689,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 162,
          period_id: 2,
          total: 402,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 163,
          period_id: 2,
          total: 768,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 164,
          period_id: 2,
          total: 151,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 165,
          period_id: 2,
          total: 169,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 166,
          period_id: 2,
          total: 231,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 167,
          period_id: 2,
          total: 226,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 168,
          period_id: 2,
          total: 36,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 169,
          period_id: 2,
          total: 69,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 170,
          period_id: 2,
          total: 20,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 171,
          period_id: 2,
          total: 138,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 6,
          caleg_id: 172,
          period_id: 2,
          total: 74,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 85,
          period_id: 2,
          total: 10098,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 86,
          period_id: 2,
          total: 3592,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 87,
          period_id: 2,
          total: 1076,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 88,
          period_id: 2,
          total: 429,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 89,
          period_id: 2,
          total: 334,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 90,
          period_id: 2,
          total: 291,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 91,
          period_id: 2,
          total: 28114,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 92,
          period_id: 2,
          total: 3432,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 93,
          period_id: 2,
          total: 2895,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 94,
          period_id: 2,
          total: 1591,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 95,
          period_id: 2,
          total: 531,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 96,
          period_id: 2,
          total: 1538,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 97,
          period_id: 2,
          total: 7870,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 98,
          period_id: 2,
          total: 4030,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 99,
          period_id: 2,
          total: 2067,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 100,
          period_id: 2,
          total: 1993,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 101,
          period_id: 2,
          total: 7616,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 102,
          period_id: 2,
          total: 1979,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 103,
          period_id: 2,
          total: 27680,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 104,
          period_id: 2,
          total: 2425,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 105,
          period_id: 2,
          total: 1214,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 106,
          period_id: 2,
          total: 1578,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 107,
          period_id: 2,
          total: 1384,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 108,
          period_id: 2,
          total: 634,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 109,
          period_id: 2,
          total: 4745,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 110,
          period_id: 2,
          total: 6529,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 111,
          period_id: 2,
          total: 678,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 112,
          period_id: 2,
          total: 4161,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 113,
          period_id: 2,
          total: 5238,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 114,
          period_id: 2,
          total: 1683,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 115,
          period_id: 2,
          total: 349,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 116,
          period_id: 2,
          total: 237,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 118,
          period_id: 2,
          total: 3260,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 119,
          period_id: 2,
          total: 2065,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 120,
          period_id: 2,
          total: 444,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 121,
          period_id: 2,
          total: 448,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 122,
          period_id: 2,
          total: 627,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 123,
          period_id: 2,
          total: 262,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 124,
          period_id: 2,
          total: 18427,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 125,
          period_id: 2,
          total: 6958,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 126,
          period_id: 2,
          total: 1423,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 127,
          period_id: 2,
          total: 810,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 128,
          period_id: 2,
          total: 1183,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 129,
          period_id: 2,
          total: 844,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 130,
          period_id: 2,
          total: 1402,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 131,
          period_id: 2,
          total: 543,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 132,
          period_id: 2,
          total: 198,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 133,
          period_id: 2,
          total: 317,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 134,
          period_id: 2,
          total: 323,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 135,
          period_id: 2,
          total: 323,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 136,
          period_id: 2,
          total: 2550,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 137,
          period_id: 2,
          total: 6631,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 138,
          period_id: 2,
          total: 4901,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 139,
          period_id: 2,
          total: 484,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 140,
          period_id: 2,
          total: 738,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 141,
          period_id: 2,
          total: 1441,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 142,
          period_id: 2,
          total: 823,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 143,
          period_id: 2,
          total: 360,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 144,
          period_id: 2,
          total: 490,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 145,
          period_id: 2,
          total: 250,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 146,
          period_id: 2,
          total: 171,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 147,
          period_id: 2,
          total: 104,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 148,
          period_id: 2,
          total: 15988,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 149,
          period_id: 2,
          total: 1919,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 150,
          period_id: 2,
          total: 1077,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 151,
          period_id: 2,
          total: 621,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 152,
          period_id: 2,
          total: 621,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 153,
          period_id: 2,
          total: 202,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 154,
          period_id: 2,
          total: 3058,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 155,
          period_id: 2,
          total: 674,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 156,
          period_id: 2,
          total: 202,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 157,
          period_id: 2,
          total: 336,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 158,
          period_id: 2,
          total: 393,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 158,
          period_id: 2,
          total: 94,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 159,
          period_id: 2,
          total: 5965,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 160,
          period_id: 2,
          total: 17621,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 161,
          period_id: 2,
          total: 2161,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 162,
          period_id: 2,
          total: 4924,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 163,
          period_id: 2,
          total: 885,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 164,
          period_id: 2,
          total: 253,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 165,
          period_id: 2,
          total: 918,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 166,
          period_id: 2,
          total: 591,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 167,
          period_id: 2,
          total: 199,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 168,
          period_id: 2,
          total: 163,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 169,
          period_id: 2,
          total: 100,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 170,
          period_id: 2,
          total: 141,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 171,
          period_id: 2,
          total: 138,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 7,
          caleg_id: 172,
          period_id: 2,
          total: 76,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 173,
          period_id: 2,
          total: 20886,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 174,
          period_id: 2,
          total: 59834,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 175,
          period_id: 2,
          total: 8499,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 176,
          period_id: 2,
          total: 13180,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 177,
          period_id: 2,
          total: 1765,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 178,
          period_id: 2,
          total: 2297,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 179,
          period_id: 2,
          total: 5040,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 180,
          period_id: 2,
          total: 1238,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 181,
          period_id: 2,
          total: 834,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 182,
          period_id: 2,
          total: 1538,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 183,
          period_id: 2,
          total: 40850,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 184,
          period_id: 2,
          total: 13885,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 185,
          period_id: 2,
          total: 40850,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 186,
          period_id: 2,
          total: 13885,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 187,
          period_id: 2,
          total: 8177,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 188,
          period_id: 2,
          total: 5221,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 189,
          period_id: 2,
          total: 3913,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 190,
          period_id: 2,
          total: 5356,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 191,
          period_id: 2,
          total: 2402,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 192,
          period_id: 2,
          total: 3867,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 193,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 194,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 195,
          period_id: 2,
          total: 101369,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 196,
          period_id: 2,
          total: 11472,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 197,
          period_id: 2,
          total: 11369,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 198,
          period_id: 2,
          total: 20901,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 199,
          period_id: 2,
          total: 4788,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 200,
          period_id: 2,
          total: 2137,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 201,
          period_id: 2,
          total: 12965,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 202,
          period_id: 2,
          total: 11443,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 203,
          period_id: 2,
          total: 2110,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 204,
          period_id: 2,
          total: 4161,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 205,
          period_id: 2,
          total: 44591,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 206,
          period_id: 2,
          total: 11385,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 207,
          period_id: 2,
          total: 9748,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 208,
          period_id: 2,
          total: 27022,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 209,
          period_id: 2,
          total: 3176,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 210,
          period_id: 2,
          total: 6799,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 211,
          period_id: 2,
          total: 33588,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 212,
          period_id: 2,
          total: 5294,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 213,
          period_id: 2,
          total: 1867,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 214,
          period_id: 2,
          total: 1018,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 215,
          period_id: 2,
          total: 20271,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 216,
          period_id: 2,
          total: 5854,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 217,
          period_id: 2,
          total: 1400,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 218,
          period_id: 2,
          total: 18748,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 219,
          period_id: 2,
          total: 2620,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 220,
          period_id: 2,
          total: 1099,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 221,
          period_id: 2,
          total: 865,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 222,
          period_id: 2,
          total: 501,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 223,
          period_id: 2,
          total: 616,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 224,
          period_id: 2,
          total: 256,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 225,
          period_id: 2,
          total: 1325,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 226,
          period_id: 2,
          total: 413,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 227,
          period_id: 2,
          total: 490,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 228,
          period_id: 2,
          total: 4444,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 229,
          period_id: 2,
          total: 4320,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 230,
          period_id: 2,
          total: 2263,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 231,
          period_id: 2,
          total: 6537,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 232,
          period_id: 2,
          total: 2802,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 233,
          period_id: 2,
          total: 997,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 234,
          period_id: 2,
          total: 19272,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 235,
          period_id: 2,
          total: 1049,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 236,
          period_id: 2,
          total: 354,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 237,
          period_id: 2,
          total: 1263,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 238,
          period_id: 2,
          total: 26896,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 239,
          period_id: 2,
          total: 16422,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 240,
          period_id: 2,
          total: 14095,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 241,
          period_id: 2,
          total: 4048,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 242,
          period_id: 2,
          total: 6763,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 243,
          period_id: 2,
          total: 3583,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 244,
          period_id: 2,
          total: 3076,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 245,
          period_id: 2,
          total: 5669,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 246,
          period_id: 2,
          total: 828,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 247,
          period_id: 2,
          total: 17700,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 248,
          period_id: 2,
          total: 9466,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 249,
          period_id: 2,
          total: 3069,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 250,
          period_id: 2,
          total: 2060,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 251,
          period_id: 2,
          total: 1951,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 252,
          period_id: 2,
          total: 2139,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 253,
          period_id: 2,
          total: 804,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 254,
          period_id: 2,
          total: 341,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 255,
          period_id: 2,
          total: 1084,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 256,
          period_id: 2,
          total: 1178,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 257,
          period_id: 2,
          total: 130,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 258,
          period_id: 2,
          total: 21473,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 259,
          period_id: 2,
          total: 3749,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 260,
          period_id: 2,
          total: 3326,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 261,
          period_id: 2,
          total: 1972,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 262,
          period_id: 2,
          total: 2453,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 263,
          period_id: 2,
          total: 791,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 264,
          period_id: 2,
          total: 3032,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 265,
          period_id: 2,
          total: 3153,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 266,
          period_id: 2,
          total: 432,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 267,
          period_id: 2,
          total: 1038,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 268,
          period_id: 2,
          total: 11680,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 269,
          period_id: 2,
          total: 2129,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 270,
          period_id: 2,
          total: 2005,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 271,
          period_id: 2,
          total: 751,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 272,
          period_id: 2,
          total: 1450,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 273,
          period_id: 2,
          total: 1260,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 274,
          period_id: 2,
          total: 938,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 275,
          period_id: 2,
          total: 1194,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 276,
          period_id: 2,
          total: 706,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 277,
          period_id: 2,
          total: 845,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 278,
          period_id: 2,
          total: 37184,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 279,
          period_id: 2,
          total: 5025,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 280,
          period_id: 2,
          total: 10145,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 281,
          period_id: 2,
          total: 2407,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 282,
          period_id: 2,
          total: 3927,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 283,
          period_id: 2,
          total: 1023,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 284,
          period_id: 2,
          total: 920,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 285,
          period_id: 2,
          total: 883,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 286,
          period_id: 2,
          total: 3766,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 287,
          period_id: 2,
          total: 1239,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 288,
          period_id: 2,
          total: 7152,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 289,
          period_id: 2,
          total: 12788,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 290,
          period_id: 2,
          total: 1475,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 291,
          period_id: 2,
          total: 3522,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 292,
          period_id: 2,
          total: 1030,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 293,
          period_id: 2,
          total: 1161,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 294,
          period_id: 2,
          total: 603,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 295,
          period_id: 2,
          total: 353,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 296,
          period_id: 2,
          total: 682,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 297,
          period_id: 2,
          total: 1726,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 298,
          period_id: 2,
          total: 20047,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 299,
          period_id: 2,
          total: 6595,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 300,
          period_id: 2,
          total: 35565,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 301,
          period_id: 2,
          total: 12417,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 302,
          period_id: 2,
          total: 3616,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 303,
          period_id: 2,
          total: 2323,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 304,
          period_id: 2,
          total: 2307,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 305,
          period_id: 2,
          total: 1436,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 306,
          period_id: 2,
          total: 1594,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 307,
          period_id: 2,
          total: 931,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 308,
          period_id: 2,
          total: 2607,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 309,
          period_id: 2,
          total: 1270,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 310,
          period_id: 2,
          total: 1506,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 311,
          period_id: 2,
          total: 997,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 312,
          period_id: 2,
          total: 552,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 313,
          period_id: 2,
          total: 376,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 314,
          period_id: 2,
          total: 247,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 315,
          period_id: 2,
          total: 182,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 316,
          period_id: 2,
          total: 238,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 317,
          period_id: 2,
          total: 195,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 318,
          period_id: 2,
          total: 595,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 319,
          period_id: 2,
          total: 286,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 320,
          period_id: 2,
          total: 154,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 321,
          period_id: 2,
          total: 88,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 3,
          caleg_id: 322,
          period_id: 2,
          total: 220,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 173,
          period_id: 2,
          total: 10742,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 174,
          period_id: 2,
          total: 18155,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 175,
          period_id: 2,
          total: 5360,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 176,
          period_id: 2,
          total: 3230,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 177,
          period_id: 2,
          total: 1308,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 178,
          period_id: 2,
          total: 1097,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 179,
          period_id: 2,
          total: 828,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 180,
          period_id: 2,
          total: 558,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 181,
          period_id: 2,
          total: 439,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 182,
          period_id: 2,
          total: 1062,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 183,
          period_id: 2,
          total: 34064,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 184,
          period_id: 2,
          total: 8212,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 185,
          period_id: 2,
          total: 5911,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 186,
          period_id: 2,
          total: 2658,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 187,
          period_id: 2,
          total: 2754,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 188,
          period_id: 2,
          total: 3958,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 189,
          period_id: 2,
          total: 797,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 190,
          period_id: 2,
          total: 2759,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 191,
          period_id: 2,
          total: 810,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 192,
          period_id: 2,
          total: 6371,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 193,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 194,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 195,
          period_id: 2,
          total: 87497,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 196,
          period_id: 2,
          total: 8824,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 197,
          period_id: 2,
          total: 8893,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 198,
          period_id: 2,
          total: 15206,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 199,
          period_id: 2,
          total: 4723,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 200,
          period_id: 2,
          total: 1755,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 201,
          period_id: 2,
          total: 5831,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 202,
          period_id: 2,
          total: 3309,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 203,
          period_id: 2,
          total: 958,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 204,
          period_id: 2,
          total: 8998,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 205,
          period_id: 2,
          total: 13351,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 206,
          period_id: 2,
          total: 4960,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 207,
          period_id: 2,
          total: 46781,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 208,
          period_id: 2,
          total: 3905,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 209,
          period_id: 2,
          total: 1629,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 210,
          period_id: 2,
          total: 1092,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 211,
          period_id: 2,
          total: 3700,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 212,
          period_id: 2,
          total: 1874,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 213,
          period_id: 2,
          total: 2123,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 214,
          period_id: 2,
          total: 413,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 215,
          period_id: 2,
          total: 5093,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 216,
          period_id: 2,
          total: 2516,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 217,
          period_id: 2,
          total: 824,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 218,
          period_id: 2,
          total: 5046,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 219,
          period_id: 2,
          total: 1344,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 220,
          period_id: 2,
          total: 689,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 221,
          period_id: 2,
          total: 447,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 222,
          period_id: 2,
          total: 424,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 223,
          period_id: 2,
          total: 338,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 224,
          period_id: 2,
          total: 290,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 225,
          period_id: 2,
          total: 558,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 226,
          period_id: 2,
          total: 253,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 227,
          period_id: 2,
          total: 262,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 228,
          period_id: 2,
          total: 1501,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 229,
          period_id: 2,
          total: 2266,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 230,
          period_id: 2,
          total: 896,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 231,
          period_id: 2,
          total: 5168,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 232,
          period_id: 2,
          total: 503,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 233,
          period_id: 2,
          total: 346,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 234,
          period_id: 2,
          total: 894,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 235,
          period_id: 2,
          total: 258,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 236,
          period_id: 2,
          total: 152,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 237,
          period_id: 2,
          total: 566,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 238,
          period_id: 2,
          total: 21433,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 239,
          period_id: 2,
          total: 8025,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 240,
          period_id: 2,
          total: 25562,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 241,
          period_id: 2,
          total: 3341,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 242,
          period_id: 2,
          total: 7869,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 243,
          period_id: 2,
          total: 3059,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 244,
          period_id: 2,
          total: 1589,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 245,
          period_id: 2,
          total: 2044,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 246,
          period_id: 2,
          total: 531,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 247,
          period_id: 2,
          total: 5502,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 248,
          period_id: 2,
          total: 3980,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 249,
          period_id: 2,
          total: 1677,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 250,
          period_id: 2,
          total: 1311,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 251,
          period_id: 2,
          total: 1261,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 252,
          period_id: 2,
          total: 1369,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 253,
          period_id: 2,
          total: 563,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 254,
          period_id: 2,
          total: 166,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 255,
          period_id: 2,
          total: 960,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 256,
          period_id: 2,
          total: 657,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 257,
          period_id: 2,
          total: 103,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 258,
          period_id: 2,
          total: 12144,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 259,
          period_id: 2,
          total: 1434,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 260,
          period_id: 2,
          total: 2179,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 261,
          period_id: 2,
          total: 969,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 262,
          period_id: 2,
          total: 1164,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 263,
          period_id: 2,
          total: 481,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 264,
          period_id: 2,
          total: 1848,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 265,
          period_id: 2,
          total: 5608,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 266,
          period_id: 2,
          total: 218,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 267,
          period_id: 2,
          total: 499,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 268,
          period_id: 2,
          total: 16479,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 269,
          period_id: 2,
          total: 2160,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 270,
          period_id: 2,
          total: 2322,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 271,
          period_id: 2,
          total: 635,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 272,
          period_id: 2,
          total: 1241,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 273,
          period_id: 2,
          total: 1651,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 274,
          period_id: 2,
          total: 748,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 275,
          period_id: 2,
          total: 1392,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 276,
          period_id: 2,
          total: 940,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 277,
          period_id: 2,
          total: 790,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 278,
          period_id: 2,
          total: 19602,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 279,
          period_id: 2,
          total: 3732,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 280,
          period_id: 2,
          total: 5087,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 281,
          period_id: 2,
          total: 2293,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 282,
          period_id: 2,
          total: 1193,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 283,
          period_id: 2,
          total: 739,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 284,
          period_id: 2,
          total: 938,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 285,
          period_id: 2,
          total: 697,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 286,
          period_id: 2,
          total: 1368,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 287,
          period_id: 2,
          total: 821,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 288,
          period_id: 2,
          total: 1428,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 289,
          period_id: 2,
          total: 697,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 290,
          period_id: 2,
          total: 368,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 291,
          period_id: 2,
          total: 279,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 292,
          period_id: 2,
          total: 279,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 293,
          period_id: 2,
          total: 401,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 294,
          period_id: 2,
          total: 332,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 295,
          period_id: 2,
          total: 196,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 296,
          period_id: 2,
          total: 167,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 297,
          period_id: 2,
          total: 1537,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 298,
          period_id: 2,
          total: 10706,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 299,
          period_id: 2,
          total: 3645,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 300,
          period_id: 2,
          total: 19615,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 301,
          period_id: 2,
          total: 8320,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 302,
          period_id: 2,
          total: 3711,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 303,
          period_id: 2,
          total: 1810,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 304,
          period_id: 2,
          total: 595,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 305,
          period_id: 2,
          total: 996,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 306,
          period_id: 2,
          total: 456,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 307,
          period_id: 2,
          total: 918,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 308,
          period_id: 2,
          total: 489,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 309,
          period_id: 2,
          total: 503,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 310,
          period_id: 2,
          total: 1826,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 311,
          period_id: 2,
          total: 234,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 312,
          period_id: 2,
          total: 272,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 313,
          period_id: 2,
          total: 166,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 314,
          period_id: 2,
          total: 65,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 315,
          period_id: 2,
          total: 105,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 316,
          period_id: 2,
          total: 98,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 317,
          period_id: 2,
          total: 86,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 318,
          period_id: 2,
          total: 276,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 319,
          period_id: 2,
          total: 107,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 320,
          period_id: 2,
          total: 86,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 321,
          period_id: 2,
          total: 57,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 5,
          caleg_id: 322,
          period_id: 2,
          total: 164,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 173,
          period_id: 2,
          total: 10213,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 174,
          period_id: 2,
          total: 5427,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 175,
          period_id: 2,
          total: 1883,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 176,
          period_id: 2,
          total: 6905,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 177,
          period_id: 2,
          total: 669,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 178,
          period_id: 2,
          total: 661,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 179,
          period_id: 2,
          total: 458,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 180,
          period_id: 2,
          total: 287,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 181,
          period_id: 2,
          total: 280,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 182,
          period_id: 2,
          total: 525,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 183,
          period_id: 2,
          total: 24088,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 184,
          period_id: 2,
          total: 6442,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 185,
          period_id: 2,
          total: 4478,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 186,
          period_id: 2,
          total: 1798,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 187,
          period_id: 2,
          total: 1979,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 188,
          period_id: 2,
          total: 2513,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 189,
          period_id: 2,
          total: 685,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 190,
          period_id: 2,
          total: 2239,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 191,
          period_id: 2,
          total: 654,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 192,
          period_id: 2,
          total: 4911,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 193,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 194,
          period_id: 2,
          total: 0,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 195,
          period_id: 2,
          total: 85428,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 196,
          period_id: 2,
          total: 6366,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 197,
          period_id: 2,
          total: 4665,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 198,
          period_id: 2,
          total: 5364,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 199,
          period_id: 2,
          total: 3743,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 200,
          period_id: 2,
          total: 1384,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 201,
          period_id: 2,
          total: 5263,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 202,
          period_id: 2,
          total: 2504,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 203,
          period_id: 2,
          total: 7760,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 204,
          period_id: 2,
          total: 1573,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 205,
          period_id: 2,
          total: 26169,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 206,
          period_id: 2,
          total: 6420,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 207,
          period_id: 2,
          total: 5947,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 208,
          period_id: 2,
          total: 5565,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 209,
          period_id: 2,
          total: 2256,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 210,
          period_id: 2,
          total: 975,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 211,
          period_id: 2,
          total: 2478,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 212,
          period_id: 2,
          total: 1962,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 213,
          period_id: 2,
          total: 2147,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 214,
          period_id: 2,
          total: 728,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 215,
          period_id: 2,
          total: 5351,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 216,
          period_id: 2,
          total: 2889,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 217,
          period_id: 2,
          total: 829,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 218,
          period_id: 2,
          total: 797,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 219,
          period_id: 2,
          total: 1309,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 220,
          period_id: 2,
          total: 608,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 221,
          period_id: 2,
          total: 421,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 222,
          period_id: 2,
          total: 443,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 223,
          period_id: 2,
          total: 2401,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 224,
          period_id: 2,
          total: 409,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 225,
          period_id: 2,
          total: 353,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 226,
          period_id: 2,
          total: 174,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 227,
          period_id: 2,
          total: 287,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 228,
          period_id: 2,
          total: 1494,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 229,
          period_id: 2,
          total: 1632,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 230,
          period_id: 2,
          total: 1081,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 231,
          period_id: 2,
          total: 3806,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 232,
          period_id: 2,
          total: 499,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 233,
          period_id: 2,
          total: 342,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 234,
          period_id: 2,
          total: 480,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 235,
          period_id: 2,
          total: 274,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 236,
          period_id: 2,
          total: 179,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 237,
          period_id: 2,
          total: 414,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 238,
          period_id: 2,
          total: 26443,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 239,
          period_id: 2,
          total: 6589,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 240,
          period_id: 2,
          total: 9072,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 241,
          period_id: 2,
          total: 2984,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 242,
          period_id: 2,
          total: 8289,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 243,
          period_id: 2,
          total: 7749,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 244,
          period_id: 2,
          total: 1289,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 245,
          period_id: 2,
          total: 3477,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 246,
          period_id: 2,
          total: 1083,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 247,
          period_id: 2,
          total: 4676,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 248,
          period_id: 2,
          total: 3216,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 249,
          period_id: 2,
          total: 1091,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 250,
          period_id: 2,
          total: 1230,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 251,
          period_id: 2,
          total: 832,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 252,
          period_id: 2,
          total: 964,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 253,
          period_id: 2,
          total: 303,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 254,
          period_id: 2,
          total: 155,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 255,
          period_id: 2,
          total: 244,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 256,
          period_id: 2,
          total: 546,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 257,
          period_id: 2,
          total: 113,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 258,
          period_id: 2,
          total: 4079,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 259,
          period_id: 2,
          total:877,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 260,
          period_id: 2,
          total: 991,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 261,
          period_id: 2,
          total: 515,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 262,
          period_id: 2,
          total: 797,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 263,
          period_id: 2,
          total: 773,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 264,
          period_id: 2,
          total: 507,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 265,
          period_id: 2,
          total: 1330,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 266,
          period_id: 2,
          total: 134,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 267,
          period_id: 2,
          total: 385,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 268,
          period_id: 2,
          total: 20660,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 269,
          period_id: 2,
          total: 3457,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 270,
          period_id: 2,
          total: 2152,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 271,
          period_id: 2,
          total: 598,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 272,
          period_id: 2,
          total: 1009,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 273,
          period_id: 2,
          total: 2625,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 274,
          period_id: 2,
          total: 709,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 275,
          period_id: 2,
          total: 1957,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 276,
          period_id: 2,
          total: 537,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 277,
          period_id: 2,
          total: 1284,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 278,
          period_id: 2,
          total: 15159,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 279,
          period_id: 2,
          total: 4126,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 280,
          period_id: 2,
          total: 3385,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 281,
          period_id: 2,
          total: 1243,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 282,
          period_id: 2,
          total: 3797,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 283,
          period_id: 2,
          total: 666,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 284,
          period_id: 2,
          total: 491,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 285,
          period_id: 2,
          total: 541,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 286,
          period_id: 2,
          total: 878,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 287,
          period_id: 2,
          total: 2457,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 288,
          period_id: 2,
          total: 3314,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 289,
          period_id: 2,
          total: 814,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 290,
          period_id: 2,
          total: 382,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 291,
          period_id: 2,
          total: 445,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 292,
          period_id: 2,
          total: 289,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 293,
          period_id: 2,
          total: 497,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 294,
          period_id: 2,
          total: 122,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 295,
          period_id: 2,
          total: 282,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 296,
          period_id: 2,
          total: 433,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 297,
          period_id: 2,
          total: 1741,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 298,
          period_id: 2,
          total: 7319,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 299,
          period_id: 2,
          total: 2608,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 300,
          period_id: 2,
          total: 4884,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 301,
          period_id: 2,
          total: 3134,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 302,
          period_id: 2,
          total: 2714,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 303,
          period_id: 2,
          total: 1713,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 304,
          period_id: 2,
          total: 474,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 305,
          period_id: 2,
          total: 667,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 306,
          period_id: 2,
          total: 321,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 307,
          period_id: 2,
          total: 463,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 308,
          period_id: 2,
          total: 664,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 309,
          period_id: 2,
          total: 527,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 310,
          period_id: 2,
          total: 498,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 311,
          period_id: 2,
          total: 189,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 312,
          period_id: 2,
          total: 176,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 313,
          period_id: 2,
          total: 318,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 314,
          period_id: 2,
          total: 126,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 315,
          period_id: 2,
          total: 72,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 316,
          period_id: 2,
          total: 66,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 317,
          period_id: 2,
          total: 94,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 318,
          period_id: 2,
          total: 291,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 319,
          period_id: 2,
          total: 150,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 320,
          period_id: 2,
          total: 123,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 321,
          period_id: 2,
          total: 56,
          created_by: 1,
          updated_by: 1
        },
        {
          city_id: 8,
          caleg_id: 322,
          period_id: 2,
          total: 128,
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};
