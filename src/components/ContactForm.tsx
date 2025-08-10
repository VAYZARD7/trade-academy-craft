import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/LanguageContext"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Application Sent!",
      description: "We'll contact you within 24 hours.",
    })
    
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Leave an Application</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you soon
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="First Name"
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input
                placeholder="Last Name"
                required
                className="bg-background"
              />
            </div>
          </div>
          
          <Input
            type="email"
            placeholder="Email Address"
            required
            className="bg-background"
          />
          
          <Input
            type="tel"
            placeholder="Phone Number"
            required
            className="bg-background"
          />
          
          <Select required>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Interest Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner Trading</SelectItem>
              <SelectItem value="advanced">Advanced Strategies</SelectItem>
              <SelectItem value="crypto">Cryptocurrency</SelectItem>
              <SelectItem value="options">Options Trading</SelectItem>
              <SelectItem value="risk">Risk Management</SelectItem>
              <SelectItem value="technical">Technical Analysis</SelectItem>
            </SelectContent>
          </Select>
          
          <Select required>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Experience Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Experience</SelectItem>
              <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
              <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
              <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
            </SelectContent>
          </Select>
          
          <Textarea
            placeholder="Tell us more about your trading goals and what you'd like to learn..."
            className="bg-background min-h-[100px]"
            required
          />
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}