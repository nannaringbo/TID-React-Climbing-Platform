import ChangeLocationButton from "../common/ChangeLocationButton";
import ChangeTypeButton from "../common/ChangeTypeButton";
import PrimaryButton from "../common/PrimaryButton";
import "../../styles/index.css";


function Sidebar() {

    return (
    <div class="sidebar">
       <nav class="nav">
        <ul>
         <PrimaryButton Text= {"Create Location"}/>
          <ChangeLocationButton TextCL={"Change Location"} DItem1={"Denmark"} DItem3={"Germany"} DItem2={"Norway"}/>
          <ChangeTypeButton TextCT={"Change Type"} DItem1={"Gym-Lead"} DItem3={"Gym-Bouler"} DItem2={"Outdoor-Boulder"}/>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
