export default function Link({url, title}) {
    return (
        <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            {title}
        </a>
    );
}