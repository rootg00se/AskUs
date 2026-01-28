import { useUserAnswers } from "@/entities/answer";
import React from "react";
import { useParams } from "react-router-dom";
import { AnswerItem } from "./answer-item";

export const AnswersList: React.FC = () => {
    const { id } = useParams();
    const { userAnswersData } = useUserAnswers(id || "");

    if (!userAnswersData) return null;

    return (
        <div className="mt-2">
            <div className="di">
                <div className="rounded-md bg-white mb-7">
                    {userAnswersData!.map((answer, answerIndex) => (
                        <AnswerItem
                            isCorrect={answer.is_correct}
                            avatar={answer.users.avatar_url}
                            displayName={answer.users.display_name}
                            badgeUrl={answer.users.user_ranks.ranks.badge_url}
                            rankName={answer.users.user_ranks.ranks.name}
                            text={answer.text}
                            createdAt={answer.create_at}
                            key={answer.answer_id}
                            className={answerIndex === userAnswersData!.length - 1 ? "border-none" : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
