"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Users, BookOpen, Award, Clock, CheckCircle, XCircle, Search, Plus, Edit, LogOut } from "lucide-react"

const mockStudents = [
  {
    id: 1,
    name: "Maria Rodriguez",
    email: "maria@example.com",
    totalPoints: 850,
    attendance: 8,
    status: "active",
    lastSeen: "Today",
  },
  {
    id: 2,
    name: "Carlos Mendez",
    email: "carlos@example.com",
    totalPoints: 720,
    attendance: 7,
    status: "active",
    lastSeen: "Yesterday",
  },
  {
    id: 3,
    name: "Ana Silva",
    email: "ana@example.com",
    totalPoints: 920,
    attendance: 9,
    status: "active",
    lastSeen: "Today",
  },
  {
    id: 4,
    name: "Pedro Santos",
    email: "pedro@example.com",
    totalPoints: 650,
    attendance: 6,
    status: "warning",
    lastSeen: "3 days ago",
  },
  {
    id: 5,
    name: "Sofia Garcia",
    email: "sofia@example.com",
    totalPoints: 880,
    attendance: 8,
    status: "active",
    lastSeen: "Today",
  },
]

const mockClasses = [
  // Pilar 1: Identidad del adorador y Fundamento Espiritual
  {
    id: 1,
    title: "¿Qué es la adoración verdadera?",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    studentsCompleted: 5,
    avgScore: 89,
    status: "completed",
  },
  {
    id: 2,
    title: "Identidad del adorador",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    studentsCompleted: 5,
    avgScore: 85,
    status: "completed",
  },
  {
    id: 3,
    title: "El carácter del ministro",
    pillar: "Identidad del adorador y Fundamento Espiritual",
    studentsCompleted: 5,
    avgScore: 91,
    status: "completed",
  },
  // Pilar 2: Carácter y Ética Ministerial
  {
    id: 4,
    title: "El altar personal",
    pillar: "Carácter y Ética Ministerial",
    studentsCompleted: 5,
    avgScore: 83,
    status: "completed",
  },
  {
    id: 5,
    title: "La unción en la adoración",
    pillar: "Carácter y Ética Ministerial",
    studentsCompleted: 5,
    avgScore: 88,
    status: "completed",
  },
  {
    id: 6,
    title: "La ética del ministro de alabanza",
    pillar: "Carácter y Ética Ministerial",
    studentsCompleted: 5,
    avgScore: 86,
    status: "completed",
  },
  // Pilar 3: Formación Técnica y Musical
  {
    id: 7,
    title: "El poder espiritual de la alabanza",
    pillar: "Formación Técnica y Musical",
    studentsCompleted: 5,
    avgScore: 92,
    status: "completed",
  },
  {
    id: 8,
    title: "El fluir profético en la adoración",
    pillar: "Formación Técnica y Musical",
    studentsCompleted: 2,
    avgScore: 0,
    status: "current",
  },
  {
    id: 9,
    title: "Excelencia musical y espiritual",
    pillar: "Formación Técnica y Musical",
    studentsCompleted: 0,
    avgScore: 0,
    status: "upcoming",
  },
  // Pilar 4: Fluir Espiritual y Sensibilidad
  {
    id: 10,
    title: "Fluir con el Espíritu: sensibilidad y discernimiento",
    pillar: "Fluir Espiritual y Sensibilidad",
    studentsCompleted: 0,
    avgScore: 0,
    status: "upcoming",
  },
  {
    id: 11,
    title: "Sensibilidad al ambiente espiritual",
    pillar: "Fluir Espiritual y Sensibilidad",
    studentsCompleted: 0,
    avgScore: 0,
    status: "upcoming",
  },
  {
    id: 12,
    title: "Activación, compromiso y envío",
    pillar: "Fluir Espiritual y Sensibilidad",
    studentsCompleted: 0,
    avgScore: 0,
    status: "upcoming",
  },
]

// Group classes by pillar
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
  "Identidad del adorador y Fundamento Espiritual": "bg-sky-100 border-sky-300",
  "Carácter y Ética Ministerial": "bg-blue-100 border-blue-300",
  "Formación Técnica y Musical": "bg-slate-100 border-slate-300",
  "Fluir Espiritual y Sensibilidad": "bg-sky-200 border-sky-400",
}

const mockAttendance = [
  { studentId: 1, studentName: "Maria Rodriguez", class8: true, late: false, accomplished: true, points: 95 },
  { studentId: 2, studentName: "Carlos Mendez", class8: true, late: true, accomplished: true, points: 85 },
  { studentId: 3, studentName: "Ana Silva", class8: true, late: false, accomplished: true, points: 98 },
  { studentId: 4, studentName: "Pedro Santos", class8: false, late: false, accomplished: false, points: 0 },
  { studentId: 5, studentName: "Sofia Garcia", class8: true, late: false, accomplished: true, points: 92 },
]

export default function InstructorDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState(8)
  const [attendance, setAttendance] = useState(mockAttendance)

  const updateAttendance = (studentId: number, field: string, value: boolean | number) => {
    setAttendance((prev) =>
      prev.map((student) => (student.studentId === studentId ? { ...student, [field]: value } : student)),
    )
  }

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
      {/* Header */}
      <header className="bg-white border-b border-sky-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-sky-900">Worship Academy</h1>
                <p className="text-sky-600">Instructor Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium text-sky-900">Pastor John Smith</p>
                <p className="text-sm text-sky-600">Course Instructor</p>
              </div>
              <Button variant="outline" size="sm" className="border-sky-200 text-sky-600 hover:bg-sky-50">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-sky-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sky-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-sky-600" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sky-600">{mockStudents.length}</div>
              <p className="text-sm text-sky-700">Active learners</p>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sky-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-sky-600" />
                Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sky-600">8/12</div>
              <p className="text-sm text-sky-700">Completed</p>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sky-900 flex items-center gap-2">
                <Award className="h-5 w-5 text-sky-600" />
                Avg Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sky-600">87%</div>
              <p className="text-sm text-sky-700">Class average</p>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sky-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-sky-600" />
                Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sky-600">92%</div>
              <p className="text-sm text-sky-700">Average attendance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="bg-sky-100 border border-sky-200">
            <TabsTrigger value="students" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Students
            </TabsTrigger>
            <TabsTrigger value="classes" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Classes
            </TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Attendance Control
            </TabsTrigger>
          </TabsList>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card className="border-sky-200 bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-sky-900">Student Management</CardTitle>
                    <CardDescription className="text-sky-600">Monitor student progress and performance</CardDescription>
                  </div>
                  <Button className="bg-sky-600 hover:bg-sky-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400 h-4 w-4" />
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-sky-200 focus:border-sky-500"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Seen</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium text-sky-900">{student.name}</div>
                            <div className="text-sm text-sky-600">{student.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-sky-900">{student.totalPoints}/1200</div>
                          <div className="text-sm text-sky-600">{Math.round((student.totalPoints / 1200) * 100)}%</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-sky-900">{student.attendance}/12</div>
                          <div className="text-sm text-sky-600">classes</div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              student.status === "active"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                            }
                          >
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sky-700">{student.lastSeen}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="border-sky-200 text-sky-600 hover:bg-sky-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes">
            <Card className="border-sky-200 bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-sky-900">Class Management</CardTitle>
                    <CardDescription className="text-sky-600">
                      Manage course content and track class progress
                    </CardDescription>
                  </div>
                  <Button className="bg-sky-600 hover:bg-sky-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Class
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(groupedClasses).map(([pillar, classes]) => (
                    <div key={pillar} className={`p-4 rounded-lg ${pillarColors[pillar]}`}>
                      <h3 className="text-lg font-semibold text-sky-900 mb-4">{pillar}</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {classes.map((classItem) => (
                          <Card key={classItem.id} className="border-sky-200 bg-white">
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-sm font-medium text-sky-900">
                                  Sesión {classItem.id}
                                </CardTitle>
                                <Badge
                                  className={
                                    classItem.status === "completed"
                                      ? "bg-green-100 text-green-800 border-green-200"
                                      : classItem.status === "current"
                                        ? "bg-sky-100 text-sky-800 border-sky-200"
                                        : "bg-gray-100 text-gray-600 border-gray-200"
                                  }
                                >
                                  {classItem.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                                  {classItem.status === "current" && <Clock className="h-3 w-3 mr-1" />}
                                  {classItem.status === "upcoming" && <XCircle className="h-3 w-3 mr-1" />}
                                  {classItem.status}
                                </Badge>
                              </div>
                              <CardDescription className="text-sky-700 font-medium">{classItem.title}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-sky-700">Completado:</span>
                                  <span className="font-medium text-sky-900">
                                    {classItem.studentsCompleted}/{mockStudents.length}
                                  </span>
                                </div>
                                {classItem.avgScore > 0 && (
                                  <div className="flex justify-between text-sm">
                                    <span className="text-sky-700">Promedio:</span>
                                    <span className="font-medium text-sky-900">{classItem.avgScore}%</span>
                                  </div>
                                )}
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full border-sky-200 text-sky-600 hover:bg-sky-50"
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Editar Sesión
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendance Control Tab */}
          <TabsContent value="attendance">
            <Card className="border-sky-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sky-900">Attendance Control - Class {selectedClass}</CardTitle>
                <CardDescription className="text-sky-600">
                  Mark attendance, track lateness, and assign points for current class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Present</TableHead>
                      <TableHead>Late</TableHead>
                      <TableHead>Accomplished</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendance.map((student) => (
                      <TableRow key={student.studentId}>
                        <TableCell>
                          <div className="font-medium text-sky-900">{student.studentName}</div>
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={student.class8}
                            onCheckedChange={(checked) => updateAttendance(student.studentId, "class8", checked)}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={student.late}
                            onCheckedChange={(checked) => updateAttendance(student.studentId, "late", checked)}
                            disabled={!student.class8}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={student.accomplished}
                            onCheckedChange={(checked) => updateAttendance(student.studentId, "accomplished", checked)}
                            disabled={!student.class8}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={student.points}
                            onChange={(e) =>
                              updateAttendance(student.studentId, "points", Number.parseInt(e.target.value) || 0)
                            }
                            className="w-20 border-sky-200"
                            min="0"
                            max="100"
                            disabled={!student.class8}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-sky-200 text-sky-600 hover:bg-sky-50"
                            onClick={() => {
                              // Grant access to next class
                              alert(`Access granted to next class for ${student.studentName}`)
                            }}
                            disabled={!student.class8}
                          >
                            Grant Access
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-6 flex justify-end gap-4">
                  <Button variant="outline" className="border-sky-200 text-sky-600 hover:bg-sky-50">
                    Save Draft
                  </Button>
                  <Button className="bg-sky-600 hover:bg-sky-700">Save & Update Access</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
