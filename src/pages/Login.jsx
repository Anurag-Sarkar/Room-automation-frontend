
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
    return (
        <Card className="w-[300px] md:w-[350px]">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input
                                id="name"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input
                                id="name"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className='w-full'>Login</Button>
            </CardFooter>
        </Card>
    );
}
