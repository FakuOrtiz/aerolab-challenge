import CustomToast from "@/components/CustomToast";
import { toast } from "sonner";

interface Props {
  type: "success" | "error";
  title: string;
  message: string;
}

export const showToast = ({ type, title, message }: Props) => {
  toast(<CustomToast type={type} title={title} message={message} />, {
    style: {
      border: `1px solid ${type === "error" ? "#D23F63" : "#67C076"}`,
    },
    duration: 2000,
  });
};
