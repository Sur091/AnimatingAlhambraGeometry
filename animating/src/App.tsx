import React from "react";
import TranslationAnimation from "./components/TranslationAnimation";
import Pajarita from "./components/Pajarita";
import PajaritaTranslationalSymmetry from "./components/PajaritaTranslationalSymmetry";
import PajaritaRotationalSymmetry from "./components/PajaritaRotationalSymmetry";
import AirplaneTranslationalSymmetry from "./components/AirplaneTranslationalSymmetry";
import Bone from "./components/Bone";
import Airplane from "./components/Airplane";
import AirplaneRotationalSymmetry from "./components/AirplaneRotationalSymmetry";
import AirplaneGlideReflectionalSymmetry from "./components/AirplaneGlideReflectionSymmetry";

import alhambraImage from "./assets/alhambra.jpeg";
import compassImage from "./assets/compass.jpg";
import straightEdgeImage from "./assets/straightEdge.jpg";

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
            mosaics and tiles seen in the Alhhambra.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Many of the designs we find in the Alhambra, such as those seen in
            the images below, can be created by “constructing a framework of
            identical repeat units, or motifs, that recur regularly to form a
            geometrical grid or a regular division of the plane.”
            (bodner2004star) By using primarily two tools, a compass and
            straightedge, artisans are able to construct many of these geometric
            tilings. Given two points, a compass allows for the construction of
            a circle through one of those points, centered at the other point. A
            straight edge allows for the user to create a line between two fixed
            points.{" "}
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            When looking at tilings within the Alhambra, our focus will be two
            fold, first we want to study the compass and straightedge
            construction of the base tiles of each design. All of the tilings we
            will focus on, are created through repeated use of a singular tile.
            As seen in the image below. For each tiling we will break down the
            construction of the base tile used and the over all symmetries of
            the tiling found in the Alhambra.
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
            Compass and straightedge were utilized by artists and artisans to
            construct geometric tilings.
          </p>
        </div>
      </section>

      {/* Section 1.4: Symmetry Explanation */}
      <section className="content-section bg-stucco">
        <div
          className="content-wrapper"
          style={{
            background: "rgba(26, 54, 93, 0.85)",
            padding: "4rem",
            borderRadius: "12px",
            width: "50%",
          }}
        >
          <h2 style={{ color: "var(--stucco)" }}>Symmetry</h2>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            A symmetry is a way of mapping tiles to identical tiles while
            preserving the overall structure of the tiling. When we look at
            symmetries of a tiling, there are four major symmetries we are
            considering: translations, reflections, rotations, and glide
            reflections. Lovric, in his article, defines translation as follows
            “translation is the motion of an object along a line the given
            direction for a given distance, in such a way that what is
            horizontal remains horizontal, and what is vertical throughout the
            motion (i.e., there are no turns).” Translating a given object is
            the same as simply moving the object to a different location (Lovric
            2009).{" "}
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            In a similar manner, replacing the original copy with its mirror
            image is known as reflec- tion. When reflecting an object, it is
            important to note where the mirror was placed; the location of the
            mirror is termed the axis the reflection. A rotation is a turn
            around a given point for a give angle. The point around which we
            turn is called the center of rotation and the angle which we turn by
            is called the angle of rotation.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            Finally, glide reflection is the combination of a reflection
            followed by a translation in a direction parallel to the axis of
            reflection.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            For example, with a rotational symmetry, we rotate the entire tiling
            about a point and in doing so, move each tile to an identical tile
            somewhere else in the tiling. When we look at symmetries of tilings,
            there are primarily two approaches: one that respects color
            variation, and one that does not. In this we see that there are two
            ways of approaching the classification of a symmetry of a tiling. In
            the first approach when we respect color, not only must a symmetry
            move each tile to an identical tile, but an identical tile of the
            same color. In the second approach, tiles are not required to have
            the same colors when we perform a symmetry.
          </p>
          <p style={{ color: "var(--stucco)", fontSize: "1.5rem" }}>
            All of the tilings we will study are part of what modern mathematics
            calls the crystallo- graphic groups or the wall paper groups. These
            are tilings which specifically have at least two different
            directions of translational symmetry. These tilings can be
            classified by the overall symmetries they have. In total there are
            17 different classifications of these tilings.
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
              <TranslationAnimation />
            </div>
            <div className="caption">
              <p>Image from somewhere</p>
            </div>
          </div>
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
              <TranslationAnimation />
            </div>
            <div className="caption">
              <p>Image from somewhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Pajarita (Bow-tie) */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="animation-panel">
            <Pajarita />
          </div>
          <div className="text-panel">
            <h2>2.1 The Nasrid Pajarita (Bow-tie)</h2>
            <p>
              In the following image we can see a tiling found on the wall of
              the court of the Myrtles. We can identify the base tile as the
              pajarita tile as seen in the following image. According to one
              article, the pajarita is the symbol of the Alhambra (Ortega 2025).
              In fact there are multiple walls in the court of the myrtles
              containing pajaritas. The pajarita is also known as the Nasrid
              bowtie or the Nasrid birdie.
            </p>
          </div>
        </div>
      </section>

      {/*{Pajarita Translational Symmetry}*/}
      <section className="content-section bg-stucco">
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

      {/*{Pajarita Rotatioonal Symmetry, 3-Fold Rotation}*/}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>2.3 The Rotational Symmetry of the Pajarita (Bow-tie)</h2>
            <p>We know that the Pajarita has two rotational symmetries</p>
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
            <h2>2.3 The Rotational Symmetry of the Pajarita (Bow-tie)</h2>
            <p>We know that the Pajarita has two rotational symmetries</p>
          </div>
          <div className="animation-panel">
            <PajaritaRotationalSymmetry threeFold={false} />
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
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.2 The Airplane Translational Symmetry</h2>
            <p>The Airplane as Translational Symmetry</p>
          </div>
          <div className="animation-panel">
            <AirplaneTranslationalSymmetry />
          </div>
        </div>
      </section>

      {/* Section 6: The Airplane Rotational Symmetry: Two-Fold */}
      <section className="content-section bg-stucco">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.3 The Airplane Rotational Symmetry</h2>
            <p>The Airplane as Rotational Symmetry</p>
          </div>
          <div className="animation-panel">
            <AirplaneRotationalSymmetry twoFold={true} />
          </div>
        </div>
      </section>

      {/* Section 7: The Airplane Rotational Symmetry: Four-Fold */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.4 The Airplane Rotational Symmetry: Four-Fold</h2>
            <p>The Airplane as Rotational Symmetry</p>
          </div>
          <div className="animation-panel">
            <AirplaneRotationalSymmetry twoFold={false} />
          </div>
        </div>
      </section>

      {/* Section 8: The Airplane Reflection Symmetry */}
      <section className="content-section bg-lapis">
        <div className="content-wrapper layout-split">
          <div className="text-panel">
            <h2>4.4 The Airplane Glide Reflection Symmetry</h2>
            <p>The Airplane as Glide Reflection Symmetry</p>
          </div>
          <div className="animation-panel">
            <AirplaneGlideReflectionalSymmetry />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
