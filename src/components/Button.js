

function Button({ children, ...delegated }) {
  
  return (
    <button {...delegated} className="bg-primary-500 hover:opacity-80 px-6 py-3 rounded-lg text-interface w-full inline-block text-center disabled:opacity-50">
      {children}
    </button>
  )
}

export default Button;
