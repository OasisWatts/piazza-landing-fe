export default function LogoTwitter(props: { size: number, fill: string }) {
    return (
        <div className="cursor-pointer" onClick={() => window.open("https://x.com/piazzabrowser", "_blank")}>
            <svg fill="none" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0.254 0.25 500 451.95400000000006"><path d="M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z" fill={props.fill} /></svg>
        </div>
    )
}