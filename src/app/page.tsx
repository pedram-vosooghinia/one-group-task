import CompanyCategory from "./components/companyCategory/CompanyCategory";
import TopicNews from "./components/topicNews/TopicNews";
export default function Home() {
  return (
    <div className="flex flex-col flex-wrap">
      <CompanyCategory />
      <TopicNews />
    </div>
  );
}
