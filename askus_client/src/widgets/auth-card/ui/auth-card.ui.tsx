import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui";
import React from "react";

interface IAuthCardProps {
    title: string;
    description: string;
    buttonText: string;
    children: React.ReactNode;
    topLink?: React.ReactNode;
    footer?: React.ReactNode
}

export const AuthCard: React.FC<IAuthCardProps> = ({ title, description, buttonText, children, topLink, footer }) => {
    return (
        <Card className="w-full max-w-sm">
            {topLink}
            <CardHeader>
                <CardTitle className="text-center text-lg">{title}</CardTitle>
                <CardDescription className="text-center">{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex-col gap-4">
                <Button type="submit" className="w-full">{buttonText}</Button>
                {footer}
            </CardFooter>
        </Card>
    );
};