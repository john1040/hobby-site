import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { FcGoogle } from "react-icons/fc"

interface LoginModalProps {
  mode: 'signin' | 'signup'
}

export function LoginModal({ mode }: LoginModalProps) {
  const title = mode === 'signin' ? 'Sign In' : 'Sign Up'
  
  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
    console.log('Google login clicked')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={mode === 'signin' ? "default" : "outline"}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title} to your account</DialogTitle>
          <DialogDescription>
            {mode === 'signin' 
              ? 'Welcome back! Please sign in to continue.' 
              : 'Create an account to get started.'}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 