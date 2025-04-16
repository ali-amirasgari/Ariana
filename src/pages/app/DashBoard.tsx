import EmptyImage from "@/assets/images/analyticsLogo.svg";

function DashBoard() {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <img src={EmptyImage} alt="Empty" className="w-[300px] h-[300px]" />
      </div>
    </div>
  )
}

export default DashBoard