export default function InputDate(props) {

    const { setFormData, formData } = props;

    function handleChange(e) {
        let value = e.target.value

        let valueOpt = e.target.option

        setFormData({ ...formData, [e.target.name]: value || valueOpt })

    }

    function handleSubmit(e) {

        e.preventDefault()
    }

    return <div className="d-flex d-row align-items-center">

        <form onSubmit={handleSubmit}>

            <label className="label">
                Start:
                <input className="form-control" type="date" name="initialDate" value={formData.initialDate} onChange={handleChange}></input>

            </label>

            <label className="label">
                Final:
                <input className="form-control" type="date" name="finalDate" value={formData.finalDate} onChange={handleChange}></input>
            </label>

            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="currency">
                <option selected>Select currency:</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BRL">BRL</option>
            </select>

            <button type="submit" className="btn btn-primary">Filter</button>


        </form>

    </div>

}
