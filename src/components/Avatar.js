import React from 'react'
// import { CircleUserRound } from 'lucide-react'


function Avatar({ avatarData }) {

    if(avatarData) {
        return (
            // <div className=''>
            //     { avatarData.initials }
            // </div>
            <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto"
                style={{ backgroundColor: avatarData.backgroundColor }}
            >
                {avatarData.initials}
            </div>
        )
    }

    return (
        // <div className='flex justify-center'>
        //         <CircleUserRound size={80} strokeWidth={.4}/>
        // </div>
        <div className="w-20 h-20 rounded-full bg-secondary-100 border-2 border-secondary-300 flex items-center justify-center mb-4 mx-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary-300">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
        </div>
    )

}

export default Avatar;