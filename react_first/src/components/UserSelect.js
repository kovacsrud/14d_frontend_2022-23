function UserSelect({setDb}) {

    const set=(e)=>{
        e.preventDefault();
        setDb(e.target.value);
    }

  return (
    <div>
      <select onChange={(e)=>{setDb(e.target.value)}} className="form-select" aria-label="Felhasználók száma">
        <option selected value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default UserSelect;
