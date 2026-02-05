import React from "react";

export const PostDetailsTag: React.FC<{ tag: string }> = ({ tag }) => {
    return <span className="opacity-50 font-medium">#{tag}</span>;
};
