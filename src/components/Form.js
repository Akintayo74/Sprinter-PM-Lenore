import Image from "next/image";
import Link from "next/link";

import page from '@/app/(auth)/sign-in/page'

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

            <div className="flex items-center text-sm text-secondary-100">
                <span className="flex-grow border-t border-secondary-100"></span>
                <span className="px-4">or</span>
                <span className="flex-grow border-t border-secondary-100"></span>
            </div>

            <button className="bg-dark-interface-2 border border-interface text-interface p-3 rounded-lg flex justify-center items-center gap-2">
                <Image src="/google.png" alt="Google image" width={20} height={20}/>
                Continue with Google
            </button>

        </div>
        </>
    )
}

export default Form;