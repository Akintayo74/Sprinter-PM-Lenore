import React from 'react'
import { CircleUserRound } from 'lucide-react'

function Avatar({ firstName='', lastName='' }) {
    const colors = [
    'bg-red-500',
    'bg-orange-500', 
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500'
  ]

  const { initials, backgroundColor } = React.useMemo(() => {
    const firstInitial = firstName?.charAt(0).toUpperCase() || ''
    const secondInitial = lastName?.charAt(0).toUpperCase() || ''
    const initials = firstInitial + secondInitial

    // Generate consistent color based on name
    // This ensures the same user always gets the same color
    const fullName = `${firstName}${lastName}`.toLowerCase();
    let hash = 0;
    
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colorIndex = Math.abs(hash) % colors.length;
    const backgroundColor = colors[colorIndex];

    return { initials, backgroundColor };

  }, [firstName, lastName])

    if(!initials) {
        return (
            <div className='flex justify-center'>
                <CircleUserRound size={80} strokeWidth={.4}/>
            </div>
        )
    }

    return (
        <div className={`
            ${sizeClasses[size]} 
            ${backgroundColor} 
            ${className}
            rounded-full 
            flex 
            items-center 
            justify-center 
            text-white 
            font-medium 
            shadow-sm
        `}>
            {initials}
        </div>
    )

}

export default Avatar;