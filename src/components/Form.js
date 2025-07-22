import { Eye, EyeOff } from 'lucide-react';

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
                        <div key={field.name} className="flex flex-col text-secondary-100"> 
                            <label htmlFor={field.name}>
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
                                    className="bg-transparent border border-secondary-100 p-3 rounded-lg mb-[28px] w-full pr-12"
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
                            </div>

                            {field.error && (
                                <p>{field.error}</p>
                            )}
                        </div>
                    )
                })}

                {renderAfterFields && <div className="mb-6">{renderAfterFields}</div>}

                <button disabled={isLoading} className="bg-primary-500 px-6 py-3 rounded-lg text-interface w-full inline-block text-center disabled:opacity-50">
                    {isLoading ? "Loading..." : submitText}
                </button>

            </form>

            

        </div>
        </>
    )
}

export default Form;