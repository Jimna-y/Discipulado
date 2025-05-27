"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

const mockClass = {
  id: 8,
  title: "Creative Expression in Worship",
  description:
    "Learn how to incorporate creativity and artistic expression into worship services while maintaining biblical foundations.",
  content: `
# Creative Expression in Worship

## Introduction
Worship is not just about singing songs; it's about expressing our hearts to God in creative and meaningful ways. This class explores how we can use various forms of artistic expression to enhance our worship experience.

## Key Concepts

### 1. Biblical Foundation for Creativity
- God as the ultimate Creator (Genesis 1:1)
- Humans made in God's image as creative beings
- Examples of creativity in biblical worship (Psalms, temple worship)

### 2. Forms of Creative Expression
- **Music**: Beyond traditional hymns and contemporary songs
- **Visual Arts**: Banners, paintings, multimedia presentations
- **Movement**: Dance, liturgical movement, processions
- **Drama**: Skits, monologues, storytelling
- **Poetry**: Spoken word, responsive readings

### 3. Balancing Creativity and Reverence
- Maintaining focus on God, not performance
- Ensuring accessibility for all congregation members
- Preparing hearts through prayer and practice

## Practical Applications

### Planning Creative Elements
1. **Prayer and Preparation**: Begin with seeking God's heart
2. **Team Collaboration**: Involve multiple creative minds
3. **Technical Considerations**: Sound, lighting, space requirements
4. **Rehearsal**: Practice makes perfect

### Common Challenges
- Resistance to change in traditional settings
- Technical difficulties during services
- Balancing artistic expression with worship focus
- Time and resource constraints

## Reflection Questions
Consider these questions as you think about implementing creative expression in your worship context:

1. How can creativity enhance rather than distract from worship?
2. What forms of creative expression resonate most with your congregation?
3. How do you maintain the balance between innovation and tradition?

## Assignment
Develop a creative worship element for an upcoming service, considering your congregation's context and preferences.
  `,
  evaluation: {
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "According to the lesson, what is the primary biblical foundation for creativity in worship?",
        options: [
          "The temple had beautiful decorations",
          "God is the ultimate Creator and we are made in His image",
          "David wrote many psalms",
          "Jesus used parables to teach",
        ],
        correct: 1,
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which of the following is NOT mentioned as a form of creative expression in worship?",
        options: ["Visual Arts", "Movement and Dance", "Cooking demonstrations", "Drama and Storytelling"],
        correct: 2,
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What should be the primary focus when incorporating creative elements in worship?",
        options: [
          "Impressing the congregation",
          "Showcasing artistic talent",
          "Maintaining focus on God, not performance",
          "Using the latest technology",
        ],
        correct: 2,
      },
      {
        id: 4,
        type: "essay",
        question:
          "Describe a specific creative worship element you would like to implement in your church. Explain how it would enhance worship while maintaining biblical foundations.",
        minWords: 100,
      },
      {
        id: 5,
        type: "essay",
        question:
          "How would you address resistance to creative expression in a traditional worship setting? Provide at least three practical strategies.",
        minWords: 150,
      },
    ],
  },
}

export default function ClassPage() {
  const [currentSection, setCurrentSection] = useState<"content" | "evaluation">("content")
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [evaluationComplete, setEvaluationComplete] = useState(false)

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitEvaluation = () => {
    // In a real app, this would submit to backend
    setEvaluationComplete(true)
    alert("Evaluation submitted successfully! Your score will be available shortly.")
  }

  const progress =
    currentSection === "evaluation" ? (Object.keys(answers).length / mockClass.evaluation.questions.length) * 100 : 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-900">
                  Class {mockClass.id}: {mockClass.title}
                </h1>
                <p className="text-orange-600">{mockClass.description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <Card className="border-orange-200 bg-white mb-6">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-orange-900">
                {currentSection === "content" ? "Reading Progress" : "Evaluation Progress"}
              </span>
              <span className="text-sm text-orange-600">{Math.round(progress)}%</span>
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
                ? "bg-orange-600 hover:bg-orange-700"
                : "border-orange-200 text-orange-600 hover:bg-orange-50"
            }
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Class Content
          </Button>
          <Button
            variant={currentSection === "evaluation" ? "default" : "outline"}
            onClick={() => setCurrentSection("evaluation")}
            className={
              currentSection === "evaluation"
                ? "bg-orange-600 hover:bg-orange-700"
                : "border-orange-200 text-orange-600 hover:bg-orange-50"
            }
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Evaluation
          </Button>
        </div>

        {/* Content Section */}
        {currentSection === "content" && (
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-900">Class Material</CardTitle>
              <CardDescription className="text-orange-600">
                Read through the material carefully before proceeding to the evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-orange max-w-none">
              <div className="text-orange-900 leading-relaxed space-y-4">
                {mockClass.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-orange-900 mt-8 mb-4">
                        {line.substring(2)}
                      </h1>
                    )
                  } else if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-orange-800 mt-6 mb-3">
                        {line.substring(3)}
                      </h2>
                    )
                  } else if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-medium text-orange-700 mt-4 mb-2">
                        {line.substring(4)}
                      </h3>
                    )
                  } else if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="text-orange-700 ml-4">
                        {line.substring(2)}
                      </li>
                    )
                  } else if (line.trim() === "") {
                    return <br key={index} />
                  } else {
                    return (
                      <p key={index} className="text-orange-700 mb-3">
                        {line}
                      </p>
                    )
                  }
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-orange-200">
                <Button onClick={() => setCurrentSection("evaluation")} className="bg-orange-600 hover:bg-orange-700">
                  Proceed to Evaluation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evaluation Section */}
        {currentSection === "evaluation" && (
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-900">Class Evaluation</CardTitle>
              <CardDescription className="text-orange-600">
                Answer all questions to complete this class. Your responses will be graded automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!evaluationComplete ? (
                <div className="space-y-6">
                  {mockClass.evaluation.questions.map((question, index) => (
                    <Card key={question.id} className="border-orange-100">
                      <CardHeader>
                        <CardTitle className="text-lg text-orange-900">
                          Question {index + 1} of {mockClass.evaluation.questions.length}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-orange-800 mb-4 font-medium">{question.question}</p>

                        {question.type === "multiple-choice" && (
                          <RadioGroup
                            value={answers[question.id] || ""}
                            onValueChange={(value) => handleAnswerChange(question.id, value)}
                          >
                            {question.options?.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-2">
                                <RadioGroupItem value={optionIndex.toString()} id={`q${question.id}-${optionIndex}`} />
                                <Label htmlFor={`q${question.id}-${optionIndex}`} className="text-orange-700">
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )}

                        {question.type === "essay" && (
                          <div className="space-y-2">
                            <Textarea
                              placeholder="Type your answer here..."
                              value={answers[question.id] || ""}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="min-h-32 border-orange-200 focus:border-orange-500"
                            />
                            <p className="text-sm text-orange-600">Minimum {question.minWords} words required</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex justify-between items-center pt-6">
                    <div className="text-sm text-orange-600">
                      {Object.keys(answers).length} of {mockClass.evaluation.questions.length} questions answered
                    </div>
                    <Button
                      onClick={handleSubmitEvaluation}
                      disabled={Object.keys(answers).length < mockClass.evaluation.questions.length}
                      className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                    >
                      Submit Evaluation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Evaluation Complete!</h3>
                  <p className="text-orange-700 mb-6">
                    Your answers have been submitted successfully. You will receive your score and feedback shortly.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/student-dashboard")}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Return to Dashboard
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
