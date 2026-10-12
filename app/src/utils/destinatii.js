// 1. Obține numele tuturor orașelor
export const getOrase = (list) =>
  list.map((d) => d.oras)

// 2. Selectează destinațiile nevizitate
export const getNevizitate = (list) =>
  list.filter((d) => d.vizitat === false)

// 3. Calculează numărul total de zile
export const totalZile = (list) =>
  list.reduce((total, d) => total + d.zile, 0)

// 4. Formatează o destinație ca text
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`

// 5. Numără destinațiile din fiecare țară
export const numarPeTara = (list) =>
  list.reduce(
    (acc, { tara }) => ({
      ...acc,
      [tara]: (acc[tara] ?? 0) + 1
    }),
    {}
  )

// 6. Sortează descrescător după numărul de zile
export const sortDupaZile = (list) =>
  [...list].sort((a, b) => b.zile - a.zile)

// ===== Exercițiul 2 =====

// 1. Schimbă starea unei destinații
export const marcheazaVizitat = (list, id) =>
  list.map((d) =>
    d.id === id
      ? { ...d, vizitat: !d.vizitat }
      : d
  )

// 2. Adaugă o destinație nouă
export const adaugaDestinatie = (list, d) =>
  [...list, d]

// 3. Șterge o destinație după ID
export const stergeDestinatie = (list, id) =>
  list.filter((d) => d.id !== id)