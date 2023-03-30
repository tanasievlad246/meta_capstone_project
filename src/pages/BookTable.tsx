import { useFormik } from "formik";
import * as Yup from "yup";

export const BookTable = () => {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: '',
        },
        validationSchema: Yup.object({
            date: Yup.date().required('Please select a date'),
            time: Yup.string().required('Please select a time'),
            guests: Yup.number()
                .required('Please enter the number of guests')
                .min(1, 'The number of guests must be greater than or equal to 1'),
            occasion: Yup.string().required('Please select an occasion'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });

    return <>
        <main className="h-[71.3vh] flex items-center">
            <div className="flex flex-col w-full items-center">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            className={`form-input mt-1 block w-full${
                                formik.touched.date && formik.errors.date ? 'border-red' : 'border-green'
                            }`}
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.date && formik.errors.date && (<p className="text-red mt-2">{formik.errors.date}</p>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="time" className="block text-gray-700 font-medium mb-1">
                            Time
                        </label>
                        <input
                            type="time"
                            name="time"
                            className={`form-input mt-1 block w-full ${
                                formik.touched.time && formik.errors.time ? 'border-red' : 'border-green'
                            }`}
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.time && formik.errors.time && (<p className="text-red mt-2">{formik.errors.time}</p>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="guests" className="block text-gray-700 font-medium mb-1">
                            Number of guests
                        </label>
                        <input
                            type="number"
                            name="guests"
                            className={`form-input mt-1 block w-full ${
                                formik.touched.guests && formik.errors.guests ? 'border-red-500' : 'border-green'
                            }`}
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.guests && formik.errors.guests && (<p className="text-red mt-2">{formik.errors.guests}</p>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="occasion" className="block text-gray-700 font-medium mb-1">
                            Occasion
                        </label>
                        <select
                            name="occasion"
                            className={`form-select mt-1 block w-full ${
                                formik.touched.occasion && formik.errors.occasion ? 'border-red' : 'border-gray-300'
                            }`}
                            value={formik.values.occasion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    {formik.touched.occasion && formik.errors.occasion && (<p className="text-red mt-2">{formik.errors.occasion}</p>)}
                </div>
                <button
                    type="submit"
                    className="bg-yellow hover:bg-salmon font-medium py-2 px-4 rounded-2xl"
                >
                    Submit reservation
                </button>
            </form>
            </div>    
        </main> 
    </>
}

{/* <form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form> */}