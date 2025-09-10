import { Eye, EyeOff } from 'lucide-react';
import Button from '../Button';

function Form({ 
    onSubmit, 
    fields, 
    submitText="Submit", 
    isLoading="false", 
    renderAfterFields,
    ...delegated}
) {

    return (
        <>
        <div className="flex flex-col gap-8 w-full">
            <form onSubmit={onSubmit} {...delegated} className="">
                {fields.map((field) => {
                    return (
                        <div key={field.name} className="flex flex-col text-secondary-100 mb-[28px]"> 
                            <label htmlFor={field.name} className='py-1 text-interface'>
                                {field.label}
                            </label>

                            <div className="relative">
                                <input 
                                    id={field.name}
                                    name={field.name}
                                    type={field.showPassword ? 'text' : field.type}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={field.placeholder}
                                    {...field.props}
                                    className={`bg-transparent border p-3 rounded-lg w-full pr-12 text-secondary-300 focus:outline-none ${
                                        field.error ?
                                        'border-error focus:ring-1 focus:ring-error mb-[10px]' :
                                        'border-secondary-300 focus:ring-2 focus:ring-primary-500'
                                    }`}
                                />
                                {field.showPasswordToggle && (
                                    <button
                                        type="button"
                                        onClick={field.onTogglePassword}
                                        className="absolute right-3 top-4 text-secondary-100 hover:text-interface"
                                    >
                                        {field.showPassword ? <EyeOff size={20} className='text-primary-500'/> : <Eye size={20} className='text-primary-500'/>}
                                    </button>
                                )}
                                {field.error && (
                                    <p className='text-error font-normal'>{field.error}</p>
                                )}
                            </div>

                            
                        </div>
                    )
                })}

                {renderAfterFields && <div className="mb-6">{renderAfterFields}</div>}

                <Button disabled={isLoading} className="bg-primary-500 px-6 py-3 rounded-lg text-interface w-full inline-block text-center disabled:opacity-50">
                    {isLoading ? "Loading..." : submitText}
                </Button>

            </form>

            

        </div>
        </>
    )
}

export default Form;