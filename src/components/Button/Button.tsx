import { Link } from "react-router-dom";
import "./Button.css";

const downloadFile = (path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = path.substring(path.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

interface DownloadButtonProps {
    path: string;
    text: string;
}

 export function DownloadButton(props: DownloadButtonProps) {
    return (
        <button className="btn1" onClick={() => downloadFile(props.path)}>
            {props.text}
        </button>
    );
}

interface InternLinkButtonProps {
    url: string;
    text: string;
}

export function InternLinkButton(props: InternLinkButtonProps) {
    return (
        <Link to={props.url}>
            {props.text}
        </Link>
    );
}