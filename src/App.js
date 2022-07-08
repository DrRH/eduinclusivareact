import './css/App.css';
import Boton from './componentes/boton';

function App() {
  return (
      
  <div id="appsContenedor">
      <Boton
        url="http://bhagamapps.com/inventarioApp"
        img="http://bhagamapps.com/appsArt/inventApp.png"
        titulo="InventarioApp"
      />
      <Boton
        url="http://bhagamapps.com/biblioApp"
        img="http://bhagamapps.com/appsArt/biblioAppOnPasiva.png"
        titulo="BiblioApp"
      />
      <Boton
        url="http://bhagamapps.com/tabletsApp"
        img="http://bhagamapps.com/appsArt/tablet.jpg"
        titulo="Préstamo de Tabletas"
      />
      <Boton
        url="http://bhagamapps.com/SUVICT"
        img="http://bhagamapps.com/appsArt/cteApp.jpg"
        titulo="SUVICT"
      />
      <Boton
        url="http://bhagamapps.com/eduinclusiva"
        img="http://bhagamapps.com/appsArt/DUA.png"
        titulo="EduInclusiva"
      />
  </div>
  
);
}

export default App;
