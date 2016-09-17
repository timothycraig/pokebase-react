import React from 'react'

const ApiDocs = () => {
  return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h3>PokéBase API Overview</h3><br />
          <h6>Query Pokemon or Moves to retreive data obtained from pokemon GO's game
          data that has been released online.</h6>
          <p>Credit to <a href="https://github.com/code-matt">Matt Thompson</a> for
          the api development, <a href="https://github.com/bmordas11">Brett Mordas</a> for
          scraping the data, and <a href="https://github.com/Xander4321">Paul Cornett</a> for
          the database design.</p>
          <hr />
          <h4>Accessing the API</h4>
          <p>Query the <code>{"/moves"}</code> or <code>{"/pokemons"}</code> path with an optional number of queries following:</p>
          <h4>Valid Queries</h4>
          <p>Results will be searched and reduced in order of queries provided.</p>
        </div>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--4dp">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">/pokemons queries</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>name</strong></td>
                <td className="mdl-data-table__cell--non-numeric">String</td>
                <td className="mdl-data-table__cell--non-numeric">Queries by the pokemon or moves's name</td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>attack</strong></td>
                <td className="mdl-data-table__cell--non-numeric">Int</td>
                <td className="mdl-data-table__cell--non-numeric">Queries pokemon who's base attack is greater than the supplied value</td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>defence</strong></td>
                <td className="mdl-data-table__cell--non-numeric">Int</td>
                <td className="mdl-data-table__cell--non-numeric">Queries pokemon who's base defence is greater than the supplied value</td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>stamina</strong></td>
                <td className="mdl-data-table__cell--non-numeric">Int</td>
                <td className="mdl-data-table__cell--non-numeric">Queries pokemon who's base stamina is greater than the supplied value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--4dp">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">/moves queries</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>name</strong></td>
                <td className="mdl-data-table__cell--non-numeric">String</td>
                <td className="mdl-data-table__cell--non-numeric">Queries by the pokemon or moves's name</td>
              </tr>
              <tr>
                <td className="mdl-data-table__cell--non-numeric"><strong>power</strong></td>
                <td className="mdl-data-table__cell--non-numeric">Int</td>
                <td className="mdl-data-table__cell--non-numeric">Queries attacks with base power greater than the supplied value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h5>Sample Query</h5><br />
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--4dp">
            <tbody>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">
                http://pokebase-react.herokuapp.com/api/v1/pokemons?attack=100&defence=90</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApiDocs
