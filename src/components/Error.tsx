export default function Error({ error }: { error: any }) {
    return (
        <div className="bg-white p-10">
            <div className="border-b">
                <p className="text-2xl font-medium">ERROR</p>
            </div>
            <div className="text-center">
                {JSON.stringify(error)}
            </div>
        </div>
    )
}