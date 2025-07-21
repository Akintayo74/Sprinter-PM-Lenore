import Image from "next/image";
import Link from "next/link";

function Form({ onSubmit, fields, submitText="Submit", isLoading="false", ...delegated}) {

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
                            <input 
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={field.placeholder}
                                {...field.props}
                                className="bg-transparent border border-secondary-100 p-3 rounded-lg mb-[28px]"
                            />
                            {field.error && (
                                <p>{field.error}</p>
                            )}
                        </div>
                    )
                })}

                <button disabled={isLoading} className="bg-primary-500 px-6 py-3 rounded-lg text-interface w-full">
                    {isLoading ? "Loading..." : submitText}
                </button>
            </form>

            

        </div>
        </>
    )
}

export default Form;