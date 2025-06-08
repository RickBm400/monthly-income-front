import {
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiLoading,
  mdiStore,
} from "@mdi/js";
import Icon from "@mdi/react";

interface props {
  name: string | "loading";
  size?: number;
  color?: string;
}

export default function IconComponent({
  name = "loading",
  size = 1,
  color = "black",
}: props) {
  const paths: Record<string, string> = {
    loading: mdiLoading,
    store: mdiStore,
    checkBox: mdiCheckboxBlankOutline,
    checkBoxMarked: mdiCheckboxMarked,
  };

  return <Icon path={paths[name]} size={size} color={color} />;
}
