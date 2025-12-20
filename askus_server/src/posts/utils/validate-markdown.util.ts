import { BadRequestException } from "@nestjs/common";
import { extname } from "path";

export const validateMarkdown = (file: Express.Multer.File) => {
    const isMd = extname(file.originalname) === ".md";
    const isMimeValid = file.mimetype === "text/markdown" || file.mimetype === "text/plain";

    if (!isMd || !isMimeValid) {
        throw new BadRequestException("Only markdown files are allowed");
    }
}
