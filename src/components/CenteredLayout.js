
function CenteredLayout({ children }) {

    return (
        <div className="bg-dark-interface-1 min-h-screen flex justify-center py-8">
            <div className="bg-dark-interface-2 px-[calc(40/16*1rem)] py-[calc(80/16*1rem)] flex justify-center items-center flex-col gap-[40px] rounded-lg w-full min-w-2xs max-w-md">
                {children}
            </div>
        </div>
    )
}

export default CenteredLayout;