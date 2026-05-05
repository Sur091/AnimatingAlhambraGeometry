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

// import alhambraImage from "./assets/alhambra.jpeg";
import alhambraExteriorImage from "./assets/alhambraExterior.jpg";
import comaresPalaceImage from "./assets/comaresPalace.jpg";
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
            two sides of the same coin. We will particularly explore the
            interactions of color and symmetry in tilings found in the Comares
            Palace.
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
            Muhammad I ibn al-Ahmar(r. 1238-1273), also known as the Alhamar,
            founded the Nasrid dynasty in 1238 in the south of the present day
            Spain. During the time of the Nasrid dynasty there was a lot of
            political instability and turmoil with almost all of the Islamic
            kingdoms at the time being conquered by Ferdinand III. Sultan
            Alhamar originally built a fortress on top of a hill which over the
            course of few centuries expanded into a complex of walls, palaces,
            and gardens, known as the Alhambra. The artists and artisans used
            their extensive knowledge of architecture, art, Euclidean geometry
            in order to build a decorative mosaics and tiles seen in the
            Alhambra.<sup>1</sup> The fortress of the Alhambra (known as the
            Alcazaba) was expanded over the years of the Nasrid dynasty to be a
            palace complex with two prominent palaces: the Comares Palace and
            the Palace of the Lions. For our research, the tilings we will study
            come primarily from the Comares Palace or nearby within the
            Alhambra.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Construction of the Alhambra began in 1238, under the rule of
            Muhammad I, however, early construction focused on the Alcazaba (the
            fortress of the Alhambra) and the exterior walls.<sup>2</sup> It was
            not until the rule of Ismail I (r. 1314-1325) that construction on
            the Comares Palace began, with construction continued by his son
            Yusuf I (r. 1333-1354). Although much of the Comares Palace was
            rebuilt in 1365 by Muhammad V.<sup>3</sup> The Comares notably has a
            large tower known as the tower of the Comares meant to intimidate
            visitors. In 1310, Yusuf I started construction on the Hall of the
            Ambassadors inside the tower of the Comares, meant for diplomatic
            meetings. Outside the entrance to the Hall of the Ambassadors were
            the beautiful gardens of the Court of the Myrtles (or the Patio de
            los Arrayanes). Thus any ambassadors would pass through the Court of
            the Myrtles to get to the Hall of the Ambassadors.<sup>4</sup>
          </p>
          <p className="footNotes">
            <sup>1</sup> Ortega, “An Introduction to the Mathematics in the
            Alhambra of Granada”
            <br />
            <sup>2</sup> Majlan and Alatas, “The Importance of Alhambra as a
            Fortress and Palaces during the Nasrid Dynasty: The Case of the
            Alcazaba, the Palace of Comares, and the Palace of the Lions,” 207
            <br />
            <sup>3</sup> Majlan and Alatas, 207, 210-211
            <br />
            <sup>4</sup> Majlan and Alatas, 212
            <br />
          </p>
        </div>
      </section>

      <section className="content-section bg-lapis">
        <div className="image-panel">
          <img src={alhambraExteriorImage} alt="Alhambra exterior" />
          <div className="caption">
            <p>
              Figure 1: The Exterior of the Alhambra, Nasrid, Grenada, Spain,
              Alcazaba built 11th century, city expanded 13th-14th. Photographed
              by William Keighley (1889- 1984), Architects: Unknown 11th-14th
              century architects, Pedro Machuca (Spanish, died 1550), and Juan
              de Herrera (Spanish, ca. 1530-1597). Alhambra. Alcazaba built 11th
              century, city expanded 13th-14th centuries, Palace of Charles V
              built 1533-1631. https://jstor.org/stable/community.12220480.
            </p>
          </div>
        </div>
        <div className="image-panel">
          <img src={comaresPalaceImage} alt="Comares Palace" />
          <div className="caption">
            <p>
              Figure 2: The Comares Palace 1333- 1354, Nasrid, Grenada, Spain.
              Pho- tographed by Dell Upton, Palacio de Comares. 1333-1354;
              facade ca. 1369. https://jstor.org/stable/community.35819360.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1.3: Compass and Straightedge */}
      <section className="content-section bg-stucco">
        <div>
          <div className="image-panel">
            <img src={compassImage} alt="Compass" width="100%" />
            <div className="caption">
              <p>
                Figure 3: Here you can see an example of a compass tool that
                would be used to make circles. Photo by W F Stanley and Company
                Limited. Proportional Compass:- Meeting Point Pattern. 1876.
                Science Museum Group; W.F. Stanley and Company. Open: Science
                Museum Group. Artstor.
                https://jstor.org/stable/community.26404983.
              </p>
            </div>
          </div>
          <div className="image-panel">
            <img src={straightEdgeImage} alt="Straightedge" width="100%" />
            <div className="caption">
              <p>
                Figure 4: Here you can see an example of a straightedge, a tool
                used to draw straight lines. Photo by Straight Edge. 18th
                century. Iron, partly gilded and silvered, Overall: 8 15/16 ×
                7/8 × 1/8 in. (22.7 × 2.2 × 0.3 cm). The Metropolitan Museum of
                Art. https://jstor.org/stable/community.18518866.
              </p>
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
            the plane.”<sup>5</sup> By using primarily two tools, a compass and
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
          <p className="footNotes">
            <sup>5</sup> Bodner, “Constructing and Classifying Designs of
            al-Andalus,” 61
            <br />
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
              there are no turns)."<sup>6</sup> For translational symmetry, we
              can think about moving the entire tiling in a specific direction
              in such a way that each tile is moved onto an identical tile.
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
            <p className="footNotes">
              <sup>6</sup> Lovric, “Magic Geometry: Mosaics in the Alhambra,”
              425
              <br />
            </p>
          </div>
          <div className="grid-container">
            <div className="image-panel">
              <div className="animation-panel">
                <TranslationAnimation />
              </div>
              {/*<div className="caption">
                <p>Image from somewhere</p>
              </div>*/}
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <ReflectionAnimation />
              </div>
              {/*<div className="caption">
                <p>Image from somewhere</p>
              </div>*/}
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <RotationAnimation />
              </div>
              {/*<div className="caption">
                <p>Image from somewhere</p>
              </div>*/}
            </div>
            <div className="image-panel">
              <div className="animation-panel">
                <GlideReflectionAnimation />
              </div>
              {/*<div className="caption">
                <p>Image from somewhere</p>
              </div>*/}
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
              resembles a bird with a head and two outstretched wings.
              <sup>7</sup>
              Pajaritas can be found in multiple forms throughout the Alhambra
              including in the Court of the Myrtles and the Comares Palace as
              seen below. In fact, often times the pajarita is seen as the
              symbol of the Alhambra. The pajarita is constructed from 6
              different curves, each of these curves is just a segment of a
              circle. By creating a grid of interlacing circles as seen in the
              animation, the pajarita can then be found by tracing along these
              circles.<sup>8</sup>
            </p>
            <p className="footNotes">
              <sup>7</sup> Tyminski, “Looking at Mosaics in the Alhambra”
              <br />
              <sup>8</sup> Ortega, “An Introduction to the Mathematics in the
              Alhambra of Granada”
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Pajarita Images in the Alhambra */}
      <section className="content-section bg-lapis ">
        <div className="three-layout-split">
          <div className="text-panel">
            <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
              One example of the Pajarita can be found in the Sala de las Camas
              (or the hall of the beds), as seen in figure 5 which can be found
              in the Ba˜no de Comares in the Comares Palace. However, this is
              not the only example. Pajaritas can also be found in the Cámara
              Fría or the Cold Chamber, as seen in figure 6 which is also in the
              Ba˜no de Comares in the Comares Palace.<sup>9</sup> In this
              example, we see that the tiling is chromatically chaotic, Grünbaum
              argues that "the artists destroyed the symmetries to make the
              tilings less monotonous."<sup>10</sup> Another variation of the
              pajarita can be seen in the side alcoves of the Patio de los
              Arrayanes in the court of the Myrtles, as found in figure 7. In
              this example, the middles of every pajarita is filled either by a
              hexagon or a 6 pointed star. We will primary break down the
              symmetry of the tiling in the Sala de las Camas, however, it is
              clear the pajarita is a common symbol throughout the Alhambra.
              When classifying the symmetries of the tiling in the Sala de las
              Camas, there are three ways to proceed as seen below depending on
              how much the symmetries respect the color distinctions of the
              tiling.
            </p>
            <p className="footNotes">
              <sup>9</sup> Emparán, “The Planar Crystallography Groups as an
              Iconographic Analysis Tool in Islamic Art”, 306 -307
              <br />
              <sup>10</sup> Grünbaum, “What Symmetry Groups Are Present in the
              Alhambra?” 673
            </p>
          </div>
          <div className="image-panel">
            <img src={pajaritaPalaceOfCharlesV} alt="Pajarita" />
            <div className="caption">
              <p>
                Figure 6: Pajaritas in the Cámara Fría, 13th-14th century,
                Nasrid, Grenada, Spain. Image by William Keighley (1889-1984).
                Architects: Unknown 11th-14th century architects, Pedro Machuca
                (Spanish, died 1550), and Juan de Herrera (Spanish, ca.
                1530-1597). Alhambra. Alcazaba built 11th century, city expanded
                13th-14th centuries, Palace of Charles V built 1533-1631.
                https://jstor.org/stable/community.12215012.
              </p>
            </div>
          </div>
          <div>
            <div className="image-panel">
              <img src={pajaritaPedroMachuca} alt="Pajarita" />
              <div className="caption">
                <p>
                  Figure 5: Pajaritas in the Sala de las Camas in the Comares
                  Palace. 13th - 14th century, Nas- rid, Grenada, Spain. Image
                  by William Keighley (1889-1984). Architects: Unknown 11th-
                  14th century architects, Pedro Machuca (Spanish, died 1550),
                  and Juan de Herrera (Spanish, ca. 1530-1597). Alhambra.
                  Alcazaba built 11th century, city expanded 13th-14th
                  centuries, Palace of Charles V built 1533-1631.
                  https://jstor.org/stable/community.12217843.
                </p>
              </div>
            </div>
            {/*Figure 4: Detail_of_architects-Alhambra-Alcazaba built 11th century, city expanded 13th-14th centuries, Palace of Charles V built 1533-1631.jpg*/}

            {/*Figure 5: Side alcoves of the Patio de los Arrayanes in the court of the Myrtles. Image from
          Ortega 2025*/}
            <div className="image-panel">
              <img src={pajaritaArrayanes} alt="Pajarita" />
              <div className="caption">
                <p>
                  Figure 7: Pajaritas in the side alcoves of the Patio de los
                  Arrayanes (the Court of the Myrtles), 13th-14th century,
                  Nasrid, Grenada, Spain. Image from Miguel Ortega. 2025. “An
                  introduction to the mathematics in the Alhambra of Granada.”
                  Eur. Math. Soc. Mag. 135:12–19
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
              <p>
                Figure 8: Close up of pajaritas in the Sala de las Camas in the
                Comares Palace. 13th - 14th century, Nasrid, Grenada, Spain.
                Image by William Keighley (1889- 1984). Architects: Unknown
                11th-14th century architects, Pedro Machuca (Spanish, died
                1550), and Juan de Herrera (Spanish, ca. 1530-1597). Alhambra.
                Alcazaba built 11th century, city expanded 13th-14th centuries,
                Palace of Charles V built 1533-1631.
                https://jstor.org/stable/community.12217843.
              </p>
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
              distinction, where distinguish between white tiles and non white
              tiles. Let us treat every non white tile as the same color, almost
              like we are taking the image in black in white as seen in figure
              9. When we do this we find that this tiling can be classified as
              p3.<sup>11</sup> <sup>12</sup> Which has translational symmetry
              (as seen in the animation above) and 3 fold rotational symmetry as
              seen in the animation to the right).
            </p>
            <p className="footNotes">
              <sup>11</sup> Bodner, “Constructing and Classifying Designs of
              al-Andalus,” 67 <br />
              <sup>12</sup> Grünbaum, “What Symmetry Groups Are Present in the
              Alhambra?” 671
            </p>
          </div>
          <div className="image-panel">
            <img src={pajaritaBlackAndWhite} alt="pajaritaBlackAndWhite" />
            <div className="caption">
              <p>
                Figure 9: Black and white image of pajaritas in the Alhambra,
                13th-14th century, Nasrid, Grenada, Spain. Image by B. Lynn
                Bodner. 2003. “Construction and Classifying Designs of
                al-Andalus.” In Meeting Alhambra, ISAMA-BRIDGES Conference
                Proceedings, edited by Javier Barrallo et al., 61–68. Granada,
                Spain: University of Granada. isbn: 84-930669-1-5
              </p>
            </div>
          </div>
          <div className="animation-panel">
            <PajaritaRotationalSymmetry threeFold={true} />
          </div>
        </div>
      </section>
      {/*{Pajarita Rotatioonal Symmetry, 6-Fold Rotation}*/}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>Classification 3 (p6)</h2>
            <p>
              In the third classification of the pajaritas tiling in the Sala de
              las Camas, we don’t respect the color distinctions, so we do not
              distinguish between different colored tiles. When we do so, this
              tiling is a part of a classification called p6. This group is
              notable for only having 6 fold rotational symmetry (in addition to
              the translational symmetry of any crystallographic group).
              <sup>13</sup> <sup>14</sup>We can see this rotational symmetry in
              the animation to the right. Specifically in this case, we have 6
              fold rotational symmetry where we can rotate 6 times about any
              meeting of the point of 6 Pajaritas tiles before returning the
              original configuration. This tiling also has translational
              symmetry as seen in the first classification.
            </p>
            <p className="footNotes" style={{ color: "black" }}>
              <sup>13</sup> Bodner, “Constructing and Classifying Designs of
              al-Andalus,” 67 <br />
              <sup>14</sup> Grünbaum, “What Symmetry Groups Are Present in the
              Alhambra?” 671
              <br />
            </p>
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
              the Alhambra.<sup>15</sup> The airplane can be constructed by
              first constructing a regular octagon, then connecting diagonal
              vertices and extending the edge of the octagon. The airplane can
              then be found by tracing along these lines as seen in the
              animation to the right.<sup>16</sup> A variation of the airplane
              often called the clavo or nail tile<sup>17</sup> (see figure 12
              below) is also popular in the Alhambra. To turn the airplane into
              a clavo, the straightedges of the airplane are replaces with
              curved edges.
            </p>
            <p className="footNotes">
              <sup>15</sup> Lovric, “Magic Geometry: Mosaics in the Alhambra,”
              426 <br />
              <sup>16</sup> Ortega, “An Introduction to the Mathematics in the
              Alhambra of Granada” <br />
              <sup>17</sup> Emparán, “The Planar Crystallography Groups as an
              Iconographic Analysis Tool in Islamic Art,” 306 <br />
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
              A tiling using black and white airplanes can be found in the Hall
              of the Ambassadors, in the Comares Palace (as seen in figure 10).
              <sup>18</sup> While this is the tiling we will explore the
              symmetries of, this is not the only example of airplanes in the
              Alhambra. Just below the pajaritas we studied in the Sala de las
              Camas (see figure 5 and figure 11) is a yellow, green, black, and
              white airplane tiling. A clavos tiling (a variation of the
              airplane), as seen in figure 12 is found in the Portico del Cuarto
              Dorado in the Comares Palace.<sup>19</sup> Taking the black and
              white airplanes tiling in the Hall of the Ambassadors, we find
              there are two ways to classify its symmetries.
            </p>
            <p className="footNotes" style={{ color: "black" }}>
              <sup>18</sup> Ortega, “An Introduction to the Mathematics in the
              Alhambra of Granada” <br />
              <sup>19</sup> Emparán, “The Planar Crystallography Groups as an
              Iconographic Analysis Tool in Islamic Art,” 306
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
                    Figure 10: Airplane tiling in the Hall of the Ambassadors,
                    13th-14th century, Nasrid, Grenada, Spain. Image by Sheila
                    Blair, Jonathan Bloom and Walter Denny. Founded by Sultan
                    Muhammad I, and Palace of the Myrtles begun under Sultan
                    Isma’il I and completed under Muhammad V. Alhambra; Palace
                    of the Myrtles; Hall of the Ambassadors. founded in 1238,
                    additions in the 13th and 14th centuries; Palace of the
                    Myrtles added c. 1370. Tile; opus sectile or tile mosaic.
                    https://jstor.org/stable/community.15992456.
                  </p>
                </div>
              </div>
              <div className="image-panel">
                <img src={airplane3} alt="Airplane" />
                <div className="caption">
                  <p>
                    Figure 11: Close up of airplane tiles in the Sala de las
                    Camas in the Comares Palace. 13th - 14th century, Nasrid,
                    Grenada, Spain. Image by William Keighley (1889- 1984).
                    Architects: Unknown 11th-14th century architects, Pedro
                    Machuca (Spanish, died 1550), and Juan de Herrera (Spanish,
                    ca. 1530-1597). Alhambra. Alcazaba built 11th century, city
                    expanded 13th-14th centuries, Palace of Charles V built
                    1533-1631. https://jstor.org/stable/community.12217843.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-panel">
              <img src={airplane2} alt="Airplane" />
              <div className="caption">
                <p>
                  Figure 12: Clavos in the Comares Palace, 13th-14th century,
                  Nasrid, Grenada, Spain. Image by Alhambra Palace - (Nasrid
                  Palaces). Main construction 14th century. Sites and Photos.
                  Artstor. https://jstor.org/stable/community.15328675.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Airplane Classification 1 */}
      <section className="content-section bg-lapis">
        <div className="text-panel" style={{ width: "40%" }}>
          <h2>Classification 1 (cmm)</h2>
          <p style={{ color: "var(--lapis)", fontSize: "1.4rem" }}>
            In this approach, we maintain the color distinctions between the
            black and white airplanes in the tiling in the Hall of Ambassadors.
            Looking at figure 10, we can immediately notice multiple translation
            symmetries of the mosaic. There are translations from moving the
            tiling left and right, or from moving it up and down. Additionally,
            there is a diagonal symmetry as seen in the animation to the right.
            <sup>20</sup>
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.4rem" }}>
            In addition to the translational symmetry, we get reflections
            through the middle of our vertical airplanes as seen in the
            animation to the right. We similarly get horizontal reflections
            through the middle of the horizontal airplanes.<sup>21</sup>
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.4rem" }}>
            We can see that by translating our tile up and then reflecting over
            a line placed between the vertical black airplanes, that we have
            symmetry. Thus, vertical glide reflections can be found between the
            black airplanes as seen in the animation to the right.<sup>22</sup>
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.4rem" }}>
            Looking at a point where four airplanes meet we, can rotate 180◦ to
            rotate every black airplane to a black airplane and every white
            airplane to a white airplane.
          </p>
          <p style={{ color: "var(--lapis)", fontSize: "1.4rem" }}>
            Mathematically this group of symmetries is known as cmm which
            notably only has 2 fold rotational symmetry.<sup>23</sup>
          </p>
          <p className="footNotes">
            <sup>20</sup> Lovric, “Magic Geometry: Mosaics in the Alhambra,”
            426-427 <br />
            <sup>21</sup> Lovric, 426-427 <br />
            <sup>22</sup> Lovric, 426-427 <br />
            <sup>23</sup> Lovric, 426-427 <br />
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
            <h2>Classification 2 (pg4)</h2>
            <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
              In our second approach to classification, we ignore the color
              distinctions between the black and white airplanes in the Hall of
              the Ambassadors. In doing so, we find that the center of rotation
              (as seen in the animation above from the first classification) now
              has a 90◦ rotation giving it 4 fold rotational symmetry as seen in
              the animation to the right.<sup>24</sup> In addition to the 4 fold
              rotational symmetry, this tile inherits all the symmetries from
              our first classification of translations, reflections, and glide
              reflections. With the new 4 fold rotational symmetry, the tiling
              in the Hall of the Ambassadors is considered a p4g tiling.
              <sup>25</sup> <sup>26</sup>
            </p>
            <p className="footNotes" style={{ color: "black" }}>
              <sup>24</sup> Lovric, "Magic Geometry: Mosaics in the Alhambra,"
              426-427 <br />
              <sup>25</sup> Bodner, “Constructing and Classifying Designs of
              al-Andalus,” 65 <br />
              <sup>26</sup> Lovric, 426
            </p>
          </div>
          <div className="animation-panel">
            <AirplaneReflectionSymmetry />
          </div>
        </div>
      </section>

      <section className="content-section bg-lapis">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "var(--lapis)" }}>Conclusion</h2>
          <p style={{ color: "var(--lapis)", fontSize: "1.5rem" }}>
            By studying the mathematical constructions of these tilings within
            the Alhambra we begin to understand the artisans better. Further, by
            understanding the mathematics behind these tiling, we can further
            appreciate the beauty and intricacy of the tile work in the
            Alhambra. Throughout the Nasrid palaces, geometric tilings are a
            common theme, understanding the symmetries shows the intricate
            planning that went into the construction of these beautiful tilings.
            The simple tools of a compass straight edge can be used to create
            intricate tilings with over arching symmetry conditions. By
            exploring symmetries and the role of color, coloring choices are
            highlighted to have additional structural roles within the tilings.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="content-section bg-lapis">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "var(--lapis)" }}>References</h2>
          <p className="references">
            Bodner, B. Lynn. 2003. “Construction and Classifying Designs of
            al-Andalus.” In Meet- ing Alhambra, ISAMA-BRIDGES Conference
            Proceedings, edited by Javier Barrallo, Nathaniel Friedman, Juan
            Antonio Maldonado, José Martínez-Aroza, Reza Sarhangi, and Carlo
            Séquin, 61–68. Granada, Spain: University of Granada. isbn:
            84-930669-1-5.
          </p>
          <p className="references">
            Emparán, María Antonieta. 2019. “The Planar Crystallography Groups
            as an Iconographic Analysis Tool in Islamic Art.” In Proceedings of
            Bridges 2019: Mathematics, Art, Music, Architecture, Education,
            Culture, edited by Susan Goldstine, Douglas McKenna, and Kristóf
            Fenyvesi, 303–310. Phoenix, Arizona: Tessellations Publishing. isbn:
            978-1- 938664-27-4.
          </p>
          <p className="references">
            Grünbaum, Branko. 2006. “What Symmetry Groups are Present in the
            Alhambra.” Notices of the AMS 53 (6): 670–673.
          </p>
          <p className="references">
            Lovric, Miroslav. 2009. “Magic geometry: mosaics in the Alhambra.”
          </p>
          <p className="references">
            Majlan, Nurul Shahirah binti, and Alwi Alatas. 2022. “The Importance
            of Alhambra as a Fortress and Palaces during the Nasrid Dynasty: The
            Case of the Alcazaba, the Palace of Comares, and the Palace of the
            Lions.” IIUM Journal of Religion and Civilisational Studies 5, no. 2
            (December): 202–219. https://doi.org/10.31436/ijrcs.v5i2.254. https:
            //journals.iium.edu.my/irkh/index.php/ijrcs/article/view/254.
          </p>
          <p className="references">
            Ortega, Miguel. 2025. “An introduction to the mathematics in the
            Alhambra of Granada.” Eur. Math. Soc. Mag. 135:12–19.
          </p>
          <p className="references">
            Pérez-Gómez, Rafael. 1987. “The four regular mosaics missing in the
            Alhambra.” Computers & Mathematics with Applications 14 (2):
            133–137.
          </p>
          <p className="references">
            Tyminski, Robert. 2025. “Looking at Mosaics in the Alhambra.” Jung
            Journal 19 (1): 34–48.
            https://doi.org/10.1080/19342039.2025.2446127. eprint:
            https://doi.org/10.1080/ 19342039.2025.2446127.
            https://doi.org/10.1080/19342039.2025.2446127.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
