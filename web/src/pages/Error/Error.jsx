export default function ErrorPage() {
    // a beautiful 404 not found page with tailwind css
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold">404!</h1>
            <p className="text-2xl font-bold mt-10">Page Not Found</p>
        </div>
    )
}