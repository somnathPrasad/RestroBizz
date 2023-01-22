import MenuTopBar from "@/components/MenuTopBar";
import { useAddFood } from "@/hooks/useFoods";
import useToast from "@/hooks/useToast";
import { Formik, FormikHelpers, Form, Field } from "formik";
import { useRouter } from "next/router";

type TFoods = {
    title: string;
    description: string;
    price: string;
};

export default function Add() {
    const notify = useToast();
    const { id } = useRouter().query;
    const { mutate: addFood, isLoading } = useAddFood();

    const formikInitialValues: TFoods = {
        title: "",
        description: "",
        price: "",
    };
    const onSubmit = (
        values: any,
        actions: FormikHelpers<TFoods>
    ) => {
        addFood({ ...values, price: parseInt(values.price), restroId: id, image: "https://picsum.photos/200" }, {
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
                <MenuTopBar title="Foods" />
                <div className="p-10 border rounded-md shadow-lg border-slate-400">
                    <h1 className="mb-5 text-xl font-medium text-center text-black border-b-2">
                        Add new foods to the database
                    </h1>
                    <div>
                        <Formik initialValues={formikInitialValues} onSubmit={onSubmit}>
                            <Form className="flex flex-col items-center justify-center">
                                <Field
                                    id="title"
                                    name="title"
                                    placeholder="Food title"
                                    className="input"
                                    disabled={isLoading}
                                />
                                <Field
                                    id="description"
                                    name="description"
                                    placeholder="Food description"
                                    className="input"
                                    disabled={isLoading}
                                />
                                <Field
                                    id="price"
                                    name="price"
                                    placeholder="Food price"
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
