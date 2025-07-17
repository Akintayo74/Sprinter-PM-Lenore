

function Button({ children, variant = 'default', size = 'md' }) {

  const variants = {
    default: 'bg-sprinter-blue text-interface hover:bg-gray-50',
    primary: 'bg-sprinter-primary text-interface hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button className={`${variants[variant]} ${sizes[size]} rounded`}>
      {children}
    </button>
  )
}

export default Button;

// Usage
{/* <Button variant="primary" size="lg">Submit</Button> */}