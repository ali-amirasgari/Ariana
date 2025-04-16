import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ExclamationMark from "@/assets/images/exclamation.svg";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function LogoutModal({ isOpen, onClose, onLogout }: LogoutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col items-center gap-2 mt-4">
          <DialogTitle>
            <div className="flex flex-col items-center gap-2">
              <img
                src={ExclamationMark}
                alt="Exclamation Mark"
                className="w-[33.33px] h-[33.33px]"
              />
              Log out
            </div>
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to sign out of your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-center mt-4">
          <Button variant="secondary" className="w-full" onClick={onLogout}>
            Log out
          </Button>
          <Button variant="default" className="w-full" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutModal;
