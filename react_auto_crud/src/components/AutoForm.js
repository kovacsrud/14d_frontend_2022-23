import {useState} from 'react';

function AutoForm() {
  return (
    <div>
        <h2>Új autó felvitele</h2>
        <form>
        <div className="mb-3">
          <label for="marka" className="form-label">Márka</label>
          <input type="text" className="form-control" id="marka"/>
          <label for="tipus" className="form-label">Típus</label>
          <input type="text" className="form-control" id="tipus"/>
          <label for="rendszam" className="form-label">Rendszám</label>
          <input type="text" className="form-control" id="rendszam"/>
          <label for="kor" className="form-label">Kor</label>
          <input type="text" className="form-control" id="kor"/>
          <button type="submit" className="btn btn-primary">Küldés</button>
        </div>

        </form>

    </div>
  );
}

export default AutoForm;