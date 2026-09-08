window.MikeData = Object.freeze({
  EXERCISES: Object.freeze([
    { id: 1, day: 1, name: 'Aperturas en banco plano', repMin: 8, repMax: 12 },
    { id: 2, day: 1, name: 'Press de banca', repMin: 6, repMax: 8 },
    { id: 3, day: 1, name: 'Dominadas o jalon al pecho', repMin: 6, repMax: 10 },
    { id: 4, day: 1, name: 'Remo en maquina + isometria', repMin: 6, repMax: 10 },
    { id: 5, day: 2, name: 'Extension de cuadriceps', repMin: 8, repMax: 12 },
    { id: 6, day: 2, name: 'Prensa o sentadilla', repMin: 6, repMax: 10 },
    { id: 7, day: 2, name: 'Peso muerto rumano', repMin: 6, repMax: 10 },
    { id: 8, day: 2, name: 'Elevacion de talones', repMin: 10, repMax: 15 },
    { id: 9, day: 3, name: 'Elevaciones laterales', repMin: 8, repMax: 12 },
    { id: 10, day: 3, name: 'Press militar', repMin: 6, repMax: 10 },
    { id: 11, day: 3, name: 'Curl de biceps', repMin: 6, repMax: 10 },
    { id: 12, day: 3, name: 'Extension de triceps', repMin: 6, repMax: 10 },
    { id: 13, day: 3, name: 'Rotacion de manguito rotador', repMin: 10, repMax: 15 }
  ]),
  DAY_EXERCISES: Object.freeze({ 1: [1, 2, 3, 4], 2: [5, 6, 7, 8], 3: [9, 10, 11, 12, 13] }),
  DAY_NAMES: Object.freeze({ 1: 'Pecho / Espalda', 2: 'Pierna', 3: 'Hombro / Brazos' })
});
