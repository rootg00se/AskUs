import { Button } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";

export const SendAnswer = () => {
    return (
        <div className="border rounded-md flex-col">
            <Input
                className="border-none shadow-none focus:border-none focus:outline-0 focus:ring-0 outline-0 focus-visible:border-none focus-visible:ring-0"
                placeholder="Enter your answer..."
            />
            <div className="mr-2 mb-2">
                <Button size={"sm"} className="ml-[100%] -translate-x-full text-[13px]">
                    Send answer
                </Button>
            </div>
        </div>
    );
};
