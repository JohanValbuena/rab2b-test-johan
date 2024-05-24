import { fetchDataModuleTwo } from '@/app/lib/data';
import styles from './page.module.scss';
import ImagesCollage from '@/app/ui/organism/images-collage/images-collage';
import TextModuleTwo from '@/app/ui/organism/text-module-two/text-module-two';
import { TextModuleTwoProps } from '@/app/lib/definitions';
export default async function Page() {
    const data = await fetchDataModuleTwo()
    const moduleTwoProps: TextModuleTwoProps = {
        title: data?.title,
        list: data?.list
    }
    const imagesProps = data?.images ?? []
    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.firstCol}>
                    <ImagesCollage images={imagesProps} />
                </div>

                <div className={styles.secondCol}>
                    <TextModuleTwo {...moduleTwoProps} />
                </div>

            </div>
        </main>
    )
}