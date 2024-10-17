import TopBar from "./components/TopBar"
import UploadBox from "./components/UploadBox"

const UploadPage = () => {
    return (
        <div className="w-full flex flex-col gap-16 items-center">
            <TopBar />
            <div className="w-[80%]">
                <p className="text-xl text-h-color font-semibold">Add a new file (csv/xlsx)</p>
                <UploadBox />
            </div>
        </div>
    )
}

export default UploadPage