
function CenteredCard({ children }) {

    return (
        <div className="bg-dark-interface-1 h-full grid place-content-center">
            <div className="bg-dark-interface-2 h-[200px] px-[calc(40/16*1rem)]">
                { children }
            </div>
        </div>
    )
}

export default CenteredCard;