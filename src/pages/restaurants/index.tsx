import MenuTopBar from "@/components/MenuTopBar";
import useAddRestaurant from "@/hooks/useRestaurant";
import useToast from "@/hooks/useToast";
import { Formik, FormikHelpers, Form, Field } from "formik";

type TRestaurant = {
    title: string;
    address: string;
};

export default function Restaurants() {
    const notify = useToast();
    const { mutate: addRestaurant, isLoading } = useAddRestaurant();

    const formikInitialValues: TRestaurant = {
        title: "",
        address: "",
    };
    const onSubmit = (
        values: any,
        actions: FormikHelpers<TRestaurant>
    ) => {
        addRestaurant(values, {
            onSuccess: () => {
                notify("Data added successfully");
                actions.resetForm();
                actions.setSubmitting(false);
            }
        });
    };
    return (
        <>
            <main className="flex flex-col items-center justify-center h-screen px-5">
                <MenuTopBar title="Restaurants" />
                <div className="border border-slate-400 rounded-md p-10 shadow-lg">
                    <h1 className="text-black border-b-2 font-medium text-xl text-center mb-5">
                        Add new restaurant to the database
                    </h1>
                    <div>
                        <Formik initialValues={formikInitialValues} onSubmit={onSubmit}>
                            <Form className="flex items-center justify-center flex-col">
                                <Field
                                    id="title"
                                    name="title"
                                    placeholder="Restaurant title"
                                    className="input"
                                    disabled={isLoading}
                                />
                                <Field
                                    id="address"
                                    name="address"
                                    placeholder="Restaurant address"
                                    className="input"
                                    disabled={isLoading}
                                />
                                {
                                    isLoading ? <button type="button" className="greenButton">
                                        wait loading...
                                    </button> :

                                        <button
                                            type="submit"
                                            className="greenButton"
                                        >
                                            Submit
                                        </button>
                                }
                            </Form>
                        </Formik>
                    </div>
                </div>
            </main>
        </>
    );
}
