import { useState } from 'react'


export default function App() {
  const [firstProduct, setFirstProduct] = useState ("");
  const [ItalianList, setItalianList] = useState(["pasta" , "mandolino", "pizza"])

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setItalianList(currentState => [...currentState, firstProduct] )

    setFirstProduct("")
  }

  const emptyList = () => {
    setItalianList([])
  }

  const handDelete = (productDelete) => {
    setItalianList((currentState) => 
      currentState.filter((product) =>
      product !== productDelete)
    );
  };


  return (

    <div>

      <h1>Italian List</h1>
      <ul>
        {
          ItalianList.map((product, index) => (
            <li key={index}>
              {product} <button onClick={() => handDelete(product)}>❌</button>
              
            </li>
          ))}
      </ul>

      <button onClick={emptyList}>Cancella lista</button>
      <hr />
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={firstProduct}
          onChange={(e) => {
            setFirstProduct(e.target.value);
          }}
          placeholder="Scrivi il prodotto"
        />

        <button type="submit">invia</button>
      </form>
    </div>
  )
}