import { images } from "../../../constants/images"

const TopBar = () => {
  return (
    <div className="w-full p-8 flex justify-between items-center">
        <img src={images.DEFAULT} alt="fileG logo" className="w-[125px]" />
      <button className="font-bold text-xl hover:text-primary text-link-color">Contact us</button>
    </div>
  )
}

export default TopBar
