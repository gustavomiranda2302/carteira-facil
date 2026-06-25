interface cardProps {
    image: string;
    imagedsc?: string;
    title: string;
    text: string;

}


export default function Card({ image, imagedsc, title, text }: cardProps) {
    return (
        <div>
            <img src={image} alt={imagedsc} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )

} 