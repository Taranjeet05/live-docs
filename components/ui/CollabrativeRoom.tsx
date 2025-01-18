"use client";

import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import Loader from "./Loader";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/Header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const CollabrativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collabrative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">
                This is for testing....Happy Coding
              </p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollabrativeRoom;
