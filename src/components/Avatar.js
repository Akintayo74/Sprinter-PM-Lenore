import React from 'react'
import { CircleUserRound } from 'lucide-react'


function Avatar({ avatarData }) {

    if(avatarData) {
        return (
            <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto"
                style={{ backgroundColor: avatarData.backgroundColor }}
            >
                {avatarData.initials}
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center mb-4">
            <CircleUserRound size={80} strokeWidth={.6} />
        </div>
    )

}

export default Avatar;