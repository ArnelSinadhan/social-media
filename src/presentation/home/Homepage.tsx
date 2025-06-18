import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white p-4 border-r hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Takogram</h2>
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" className="justify-start">
            🏠 Home
          </Button>
          <Button variant="ghost" className="justify-start">
            🔍 Explore
          </Button>
          <Button variant="ghost" className="justify-start">
            ❤️ Notifications
          </Button>
          <Button variant="ghost" className="justify-start">
            📩 Messages
          </Button>
          <Button variant="ghost" className="justify-start">
            👤 Profile
          </Button>
        </nav>
      </aside>

      {/* Feed */}
      <main className="flex-1 p-4 max-w-2xl mx-auto">
        <Card className="mb-4">
          <CardContent className="p-4 flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="/user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Input placeholder="What's on your mind?" />
            <Button>Post</Button>
          </CardContent>
        </Card>

        {/* Post */}
        {[1, 2, 3].map((id) => (
          <Card key={id} className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Avatar>
                  <AvatarImage src={`/avatar${id}.avif`} />
                  <AvatarFallback>U{id}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">User{id}</p>
                  <p className="text-sm text-gray-500">@user{id}</p>
                </div>
              </div>
              <p>This is a post content from user{id}. 🎉</p>
              <div className="mt-3 flex gap-4 text-sm text-gray-600">
                <span>❤️ Like</span>
                <span>💬 Comment</span>
                <span>🔁 Share</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 bg-white p-4 border-l hidden lg:block">
        <h3 className="font-semibold text-lg mb-4">Suggested Users</h3>
        {[1, 2, 3].map((id) => (
          <div key={id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/avatar${id}.jpg`} />
                <AvatarFallback>SU{id}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">User{id}</p>
                <p className="text-xs text-gray-500">@user{id}</p>
              </div>
            </div>
            <Button size="sm" variant="secondary">
              Follow
            </Button>
          </div>
        ))}
      </aside>
    </div>
  );
}
