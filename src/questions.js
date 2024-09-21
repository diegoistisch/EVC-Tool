const questions = [
  {
    question: "Angabe: Der schiefe Turm von Pisa in Abbildung 2 hat sich seit seiner Errichtung bis 1990 um 5.5° im Uhrzeigersinn geneigt.Dabei gilt:- Geplante Spitze P₀ = (0, 56)ᵀ- Rotationszentrum Pᵣ = (0, 12)ᵀBeantworten Sie die folgenden Fragen. Die Ergebnisse sind dabei gerundet angegeben.Hinweise:sin(5.5°) ≈ 0.096, sin(-5.5°) ≈ -0.096cos(5.5°) ≈ 0.995, cos(-5.5°) ≈ 0.995Frage: (1) T sei die Translationsmatrix, die vom Ursprung zu Pᵣ verschiebt und R sei die Rotationsmatrix, die um 5.5° gegen den Uhrzeigersinn rotiert. Welche der folgenden Matrizen beschreibt die Rotation von P₀ zu P₁ um das Rotationszentrum Pᵣ?",
    answers: ["Löwe", "Tiger", "Leopard", "Gepard"],
    correctAnswers: ["Tiger"],
    image: "/images/T1_B_2024_1.png"
  },
  {
    question: "Kreuzen Sie die richtigen Aussagen an",
    answers: ["R ist keine affine Transformation.", "|(Ps0 + Ps1)/2 -Pr,| = |Ps1-Pr| ", "X ist eine affine Transformation.", "Mit homogenen Koordinaten können wir alle elementaren Transformationen (Translation, Skalierung, Rotation, Reflexion) in einer Matrix kombinieren.", "Matrixmultiplikationen werden von rechts nach links abgearbeitet.", "|Ps0 - Pr| = |Ps1 - Pr|"],
    correctAnswers: ["X ist eine affine Transformation.", "Mit homogenen Koordinaten können wir alle elementaren Transformationen (Translation, Skalierung, Rotation, Reflexion) in einer Matrix kombinieren.", "Matrixmultiplikationen werden von rechts nach links abgearbeitet.", "|Ps0 - Pr| = |Ps1 - Pr|"],
    image: null
  },
  // Weitere Fragen...
];

export default questions;
