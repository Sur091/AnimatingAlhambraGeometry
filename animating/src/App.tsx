import React from "react";
import Pajarita from "./components/Pajarita";
import PajaritaTranslationalSymmetry from "./components/PajaritaTranslationalSymmetry";
import PajaritaRotationalSymmetry from "./components/PajaritaRotationalSymmetry";
import AirplaneTranslationalSymmetry from "./components/AirplaneTranslationalSymmetry";
import Bone from "./components/Bone";
import Airplane from "./components/Airplane";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Section 1: Introduction */}
      <section className="topic-section styleOne hero-pattern">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h1>Geometry in the Alhambra</h1>
        </div>
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "white" }}>Suraj Acharya and Libby Haar</h2>
        </div>
      </section>

      {/* Section 1.1: Motivation */}
      <section className="content-section bg-stucco">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "var(--stucco)" }}>Motivation</h2>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Often math and art are depicted as very separate entities with most
            people designating one of the subjects as something they are not
            capable of studying. Any description of art using mathematics either
            tends to be incomprehensible to most or not grounded in the rigor
            which only serves to widen the gap between them. By constructing the
            fundamental pieces of the tile work seen in the Alhambra brought to
            life through animation, we want to depict how math and art are just
            two sides of the same coin.
          </p>
        </div>
      </section>

      {/* Section 2: The Pajarita (Bow-tie) */}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>2.1 The Nasrid Pajarita (Bow-tie)</h2>
            <p>
              Now we can examine the construction of the pajarita. The pajarita
              is constructed from 6 different curves, each of these curves is
              just a segment of a circle. By creating a grid of interlacing
              circles as seen in the animation, the pajarita can then be found
              by tracing along these circles.
            </p>
          </div>
          <div className="animation-panel">
            <Pajarita />
          </div>
        </div>
      </section>

      {/*{Pajarita Translational Symmetry}*/}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>2.2 The Translation Symmetry of the Pajarita (Bow-tie)</h2>
            <p>We know that the Pajarita has two translational symmetries</p>
          </div>
          <div className="animation-panel">
            <PajaritaTranslationalSymmetry />
          </div>
        </div>
      </section>

      {/*{Pajarita Rotatioonal Symmetry}*/}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>2.3 The Rotational Symmetry of the Pajarita (Bow-tie)</h2>
            <p>We know that the Pajarita has two rotational symmetries</p>
          </div>
          <div className="animation-panel">
            <PajaritaRotationalSymmetry />
          </div>
        </div>
      </section>

      {/* Section 3: The Bone */}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>3.1 The Bone</h2>
            <p>Dogs like bones guys, what can I say.</p>
          </div>
          <div className="animation-panel">
            <Bone />
          </div>
        </div>
      </section>

      {/* Section 4: The Airplane */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.1 The Airplane</h2>
            <p>
              The ariplane is made up of ocatagona wher eyou extend the side
              lenghts to get intersections.Ariplanes are cool though
            </p>
          </div>
          <div className="animation-panel">
            <Airplane />
          </div>
        </div>
      </section>

      {/* Section 5: The Airplane Translational Symmetry */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.2 The Airplane Translational Symmetry</h2>
            <p>The Airplane as Transaltional Symmmetry</p>
          </div>
          <div className="animation-panel">
            <AirplaneTranslationalSymmetry />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
