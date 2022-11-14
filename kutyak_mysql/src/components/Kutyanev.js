function Kutyanev({ kutyanev, setShowForm, update }) {
  const torles = async (id) => {
    const response = await fetch(
      "http://localhost:8000/api/rendelo/kutyanevek",
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id }),
      }
    );

    const valasz = await response.text();
    update();
    alert(valasz);
  };

  return (
    <div className="card w-96 bg-primary text-primary-content m-2">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => setShowForm((prev) => !prev)}>
            Módosítás
          </button>
          <button className="btn" onClick={() => torles(kutyanev.id)}>
            Törlés
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
