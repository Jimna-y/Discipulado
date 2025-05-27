"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, CheckCircle, XCircle, Star, User, LogOut } from "lucide-react"

const mockStudent = {
  name: "Maria Rodriguez",
  email: "maria@example.com",
  totalPoints: 850,
  maxPoints: 1200,
  classesAttended: 8,
  totalClasses: 12,
}

const mockClasses = [
  // Pilar 1: Identidad del adorador y Fundamento Espiritual
  {
    id: 1,
    title: "¿Qué es la adoración verdadera?",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    status: "completed",
    points: 95,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "Juan 4:23-24, Génesis 22:5",
  },
  {
    id: 2,
    title: "Identidad del adorador",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    status: "completed",
    points: 88,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "Salmo 139, Efesios 1:4-5",
  },
  {
    id: 3,
    title: "El carácter del ministro",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    status: "completed",
    points: 92,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "1 Timoteo 4:12",
  },
  // Pilar 2: Carácter y Ética Ministerial
  {
    id: 4,
    title: "El altar personal",
    pillar: "Carácter y Ética Ministerial",
    status: "completed",
    points: 85,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "Mateo 6:6",
  },
  {
    id: 5,
    title: "La unción en la adoración",
    pillar: "Carácter y Ética Ministerial",
    status: "completed",
    points: 90,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "1 Samuel 16:23",
  },
  {
    id: 6,
    title: "La ética del ministro de alabanza",
    pillar: "Carácter y Ética Ministerial",
    status: "completed",
    points: 87,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "Romanos 12:10, Hebreos 13:17",
  },
  // Pilar 3: Formación Técnica y Musical
  {
    id: 7,
    title: "El poder espiritual de la alabanza",
    pillar: "Formación Técnica y Musical",
    status: "completed",
    points: 93,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: true,
    bibleBase: "2 Crónicas 20:21-22, Hechos 16:25-26",
  },
  {
    id: 8,
    title: "El fluir profético en la adoración",
    pillar: "Formación Técnica y Musical",
    status: "current",
    points: 0,
    maxPoints: 100,
    hasAccess: true,
    evaluationCompleted: false,
    bibleBase: "Romanos 8:14, 1 Corintios 14:26-33",
  },
  {
    id: 9,
    title: "Excelencia musical y espiritual",
    pillar: "Formación Técnica y Musical",
    status: "locked",
    points: 0,
    maxPoints: 100,
    hasAccess: false,
    evaluationCompleted: false,
    bibleBase: "1 Crónicas 25:7, 2 Timoteo 2:15",
  },
  // Pilar 4: Fluir Espiritual y Sensibilidad
  {
    id: 10,
    title: "Fluir con el Espíritu: sensibilidad y discernimiento",
    pillar: "Fluir Espiritual y Sensibilidad",
    status: "locked",
    points: 0,
    maxPoints: 100,
    hasAccess: false,
    evaluationCompleted: false,
    bibleBase: "Salmo 133:1",
  },
  {
    id: 11,
    title: "Sensibilidad al ambiente espiritual",
    pillar: "Fluir Espiritual y Sensibilidad",
    status: "locked",
    points: 0,
    maxPoints: 100,
    hasAccess: false,
    evaluationCompleted: false,
    bibleBase: "Juan 5:19",
  },
  {
    id: 12,
    title: "Activación, compromiso y envío",
    pillar: "Fluir Espiritual y Sensibilidad",
    status: "locked",
    points: 0,
    maxPoints: 100,
    hasAccess: false,
    evaluationCompleted: false,
    bibleBase: "Filipenses 1:6, Isaías 6:8",
  },
]

// Group classes by pillar for better organization
const groupedClasses = mockClasses.reduce(
  (acc, classItem) => {
    if (!acc[classItem.pillar]) {
      acc[classItem.pillar] = []
    }
    acc[classItem.pillar].push(classItem)
    return acc
  },
  {} as Record<string, typeof mockClasses>,
)

const pillarColors = {
  "Identidad del adorador y Fundamento Espiritual": "bg-blue-50 border-blue-200",
  "Carácter y Ética Ministerial": "bg-sky-50 border-sky-200",
  "Formación Técnica y Musical": "bg-slate-50 border-slate-200",
  "Fluir Espiritual y Sensibilidad": "bg-blue-100 border-blue-300",
}

export default function StudentDashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "current":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "locked":
        return "bg-gray-100 text-gray-600 border-gray-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "current":
        return <Clock className="h-4 w-4" />
      case "locked":
        return <XCircle className="h-4 w-4" />
      default:
        return <XCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Worship Academy</h1>
                <p className="text-slate-600">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium text-slate-900">{mockStudent.name}</p>
                <p className="text-sm text-slate-600">{mockStudent.email}</p>
              </div>
              <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:bg-slate-50">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-600" />
                Total Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {mockStudent.totalPoints}/{mockStudent.maxPoints}
              </div>
              <Progress value={(mockStudent.totalPoints / mockStudent.maxPoints) * 100} className="h-2" />
              <p className="text-sm text-slate-700 mt-2">
                {Math.round((mockStudent.totalPoints / mockStudent.maxPoints) * 100)}% Complete
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Classes Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {mockStudent.classesAttended}/{mockStudent.totalClasses}
              </div>
              <Progress value={(mockStudent.classesAttended / mockStudent.totalClasses) * 100} className="h-2" />
              <p className="text-sm text-slate-700 mt-2">Classes Attended</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(mockStudent.totalPoints / mockStudent.classesAttended)}%
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-blue-400 fill-current" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm text-slate-700 mt-2">Excellent Performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Classes Grid */}
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900">Course Classes</CardTitle>
            <CardDescription className="text-slate-600">
              Access your classes and complete evaluations. Classes are unlocked based on attendance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {Object.entries(groupedClasses).map(([pillar, classes]) => (
                <div key={pillar} className={`p-4 rounded-lg ${pillarColors[pillar]}`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{pillar}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {classes.map((classItem) => (
                      <Card
                        key={classItem.id}
                        className={`border transition-all duration-200 bg-white ${
                          classItem.hasAccess
                            ? "border-slate-200 hover:border-slate-300 cursor-pointer hover:shadow-md"
                            : "border-gray-200 opacity-60"
                        }`}
                        onClick={() => classItem.hasAccess && setSelectedClass(classItem.id)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-sm font-medium text-slate-900">Sesión {classItem.id}</CardTitle>
                            <Badge className={getStatusColor(classItem.status)}>
                              {getStatusIcon(classItem.status)}
                              <span className="ml-1 capitalize">{classItem.status}</span>
                            </Badge>
                          </div>
                          <CardDescription className="text-slate-700 font-medium">{classItem.title}</CardDescription>
                          <p className="text-xs text-slate-600 italic">{classItem.bibleBase}</p>
                        </CardHeader>
                        <CardContent>
                          {classItem.status === "completed" && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-700">Puntuación:</span>
                                <span className="font-medium text-slate-900">
                                  {classItem.points}/{classItem.maxPoints}
                                </span>
                              </div>
                              <Progress value={(classItem.points / classItem.maxPoints) * 100} className="h-1" />
                            </div>
                          )}
                          {classItem.status === "current" && (
                            <div className="space-y-2">
                              <p className="text-sm text-slate-700">Lista para evaluación</p>
                              <Button
                                size="sm"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.location.href = `/class/${classItem.id}`
                                }}
                              >
                                Iniciar Sesión
                              </Button>
                            </div>
                          )}
                          {classItem.status === "locked" && (
                            <p className="text-sm text-gray-500">Asiste a clase para desbloquear</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
