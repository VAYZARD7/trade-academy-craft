import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, FileText, Download } from "lucide-react";

interface Submission {
  id: string;
  studentName: string;
  studentEmail: string;
  title: string;
  description: string;
  files: string[];
  submittedAt: string;
  status: "pending" | "graded" | "needs_revision";
  grade?: number;
  feedback?: string;
}

interface GradingSystemProps {
  submissions: Submission[];
  onGrade?: (submissionId: string, grade: number, feedback: string) => void;
}

const GradingSystem = ({ submissions, onGrade }: GradingSystemProps) => {
  const [selectedSubmission, setSelectedSubmission] = useState<string | null>(null);
  const [gradeForm, setGradeForm] = useState({
    grade: "",
    feedback: ""
  });

  const handleGradeSubmission = (submissionId: string) => {
    const grade = parseInt(gradeForm.grade);
    if (grade >= 0 && grade <= 100 && gradeForm.feedback.trim()) {
      onGrade?.(submissionId, grade, gradeForm.feedback);
      setGradeForm({ grade: "", feedback: "" });
      setSelectedSubmission(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "graded":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "needs_revision":
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "graded":
        return "bg-success text-success-foreground";
      case "needs_revision":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Student Submissions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{submission.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      by {submission.studentName} ({submission.studentEmail})
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(submission.status)}>
                      {getStatusIcon(submission.status)}
                      <span className="ml-1 capitalize">{submission.status.replace('_', ' ')}</span>
                    </Badge>
                    {submission.grade && (
                      <Badge variant="outline">
                        Grade: {submission.grade}%
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{submission.description}</p>

                {submission.files.length > 0 && (
                  <div className="mb-3">
                    <Label className="text-xs">Attached Files:</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {submission.files.map((file, index) => (
                        <Button key={index} variant="outline" size="sm">
                          <Download className="w-3 h-3 mr-1" />
                          {file}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {submission.feedback && (
                  <div className="mb-3 p-3 bg-muted rounded-lg">
                    <Label className="text-xs">Feedback:</Label>
                    <p className="text-sm text-foreground mt-1">{submission.feedback}</p>
                  </div>
                )}

                {submission.status === "pending" && (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSubmission(submission.id)}
                    >
                      Grade Assignment
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedSubmission && (
        <Card>
          <CardHeader>
            <CardTitle>Grade Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="grade">Grade (0-100)</Label>
                <Select
                  value={gradeForm.grade}
                  onValueChange={(value) => setGradeForm(prev => ({...prev, grade: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 21 }, (_, i) => i * 5).map((grade) => (
                      <SelectItem key={grade} value={grade.toString()}>
                        {grade}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                  id="feedback"
                  value={gradeForm.feedback}
                  onChange={(e) => setGradeForm(prev => ({...prev, feedback: e.target.value}))}
                  placeholder="Provide detailed feedback to the student..."
                  rows={4}
                />
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={() => handleGradeSubmission(selectedSubmission)}
                  variant="hero"
                >
                  Submit Grade
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSubmission(null)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GradingSystem;