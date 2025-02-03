import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";

export async function ProfileAvatar() {
  const { user } = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Avatar className="w-10">
            <AvatarImage
              className="rounded-full"
              src={user?.image}
              alt="@shadcn"
            />
            <AvatarFallback className="flex items-center justify-center">
              {user?.name.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
