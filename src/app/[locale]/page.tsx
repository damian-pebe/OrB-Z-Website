import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{t("title")}</h1>
      <p className="mt-2 text-lg">{t("subtitle")}</p>
      <div className="mt-4 flex gap-4">
        <Link href="/about" className="text-blue-600 underline">
          {t("about")}
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t("cta")}
        </button>
      </div>
    </div>
  );
}

//! IMPORTANT 
//? Usage of tanstack query
// const UserProfile = ({ id }: { id: string }) => {
//   const { data, isLoading, error } = useUser(id);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const userData = data as { user: { name: string } };
//   return <div>{userData.user.name}</div>;
// };


//! IMPORTANT
//? for API-driven fetch (tanstack query)
//* Fetch user from API, handle cache/errors -- Live sync / refetch / bg updates
// const { data } = useUser();

//? for global access without refetching (zustand)
//* Auth info, token, role, static session
// const user = useUserStore((s) => s.user); 



//! IMPORTANT
//? FOR ASYNC COMPONENTS USE THIS INSTEAD TO CALL THE TRANSLATION
// import { getTranslations } from "next-intl/server";

// export default async function HomePage() {
//   const t = await getTranslations("HomePage");
//   return <h1>{t("title")}</h1>;
// }
