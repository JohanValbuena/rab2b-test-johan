import styles from "./page.module.scss";
import Text from "../ui/atoms/text/text";
import { CardsContainer } from "../ui/organism/cards-container/cards-container";
import InitialScreen from "../ui/organism/inital-screen/inital-screen";
import { fetchDataModuleOne } from "../lib/data";
export default async function Home() {
  const data = await fetchDataModuleOne();

  return (
    <main >
      <InitialScreen />
      <div className={styles.title}>
        <Text heading="title" text={data?.title} className="module-one-title" />
      </div>
      <CardsContainer cards={data?.cards} />
    </main>
  );
}
