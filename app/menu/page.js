import Appetizers from "@/components/Menu/Appetizers";
import BowlsSalads from "@/components/Menu/BowlsSalads";
import ChefHome from "@/components/Menu/ChefHome";
import Dipsmezze from "@/components/Menu/DipzMezze";
import FeastPlatters from "@/components/Menu/FeastPlatters";
import FromtheGrill from "@/components/Menu/FromtheGrill";
import Handhelds from "@/components/Menu/Handhelds";
import SweetFinishSips from "@/components/Menu/SweetFinishSips";
import WelcomeHome from "@/components/Menu/WelcomeHome";

export default function Menu() {
  return (
    <>
      <WelcomeHome />
      <Dipsmezze/>
      <Appetizers/>
      <BowlsSalads/>
      <ChefHome/>
      <FeastPlatters/>
      <FromtheGrill/>
      <Handhelds/>
      <SweetFinishSips/>
    </>
  );
}
