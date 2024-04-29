import useBreakpoints from "../../shared/hooks/useBreakpoints";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { large } = useBreakpoints();

  return <>{large ? <DesktopHeader /> : <MobileHeader />}</>;
}