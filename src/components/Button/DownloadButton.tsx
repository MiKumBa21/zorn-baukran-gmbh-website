import "./DownloadButton.css";

const downloadFile = (path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = path.substring(path.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function DownloadButton(props: any) {
    return (
        <button className="btn1" onClick={() => downloadFile(props.path)}>
            {props.text}
        </button>
    );
}

export default DownloadButton;