import { Body, Heading, Link, Tailwind, Text } from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

interface PasswordResetTemplateProps {
    domain: string;
    token: string;
}

export function PasswordResetTemplate({ domain, token }: PasswordResetTemplateProps) {
    const confirmLink = `${domain}/auth/password/new?token=${token}`;

    return (
        <Tailwind>
            <Html>
                <Body>
                    <Heading>Welcome to AskUs!</Heading>
                    <Text>To reset your password please click on the following link:</Text>
                    <Link href={confirmLink}>Reset Password</Link>
                    <Text>
                        This link is active only for 1 hour. If you didn't try to reset your
                        password just ignore this message.
                    </Text>
                </Body>
            </Html>
        </Tailwind>
    );
}
