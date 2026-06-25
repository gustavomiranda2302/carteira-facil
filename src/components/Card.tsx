interface cardProps {
    image: string;
    imagedsc?: string;
    title: string;
    text: string;

}


export default function Card({ image, imagedsc, title, text }: cardProps) {
    return (
        <div className="flex flex-col items-center justify-center shrink-0 basis-[22vw] h-full border rounded-md bg-bg border-border p-4">
            <img className="w-24 h-19" src={image} alt={imagedsc} />
            <h3 className="text-lg text-text ">{title}</h3>
            <p className="text-md text-text2">{text}</p>
        </div>
    )

} 