
export default function LoreBox(props) {

    return (
        <div className="lore-container">
            <p className="lore--paragraph">
                {props.randomParagraph}
            </p>
        </div>
    )
}