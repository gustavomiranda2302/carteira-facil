interface cardProps {
    image: string;
    imagedsc?: string;
    title: string;
    text: string;

}


export default function Card({ image, imagedsc, title, text }: cardProps) {
    return (
        <div className="flex flex-col gap-1 bg-bg border border-border w-1/3 h-1/1">
            <img src={image} alt={imagedsc} />
            <h3 className="text-2xl text-text ">{title}</h3>
            <p className="text-md text-text2">{text}</p>
        </div>
    )

} 