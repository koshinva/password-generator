import { Toaster } from 'react-hot-toast';

const MyToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
      }}
    />
  );
};
export default MyToaster;
