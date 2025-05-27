"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight, Heart, Users } from "lucide-react"

const mockClass = {
  id: 2,
  title: "Identidad del adorador",
  pillar: "Identidad del adorador y Fundamento Espiritual",
  premise: "Un ministerio de alabanza genuino depende de la vida personal con Dios.",
  objective: "Fomentar la importancia de un altar personal y una vida devocional consistente.",
  reflection:
    "Los miembros del ministerio deberían estar comprometidos a orar y leer la Biblia regularmente, buscando una conexión profunda con Dios.",
  focus:
    "El adorador debe conocer su identidad como hijo de Dios antes de servir. Esto evita que el servicio sea una forma de obtener aprobación.",
  bibleBase: "Salmo 139, Efesios 1:4-5, 1 Pedro 2:9",
  content: `
# Antes del altar, el abrazo: Adorando desde la identidad

## Introducción
*"Nos predestinó para ser adoptados como hijos suyos por medio de Jesucristo… para alabanza de su gloria"* (Efesios 1:5).

## Versículos Clave para Meditar

### Salmo 139
*"Tú formaste mis entrañas… maravillosas son tus obras."*

### Efesios 1:4-5
*"Nos escogió… para ser adoptados como hijos suyos."*

### 1 Pedro 2:9
*"Mas vosotros sois linaje escogido, real sacerdocio…"*

### Romanos 8:15-16
*"Habéis recibido el Espíritu de adopción… El Espíritu da testimonio a nuestro espíritu de que somos hijos de Dios."*

### Juan 1:12
*"A los que le recibieron… les dio potestad de ser hechos hijos de Dios."*

### Gálatas 4:6-7
*"Ya no eres esclavo, sino hijo; y si hijo, también heredero por medio de Dios."*

### 2 Corintios 5:17
*"Si alguno está en Cristo, nueva criatura es…"*

## 1. Dios no busca talentos, busca hijos

Muchos llegan al ministerio de alabanza preguntándose: **¿Seré lo suficientemente bueno?** Pero Dios no pregunta *¿Qué puedes hacer?*, sino que nos dice una y otra vez quienes somos en Él.

Jesús no comenzó su ministerio haciendo milagros. Primero escuchó la voz del Padre decirle: **"Este es mi Hijo amado, en quien tengo complacencia"** (Mateo 3:17).

Ese mismo sello de amor está sobre ti. **No adoras para ser hijo; adoras porque ya lo eres.**

### Cuando olvidamos esto, caemos en la trampa de buscar validación:
- En los aplausos, no en la comunión
- En los elogios por nuestro talento, no en el gozo de glorificar a Dios
- En ser vistos en la tarima, online, video, no en ser conocidos por el Padre

## 2. La adoración que nace del abrazo, no del desempeño

David, el salmista, entendió esto. Sus cantos no eran para ganar el favor de Dios; brotaban de una relación íntima. Incluso después de pecar, no apeló a sus dones, sino al corazón de Padre: **"Crea en mí, oh Dios, un corazón limpio… no me quites tu Santo Espíritu"** (Salmo 51).

### El adorador verdadero no necesita un escenario para ser fiel:
- Canta igual en su habitación que frente a miles
- Se prepara para un evento o un día común con el mismo empeño que para un evento especial
- Ministra con la misma pasión en un coro que al frente
- No depende de grabaciones o reconocimientos, porque su identidad no está en lo que hace, sino en a quién pertenece

## 3. Un equipo, una gloria: Servir desde la fila o el frente

En la alabanza, cada voz e instrumento es parte de un todo. Pero si uno busca sobresalir, el propósito se distorsiona: dejamos de reflejar a Cristo para proyectarnos a nosotros mismos.

Pablo lo advirtió: **"Que todo lo que hagáis, sea de corazón, como para el Señor y no para los hombres"** (Colosenses 3:23).

**No importa si estás en la esquina del coro o dirigiendo: si sirves como hijo, tu adoración siempre llegará al trono.**

## Reflexiones Profundas para el Ministerio

### Sobre la Identidad vs. Performance
¿Estoy sirviendo desde la seguridad de que soy hijo… o buscando que me vean? Cuando sirvo desde una identidad formada no se ve el solista se ve el equipo mi enfoque está puesto en que el conjunto del MINISTERIO se vea igual de bien como si fuera yo solo.

### Sobre la Unidad Ministerial
¿Mi identidad está en lo que hago para Dios… o en lo que Él ya dijo de mí? Cuando entendemos que todos fuimos llamados para formar una UNIDAD ministerial todo comienza a ser diferente no hay destacabilidad:
- No sale el del bajo a preparar un solo porque vino el invitado especial
- No sale el que lleva la voz a preparar lo mejor porque "hoy me toca a mi…. Y tiene que sonar al pelo"

### Sobre el Propósito del Servicio
¿Practico y sirvo para que Dios sea glorificado… o para sentirme valorado? Me enfoco en que vean mi crecimiento y en que sea notada mi gestión individual o incluso más si tengo otros a cargo o busco que la gente se conecte con el Señor a través de lo que hago.

### Sobre la Vida Devocional
¿Cuándo fue la última vez que me detuve solo para estar con Dios, sin pedirle nada?

¿Mi altar personal está activo… o solo me conecto cuando me toca ministrar?

### Sobre el Ego Ministerial
Mi empeño se ve solamente ¿Cuando es algo que voy a mover yo y voy a destacar?

¿Mi enfoque cambia cuando soy yo y los míos que destacaremos, cuando soy yo y mi gestión, mi voz, mi arreglo?

## Verdades Transformadoras

**No puedes llevar a otros donde tú no has estado.** Si tu altar está vacío, lo que traes al púlpito será hueco. Pero si has estado con el Padre, eso se nota.

**El servicio no es un camino para probar tu valor.** Ya eres valioso. Ya eres amado. Ya fuiste escogido.

Dios no busca servidores que se esfuercen por ser amados o aceptados… **Busca hijos que sirvan porque ya se saben amados.**

## Parábola: "La música del hijo"

Había un joven, hijo del Rey, que amaba la música con todo su corazón. Cada mañana, antes de que el palacio despertara, se escuchaban sus ensayos en el jardín. Afinaba su instrumento con paciencia, repetía las melodías una y otra vez, no por obligación, sino por pura pasión. A veces, cuando creía que nadie lo escuchaba, improvisaba canciones nuevas, risueñas o melancólicas, pero siempre sinceras.

Lo que él no sabía era que, en la ventana más alta del palacio, su padre el Rey observaba cada práctica, cada nota, cada esfuerzo callado. No necesitaba aplausos ni presentaciones solemnes para ver el corazón de su hijo: **lo amaba por lo que era, no por lo que pretendía demostrar.**

Un día, el joven decidió que ya estaba listo para tocar "oficialmente" ante el trono. Se vistió con sus mejores ropas, preparó un repertorio impecable y llegó con las manos temblorosas. Pero antes de que comenzara, el Rey bajó los escalones, lo abrazó y le dijo:

—**"Hijo mío, ¿por qué esperaste tanto? Cada día has tocado para Mí sin saberlo. No necesitas mi aprobación… porque ya tienes mi amor."**

El joven comprendió entonces que nunca había estado solo. Su música no era un tributo para ganarse un lugar… sino un regalo que ya había sido recibido. Desde aquel día, siguió tocando con la misma alegría, pero ahora con la certeza de que, en cada nota sencilla o imperfecta, su Padre sonreía.

## Conclusión: El Llamado del Hijo

Antes de cantar, escucha Su voz:
**"Eres mi hijo. Me complazco en ti."**

No es la perfección de tus notas lo que toca su corazón… es la certeza de que, en cada acorde, estás diciendo: **"Padre, aquí estoy".**

¿Qué mentiras he creído sobre mi valor o mi llamado que Dios quiere derribar?

Hoy, Dios te recuerda: **No eres un músico que sirve a Dios. Eres un hijo que adora a su Padre.**
  `,
  evaluation: {
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Según la lección, ¿cuál es la diferencia entre adorar para ser hijo y adorar porque ya eres hijo?",
        options: [
          "No hay diferencia, ambos son válidos",
          "Adorar para ser hijo busca aprobación, adorar porque ya eres hijo fluye de la identidad segura",
          "Adorar para ser hijo es más espiritual",
          "Adorar porque ya eres hijo requiere menos compromiso",
        ],
        correct: 1,
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "¿Qué caracteriza al adorador verdadero según la lección?",
        options: [
          "Solo ministra cuando está en la plataforma",
          "Depende de reconocimientos para sentirse valorado",
          "Canta igual en su habitación que frente a miles, su identidad no está en lo que hace",
          "Se enfoca principalmente en su talento musical",
        ],
        correct: 2,
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "En la parábola del hijo músico, ¿cuál fue la revelación principal?",
        options: [
          "Necesitaba practicar más para impresionar al Rey",
          "El Rey ya lo amaba por lo que era, no por lo que pretendía demostrar",
          "Debía tocar solo música perfecta",
          "Tenía que esperar más tiempo para estar listo",
        ],
        correct: 1,
      },
      {
        id: 4,
        type: "essay",
        question:
          "Reflexiona sobre esta pregunta de la lección: '¿Estoy sirviendo desde la seguridad de que soy hijo… o buscando que me vean?' ¿Cómo esta perspectiva cambia tu enfoque en el ministerio?",
        minWords: 150,
      },
      {
        id: 5,
        type: "essay",
        question:
          "La lección menciona que 'No puedes llevar a otros donde tú no has estado.' ¿Cómo puedes fortalecer tu altar personal y vida devocional? Describe un plan específico.",
        minWords: 120,
      },
      {
        id: 6,
        type: "essay",
        question:
          "¿Cómo la comprensión de tu identidad como hijo de Dios afecta tu actitud hacia la unidad del equipo ministerial? ¿Qué cambios necesitas hacer en tu perspectiva?",
        minWords: 100,
      },
    ],
  },
}

export default function ClassPage() {
  const [currentSection, setCurrentSection] = useState<"content" | "evaluation">("content")
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [evaluationComplete, setEvaluationComplete] = useState(false)

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitEvaluation = () => {
    setEvaluationComplete(true)
    alert("¡Evaluación enviada exitosamente! Tu puntuación estará disponible pronto.")
  }

  const progress =
    currentSection === "evaluation" ? (Object.keys(answers).length / mockClass.evaluation.questions.length) * 100 : 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-blue-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Panel
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  Sesión {mockClass.id}: {mockClass.title}
                </h1>
                <p className="text-blue-600">{mockClass.pillar}</p>
                <p className="text-sm text-slate-500 italic">{mockClass.bibleBase}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Class Overview */}
        <Card className="border-blue-200 bg-white mb-6">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" />
              Resumen de la Sesión
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-700">Premisa:</h4>
              <p className="text-slate-600">{mockClass.premise}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700">Objetivo:</h4>
              <p className="text-slate-600">{mockClass.objective}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700">Enfoque:</h4>
              <p className="text-slate-600">{mockClass.focus}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700">Reflexión:</h4>
              <p className="text-slate-600">{mockClass.reflection}</p>
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <Card className="border-blue-200 bg-white mb-6">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-800">
                {currentSection === "content" ? "Progreso de Lectura" : "Progreso de Evaluación"}
              </span>
              <span className="text-sm text-blue-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={currentSection === "content" ? "default" : "outline"}
            onClick={() => setCurrentSection("content")}
            className={
              currentSection === "content"
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-blue-200 text-blue-600 hover:bg-blue-50"
            }
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Contenido de la Sesión
          </Button>
          <Button
            variant={currentSection === "evaluation" ? "default" : "outline"}
            onClick={() => setCurrentSection("evaluation")}
            className={
              currentSection === "evaluation"
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-blue-200 text-blue-600 hover:bg-blue-50"
            }
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Evaluación
          </Button>
        </div>

        {/* Content Section */}
        {currentSection === "content" && (
          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-800">Material de la Sesión</CardTitle>
              <CardDescription className="text-blue-600">
                Lee cuidadosamente el material antes de proceder a la evaluación
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <div className="text-slate-800 leading-relaxed space-y-4">
                {mockClass.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-slate-800 mt-8 mb-4">
                        {line.substring(2)}
                      </h1>
                    )
                  } else if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-slate-700 mt-6 mb-3">
                        {line.substring(3)}
                      </h2>
                    )
                  } else if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-medium text-blue-700 mt-4 mb-2">
                        {line.substring(4)}
                      </h3>
                    )
                  } else if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="text-slate-600 ml-4">
                        {line.substring(2)}
                      </li>
                    )
                  } else if (line.startsWith("*") && line.endsWith("*")) {
                    return (
                      <p
                        key={index}
                        className="text-blue-700 italic font-medium bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300"
                      >
                        {line.substring(1, line.length - 1)}
                      </p>
                    )
                  } else if (line.includes("**") && line.split("**").length > 2) {
                    const parts = line.split("**")
                    return (
                      <p key={index} className="text-slate-600 mb-3">
                        {parts.map((part, partIndex) =>
                          partIndex % 2 === 1 ? (
                            <strong key={partIndex} className="text-blue-700 font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          ),
                        )}
                      </p>
                    )
                  } else if (line.trim() === "") {
                    return <br key={index} />
                  } else {
                    return (
                      <p key={index} className="text-slate-600 mb-3">
                        {line}
                      </p>
                    )
                  }
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <Button onClick={() => setCurrentSection("evaluation")} className="bg-blue-600 hover:bg-blue-700">
                  Proceder a la Evaluación
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evaluation Section */}
        {currentSection === "evaluation" && (
          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-800">Evaluación de la Sesión</CardTitle>
              <CardDescription className="text-blue-600">
                Responde todas las preguntas para completar esta sesión. Tus respuestas serán calificadas
                automáticamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!evaluationComplete ? (
                <div className="space-y-6">
                  {mockClass.evaluation.questions.map((question, index) => (
                    <Card key={question.id} className="border-blue-100">
                      <CardHeader>
                        <CardTitle className="text-lg text-slate-800">
                          Pregunta {index + 1} de {mockClass.evaluation.questions.length}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4 font-medium">{question.question}</p>

                        {question.type === "multiple-choice" && (
                          <RadioGroup
                            value={answers[question.id] || ""}
                            onValueChange={(value) => handleAnswerChange(question.id, value)}
                          >
                            {question.options?.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-2">
                                <RadioGroupItem value={optionIndex.toString()} id={`q${question.id}-${optionIndex}`} />
                                <Label htmlFor={`q${question.id}-${optionIndex}`} className="text-slate-600">
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )}

                        {question.type === "essay" && (
                          <div className="space-y-2">
                            <Textarea
                              placeholder="Escribe tu respuesta aquí..."
                              value={answers[question.id] || ""}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="min-h-32 border-blue-200 focus:border-blue-500"
                            />
                            <p className="text-sm text-blue-600">Mínimo {question.minWords} palabras requeridas</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex justify-between items-center pt-6">
                    <div className="text-sm text-blue-600">
                      {Object.keys(answers).length} de {mockClass.evaluation.questions.length} preguntas respondidas
                    </div>
                    <Button
                      onClick={handleSubmitEvaluation}
                      disabled={Object.keys(answers).length < mockClass.evaluation.questions.length}
                      className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      Enviar Evaluación
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Evaluación Completada!</h3>
                  <p className="text-slate-600 mb-6">
                    Tus respuestas han sido enviadas exitosamente. Recibirás tu puntuación y retroalimentación pronto.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/student-dashboard")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Volver al Panel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
