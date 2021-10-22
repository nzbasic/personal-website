export const StoryText = ({ title, text, className }: { title: string, text: string, className?: string }) => {

    return text ? (
        <p className={"flex flex-col " + className}>
            <span className="font-semibold text-lg">{title}:</span>
            <span>{text}</span>
        </p>
    ) : null
}