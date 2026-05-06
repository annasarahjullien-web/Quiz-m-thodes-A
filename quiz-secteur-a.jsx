import React, { useState } from 'react';

export default function QuizSecteurA() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const quizData = [
    {
      id: 1,
      type: 'choice',
      question: 'Quel est le grossissement maximum d\'un microscope optique avant perte de résolution?',
      options: ['500x', '1000x', '2000x', '10000x'],
      correct: 1,
      explanation: 'La limite de résolution du microscope optique est environ 200 nm. Au-delà de ~1000x, on a de l\'agrandissement vide. Le grossissement utile est généralement 400-1000x.',
      image: '🔬'
    },
    {
      id: 2,
      type: 'choice',
      question: 'Quel fixateur est utilisé pour la microscopie électronique à transmission (MET)?',
      options: ['Formaldéhyde uniquement', 'Glutaraldéhyde + Tétraoxyde d\'osmium', 'Éthanol', 'Eau distillée'],
      correct: 1,
      explanation: 'La double fixation (glutaraldéhyde + OsO₄) est essentielle en MET. Le glutaraldéhyde stabilise les protéines, l\'osmium contraste les lipides et prépare aux coupes ultra-fines.',
      image: '⚗️'
    },
    {
      id: 3,
      type: 'choice',
      question: 'Quelle technique sépare les molécules d\'ADN selon leur taille?',
      options: ['Chromatographie d\'affinité', 'Électrophorèse sur gel d\'agarose', 'Centrifugation', 'Filtration'],
      correct: 1,
      explanation: 'L\'électrophorèse sur gel d\'agarose est LA technique classique de séparation d\'ADN. Les fragments migrent selon leur charge et leur taille dans le champ électrique.',
      image: '⚡'
    },
    {
      id: 4,
      type: 'choice',
      question: 'Quel est le rôle de l\'EDTA dans l\'extraction d\'ADN?',
      options: ['Catalyser la réaction', 'Chélater les ions Mg²⁺ et inactiver les DNases', 'Colorer l\'ADN', 'Augmenter le pH'],
      correct: 1,
      explanation: 'L\'EDTA chélate les divalents (Mg²⁺, Ca²⁺) dont dépendent les DNases. En les séquestrant, on protège l\'ADN de la dégradation.',
      image: '🛡️'
    },
    {
      id: 5,
      type: 'choice',
      question: 'Quel colorant révèle les protéines en électrophorèse?',
      options: ['Hématoxyline-Éosine', 'Bleu de Coomassie', 'Méthylène bleu', 'Safranine'],
      correct: 1,
      explanation: 'Le Bleu de Coomassie (ou nitrate d\'argent) sont les colorants standard pour les protéines sur gel. H&E est pour l\'histologie tissulaire.',
      image: '🎨'
    },
    {
      id: 6,
      type: 'choice',
      question: 'Quel est le nombre de cycles thermiques typique en PCR?',
      options: ['5-10 cycles', '20-25 cycles', '30-40 cycles', '50-100 cycles'],
      correct: 2,
      explanation: 'La PCR standard utilise 30-35 cycles. Chaque cycle: dénaturation (94°C), hybridation (amorces, ~55°C), élongation (72°C, ~1min/kb).',
      image: '🌡️'
    },
    {
      id: 7,
      type: 'choice',
      question: 'Quel microscopie donne les meilleures résolutions de l\'ultrastructure cellulaire?',
      options: ['Microscopie optique', 'Microscopie à fluorescence', 'Microscopie électronique à transmission (MET)', 'Loupe binoculaire'],
      correct: 2,
      explanation: 'La MET atteint une résolution de 0.1-1 nm (vs 200 nm pour l\'optique). Elle révèle organelles, filaments, complexes protéiques, membranes.',
      image: '🔬'
    },
    {
      id: 8,
      type: 'choice',
      question: 'Quel est le rôle de la déshydratation dans la préparation d\'échantillons?',
      options: ['Tuer les pathogènes', 'Remplacer l\'eau pour permettre l\'inclusion en paraffine/résines', 'Fixer les protéines', 'Augmenter le contraste'],
      correct: 1,
      explanation: 'La déshydratation progressive (70%, 90%, 100% éthanol) remplace l\'eau avant l\'inclusion. C\'est essentiel pour la paraffine (hydrophobe) et les résines.',
      image: '💧'
    },
    {
      id: 9,
      type: 'choice',
      question: 'Quelle enzyme de restriction coupe l\'ADN et produit des extrémités collantes?',
      options: ['Toutes les enzymes de restriction', 'Seules certaines (ex: EcoRI, BamHI)', 'Aucune ne produit d\'extrémités collantes', 'La Taq polymérase'],
      correct: 1,
      explanation: 'Certaines enzymes (EcoRI, BamHI, PstI...) font des coupures décalées produisant des \"sticky ends\". D\'autres font des coupures nettes (blunt ends).',
      image: '✂️'
    },
    {
      id: 10,
      type: 'choice',
      question: 'Quel type de chromatographie sépare les protéines selon leur poids moléculaire?',
      options: ['Chromatographie d\'échange d\'ions', 'Chromatographie d\'exclusion stérique (SEC)', 'Chromatographie d\'affinité', 'Chromatographie de partage'],
      correct: 1,
      explanation: 'La SEC (ou gel filtration) sépare par taille: grosses protéines éluent en premier, petites en dernier. Essentielle pour la purification de protéines complexes.',
      image: '⬜'
    },
    {
      id: 11,
      type: 'scheme',
      question: 'Identifiez les étapes de la microscopie optique pour préparer une coupe tissulaire',
      schemeSteps: [
        { step: 'Fixation', color: '#B3E5FC' },
        { step: 'Déshydratation', color: '#81D4FA' },
        { step: 'Inclusion en paraffine', color: '#4FC3F7' },
        { step: 'Microtomie', color: '#29B6F6' },
        { step: 'Coloration', color: '#03A9F4' },
        { step: 'Montage & Observation', color: '#039BE5' }
      ],
      explanation: 'Cet ordre est critique. La fixation stabilise les structures, la déshydratation prépare à la paraffine (hydrophobe), puis on coupe et colore pour l\'observation.',
      image: '📋'
    },
    {
      id: 12,
      type: 'choice',
      question: 'Quel tampon est typiquement utilisé en électrophorèse d\'ADN?',
      options: ['PBS (tampon phosphate)', 'TAE (Tris-acétate-EDTA)', 'Tampon de charge uniquement', 'NaCl pur'],
      correct: 1,
      explanation: 'TAE ou TBE assurent la conductivité et le pH pendant la migration. TAE (moins de sel) est préféré car il permet de recycler le tampon plus longtemps.',
      image: '⚡'
    }
  ];

  const handleAnswer = (selectedIndex) => {
    if (!answered) {
      const isCorrect = selectedIndex === quizData[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      setAnswered(true);
      setShowResult(true);
    }
  };

  const goToNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setShowResult(false);
    }
  };

  const goToPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswered(false);
      setShowResult(false);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setShowResult(false);
  };

  const question = quizData[currentQuestion];
  const percentage = Math.round((score / quizData.length) * 100);
  const isFinished = currentQuestion === quizData.length - 1 && answered;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '1.5rem'
        }}>
          <h1 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '28px',
            fontWeight: '600',
            color: '#1565c0'
          }}>🧬 Quiz Secteur A SVTU</h1>
          <p style={{
            margin: '0',
            fontSize: '14px',
            color: '#666'
          }}>Maîtrisez les méthodes de laboratoire essentielles</p>
        </div>

        {/* Progress bar */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            <span>Question {currentQuestion + 1}/{quizData.length}</span>
            <span style={{ color: '#1565c0' }}>Score: {score}/{quizData.length}</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            background: '#e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
              height: '100%',
              background: '#1565c0',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {!isFinished ? (
          <>
            {/* Question */}
            <div style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #1565c0'
            }}>
              <div style={{
                fontSize: '24px',
                marginRight: '1rem',
                display: 'inline-block'
              }}>
                {question.image}
              </div>
              <h2 style={{
                margin: '0',
                fontSize: '18px',
                fontWeight: '500',
                color: '#1a1a1a',
                lineHeight: '1.5'
              }}>
                {question.question}
              </h2>
            </div>

            {/* Answer options or scheme */}
            {question.type === 'choice' ? (
              <div style={{ marginBottom: '2rem' }}>
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={answered}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px 16px',
                      marginBottom: '10px',
                      textAlign: 'left',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      background: answered && idx === question.correct ? '#c8e6c9' : 
                                 answered && idx !== question.correct && !answered ? 'white' : 'white',
                      cursor: answered ? 'default' : 'pointer',
                      fontSize: '15px',
                      fontWeight: '500',
                      transition: 'all 0.2s',
                      borderColor: answered && idx === question.correct ? '#4caf50' : '#ddd'
                    }}
                    onMouseEnter={(e) => {
                      if (!answered) e.target.style.borderColor = '#1565c0';
                    }}
                    onMouseLeave={(e) => {
                      if (!answered) e.target.style.borderColor = '#ddd';
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                background: '#f0f4f8',
                borderRadius: '12px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '12px'
                }}>
                  {question.schemeSteps.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1rem',
                        background: item.color,
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: '14px',
                        border: '2px solid transparent'
                      }}
                    >
                      {idx + 1}. {item.step}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleAnswer(0)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '1rem',
                    background: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  ✓ Juste!
                </button>
              </div>
            )}

            {/* Explanation */}
            {showResult && (
              <div style={{
                padding: '1.5rem',
                background: '#e3f2fd',
                borderRadius: '8px',
                borderLeft: '4px solid #1565c0',
                marginBottom: '2rem',
                animation: 'fadeIn 0.3s'
              }}>
                <p style={{
                  margin: '0',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#0d47a1'
                }}>
                  <strong>💡 Explication:</strong> {question.explanation}
                </p>
              </div>
            )}

            {/* Navigation */}
            {answered && (
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'space-between'
              }}>
                <button
                  onClick={goToPrev}
                  disabled={currentQuestion === 0}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: currentQuestion === 0 ? '#ccc' : '#f0f0f0',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: currentQuestion === 0 ? 'default' : 'pointer',
                    fontWeight: '500'
                  }}
                >
                  ← Précédent
                </button>
                <button
                  onClick={goToNext}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  Suivant →
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{
              fontSize: '72px',
              marginBottom: '1rem'
            }}>
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
            </div>
            <h2 style={{
              fontSize: '28px',
              marginBottom: '0.5rem',
              color: '#1565c0'
            }}>
              Quiz Terminé!
            </h2>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '2rem',
              color: '#333'
            }}>
              Score: {score}/{quizData.length} ({percentage}%)
            </p>
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {percentage >= 90 && 'Excellent! Vous maîtrisez parfaitement les méthodes du secteur A! 🏆'}
              {percentage >= 80 && percentage < 90 && 'Très bon! Quelques points à revoir mais c\'est solide!'}
              {percentage >= 60 && percentage < 80 && 'Correct, mais il faut revoir les détails techniques.'}
              {percentage < 60 && 'À retravailler! Révisez les protocoles et réessayez.'}
            </p>
            <button
              onClick={restart}
              style={{
                padding: '12px 32px',
                background: '#1565c0',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              🔄 Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
