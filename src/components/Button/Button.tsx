import { Link } from "react-router-dom";
import "./Button.css";

interface DownloadButtonProps {
    path: string | null | undefined;
    text: string;
    label?: string;
}

export function DownloadButton({ path, text, label }: DownloadButtonProps) {
    if (!path) return null;
    return (
        <a className="LinkButton" href={path} download aria-label={label ?? text}>
            {text}
        </a>
    );
}

interface InternLinkButtonProps {
    url: string;
    text: string;
}

export function InternLinkButton({ url, text }: InternLinkButtonProps) {
    return (
        <Link to={url} className="LinkButton">
            {text}
        </Link>
    );
}