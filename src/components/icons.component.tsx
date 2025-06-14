import {
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiDotsHorizontal,
  mdiLoading,
  mdiStore,
} from "@mdi/js";
import Icon from "@mdi/react";

interface props {
  icon: string | "loading";
  size?: number;
  color?: string;
  className?: string;
}

export default function IconComponent({
  icon = "loading",
  size = 1,
  color = "black",
  className = "",
}: props) {
  const paths: Record<string, string> = {
    loading: mdiLoading,
    store: mdiStore,
    dots: mdiDotsHorizontal,
    checkBox: mdiCheckboxBlankOutline,
    checkBoxMarked: mdiCheckboxMarked,
  };

  return (
    <div className={className}>
      <Icon path={paths[icon]} size={size} color={color} />
    </div>
  );
}
