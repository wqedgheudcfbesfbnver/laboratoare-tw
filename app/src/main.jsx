import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importăm lista de destinații
import { destinatii } from './data/destinatii.js'

// Importăm funcțiile pentru exercițiile 1 și 2
import {
  getOrase,
  getNevizitate,
  totalZile,
  formatDestinatie,
  numarPeTara,
  sortDupaZile,
  marcheazaVizitat,
  adaugaDestinatie,
  stergeDestinatie
} from './utils/destinatii.js'

import { getUsers } from './api/users.js'

// ===== PORNIREA APLICAȚIEI REACT =====

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ===== LABORATORUL 2 =====

console.log('L2 Merge!')

// ===== EXERCIȚIUL 1 =====

// 1. Afișăm toate orașele
console.log('L2 Ex. 1 - orașe:', getOrase(destinatii))

// 2. Numărăm destinațiile nevizitate
console.log('L2 Ex. 1 - nevizitate:', getNevizitate(destinatii).length)

// 3. Calculăm zilele pentru destinațiile nevizitate
console.log('L2 Ex. 1 - zile de vizitat:', totalZile(getNevizitate(destinatii)))

// 4. Afișăm lista formatată
console.log(destinatii.map(formatDestinatie).join('\n'))

// 5. Numărăm destinațiile pe țări
console.log('L2 Ex. 1 - pe țară:', numarPeTara(destinatii))

// 6. Afișăm destinația cu cele mai multe zile
console.log('L2 Ex. 1 - cea mai lungă vizită:', sortDupaZile(destinatii)[0].oras)


// ===== EXERCIȚIUL 2 =====

// 1. Marcăm prima destinație ca vizitată
const dupaMarcare = marcheazaVizitat(destinatii, '1')

console.log(
  'L2 Ex. 2 - original:', destinatii[0].vizitat,
  '| listă nouă:', dupaMarcare[0].vizitat
)

// Verificăm dacă elementele nemodificate sunt refolosite
console.log(
  'L2 Ex. 2 - element refolosit:',
  destinatii[1] === dupaMarcare[1]
)

// 2. Adăugăm o destinație nouă
const noua = {
  id: '7',
  oras: 'Sevilla',
  tara: 'Spania',
  zile: 3,
  vizitat: false
}

const dupaAdaugare = adaugaDestinatie(destinatii, noua)

console.log(
  'L2 Ex. 2 - după adăugare: original',
  destinatii.length,
  ', listă nouă',
  dupaAdaugare.length
)

// 3. Ștergem destinația adăugată
const dupaStergere = stergeDestinatie(dupaAdaugare, '7')

console.log(
  'L2 Ex. 2 - după ștergere:',
  dupaStergere.length
)
// ===== EXERCIȚIUL 3 =====

async function afiseazaUtilizatori() {
  try {
    const users = await getUsers()

    console.log('L2 Ex. 3 - număr utilizatori:', users.length)

    console.log(
      'L2 Ex. 3 - numele utilizatorilor:',
      users.map((user) => user.name)
    )

    console.log(
      'L2 Ex. 3 - primul utilizator:',
      users[0]
    )

  } catch (error) {
    console.error('L2 Ex. 3 - eroare:', error.message)
  }
}

afiseazaUtilizatori()