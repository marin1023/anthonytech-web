import { useCallback } from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import "./MobileAndComputerRep.css";

const MobileAndComputerRep = () => {
  const onCTAButtonClick = useCallback(() => {
    window.open("https://web.facebook.com/");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open("https://web.facebook.com/");
  }, []);

  return (
    <div className="musho-mobile-and-computer-rep">
      <Header />
      <section className="typehorizontal-alt-inverted">
        <div className="wrapper">
          <div className="image-container">
            <img className="image-lummi" alt="" src="/image--lummi@2x.png" />
          </div>
          <div className="copy-component">
            <div className="heading-text">
              <h1 className="heading">Soluciones de reparación sin esfuerzo</h1>
              <h3 className="subheading">
                Soluciones rápidas para todos sus dispositivos.
              </h3>
            </div>
            <button className="cta-button" onClick={onCTAButtonClick}>
              <div className="text-container">
                <div className="cta">Comience su reparación</div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="typeshort-statement">
        <div className="text-content">
          <h1 className="benefit-heading">Por qué elegirnos</h1>
          <h1 className="description">
            Equipo dedicado a resolver problemas técnicos, garantizar la
            eficiencia y mantener la satisfacción del cliente.
          </h1>
        </div>
      </section>
      <section className="typegrid-images">
        <div className="heading-container">
          <h1 className="heading1">Qué nos Caracteriza?</h1>
        </div>
        <div className="feature-grid">
          <CardContainer
            imageCaption="/image--lummi1@2x.png"
            serviceDescription="Reparacion Eficaz"
            solutionDescription="Detectamos el problema y aportamos la mejor solución."
          />
          <CardContainer
            imageCaption="/image--lummi2@2x.png"
            serviceDescription="Piezas OEM usadas"
            solutionDescription="Sólo piezas de la mejor calidad para sus dispositivos."
            propWidth="unset"
            propHeight="unset"
            propAlignSelf="stretch"
          />
        </div>
      </section>
      <section className="typesimple-cta">
        <div className="container">
          <div className="text-content1">
            <div className="copy">
              <h1 className="heading2">Listo Para Reparar tu Dispotivo?</h1>
            </div>
            <button className="button-combo">
              <div className="button" onClick={onButtonContainerClick}>
                <div className="text-container1">
                  <div className="cta1">Empezar</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="typesimplistic">
        <footer className="content">
          <div className="brand-legal">
            <div className="brand">
              <div className="brandname">Tech: Anthony Marin</div>
            </div>
            <div className="legal">Copyright © 2024</div>
          </div>
          <div className="links">
            <div className="nav-label">@TechFixTweets</div>
            <div className="nav-label">@TechFixGram</div>
            <div className="nav-label2">@TechFixTube</div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default MobileAndComputerRep;
