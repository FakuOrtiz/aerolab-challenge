import { Toaster } from "sonner";

const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.24)",
          bottom: "4rem",
        },
      }}
    />
  );
};

export default CustomToaster;
