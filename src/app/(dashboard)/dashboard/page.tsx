import { authOptions } from "@/helpers/authOptions";
import { getUserSession } from "@/helpers/getUserSession";
import { getServerSession } from "next-auth";

const DashboardHomePage = async () => {
  const userName = "Md. Afsar Hossain";
  const quote = "The secret of getting ahead is getting started. – Mark Twain";

  // const session = await getServerSession(authOptions)
  // console.log(session);

  const session = await getUserSession();
  console.log("Session Data: ", session)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name}!
      </h1>
      <p className="text-lg text-gray-600 italic text-center">{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
