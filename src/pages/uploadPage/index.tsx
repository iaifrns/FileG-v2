import { DefaultButton, OutlinedButton } from "../../components/Buttons"
import Divider from "../../components/Divider"
import TopBar from "./components/TopBar"
import UploadBox from "./components/UploadBox"

const UploadPage = () => {
    return (
        <div className="w-full flex flex-col gap-16 items-center">
            <TopBar />
            <div className="w-[80%] flex flex-col gap-[24px]">
                <p className="text-xl text-h-color font-semibold">Add a new file (csv/xlsx)</p>
                <UploadBox />
                <div className="flex flex-col w-full">
                    <p className="text-st-color w-full text-center">No file uploaded</p>
                </div>
                <Divider/>
                <div className="flex justify-between w-full">
                    <OutlinedButton text="Cancel"/>
                    <DefaultButton text="Import" disable={true} />
                </div>
            </div>
        </div>
    )
}

export default UploadPage