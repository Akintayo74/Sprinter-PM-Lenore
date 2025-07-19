
function Form({ onSubmit, fields, submitText="Submit", isLoading="false", ...delegated}) {

    return (
        <form onSubmit={onSubmit} {...delegated} className="">
            {fields.map((field) => {
                return (
                    <div key={field.name}>
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
                        />
                        {field.error && (
                            <p>{field.error}</p>
                        )}
                    </div>
                )
            })}

            <button disabled={isLoading}>
                {isLoading ? "Loading..." : submitText}
            </button>
        </form>
    )
}

export default Form;