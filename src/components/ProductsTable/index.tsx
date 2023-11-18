import './styles.scss'

export function ProductsTable() {
  return (
    <div className="products__table-container ">
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Biscoito</td>
            <td>1</td>
            <td>Alimento</td>
            <td>30/01/2001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}