import React from 'react';
import ReactDOM from 'react-dom';
import '../css/footer.css';

const Footer = ()=>{
  return(
    <React.Fragment>
    <div className="container-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="img-footer" src={require('../img/servant.png').default} alt="Servant Argentina" />
          </div>
          <div className="col-md-4 med-card">
            <h1 className="title-footer-med-card">Acerca de</h1>
            <p className="text-footer-med-card">Servant Argentina es una  empresa distribuidora de la  marca Remax. Los productos  Remax le brindan el concepto  de saborear la vida y la moda. </p>
          </div>
          <div className="col-md-4 end-card">
            <h1 className="title-footer-end-card">¿Como contactarnos?</h1>
            <p className="text-footer-end-card">Servant Argentina es una  empresa distribuidora de la  marca Remax. Los productos  Remax le brindan el concepto  de saborear la vida y la moda. </p>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};
export default Footer;
