import { Body, Heading, Link, Tailwind, Text } from "@react-email/components";
import { Html } from "@react-email/html"
import * as React from "react";

interface ConfirmationTemplateProps {
    domain: string;
    token: string;
}

export function ConfirmationTemplate({ domain, token }: ConfirmationTemplateProps) {
    const confirmLink = `${domain}/auth/email-confirmation/${token}`;

    return (
        <Tailwind>
            <Html>
                <Body>
                    <Heading>Welcome to AskUs!</Heading>
                    <Text>To confirm your email adress please click on the following link:</Text>
                    <Link href={confirmLink}>Confirm Email</Link>
                    <Text>
                        This link is active only for 1 hour. If you didn't ask for the confirmation
                        just ignore this message.
                    </Text>
                </Body>
            </Html>
        </Tailwind>
    );
}