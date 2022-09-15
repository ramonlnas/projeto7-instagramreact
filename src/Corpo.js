import Stories from "./Stories";
import Posts from "./Posts"
import Sidebar from "./SideBar"

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories/>
        <Posts/>
        
      </div>
      <Sidebar/>

    </div>
  );
}
