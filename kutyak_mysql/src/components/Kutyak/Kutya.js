
function Kutya({kutya}) {
  return (
    <div className="card w-96 bg-sky-200 text-black my-2">
    <div className="card-body items-center text-center">
      <h2>{kutya.kutyanev}</h2>
      <p className="card-title">Fajta:{kutya.nev}</p>
      <p className="card-title">Életkor:{kutya.eletkor}</p>
      <p className="card-title">Utolsó ellenőrzés:{kutya.utolsoell}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Módosítás</button>
        <button className="btn btn-primary">Törlés</button>
      </div>
    </div>
  </div>
  )
}

export default Kutya;