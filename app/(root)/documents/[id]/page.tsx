import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/Header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CollabrativeRoom from "@/components/ui/CollabrativeRoom";

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollabrativeRoom 
      />
    </main>
  );
};

export default Document;
