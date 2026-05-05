import React from "react";

import TranslationAnimation from "./components/TranslationAnimation";
import ReflectionAnimation from "./components/ReflectionAnimation";
import RotationAnimation from "./components/RotationAnimation";
import GlideReflectionAnimation from "./components/GlideReflectionAnimation";

import Pajarita from "./components/Pajarita";
import PajaritaTranslationalSymmetry from "./components/PajaritaTranslationalSymmetry";
import PajaritaRotationalSymmetry from "./components/PajaritaRotationalSymmetry";

// import Bone from "./components/Bone";

import Airplane from "./components/Airplane";
import AirplaneTranslationalSymmetry from "./components/AirplaneTranslationalSymmetry";
import AirplaneRotationalSymmetry from "./components/AirplaneRotationalSymmetry";
import AirplaneReflectionSymmetry from "./components/AirplaneReflectionSymmetry";
import AirplaneGlideReflectionalSymmetry from "./components/AirplaneGlideReflectionSymmetry";

import alhambraImage from "./assets/alhambra.jpeg";
import compassImage from "./assets/compass.jpg";
import straightEdgeImage from "./assets/straightEdge.jpg";

import pajaritaPedroMachuca from "./assets/pajaritaPedroMachuca.jpg";
import pajaritaPalaceOfCharlesV from "./assets/pajaritaPalaceOfCharlesV.jpg";
import pajaritaArrayanes from "./assets/pajaritaArrayanes.jpg";
import pajaritaSalsaDeLasCamas from "./assets/pajaritaSalsaDeLasCamas.jpg";
import pajaritaBlackAndWhite from "./assets/pajaritaBlackAndWhite.png";

import airplane1 from "./assets/airplane1.jpg";
import airplane2 from "./assets/airplane2.jpg";
import airplane3 from "./assets/airplane3.jpg";

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

      {/* Section 1.2: The Alhambra */}
      <section className="content-section bg-lapis">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "var(--stucco)" }}>The Alhambra</h2>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Muhammad I ibn al-Ahmar, also known as Alhamar, founded the Nasrid
            dynasty in 1238 in the south of the present day Spain. During the
            time of the Nasrid dynasty there was a lot of political instability
            and turmoil with almost all of the Islamic kingdoms at the time
            being conquered by Ferdinand III. Sultan Alhamar originally built a
            fortress on top of a hill which over the course of few centuries
            expanded into a complex of walls, palaces, and gardens, known as the
            Alhambra. The artists and artisans used their extensive knowledge of
            architecture, art, Euclidean geometry in order to build a decorative
            mosaics and tiles seen in the Alhambra.
          </p>
        </div>
        <div>
          <div className="image-panel">
            <img src={alhambraImage} alt="Alhambra tiling" />
            <div className="caption">
              <p>Image from somewhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.3: Compass and Straightedge */}
      <section className="content-section bg-stucco">
        <div>
          <div className="image-panel">
            <img src={compassImage} alt="Compass" width="100%" />
            <div className="caption">
              <p>Image from somewhere</p>
            </div>
          </div>
          <div className="image-panel">
            <img src={straightEdgeImage} alt="Straightedge" width="100%" />
            <div className="caption">
              <p>Image from somewhere</p>
            </div>
          </div>
        </div>
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "var(--stucco)" }}>Compass and Straightedge</h2>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Many of the designs we find in the Alhambra can be created by
            “constructing a framework of identical repeat units, or motifs, that
            recur regularly to form a geometrical grid or a regular division of
            the plane.”2 By using primarily two tools, a compass and
            straightedge, artisans are able to construct many of these geometric
            tilings. Given two points, a compass allows for the construction of
            a circle through one of those points, centered at the other point. A
            straight edge allows for the user to create a line between two fixed
            points.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            When looking at tilings within the Alhambra, our focus will be two
            fold, first we want to study the compass and straightedge
            construction of the base tiles of each design. All of the tilings we
            will focus on, are created through repeated use of a singular tile.
            For each tiling we will break down the construction of the base tile
            used and the over all symmetries of the tiling found in the
            Alhambra.
          </p>
        </div>
      </section>

      {/* Section 1.4: Symmetry Explanation */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="symmetry-explanation">
            <h2 style={{ color: "var(--stucco)" }}>Symmetry</h2>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              A symmetry is a way of mapping tiles to identical tiles while
              preserving the overall structure of the tiling. When we look at
              symmetries of a tiling, there are four major symmetries we are
              considering: translations, reflections, rotations, and glide
              reflections.
            </p>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              Mathematician Miroslav Lovric, defines{" "}
              <strong>translation</strong> as follows: "translation is the
              motion of an object along a line the given direction for a given
              distance, in such a way that what is horizontal remains
              horizontal, and what is vertical throughout the motion (i.e.,
              there are no turns).” For translational symmetry, we can think
              about moving the entire tiling in a specific direction in such a
              way that each tile is moved onto an identical tile.
            </p>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              A <strong>reflection</strong> is found by flipping the entire tile
              over a line. This line is known as the axis of reflection.
            </p>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              A <strong>rotation</strong> is a turn around a given point for a
              give angle. The point around which we turn is called the center of
              rotation and the angle which we turn by is called the angle of
              rotation.
            </p>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              Finally, a <strong>glide reflection</strong> is the combination of
              a reflection followed by a translation in a direction parallel to
              the axis of reflection.
            </p>
          </div>
          <div className="grid-container">
            <div className="image-panel">
              <div className="animation-panel">
                <TranslationAnimation />
              </div>
              <div className="caption">
                <p>Image from somewhere</p>
              </div>
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <ReflectionAnimation />
              </div>
              <div className="caption">
                <p>Image from somewhere</p>
              </div>
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <RotationAnimation />
              </div>
              <div className="caption">
                <p>Image from somewhere</p>
              </div>
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <GlideReflectionAnimation />
              </div>
              <div className="caption">
                <p>Image from somewhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Pajarita (Bow-tie) */}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="animation-panel">
            <Pajarita />
          </div>
          <div
            className="text-panel"
            style={{
              background: "rgba(26, 54, 93, 0.85)",
              padding: "4rem",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ color: "var(--stucco)" }}>
              2.1 The Nasrid Pajarita (Bow-tie)
            </h2>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              The pajarita tile is also known as the Nasrid bowtie or the Nasrid
              birdie. The tile's name of birdie comes from the way the tile
              resembles a bird with a head and two outstretched wings.4
              Pajaritas can be found in multiple forms throughout the Alhambra
              including in the Court of the Myrtles and the Comares Palace as
              seen below. In fact, often times the pajarita is seen as the
              symbol of the Alhambra. The pajarita is constructed from 6
              different curves, each of these curves is just a segment of a
              circle. By creating a grid of interlacing circles as seen in the
              animation, the pajarita can then be found by tracing along these
              circles.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Pajarita Images in the Alhambra */}
      <section className="content-section bg-lapis">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="text-panel" style={{ width: "45%" }}>
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              One example of the Pajarita can be found in the Sala de las Camas
              (or the hall of the beds), as seen in figure{" "}
              <strong>1st image</strong>
              which can be found in the Ba˜no de Comares in the Comares Palace.
              However, this is not the only example. Pajaritas can also be found
              in the C´amara Fr´ıa or the Cold Chamber, as seen in figure{" "}
              <strong>2nd image</strong> which is also in the Ba˜no de Comares
              in the Comares Palace. Another variation of the pajarita can be
              seen in the side alcoves of the Patio de los Arrayanes in the
              court of the Myrtles, as found in figure{" "}
              <strong>3rd image</strong>. In this example, the middles of every
              pajarita is filled either by a hexagon or a 6 pointed star. We
              will primary break down the symmetry of the tiling in the Sala de
              las Camas, however, it is clear the pajarita is a common symbol
              throughout the Alhambra. When classifying the symmetries of the
              tiling in the Sala de las Camas, there are three ways to proceed
              as seen below depending on how much the symmetries respect the
              color distinctions of the tiling.
            </p>
          </div>
          <div className="grid-container" style={{ width: "50vw" }}>
            {/*Figure 3: image from architects, Pedro Machuca (Spanish, and Juan de Herrera (Spanish,
          n.d*/}
            <div className="image-panel">
              <img src={pajaritaPedroMachuca} alt="Pajarita" />
              <div className="caption">
                <p>
                  Figure 3: image from architects, Pedro Machuca (Spanish, and
                  Juan de Herrera (Spanish, n.d
                </p>
              </div>
            </div>
            {/*Salsa de las Camas*/}
            <div className="image-panel">
              <img src={pajaritaSalsaDeLasCamas} alt="Pajarita" />
              <div className="caption">
                <p>Figure 6: Salsa de las Camas</p>
              </div>
            </div>
            {/*Figure 4: Detail_of_architects-Alhambra-Alcazaba built 11th century, city expanded 13th-14th centuries, Palace of Charles V built 1533-1631.jpg*/}
            <div className="image-panel">
              <img src={pajaritaPalaceOfCharlesV} alt="Pajarita" />
              <div className="caption">
                <p>
                  Figure 4: Detail_of_architects-Alhambra-Alcazaba built 11th
                  century, city expanded 13th-14th centuries, Palace of Charles
                  V built 1533-1631.jpg
                </p>
              </div>
            </div>
            {/*Figure 5: Side alcoves of the Patio de los Arrayanes in the court of the Myrtles. Image from
          Ortega 2025*/}
            <div className="image-panel">
              <img src={pajaritaArrayanes} alt="Pajarita" />
              <div className="caption">
                <p>
                  Figure 5: Side alcoves of the Patio de los Arrayanes in the
                  court of the Myrtles. Image from Ortega 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*{Pajarita Translational Symmetry}*/}
      <section className="content-section bg-stucco">
        <div className="content-wrapper three-layout-split">
          <div className="text-panel">
            <h2>Classification 1 (p1)</h2>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              In the first classification of the tiling in the sala de las
              camas, we respect all color distinctions. So any symmetry must map
              each tile to an identical tile of the same color. In this approach
              we find that the tiling only has translational symmetry making the
              mathematical classification of its symmetries p1, which is notable
              in not having any rotations, reflections, or glide reflections.
            </p>
          </div>
          <div className="image-panel">
            <img src={pajaritaSalsaDeLasCamas} alt="pajaritaSalsaDeLasCamas" />
            <div className="caption">
              <p>Figure 7: pajarita black and white</p>
            </div>
          </div>
          <div className="animation-panel">
            <PajaritaTranslationalSymmetry />
          </div>
        </div>
      </section>

      {/*{Pajarita Rotatioonal Symmetry, 3-Fold Rotation}*/}
      <section className="content-section bg-lapis">
        <div className="content-wrapper three-layout-split">
          <div className="text-panel">
            <h2>Classification 2 (p2)</h2>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              In this case we are only partially respecting the color
              distinction, where we distinguish between white tiles and non
              white tiles. Let us treat every non white tile as the same color,
              almost like we are taking the image in black in white as seen in
              figure figure. When we do this we find that this tiling can be
              classified as p3.7 8 Which has translational symmetry (as seen in
              figure figure from classification 1) and 3 fold rotational
              symmetry as seen in figure animation)
            </p>
          </div>
          <div className="image-panel">
            <img src={pajaritaSalsaDeLasCamas} alt="pajaritaSalsaDeLasCamas" />
            <div className="caption">
              <p>Figure 7: pajarita black and white</p>
            </div>
          </div>
          <div className="animation-panel">
            <PajaritaRotationalSymmetry threeFold={true} />
          </div>
        </div>
      </section>
      {/*{Pajarita Rotatioonal Symmetry, 6-Fold Rotation}*/}
      <section className="content-section bg-stucco">
        <div className="content-wrapper three-layout-split">
          <div className="text-panel">
            <h2>Classification 3 (p6)</h2>
            <p>
              In the third classification of the pajaritas tiling in the Sala de
              las Camas, we don't respect the color distinctions, so we do not
              distinguish between different colored tiles. When we do so, this
              tiling is a part of a classification called p6. This group is
              notable for only having 6 fold rotational symmetry (in addition to
              the translational symmetry of any crystallographic group).9 10 We
              can see this rotational symmetry in figure animation. Specifically
              in this case, we have 6 fold rotational symmetry where we can
              rotate 6 times about any meeting of the point of 6 Pajaritas tiles
              before returning the original configuration. This tiling also has
              translational symmetry as seen in figure previous translational
              symm.
            </p>
          </div>
          <div className="image-panel">
            <img src={pajaritaBlackAndWhite} alt="pajaritaSalsaDeLasCamas" />
            <div className="caption">
              <p>Figure 7: pajarita black and white</p>
            </div>
          </div>
          <div className="animation-panel">
            <PajaritaRotationalSymmetry threeFold={false} />
          </div>
        </div>
      </section>

      {/* Section 3: The Bone
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
      </section>*/}

      {/* Section 4: The Airplane */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.1 The Airplane</h2>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              Like the pajarita, the airplane tile can also be found throughout
              the Alhambra.11 The airplane can be constructed by first
              constructing a regular octagon, then connecting diagonal vertices
              and extending the edge of the octagon. The airplane can then be
              found by tracing along these lines as seen in figure animation.12
              A variation of the airplane often called the clavo or nail tile13
              (see figure example below) is also popular in the Alhambra. To
              turn the airplane into a clavo, the straightedges of the airplane
              are replaces with curved edges.
            </p>
          </div>
          <div className="animation-panel">
            <Airplane />
          </div>
        </div>
      </section>

      {/* The Airplane Images */}
      <section className="content-section bg-stucco">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="text-panel" style={{ width: "45%" }}>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              A tiling using black and white airplanes can be found in the
              Chamber of Ambassadors, in the Court of the Myrtles (as seen in
              figure 1st image). While this is the tiling we will explore the
              symmetries of, this is not the only example of airplanes in the
              Alhambra. Just below the pajaritas we studied in the Sala de las
              Camas (see figure ref earlier image and figure 2nd image) is a
              yellow, green, black, and white airplane tiling. A clavos tiling
              (a variation of the airplane), as seen in figure 3rd image is
              found in the Portico del Cuarto Dorado in the Comares Palace
            </p>
          </div>
          <div
            className=""
            style={{
              width: "50vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="image-panel">
                <img src={airplane1} alt="Airplane" />
                <div className="caption">
                  <p>
                    Figure 3: image from architects, Pedro Machuca (Spanish, and
                    Juan de Herrera (Spanish, n.d
                  </p>
                </div>
              </div>
              <div className="image-panel">
                <img src={airplane3} alt="Airplane" />
                <div className="caption">
                  <p>
                    Figure 4: Detail_of_architects-Alhambra-Alcazaba built 11th
                    century, city expanded 13th-14th centuries, Palace of
                    Charles V built 1533-1631.jpg
                  </p>
                </div>
              </div>
            </div>
            <div className="image-panel">
              <img src={airplane2} alt="Airplane" />
              <div className="caption">
                <p>Figure 6: Salsa de las Camas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Airplane Classification 1 */}
      <section className="content-section bg-lapis">
        <div className="text-panel" style={{ width: "40%" }}>
          <h2>Classification 1 (cmm)</h2>
          <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
            n this approach, we maintain the color distinctions between the
            black and white airplanes. Looking at figure 1st airplanes example
            can immediately notice multiple translation sym- metries of the
            mosaic. There are translations from moving the tiling left and
            right, or from moving it up and down. Additionally, there is a
            diagonal symmetry as seen in figure animation.
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
            In addition to the translational symmetry, we get reflections
            through the middle of our vertical airplanes as seen in figure
            reflection animation. We similarly get horizontal re- flections
            through the middle of the horizontal airplanes.
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
            In addition to the translational symmetry, we get reflections
            through the middle of our vertical airplanes as seen in figure
            reflection animation. We similarly get horizontal re- flections
            through the middle of the horizontal airplanes.
          </p>
        </div>
        <div className="grid-container">
          <div className="animation-panel">
            <AirplaneTranslationalSymmetry />
          </div>
          <div className="animation-panel">
            <AirplaneRotationalSymmetry twoFold={true} />
          </div>
          <div className="animation-panel">
            <AirplaneGlideReflectionalSymmetry />
          </div>
        </div>
      </section>

      {/* Section 7: Airplane Classification 2 */}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>Classification 2</h2>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              In our second approach to classification, we ignore the color
              distinctions between the black and white airplanes in the Hall of
              the Ambassadors. In doing so, we find that the center of rotation
              as seen in figure airplane 2 fold rotation now has a 90◦ rotation
              giving it 4 fold rotational symmetry as seen in figure airplane 4
              fold rotation.23 In addition to the 4 fold rotational symmetry,
              this tile inherits all the symmetries from our first
              classification of translations, reflections, and glide
              reflections. With the new 4 fold rotational symmetry, the tiling
              in the Hall of the Ambassadors is considered a p4g tiling.
            </p>
          </div>
          <div className="animation-panel">
            <AirplaneReflectionSymmetry />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
