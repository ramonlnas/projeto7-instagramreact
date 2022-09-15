import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Sidebarzinha from "./Sidebarzinha";

export default function Sidebar() {
    return (
    <div>
        <Usuario/>
        <Sugestoes/>
        <Sidebarzinha/>
    </div>
    );
}