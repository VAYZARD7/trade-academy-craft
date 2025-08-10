import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, File, X } from "lucide-react";

interface HomeworkSubmissionProps {
  assignmentId: string;
  assignmentTitle: string;
  dueDate: string;
  onSubmit?: (data: any) => void;
}

const HomeworkSubmission = ({ assignmentId, assignmentTitle, dueDate, onSubmit }: HomeworkSubmissionProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    files: [] as File[]
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      assignmentId,
      ...formData,
      submittedAt: new Date().toISOString()
    };
    onSubmit?.(submissionData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>Submit Assignment</span>
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          <p>Assignment: {assignmentTitle}</p>
          <p>Due: {dueDate}</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Submission Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
              placeholder="Describe your submission..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Attach Files</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                id="files"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              />
              <label htmlFor="files" className="cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload files or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, DOC, TXT, JPG, PNG up to 10MB each
                </p>
              </label>
            </div>
          </div>

          {formData.files.length > 0 && (
            <div className="space-y-2">
              <Label>Attached Files</Label>
              <div className="space-y-2">
                {formData.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <File className="w-4 h-4" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button type="submit" className="w-full" variant="hero">
            Submit Assignment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HomeworkSubmission;