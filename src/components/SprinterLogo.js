import Image from "next/image";

function SprinterLogo() {
    
    return (
        <>
            <span className="flex">
                <Image src='/Logo.png' alt="Logo" width={50} height={50}/>
                <h3 className="text-6xl text-primary-500 font-bold italic">Sprinter</h3>
            </span>
        </>
    )
}

export default SprinterLogo;