import "../App.css";

function Kerkimi() {
  return (
    <div className="kerkimi">
      <form action="">
        <input type="text" placeholder="Kerko" />
        <label htmlFor="qyteti"></label>
        <select name="qyteti">
          <option value="Koretin">Koretin</option>
          <option value="Kamenica">Kamenica</option>
        </select>
        <select name="kategoria">
          <option value="IT">IT</option>
          <option value="Ekonomi">Ekonomi</option>
        </select>
        <button type="submit">Kerko</button>
      </form>
    </div>
  );
}

export default Kerkimi;
