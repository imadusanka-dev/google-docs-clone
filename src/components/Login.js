import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "@material-tailwind/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="https://links.papareact.com/1ui"
        height={400}
        width={400}
        alt="Google Docs Logo"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        ripple={true}
        onClick={() => signIn()}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
