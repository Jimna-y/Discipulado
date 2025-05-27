"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Award } from "lucide-react"

export default function LoginPage() {
  const [userType, setUserType] = useState<"student" | "instructor">("student")
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleLogin = () => {
    // In a real app, this would authenticate with a backend
    if (userType === "instructor") {
      window.location.href = "/instructor-dashboard"
    } else {
      window.location.href = "/student-dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">Worship Academy</h1>
          </div>
          <p className="text-lg text-slate-600">Evaluation & Learning Management System</p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
              <CardTitle className="text-center">Welcome Back</CardTitle>
              <CardDescription className="text-blue-100 text-center">
                Sign in to access your classes and evaluations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "student" | "instructor")}>
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-blue-100">
                  <TabsTrigger
                    value="student"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Student
                  </TabsTrigger>
                  <TabsTrigger
                    value="instructor"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Instructor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="student" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@example.com"
                      value={credentials.email}
                      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input
                      id="instructor-email"
                      type="email"
                      placeholder="instructor@example.com"
                      value={credentials.email}
                      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor-password">Password</Label>
                    <Input
                      id="instructor-password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button
                onClick={handleLogin}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
              >
                Sign In
              </Button>

              <div className="mt-4 text-center text-sm text-blue-600">
                Demo credentials: any email/password combination
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-white/80 backdrop-blur">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-slate-800">12 Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center">
                Comprehensive worship training program with structured lessons
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white/80 backdrop-blur">
            <CardHeader className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-slate-800">Evaluations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center">Interactive assessments and progress tracking system</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white/80 backdrop-blur">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-slate-800">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center">Smart attendance control and access management</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
