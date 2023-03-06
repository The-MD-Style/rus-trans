import { Icons } from "@/assets/icons";

type ConstactsInfo = {
  icon: Icons;
  link: string;
  color: string;
};

export const contacts: ConstactsInfo[] = [
  {
    icon: "telegram",
    link: "https://t.me/rustrans01",
    color: "#2AABEE",
  },
  {
    icon: "viber",
    link: "viber://chat?number=%2B33-7 53 03 35 35",
    color: "#7360f2",
  },
  {
    icon: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=33753033535",
    color: "#25D366",
  },
];
