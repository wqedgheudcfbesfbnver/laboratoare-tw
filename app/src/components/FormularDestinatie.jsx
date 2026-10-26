import { useState } from 'react'

export default function FormularDestinatie({ onAdd }) {
  const [oras, setOras] = useState('')
  const [tara, setTara] = useState('')
  const [zile, setZile] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!oras.trim() || !tara.trim()) {
      return
    }

    if (!zile || Number(zile) <= 0) {
      return
    }

    const destinatieNoua = {
      id: crypto.randomUUID(),
      oras: oras.trim(),
      tara: tara.trim(),
      zile: Number(zile),
      vizitat: false
    }

    onAdd(destinatieNoua)

    setOras('')
    setTara('')
    setZile('')
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Oraș"
        value={oras}
        onChange={(e) => setOras(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Țară"
        value={tara}
        onChange={(e) => setTara(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Zile"
        value={zile}
        onChange={(e) => setZile(e.target.value)}
        min="1"
        step="1"
        required
      />

      <button type="submit">
        Adaugă
      </button>
    </form>
  )
}