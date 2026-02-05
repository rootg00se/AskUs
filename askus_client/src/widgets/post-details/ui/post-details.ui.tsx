import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PostDetailsTag } from "./post-details-tag.ui";
import { useParams } from "react-router-dom";
import { usePostById } from "@/entities/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import moment from "moment";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export const PostDetails: React.FC = () => {
    const { id } = useParams();
    const { postData } = usePostById(id || "");

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(postData?.data_url || "");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setMarkdownContent(text);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMarkdown();
    }, [postData?.data_url]);

    if (!postData) return null;

    return (
        <div className="mb-5">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4 mb-3">
                    <Avatar className="w-14 h-14 relative">
                        <AvatarImage src={postData.users.avatar_url} />
                        <AvatarFallback className="text-lg bg-[#dadada]">
                            {postData.users.display_name.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{postData.users.display_name}</span>
                            <span className="text-sm opacity-50">{moment(postData.created_at).fromNow()}</span>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                            <div className="flex">
                                {postData.tags.map((tag) => (
                                    <div className="max-w-5 -ml-2" key={tag.tag}>
                                        <img src={tag.badge_url} className="w-full" alt="" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[14px] capitalize">{postData.tags[0]?.tag || "Empty tag"}</p>
                            {postData.is_closed && <p className="text-sm opacity-50">Closed</p>}
                        </div>
                    </div>
                </div>
                <div className="max-w-8">
                    <img src={postData.post_difficulties.badge_url} className="w-full" alt="" />
                </div>
            </div>
            <div className="mb-3">
                <h2 className="text-2xl font-medium mb-5">{postData.title}</h2>
                <div className="prose max-w-none prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-pre:bg-transparent prose-pre:p-0">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-3">
                {postData.tags.map((tag) => (
                    <PostDetailsTag key={tag.tag} tag={tag.tag} />
                ))}
            </div>
        </div>
    );
};
